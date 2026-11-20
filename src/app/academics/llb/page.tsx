import { PROGRAMMES } from "@/content/programmes";
import { ProgrammeDetailView } from "@/components/academics/ProgrammeDetailView";
import { buildPageMetadata } from "@/lib/seo";

const llb = PROGRAMMES.find((p) => p.slug === "llb")!;

export const metadata = buildPageMetadata({
  title: "LL.B. (3 Years) Programme",
  description:
    "3-Year LL.B. degree at SJR College of Law, Bengaluru — 6 semesters, affiliated to Karnataka State Law University (KSLU), Hubballi and recognised by the Bar Council of India.",
  path: "/academics/llb",
});

export default function LlbProgrammePage() {
  return <ProgrammeDetailView programme={llb} />;
}
