import type { MetadataRoute } from "next";
import { COLLEGE_IDENTITY } from "@/content/college";
import { STUDENT_CELLS } from "@/content/committees";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COLLEGE_IDENTITY.siteUrl;
  const staticRoutes = [
    "/",
    "/about/sjr-education-society",
    "/about/college",
    "/about/our-institutes",
    "/about/vision-mission",
    "/about/chief-patrons-message",
    "/about/presidents-message",
    "/about/secretarys-message",
    "/about/principals-message",
    "/about/governing-council",
    "/academics/llb",
    "/academics/ba-llb",
    "/academics/additional-courses",
    "/academics/syllabus/llb",
    "/academics/syllabus/ba-llb",
    "/admissions",
    "/staff/teaching",
    "/staff/non-teaching",
    "/infrastructure",
    "/campus-life/moot-court",
    "/disclosures",
    "/student-corner",
    ...STUDENT_CELLS.map((c) => `/student-corner/${c.slug}`),
    "/alumni",
    "/testimonials",
    "/news",
    "/events",
    "/announcements",
    "/downloads",
    "/contact",
  ];

  const now = new Date();
  return staticRoutes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
