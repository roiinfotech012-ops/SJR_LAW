#!/usr/bin/env python3
import re, ssl, urllib.request
from pathlib import Path

ctx = ssl._create_unverified_context()
headers = {"User-Agent": "Mozilla/5.0"}

def get_text(path):
    return urllib.request.urlopen(
        urllib.request.Request("https://sjrpshbr.sjres.edu.in" + path, headers=headers),
        context=ctx,
        timeout=20,
    ).read().decode("utf-8", "replace")

def get_bytes(path):
    return urllib.request.urlopen(
        urllib.request.Request("https://sjrpshbr.sjres.edu.in" + path, headers=headers),
        context=ctx,
        timeout=20,
    ).read()

out_dir = Path("scripts/audit-site/output/sjres_leadership")
out_dir.mkdir(parents=True, exist_ok=True)
img_dir = Path("public/assets/leadership")
img_dir.mkdir(parents=True, exist_ok=True)

for name in ["ChiefPatronMessage.tsx", "PresidentMessage.tsx", "SecretaryMessage.tsx"]:
    txt = get_text(f"/src/pages/about/{name}")
    (out_dir / name).write_text(txt, encoding="utf-8")
    imgs = re.findall(r'["\'](/[^"\']+\.(?:png|jpg|jpeg|webp)(?:\?import)?)["\']', txt)
    print(f"=== {name} === imgs={imgs}")
    for im in imgs:
        clean = im.split("?")[0]
        fname = Path(clean).name
        data = get_bytes(clean)
        (img_dir / fname).write_bytes(data)
        print(f"  SAVED {clean} -> public/assets/leadership/{fname} ({len(data)} B)")
    # Print string literals that look like content (>25 chars)
    strs = re.findall(r'children:\s*"([^"]{20,})"', txt)
    for s in strs[:12]:
        print("  TXT:", s[:140])
