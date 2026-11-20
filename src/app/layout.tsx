import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { COLLEGE_IDENTITY } from "@/content/college";
import { CONTACT_INFO } from "@/content/contact";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingControls } from "@/components/layout/FloatingControls";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const notoKannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COLLEGE_IDENTITY.siteUrl),
  title: {
    default: `${COLLEGE_IDENTITY.officialName} (${COLLEGE_IDENTITY.displayName}), Bengaluru`,
    template: `%s | ${COLLEGE_IDENTITY.displayName}`,
  },
  description: COLLEGE_IDENTITY.legacyMetaDescription,
  icons: {
    icon: COLLEGE_IDENTITY.faviconPath,
    shortcut: COLLEGE_IDENTITY.faviconPath,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: COLLEGE_IDENTITY.officialName,
    images: [{ url: "/assets/banners/slide1.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: COLLEGE_IDENTITY.officialName,
    alternateName: COLLEGE_IDENTITY.displayName,
    url: COLLEGE_IDENTITY.siteUrl,
    logo: `${COLLEGE_IDENTITY.siteUrl}${COLLEGE_IDENTITY.logoPath}`,
    foundingDate: String(COLLEGE_IDENTITY.establishedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: "#9, Race Course Road, Anand Rao Circle, Gandhi Nagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560009",
      addressCountry: "IN",
    },
    telephone: "+91-91080-26311",
    email: "sjrcl.principal@gmail.com",
    sameAs: CONTACT_INFO.socialLinks.map((s) => s.url),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoKannada.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#342419] font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#FF8C00] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingControls />
      </body>
    </html>
  );
}
