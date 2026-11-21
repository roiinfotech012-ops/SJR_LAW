import { Target, Compass, BookOpen } from "lucide-react";
import { ABOUT_SOCIETY, PRINCIPALS_MESSAGE } from "@/content/college";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Vision & Mission",
  description:
    "Mission, educational philosophy, and teaching methodology of Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/about/vision-mission",
});

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="Instilling knowledge of law, passion for justice, and Indian values with a global vision"
        breadcrumbs={[
          { label: "About Us", href: "/about/college" },
          { label: "Vision & Mission" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#177249]/20 bg-gradient-to-br from-[#177249]/5 to-white p-7 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-[#177249] text-white flex items-center justify-center mb-4">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B1A4C] mb-3">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-[#342419] leading-relaxed">
                {ABOUT_SOCIETY.mission}
              </p>
            </div>

            <div className="rounded-2xl border border-[#FF8C00]/30 bg-[#FCF5E8] p-7 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-[#FF8C00] text-white flex items-center justify-center mb-4">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B1A4C] mb-3">
                Institutional Aim &amp; Vision
              </h2>
              <p className="text-sm sm:text-base text-[#342419] leading-relaxed">
                &ldquo;{PRINCIPALS_MESSAGE.motto}&rdquo;
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-slate-50 p-7">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-[#177249]" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1A4C]">
                Teaching Methodology
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-[#342419] leading-relaxed">
              {ABOUT_SOCIETY.teachingMethodology.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
