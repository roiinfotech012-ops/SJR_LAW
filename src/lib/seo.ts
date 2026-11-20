import type { Metadata } from "next";
import { COLLEGE_IDENTITY } from "@/content/college";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = "/assets/banners/slide1.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const canonicalUrl = new URL(path, COLLEGE_IDENTITY.siteUrl).toString();
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${COLLEGE_IDENTITY.displayName}`,
      description,
      url: canonicalUrl,
      siteName: COLLEGE_IDENTITY.officialName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: COLLEGE_IDENTITY.officialName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${COLLEGE_IDENTITY.displayName}`,
      description,
      images: [image],
    },
  };
}
