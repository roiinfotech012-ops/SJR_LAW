#!/usr/bin/env python3
"""
Comprehensive crawler & content/asset auditor for https://www.sjrlawcollege.in/
Crawls all discovered pages, extracts text, headings, tables, images, CSS backgrounds,
PDFs/documents, internal/external links, and saves structured JSON for migration.
"""

import csv
import json
import os
import re
import ssl
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

BASE_URL = "https://www.sjrlawcollege.in"

SEED_PATHS = [
    "/",
    "/best-law-colleges-in-karnataka.php",
    "/sjr-edu-society.php",
    "/sjr-educational-institutions.php",
    "/principals-communique.php",
    "/faculty.php",
    "/sjr-law-faculty",
    "/non-teaching-staff.php",
    "/llb-course-in-bangalore.php",
    "/ba-llb-in-bangalore.php",
    "/additional-courses.php",
    "/sjr-law-college-admission.php",
    "/infrastructure.php",
    "/law-schools-in-bangalore.php",
    "/llb-syllabus.php",
    "/alumni",
    "/alumni-registration.php",
    "/testimonials.php",
    "/committe-form.php",
    "/discrimination-committe.php",
    "/contact.php",
    "/single-event.html",
]

DOC_EXTENSIONS = (
    ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".zip", ".rar"
)
IMG_EXTENSIONS = (
    ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".ico", ".bmp"
)

CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE


def fetch_url(url: str, timeout: int = 20):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/125.0.0.0 Safari/537.36"
            )
        },
    )
    try:
        with urllib.request.urlopen(req, context=CTX, timeout=timeout) as resp:
            raw = resp.read()
            ct = resp.headers.get("Content-Type", "")
            lm = resp.headers.get("Last-Modified", "")
            final_url = resp.geturl()
            status = resp.status
            return {
                "status": status,
                "final_url": final_url,
                "content_type": ct,
                "last_modified": lm,
                "body": raw,
                "error": None,
            }
    except urllib.error.HTTPError as e:
        return {
            "status": e.code,
            "final_url": e.geturl(),
            "content_type": "",
            "last_modified": "",
            "body": b"",
            "error": f"HTTP {e.code}: {e.reason}",
        }
    except Exception as e:
        return {
            "status": 0,
            "final_url": url,
            "content_type": "",
            "last_modified": "",
            "body": b"",
            "error": str(e),
        }


class PageExtractor(HTMLParser):
    def __init__(self, page_url: str):
        super().__init__()
        self.page_url = page_url
        self.title = ""
        self.in_title = False
        self.meta_desc = ""
        self.canonical = ""
        self.links = []
        self.images = []
        self.iframes = []
        self.forms = []
        self.current_form = None
        self.skip_depth = 0
        self.in_header = 0
        self.in_footer = 0
        self.in_nav = 0
        self.main_blocks = []
        self.current_tag = None
        self.current_text = []
        self.headings = []
        self.inline_styles = []
        self.in_style = False
        self.style_buf = []
        self.tables = []
        self.in_table = 0
        self.current_table = []
        self.current_row = []
        self.in_cell = False
        self.cell_buf = []

    def _abs(self, href: str) -> str:
        if not href:
            return ""
        href = href.strip()
        if href.startswith(("mailto:", "tel:", "javascript:", "#")):
            return href
        return urllib.parse.urljoin(self.page_url, href)

    def handle_starttag(self, tag, attrs):
        attrs_d = dict(attrs)
        tag = tag.lower()

        if tag in ("script", "noscript"):
            self.skip_depth += 1
            return
        if tag == "style":
            self.in_style = True
            self.style_buf = []
            return
        if tag == "title":
            self.in_title = True
            return
        if tag == "meta":
            name = (attrs_d.get("name") or "").lower()
            if name == "description":
                self.meta_desc = attrs_d.get("content", "")
        if tag == "link":
            rel = (attrs_d.get("rel") or "").lower()
            if "canonical" in rel:
                self.canonical = attrs_d.get("href", "")

        style_attr = attrs_d.get("style", "")
        if "url(" in style_attr:
            self.inline_styles.append(style_attr)

        cls = attrs_d.get("class", "")
        if tag == "header" or "topBar" in cls or "header" in cls.split():
            self.in_header += 1
        if tag == "footer" or "footer" in cls.split():
            self.in_footer += 1
        if tag == "nav":
            self.in_nav += 1

        if tag == "a":
            href = attrs_d.get("href", "")
            self.links.append({
                "href": href,
                "abs_url": self._abs(href),
                "text": "",
                "in_chrome": (self.in_header > 0 or self.in_footer > 0 or self.in_nav > 0),
            })

        if tag == "img":
            src = attrs_d.get("src") or attrs_d.get("data-src") or ""
            if src:
                self.images.append({
                    "src": src,
                    "abs_url": self._abs(src),
                    "alt": attrs_d.get("alt", ""),
                    "in_chrome": (self.in_header > 0 or self.in_footer > 0 or self.in_nav > 0),
                })

        if tag == "iframe":
            src = attrs_d.get("src", "")
            if src:
                self.iframes.append(self._abs(src))

        if tag == "form":
            self.current_form = {
                "action": attrs_d.get("action", ""),
                "method": attrs_d.get("method", "get"),
                "fields": [],
            }
            self.forms.append(self.current_form)
        if tag in ("input", "textarea", "select") and self.current_form is not None:
            self.current_form["fields"].append({
                "tag": tag,
                "type": attrs_d.get("type", ""),
                "name": attrs_d.get("name", ""),
                "placeholder": attrs_d.get("placeholder", ""),
                "required": "required" in attrs_d,
            })

        if tag == "table":
            self.in_table += 1
            self.current_table = []
        elif tag == "tr" and self.in_table > 0:
            self.current_row = []
        elif tag in ("td", "th") and self.in_table > 0:
            self.in_cell = True
            self.cell_buf = []

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6", "p", "li"):
            self.current_tag = tag
            self.current_text = []

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in ("script", "noscript"):
            self.skip_depth = max(0, self.skip_depth - 1)
            return
        if tag == "style":
            self.in_style = False
            self.inline_styles.append("".join(self.style_buf))
            return
        if tag == "title":
            self.in_title = False
            return
        if tag == "header" and self.in_header > 0:
            self.in_header -= 1
        if tag == "footer" and self.in_footer > 0:
            self.in_footer -= 1
        if tag == "nav" and self.in_nav > 0:
            self.in_nav -= 1
        if tag == "form":
            self.current_form = None

        if tag in ("td", "th") and self.in_cell:
            self.in_cell = False
            self.current_row.append(" ".join("".join(self.cell_buf).split()))
        elif tag == "tr" and self.in_table > 0:
            if any(self.current_row):
                self.current_table.append(self.current_row)
        elif tag == "table" and self.in_table > 0:
            self.in_table -= 1
            if self.current_table:
                self.tables.append(self.current_table)

        if tag == self.current_tag:
            text = " ".join("".join(self.current_text).split())
            if text and self.in_footer == 0 and self.in_nav == 0:
                if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
                    self.headings.append({"tag": tag, "text": text})
                self.main_blocks.append({"tag": tag, "text": text})
            self.current_tag = None
            self.current_text = []

    def handle_data(self, data):
        if self.skip_depth > 0:
            return
        if self.in_style:
            self.style_buf.append(data)
            return
        if self.in_title:
            self.title += data
            return
        cleaned = " ".join(data.split())
        if not cleaned:
            return
        if self.links and self.links[-1]["text"] == "":
            self.links[-1]["text"] = cleaned
        if self.in_cell:
            self.cell_buf.append(cleaned + " ")
        if self.current_tag:
            self.current_text.append(cleaned + " ")


def extract_css_urls(css_texts, page_url):
    found = []
    for txt in css_texts:
        for m in re.finditer(r"url\(['\"]?([^)'\"]+)['\"]?\)", txt):
            raw = m.group(1).strip()
            if raw.startswith("data:"):
                continue
            found.append(urllib.parse.urljoin(page_url, raw))
    return found


def main():
    out_dir = Path("scripts/audit-site/output")
    out_dir.mkdir(parents=True, exist_ok=True)

    queue = [urllib.parse.urljoin(BASE_URL, p) for p in SEED_PATHS]
    visited = set()
    pages_data = []
    all_images = {}
    all_docs = {}
    all_external = set()

    while queue:
        url = queue.pop(0)
        # Normalize
        parsed = urllib.parse.urlparse(url)
        norm = f"{parsed.scheme}://www.sjrlawcollege.in{parsed.path}"
        if norm in visited:
            continue
        visited.add(norm)

        print(f"Crawling: {norm}")
        res = fetch_url(norm)
        page_entry = {
            "url": norm,
            "final_url": res["final_url"],
            "status": res["status"],
            "content_type": res["content_type"],
            "last_modified": res["last_modified"],
            "error": res["error"],
            "title": "",
            "meta_description": "",
            "canonical": "",
            "headings": [],
            "blocks": [],
            "tables": [],
            "images": [],
            "documents": [],
            "iframes": [],
            "forms": [],
            "internal_links": [],
            "external_links": [],
        }

        if res["status"] == 200 and "text/html" in res["content_type"].lower():
            html = res["body"].decode("utf-8", errors="replace")
            parser = PageExtractor(res["final_url"])
            parser.feed(html)

            page_entry["title"] = " ".join(parser.title.split())
            page_entry["meta_description"] = parser.meta_desc.strip()
            page_entry["canonical"] = parser.canonical.strip()
            page_entry["headings"] = parser.headings
            page_entry["blocks"] = parser.main_blocks
            page_entry["tables"] = parser.tables
            page_entry["iframes"] = parser.iframes
            page_entry["forms"] = parser.forms

            # Images
            seen_img = set()
            for img in parser.images:
                u = img["abs_url"]
                if not u or u in seen_img:
                    continue
                seen_img.add(u)
                page_entry["images"].append(img)
                all_images.setdefault(u, {"url": u, "alt": img["alt"], "pages": []})
                if norm not in all_images[u]["pages"]:
                    all_images[u]["pages"].append(norm)

            for css_u in extract_css_urls(parser.inline_styles, res["final_url"]):
                if any(css_u.lower().split("?")[0].endswith(ext) for ext in IMG_EXTENSIONS):
                    all_images.setdefault(css_u, {"url": css_u, "alt": "CSS background", "pages": []})
                    if norm not in all_images[css_u]["pages"]:
                        all_images[css_u]["pages"].append(norm)

            # Links
            int_links = set()
            ext_links = set()
            for lnk in parser.links:
                u = lnk["abs_url"]
                if not u or u.startswith(("mailto:", "tel:", "javascript:", "#")):
                    continue
                lp = urllib.parse.urlparse(u)
                low_path = lp.path.lower()
                if any(low_path.endswith(ext) for ext in DOC_EXTENSIONS):
                    page_entry["documents"].append({"url": u, "text": lnk["text"]})
                    all_docs.setdefault(u, {"url": u, "text": lnk["text"], "pages": []})
                    if norm not in all_docs[u]["pages"]:
                        all_docs[u]["pages"].append(norm)
                    continue

                if lp.netloc in ("www.sjrlawcollege.in", "sjrlawcollege.in"):
                    clean_int = f"https://www.sjrlawcollege.in{lp.path}"
                    int_links.add(clean_int)
                    if (
                        clean_int not in visited
                        and not any(low_path.endswith(ext) for ext in IMG_EXTENSIONS)
                        and not low_path.endswith((".css", ".js", ".xml", ".txt"))
                        and len(visited) + len(queue) < 60
                    ):
                        queue.append(clean_int)
                else:
                    ext_links.add(u)
                    all_external.add(u)

            page_entry["internal_links"] = sorted(int_links)
            page_entry["external_links"] = sorted(ext_links)

        pages_data.append(page_entry)

    # Save raw JSON
    with open(out_dir / "pages.json", "w", encoding="utf-8") as f:
        json.dump(pages_data, f, indent=2, ensure_ascii=False)
    with open(out_dir / "images.json", "w", encoding="utf-8") as f:
        json.dump(list(all_images.values()), f, indent=2, ensure_ascii=False)
    with open(out_dir / "documents.json", "w", encoding="utf-8") as f:
        json.dump(list(all_docs.values()), f, indent=2, ensure_ascii=False)

    print(f"\nDone! Crawled {len(pages_data)} pages.")
    print(f"Unique images found: {len(all_images)}")
    print(f"Unique documents found: {len(all_docs)}")
    print(f"Unique external links found: {len(all_external)}")


if __name__ == "__main__":
    main()
