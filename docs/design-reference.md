# Design System & Visual Reference Specification

> **Source Reference (Visual Design ONLY):** [https://sjrpshbr.sjres.edu.in/](https://sjrpshbr.sjres.edu.in/)
> **Inspection Date:** 2026-11-20
> **Usage Rule:** This document captures **visual design tokens, typography, layout proportions, component patterns, and interaction states ONLY**. Zero school-specific text, photography, faculty, contact details, or branding may be carried over into the SJR College of Law website.

---

## 1. Colour System & CSS Custom Properties

Extracted directly from the computed stylesheet and `:root` custom properties of `https://sjrpshbr.sjres.edu.in/`.

### Core Brand & Institutional Palette

| Design Token | Reference Token | HSL | Exact HEX | Primary Usage |
|---|---|---|---|---|
| `--color-primary` | `--indian-green` | `153 66% 27%` | `#177249` | Sticky navigation bar, primary CTA buttons, footer background, announcement marquee, inner-page hero banner, section accent phrases, card top borders, icon badges, floating FABs |
| `--color-secondary` | `--saffron-orange` | `33 100% 50%` | `#FF8C00` | Top utility contact bar, footer 4px top accent border, footer bottom copyright strip, hero kicker & gradient stops, column heading underlines |
| `--color-accent` | `--golden-yellow` | `51 100% 50%` | `#FFD900` | Desktop nav hover state (`hover:text-golden-yellow`), hero headline gradient highlight, mobile drawer close icon |
| `--color-navy` | `--logo-navy` | `226 75% 17%` | `#0B1A4C` | Institutional header title, dropdown menu item text, inner-page section `h2` headings, faculty name headings, breadcrumb text |
| `--color-maroon` | `--logo-maroon` | `0 60% 30%` | `#7A1F1F` | Header affiliation & regulatory recognition subtitle lines |
| `--color-heading` | `--school-brown` | `16 24% 29%` | `#5C4238` / `#5D4037` | Homepage section headings (`h2`, `h3`, `h4`), hero left-to-right gradient overlay, form labels |
| `--color-muted-text` | `--school-light-brown` | `16 18% 47%` | `#8D6E62` / `#8D6E63` | Secondary body copy, subtitles, captions |
| `--color-gold` | `--school-gold` | `43 89% 38%` | `#B7860B` | Warm gold accents and gradient stops |
| `--color-tricolor-orange` | `--tricolor-orange` | `14 100% 60%` | `#FF6333` / `#FF6B35` | Announcement marquee `★★★` separators, subtle tinted gradient panels |
| `--color-tricolor-green` | `--tricolor-green` | `122 46% 34%` | `#2F7F31` / `#2E7D32` | Deep green hover/gradient stop |
| `--color-background` | `--background` | `0 0% 100%` | `#FFFFFF` | Page & card surface background |
| `--color-foreground` | `--foreground` | `25 35% 15%` | `#342419` / `#3E2723` | Base body text |
| `--color-surface` | `--muted` | `35 20% 90%` | `#EBE6E0` | Muted surface & media placeholder background |
| `--color-border` | `--border` | `35 25% 82%` | `#DDD3C6` | Inputs, dividers, standard card borders |
| `--color-destructive` | `--destructive` | `0 84.2% 60.2%` | `#EF4444` | Validation & error states |

### Observed Surface & Utility Colours

- **Inner-Page Breadcrumb Strip:** `#F7D8A4` (`rgb(247, 216, 164)`)
- **Warm Cream Band:** `hsl(38 70% 96%)` (`#FCF5E8`)
- **Light Slate Band:** `#F8FAFC` (`bg-slate-50`)
- **Hero Overlay Gradients:** Horizontal `from-[#5C4238]/85 via-[#5C4238]/55 to-transparent` combined with vertical `from-black/70 via-black/10 to-black/30`.
- **Hero Glassmorphism Card:** `bg-white/10 backdrop-blur-xl border border-white/20`
- **Footer Surface Texture:** Solid `#177249` with subtle white radial dot grid (`radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)`, `background-size: 22px 22px`, `opacity: 0.06`).

---

## 2. Typography

Loaded via Google Fonts (`next/font/google` in Next.js):

- **Body & UI (`--font-body`):** `Inter` (weights `300, 400, 500, 600, 700, 800`)
- **Display Serif (`--font-heading`):** `Playfair Display` (weights `400, 500, 600, 700`)
- **Regional Script (`--font-kannada`):** `Noto Sans Kannada` (weights `400, 600, 700`) for Kannada institutional title in the header.

### Typographic Scale

| Role | Font Family | Size (Mobile → Desktop) | Weight | Line Height | Style Notes |
|---|---|---|---|---|---|
| Hero `H1` | `Playfair Display` | `2.25rem` → `3rem` → `3.75rem` → `4.5rem` | `700` | `1.05` | Two-tone: white + saffron-to-gold gradient text |
| Inner-Page `H1` | `Inter` | `1.875rem` → `2.25rem` → `3rem` | `700` | `1.15` | White, centered, short white accent underline below |
| Section `H2` (Standard) | `Inter` | `1.875rem` → `2.25rem` (`lg: 3rem`) | `700` | `1.25` | `#5C4238` or `#0B1A4C` with accent phrase in `#177249` |
| Section `H2` (Editorial Serif) | `Playfair Display` | `1.5rem` → `1.875rem` → `2.25rem` | `700` | `1.15` | `#0F172A` |
| Eyebrow Label | `Inter` | `0.75rem` (`12px`) | `600` | `1rem` | `uppercase tracking-[0.2em]`, `#177249` |
| Card `H3` | `Inter` | `1rem` – `1.25rem` | `700` | `1.35` | `#5C4238` or `#0B1A4C` |
| Body Copy | `Inter` | `0.875rem` – `1rem` | `400`–`500` | `1.625` | `#3E2723` / `#8D6E63` |
| Nav Links | `Inter` | `0.875rem` (`14px`) | `500` | `1.25rem` | `#FFFFFF`, hover `#FFD900` |

---

## 3. Layout Metrics, Radii, Shadows & Breakpoints

- **Container Width (`--container-width`):** `max-w-[1400px]` (`px-4 sm:px-6 lg:px-8`), with inner content blocks commonly constrained to `max-w-5xl`, `max-w-6xl`, or `max-w-7xl`.
- **Header Stack Heights (Desktop 1440px):**
  - Top Utility Bar: `28px` (`bg-[#FF8C00]`)
  - Logo & Affiliation Header: `~89px` (`bg-white border-b border-gray-100`)
  - Sticky Navigation Bar: `44px` (`bg-[#177249] sticky top-0 z-50 shadow-lg`)
- **Section Spacing:** `py-12` (`48px`) to `py-16` (`64px`) and `py-20` (`80px`).
- **Border Radius Scale:** `rounded-md` (`6px` buttons/inputs), `rounded-lg` (`8px` dropdowns/cards), `rounded-xl` (`12px` gallery tiles), `rounded-2xl` (`16px` programme/faculty cards & message panels), `rounded-3xl` (`24px` hero glass card & campus showcase frame), `rounded-full` (pills, circular badges, FABs).
- **Shadow Scale:** `shadow-sm`, `shadow-md`, `shadow-lg` (sticky nav), `shadow-xl` (contact card & hover elevation), `shadow-2xl` (dropdowns, hero glass card, featured portraits).
- **Responsive Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px` (mobile menu threshold), `xl: 1280px`, `2xl: 1400px`.

---

## 4. Component & Section Architecture (Reference Parity)

1. **Top Utility Bar:** Saffron `#FF8C00` full-width bar with email, phone numbers, and quick institutional links.
2. **Institutional Header:** White surface with SJR institutional emblem(s), English & Kannada college name in `#0B1A4C`, and affiliation/recognition lines in `#7A1F1F`.
3. **Sticky Main Navigation:** `#177249` bar with centered horizontal links, white dropdown panels (`min-w-56 rounded-lg shadow-2xl border-gray-100`) with `#0B1A4C` text and `#177249` hover state, plus an inline dark-green accordion drawer on `<1024px` mobile viewports.
4. **Hero Slider Banner:** Full-bleed campus imagery with warm brown + dark vertical overlays, left 7-col content (translucent pill badge, saffron kicker, two-tone Playfair Display `h1`, description, solid green + glass outline CTAs), right 5-col glassmorphic "At A Glance" 2×2 highlights card, and bottom pill indicators.
5. **Announcement Marquee Strip:** `#177249` full-width scrolling strip with `#FF6333` `★★★` separators (pauses on hover/focus and respects `prefers-reduced-motion`).
6. **College Introduction (About Split):** Two-column layout with offset green/saffron bordered campus photo frame on the left and narrative + callout quote + 3-column mini highlights + CTA on the right.
7. **Institutional Highlights & Key Pillars:** Centered serif heading, 4-column metric bar with green icon tiles, and structured pillar/highlight cards.
8. **Academic Programmes Grid:** `rounded-2xl` cards with top imagery/header, bold title, summary, and full-width `#177249` `"View Details >"` CTA.
9. **Principal's Message:** 2-column split with portrait + bottom dark gradient caption on the left, and tinted green/orange gradient message panel with quote icon on the right.
10. **Infrastructure & Facilities Grid:** 4-column cards with top photo, circular `#177249` icon badge at `top-3 right-3`, excerpt, and green `"Learn More >"` button.
11. **Gallery Grid:** 4×2 `aspect-[4/3]` `rounded-xl` photo grid with `#177249/30` hover overlay and accessible lightbox.
12. **Faculty Preview Grid:** 4-column `rounded-2xl` portrait cards (`aspect-[3/4]`), `#0B1A4C` name, `#177249` designation, and bordered qualification metadata.
13. **News & Events Split:** 12-column grid pairing latest news cards (with date pills) alongside an events panel with clear separation between upcoming and archived items.
14. **Testimonials & Alumni Carousel:** `border-t-4 border-[#177249]` cards with quote icon, italic text, author info, and circular green prev/next controls.
15. **Quick Enquiry & Map:** 2-column layout with `border-t-4 border-[#177249] shadow-xl` enquiry form on the left and 2×2 contact info mini-cards + embedded map on the right.
16. **Inner-Page `PageHero`:** `#F7D8A4` breadcrumb bar above a `#177249` full-width centered title banner with a short white underline.
17. **Footer & Floating Controls:** `4px` `#FF8C00` top border, `#177249` dot-grid 4-column footer with orange heading underlines and `>` chevron links, `#FF8C00` bottom copyright bar, plus floating bottom-left phone FAB and bottom-right scroll-to-top FAB.

---

## 5. Observed Reference Source Pages & Evidence

- Homepage Desktop (`1440×900`): `https://sjrpshbr.sjres.edu.in/`
- About Overview Inner Page (`1440×900`): `https://sjrpshbr.sjres.edu.in/about/overview`
- Contact Inner Page (`1440×900`): `https://sjrpshbr.sjres.edu.in/contact`
- Homepage Mobile (`375×812`) & Opened Navigation Drawer: `https://sjrpshbr.sjres.edu.in/`
