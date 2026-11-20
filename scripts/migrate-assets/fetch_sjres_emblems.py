#!/usr/bin/env python3
import re, ssl, urllib.request
from pathlib import Path

ctx = ssl._create_unverified_context()
headers = {"User-Agent": "Mozilla/5.0"}

def get_text(path):
    return urllib.request.urlopen(
        urllib.request.Request("https://sjrpshbr.sjres.edu.in" + path, headers=headers),
        context=ctx,
        timeout=15,
    ).read().decode("utf-8", "replace")

def get_bytes(path):
    return urllib.request.urlopen(
        urllib.request.Request("https://sjrpshbr.sjres.edu.in" + path, headers=headers),
        context=ctx,
        timeout=15,
    ).read()

layout = get_text("/src/components/Layout.tsx")
imports = [p for p in re.findall(r'from "([^"]+)"', layout) if p.startswith("/src/")]
print("Layout imports:", imports)

for p in imports:
    txt = get_text(p)
    imgs = re.findall(r'["\'](/[^"\']+\.(?:png|jpg|jpeg|webp)(?:\?import)?)["\']', txt)
    if imgs:
        print(p, "->", imgs)
        # If there are 3 header emblems (left, center, right), download left and right
        clean_imgs = [im.split("?")[0] for im in imgs]
        if len(clean_imgs) >= 3:
            left_p, right_p = clean_imgs[0], clean_imgs[2]
            for src_p, out_name in [
                (left_p, "public/assets/branding/sjr-emblem-left" + Path(left_p).suffix),
                (right_p, "public/assets/branding/sjr-emblem-right" + Path(right_p).suffix),
            ]:
                data = get_bytes(src_p)
                Path(out_name).write_bytes(data)
                print(f"SAVED {src_p} -> {out_name} ({len(data)} bytes)")
