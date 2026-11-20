#!/usr/bin/env python3
import csv, json, re, ssl, urllib.request
from pathlib import Path

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# 1. Retry Narasimhamurthy.jpg
url = "https://www.sjrlawcollege.in/images/non-teaching/Narasimhamurthy.jpg"
dest = Path("public/assets/faculty/Narasimhamurthy.jpg")
try:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, context=ctx, timeout=40) as r:
        data = r.read()
        if r.status == 200 and len(data) > 0:
            dest.write_bytes(data)
            print(f"SUCCESS Narasimhamurthy.jpg: {len(data)} bytes")
except Exception as e:
    print("FAIL Narasimhamurthy.jpg:", e)

# 2. Update asset-inventory.csv if Narasimhamurthy.jpg succeeded
if dest.exists() and dest.stat().st_size > 0:
    rows = list(csv.DictReader(open("docs/asset-inventory.csv", encoding="utf-8")))
    for r in rows:
        if "Narasimhamurthy.jpg" in r["original_url"]:
            r["local_path"] = "/assets/faculty/Narasimhamurthy.jpg"
            r["size_bytes"] = str(dest.stat().st_size)
            r["status"] = "migrated"
            r["notes"] = "Mr. Narasimha Murthy P (Non-teaching staff)"
    with open("docs/asset-inventory.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)

# 3. Print contact.html details
html = Path("scripts/audit-site/output/contact.html").read_text(encoding="utf-8")
print("CONTACT IFRAMES:", re.findall(r'<iframe[^>]+src=["\']([^"\']+)["\']', html, re.I))
clean = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.S | re.I)
lines = [l.strip() for l in re.sub(r'<[^>]+>', '\n', clean).splitlines() if l.strip()]
print("CONTACT TEXT:")
for l in lines[45:130]:
    print(" ", l)

# 4. Print forms on alumni-registration & discrimination-committe
pages = {p["url"]: p for p in json.loads(Path("scripts/audit-site/output/pages.json").read_text(encoding="utf-8"))}
for u in ["https://www.sjrlawcollege.in/alumni-registration.php", "https://www.sjrlawcollege.in/discrimination-committe.php"]:
    print("FORMS:", u)
    print(json.dumps(pages[u]["forms"], indent=2))

# 5. Print asset inventory summary by folder
rows = list(csv.DictReader(open("docs/asset-inventory.csv", encoding="utf-8")))
print("\nALL MIGRATED ASSETS:")
for r in rows:
    print(f"  [{r['status']}] {r['local_path']}  <--  {r['original_url']} ({r['size_bytes']} B)")
