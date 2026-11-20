# Missing, Broken & Inaccessible Source Assets Report

**Audit Date:** 2026-11-20  
**Source Site:** `https://www.sjrlawcollege.in/`

## 1. Asset Completeness Summary

| Category | Discovered | Migrated Locally | External Retained | Inaccessible / Broken | Requires Verification |
|---|---:|---:|---:|---:|---:|
| **Institution Images** | 64 | 64 | 0 | 0 | 0 |
| **Third-Party CSS Stock Images** | 1 | 0 | 0 | 1 | 0 |
| **Documents / PDFs** | 2 | 2 | 2 (official KSLU) | 0 | 2 (verify latest KSLU revision) |
| **Legacy Pages with Empty Content** | 6 | — | — | 6 | 6 |

---

## 2. Inaccessible / Broken Source Assets

1. **Third-Party CSS Background Image (HTTP 404 on Legacy Site)**
   - **Original URL:** `https://images.pexels.com/photos/196288/pexels-photo-196288.jpeg?w=940&h=650&auto=compress&cs=tinysrgb`
   - **Legacy Usage:** `.main_counter_area` inline CSS background on `https://www.sjrlawcollege.in/`
   - **Status:** Returned `HTTP 404` on the legacy site itself. Replaced by the clean reference design system surface (`#FFFFFF` / `#177249` brand styling) rather than any stock photo.

---

## 3. Empty or Unlinked Legacy Pages (Content Gaps Requiring Institutional Input)

The following navigation items on `https://www.sjrlawcollege.in/` either had empty `href=""` attributes or returned `0 bytes`:

1. **Committees (`/committe-form.php`)** — Returned `HTTP 200` with `0 bytes` (blank PHP script). No committee member names or PDFs were published.
2. **Vision-Mission** — Linked with empty `href=""` in the About dropdown. Mission statement was recovered from `best-law-colleges-in-karnataka.php`; formal Vision statement requires institutional verification.
3. **Legal Aid Cell** — Linked with empty `href=""` in Student Corner.
4. **Anti-Ragging Cell** — Linked with empty `href=""` in Student Corner.
5. **Girl Students Grievance Redressal Cell & SC/ST Grievance Redressal Cell** — Linked with empty `href=""` in Student Corner.
6. **Human Rights Cell & Mediation Centre** — Linked with empty `href=""` in Student Corner.
7. **Governing Council** — Not published anywhere on the legacy website.

> **Policy Applied:** No committee member names, helpline numbers, brochures, or fake documents were fabricated. Each route provides transparent institutional context, official statutory portal links (NSP, SSP, KSLU, BCI), and a clear notice that official member rosters and circulars are pending institutional verification.
