import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { ABOUT_SOCIETY } from "@/content/college";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SJR Education Society",
  description:
    "History and legacy of Sri Jagadguru Renukacharya Education Society (established 1945), its mission, teaching methodology, and why choose law at SJR College of Law.",
  path: "/about/sjr-education-society",
});

export default function SjrEducationSocietyPage() {
  return (
    <>
      <PageHero
        title="SJR Education Society"
        subtitle="Serving the cause of value-based education in Karnataka since 1945"
        breadcrumbs={[
          { label: "About Us", href: "/about/college" },
          { label: "SJR Education Society" },
        ]}
      />

      {/* History Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#EBE6E0]">
                <Image
                  src={ABOUT_SOCIETY.societyImage}
                  alt="Sri Jagadguru Renukacharya Education Society"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain bg-white p-4"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-[#EBE6E0]">
                <Image
                  src={ABOUT_SOCIETY.founderImage}
                  alt="Sri Jagadguru Renukacharya Education Society Heritage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#177249] mb-2">
                Parent Society • Est. 1945
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A4C] mb-5">
                {ABOUT_SOCIETY.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
                {ABOUT_SOCIETY.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/about/our-institutes"
                  className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                >
                  <span>Explore All SJR Group Institutes</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Why SJRCL */}
      <section className="py-14 bg-[#FCF5E8] border-y border-[#e8d9be]">
        <div className="site-container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-[#DDD3C6] p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-[#342419] leading-relaxed">
              {ABOUT_SOCIETY.mission}
            </p>
            <h3 className="text-lg font-bold text-[#0B1A4C] mt-6 mb-3">
              Teaching Methodology
            </h3>
            <div className="space-y-3 text-sm text-[#342419] leading-relaxed">
              {ABOUT_SOCIETY.teachingMethodology.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#DDD3C6] p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-4">
              Why SJR College of Law?
            </h2>
            <ul className="space-y-3">
              {ABOUT_SOCIETY.whySjrcl.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#342419]">
                  <CheckCircle2
                    className="h-5 w-5 text-[#177249] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Should I Choose Law? */}
      <section className="py-14 bg-white">
        <div className="site-container max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A4C] mb-4">
            Why Should I Choose Law?
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
            {ABOUT_SOCIETY.whyChooseLaw.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
