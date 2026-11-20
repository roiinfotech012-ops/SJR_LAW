# Sri Jagadguru Renukacharya College of Law (SJR College of Law), Bengaluru

Complete Next.js (App Router + TypeScript + Tailwind CSS) website redesign and content migration for **Sri Jagadguru Renukacharya College of Law**, established in 1963 at #9, Race Course Road, Anand Rao Circle, Bengaluru – 560 009.

- **Visual Design System:** Faithfully adapted from the SJR Educational Group reference (`https://sjrpshbr.sjres.edu.in/`)
- **Content & Institutional Assets:** 100% migrated from the official SJR College of Law website (`https://www.sjrlawcollege.in/`), including all 64 authentic institution photographs and both official KSLU syllabus PDFs.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components by default)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS custom properties (`src/app/globals.css`)
- **Typography:** `Inter`, `Playfair Display`, and `Noto Sans Kannada` via `next/font/google`
- **Icons:** `lucide-react`
- **Forms & Validation:** `react-hook-form`, `@hookform/resolvers`, `zod`
- **SEO:** Next.js Metadata API, JSON-LD `CollegeOrUniversity` structured data, dynamic `sitemap.xml` & `robots.txt`, and 34 permanent (`308`) redirects from legacy `.php` URLs in `next.config.ts`.

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and configure optional delivery credentials:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical production URL (defaults to `https://www.sjrlawcollege.in`) |
| `ENQUIRY_WEBHOOK_URL` | Optional | JSON webhook endpoint for Enquiry, Alumni, and Grievance form delivery |
| `ENQUIRY_WEBHOOK_SECRET` | Optional | Shared secret sent in `X-SJRCL-Secret` header |
| `RESEND_API_KEY` | Optional | Resend API key for direct email delivery |
| `ENQUIRY_RECIPIENT_EMAIL` | Optional | Recipient email (defaults to `sjrcl.principal@gmail.com`) |

> **Delivery Transparency:** If neither `ENQUIRY_WEBHOOK_URL` nor `RESEND_API_KEY` is configured, form submissions are validated server-side, logged locally to `data/submissions.jsonl`, and return an honest notice advising the visitor that external email delivery is not yet configured.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Quality checks & production build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

---

## Project Structure

```text
├── docs/                    # Design spec, content audit, CSV inventories, verification & migration reports
├── public/
│   ├── assets/              # 64 migrated SJR College of Law images (branding, banners, campus, faculty, infrastructure, events, alumni)
│   └── documents/syllabus/  # Mirrored official KSLU 3-Year LL.B. & 5-Year B.A. LL.B. Revised Syllabus PDFs
├── scripts/                 # Audit crawler & asset migration scripts
└── src/
    ├── app/                 # 30 App Router routes + 3 API routes + sitemap, robots, 404
    ├── components/          # Header, Footer, PageHero, HeroSlider, PhotoGalleryGrid, Forms, Cards
    ├── content/             # Typed content modules decoupled from presentation
    ├── lib/                 # SEO helpers, Zod validation schemas, submission delivery handler
    └── types/               # Strict TypeScript interfaces
```

---

## Migration & Audit Documentation

- [`docs/design-reference.md`](docs/design-reference.md)
- [`docs/content-audit.md`](docs/content-audit.md)
- [`docs/page-inventory.csv`](docs/page-inventory.csv)
- [`docs/asset-inventory.csv`](docs/asset-inventory.csv)
- [`docs/legacy-url-map.csv`](docs/legacy-url-map.csv)
- [`docs/missing-assets.md`](docs/missing-assets.md)
- [`docs/content-verification.md`](docs/content-verification.md)
- [`docs/migration-report.md`](docs/migration-report.md)
