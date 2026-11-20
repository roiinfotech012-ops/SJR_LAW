import { PROGRAMMES } from "@/content/programmes";
import { ProgrammeDetailView } from "@/components/academics/ProgrammeDetailView";
import { buildPageMetadata } from "@/lib/seo";

const ballb = PROGRAMMES.find((p) => p.slug === "ba-llb")!;

export const metadata = buildPageMetadata({
  title: "B.A. LL.B. (5 Years Integrated) Programme",
  description:
    "5-Year Integrated B.A. LL.B. degree at SJR College of Law, Bengaluru — affiliated to KSLU, Hubballi and recognised by the Bar Council of India.",
  path: "/academics/ba-llb",
});

export default function BaLlbProgrammePage() {
  return <ProgrammeDetailView programme={ballb} />;
}
