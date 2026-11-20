#!/usr/bin/env python3
import re, ssl, urllib.request

ctx = ssl._create_unverified_context()
headers = {"User-Agent": "Mozilla/5.0"}

for url in [
    "https://www.sjrlawcollege.in/faculty.php",
    "https://www.sjrlawcollege.in/non-teaching-staff.php",
]:
    print("=" * 80)
    print("URL:", url)
    html = urllib.request.urlopen(
        urllib.request.Request(url, headers=headers), context=ctx, timeout=25
    ).read().decode("utf-8", "replace")
    # Match each teacher card block containing <img ...> followed by <h4>...</h4>
    cards = re.findall(
        r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>.*?<h4[^>]*>(.*?)</h4>',
        html,
        flags=re.S | re.I,
    )
    for idx, (src, h4) in enumerate(cards, 1):
        clean_h4 = " ".join(re.sub(r"<[^>]+>", " ", h4).split())
        print(f"  {idx:02d}. IMG={src}  ==>  {clean_h4}")
