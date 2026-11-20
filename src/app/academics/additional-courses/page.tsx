import { PROGRAMMES } from "@/content/programmes";
import { ProgrammeDetailView } from "@/components/academics/ProgrammeDetailView";
import { buildPageMetadata } from "@/lib/seo";

const additional = PROGRAMMES.find((p) => p.slug === "additional-courses")!;

export const metadata = buildPageMetadata({
  title: "Additional Courses — PG Diploma in Cyber Law",
  description:
    "1-Year PG Diploma in Cyber Law and Information Technology at Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/academics/additional-courses",
});

export default function AdditionalCoursesPage() {
  return <ProgrammeDetailView programme={additional} />;
}
