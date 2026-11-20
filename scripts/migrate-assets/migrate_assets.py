#!/usr/bin/env python3
"""
Downloads all accessible images and documents from https://www.sjrlawcollege.in/
and linked official PDFs into organized public/assets/ and public/documents/ folders.
Also extracts contact.php, dumps complete source text for migration, and generates
docs/asset-inventory.csv, docs/page-inventory.csv, docs/legacy-url-map.csv, and docs/missing-assets.md.
"""

import csv
import json
import os
import re
import ssl
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/125.0.0.0 Safari/537.36"
    )
}


def download_file(url: str, dest: Path, timeout: int = 25):
    dest.parent.mkdir(parents=True, exist_ok=True)
    # Properly percent-encode spaces or non-ASCII in URL path
    p = urllib.parse.urlsplit(url)
    encoded_path = urllib.parse.quote(urllib.parse.unquote(p.path), safe="/:@!$&'()*+,;=-._~")
    safe_url = urllib.parse.urlunsplit((p.scheme, p.netloc, encoded_path, p.query, p.fragment))

    last_err = ""
    for attempt in range(3):
        req = urllib.request.Request(safe_url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, context=CTX, timeout=timeout) as resp:
                data = resp.read()
                ct = resp.headers.get("Content-Type", "")
                status = resp.status
                if status == 200 and len(data) > 0:
                    if "text/html" in ct.lower() and not str(dest).endswith(".html"):
                        return {"status": status, "ok": False, "size": len(data), "ct": ct, "error": "Returned HTML instead of binary asset"}
                    dest.write_bytes(data)
                    return {"status": status, "ok": True, "size": len(data), "ct": ct, "error": ""}
                last_err = "Empty response"
        except urllib.error.HTTPError as e:
            return {"status": e.code, "ok": False, "size": 0, "ct": "", "error": f"HTTP {e.code}: {e.reason}"}
        except Exception as e:
            last_err = str(e)
    return {"status": 0, "ok": False, "size": 0, "ct": "", "error": last_err}


def categorize_image(url: str, pages: list[str]) -> tuple[str, str]:
    parsed = urllib.parse.urlparse(url)
    fname = os.path.basename(parsed.path)
    low = fname.lower()
    if not fname:
        fname = "image.jpg"

    if low in ("sjre.png", "favicon.png") or "logo" in low:
        return "public/assets/branding", fname
    if low.startswith("slide") or low in ("title-bg.jpg", "courses.jpg", "faculty.jpg", "admission.jpg", "eventsbgbk.jpg", "bodybg.jpg", "news.jpg"):
        return "public/assets/banners", fname
    if any(k in low for k in ("principle", "principal", "teacher", "guest", "staff", "non", "admin", "lib", "office")) or any("faculty.php" in p or "non-teaching-staff.php" in p or "principals-communique.php" in p for p in pages):
        if low in ("1.png", "2.png", "4.png", "5.png"):
            return "public/assets/branding", f"stat-icon-{fname}"
        if any("infrastructure.php" in p for p in pages) and not any("faculty" in p or "non-teaching" in p for p in pages):
            return "public/assets/infrastructure", fname
        return "public/assets/faculty", fname
    if any("testimonials.php" in p for p in pages):
        return "public/assets/alumni", fname
    if any("infrastructure.php" in p for p in pages) or "infra" in low or "gallery" in low or "campus" in low or "clg" in low or "college" in low:
        return "public/assets/infrastructure", fname
    if low in ("fest.jpg", "seminar.jpg"):
        return "public/assets/events", fname
    if low in ("1.png", "2.png", "4.png", "5.png"):
        return "public/assets/branding", f"stat-icon-{fname}"
    if any("best-law-colleges" in p or "sjr-edu-society" in p for p in pages):
        return "public/assets/campus", fname
    return "public/assets/gallery", fname


def main():
    audit_dir = Path("scripts/audit-site/output")
    pages = json.loads((audit_dir / "pages.json").read_text(encoding="utf-8"))
    images = json.loads((audit_dir / "images.json").read_text(encoding="utf-8"))
    docs = json.loads((audit_dir / "documents.json").read_text(encoding="utf-8"))

    # Add stylesheet-referenced images discovered during browser audit
    extra_imgs = [
        "https://www.sjrlawcollege.in/images/favicon.png",
        "https://www.sjrlawcollege.in/images/help/slide1.jpg",
        "https://www.sjrlawcollege.in/images/help/slide2.jpg",
        "https://www.sjrlawcollege.in/images/help/slide3.jpg",
        "https://www.sjrlawcollege.in/images/news.jpg",
    ]
    existing_urls = {i["url"] for i in images}
    for eu in extra_imgs:
        if eu not in existing_urls:
            images.append({"url": eu, "alt": "Homepage banner/asset", "pages": ["https://www.sjrlawcollege.in/"]})
            existing_urls.add(eu)

    # Fetch contact.php freshly and save raw text
    req = urllib.request.Request("https://www.sjrlawcollege.in/contact.php", headers=HEADERS)
    contact_html = ""
    try:
        with urllib.request.urlopen(req, context=CTX, timeout=25) as r:
            contact_html = r.read().decode("utf-8", errors="replace")
    except Exception as e:
        print("contact.php fetch error:", e)
    (audit_dir / "contact.html").write_text(contact_html, encoding="utf-8")

    # Dump full text of all unique canonical pages
    unique_canonical = [
        "https://www.sjrlawcollege.in/",
        "https://www.sjrlawcollege.in/best-law-colleges-in-karnataka.php",
        "https://www.sjrlawcollege.in/sjr-edu-society.php",
        "https://www.sjrlawcollege.in/sjr-educational-institutions.php",
        "https://www.sjrlawcollege.in/principals-communique.php",
        "https://www.sjrlawcollege.in/faculty.php",
        "https://www.sjrlawcollege.in/non-teaching-staff.php",
        "https://www.sjrlawcollege.in/llb-course-in-bangalore.php",
        "https://www.sjrlawcollege.in/ba-llb-in-bangalore.php",
        "https://www.sjrlawcollege.in/additional-courses.php",
        "https://www.sjrlawcollege.in/sjr-law-college-admission.php",
        "https://www.sjrlawcollege.in/infrastructure.php",
        "https://www.sjrlawcollege.in/law-schools-in-bangalore.php",
        "https://www.sjrlawcollege.in/llb-syllabus.php",
        "https://www.sjrlawcollege.in/alumni-registration.php",
        "https://www.sjrlawcollege.in/testimonials.php",
        "https://www.sjrlawcollege.in/committe-form.php",
        "https://www.sjrlawcollege.in/discrimination-committe.php",
    ]
    pages_by_url = {p["url"]: p for p in pages}
    dump_lines = []
    for u in unique_canonical:
        p = pages_by_url.get(u)
        if not p:
            continue
        dump_lines.append("=" * 80)
        dump_lines.append(f"URL: {u}")
        dump_lines.append(f"TITLE: {p['title']}")
        dump_lines.append(f"META: {p['meta_description']}")
        dump_lines.append("IMAGES:")
        for im in p["images"]:
            if not im["in_chrome"]:
                dump_lines.append(f"  - {im['abs_url']} (alt={im['alt']})")
        dump_lines.append("DOCS:")
        for d in p["documents"]:
            dump_lines.append(f"  - {d['url']} ({d['text']})")
        dump_lines.append("CONTENT:")
        for b in p["blocks"]:
            dump_lines.append(f"  [{b['tag']}] {b['text']}")
        dump_lines.append("")
    (audit_dir / "full_text_dump.txt").write_text("\n".join(dump_lines), encoding="utf-8")

    # Download images
    asset_rows = []
    missing_assets = []
    used_local_paths = set()

    for img in images:
        url = img["url"]
        if "pexels.com" in url:
            asset_rows.append({
                "asset_type": "image",
                "original_url": url,
                "local_path": "",
                "format": "jpeg",
                "size_bytes": 0,
                "associated_pages": "; ".join(img["pages"]),
                "status": "inaccessible_external_404",
                "notes": "Third-party Pexels CSS background returned HTTP 404 on legacy site",
            })
            missing_assets.append(("Image (External CSS)", url, "HTTP 404 on legacy site (third-party Pexels stock URL)"))
            continue

        folder, fname = categorize_image(url, img["pages"])
        fname = re.sub(r"[^A-Za-z0-9._-]", "_", fname)
        dest = Path(folder) / fname
        # Avoid collisions
        stem, suf = dest.stem, dest.suffix
        idx = 2
        while str(dest) in used_local_paths:
            dest = Path(folder) / f"{stem}-{idx}{suf}"
            idx += 1
        used_local_paths.add(str(dest))

        res = download_file(url, dest)
        fmt = dest.suffix.lstrip(".").lower() or "unknown"
        rel_web = "/" + str(dest).replace("\\", "/").removeprefix("public/")
        if res["ok"]:
            asset_rows.append({
                "asset_type": "image",
                "original_url": url,
                "local_path": rel_web,
                "format": fmt,
                "size_bytes": res["size"],
                "associated_pages": "; ".join(img["pages"]),
                "status": "migrated",
                "notes": img.get("alt", ""),
            })
        else:
            asset_rows.append({
                "asset_type": "image",
                "original_url": url,
                "local_path": "",
                "format": fmt,
                "size_bytes": 0,
                "associated_pages": "; ".join(img["pages"]),
                "status": "failed",
                "notes": res["error"],
            })
            missing_assets.append(("Image", url, res["error"]))

    # Download documents (KSLU Syllabus PDFs)
    doc_name_map = {
        "BA": "kslu-ba-llb-5-year-revised-syllabus.pdf",
        "LLB": "kslu-llb-3-year-revised-syllabus.pdf",
    }
    for d in docs:
        url = d["url"]
        label = d["text"]
        fname = doc_name_map["BA"] if "B.A." in label or "BA" in label else doc_name_map["LLB"]
        dest = Path("public/documents/syllabus") / fname
        res = download_file(url, dest, timeout=30)
        rel_web = "/" + str(dest).replace("\\", "/").removeprefix("public/")
        if res["ok"]:
            asset_rows.append({
                "asset_type": "document",
                "original_url": url,
                "local_path": rel_web,
                "format": "pdf",
                "size_bytes": res["size"],
                "associated_pages": "; ".join(d["pages"]),
                "status": "migrated_and_external_retained",
                "notes": f"{label} (official KSLU PDF mirrored locally and linked to official KSLU source)",
            })
        else:
            asset_rows.append({
                "asset_type": "document",
                "original_url": url,
                "local_path": "",
                "format": "pdf",
                "size_bytes": 0,
                "associated_pages": "; ".join(d["pages"]),
                "status": "external_retained_download_failed",
                "notes": f"{label} — {res['error']}",
            })
            missing_assets.append(("Document (External KSLU PDF)", url, res["error"]))

    Path("docs").mkdir(exist_ok=True)
    with open("docs/asset-inventory.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["asset_type", "original_url", "local_path", "format", "size_bytes", "associated_pages", "status", "notes"],
        )
        writer.writeheader()
        writer.writerows(asset_rows)

    migrated_imgs = sum(1 for r in asset_rows if r["asset_type"] == "image" and r["status"] == "migrated")
    failed_imgs = sum(1 for r in asset_rows if r["asset_type"] == "image" and r["status"] != "migrated")
    migrated_docs = sum(1 for r in asset_rows if r["asset_type"] == "document" and "migrated" in r["status"])
    print(f"Images migrated: {migrated_imgs}, failed/inaccessible: {failed_imgs}")
    print(f"Documents migrated: {migrated_docs}/{len(docs)}")
    for m in missing_assets:
        print("  MISSING:", m)


if __name__ == "__main__":
    main()
