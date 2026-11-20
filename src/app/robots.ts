import type { MetadataRoute } from "next";
import { COLLEGE_IDENTITY } from "@/content/college";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", COLLEGE_IDENTITY.siteUrl).toString(),
  };
}
