import Image from "next/image";
import Link from "next/link";
import { Scale, CheckCircle2, Quote, ChevronRight } from "lucide-react";
import { ABOUT_SOCIETY } from "@/content/college";
import { TESTIMONIALS } from "@/content/testimonials";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Moot Court & Practical Advocacy Training",
  description:
    "Moot Court Hall, practical advocacy sessions, seminars, workshops, and legal aid camps at Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/campus-life/moot-court",
});

export default function MootCourtPage() {
  const shrinath = TESTIMONIALS.find((t) => t.id === "shrinath-a");

  return (
    <>
      <PageHero
        title="Moot Court & Advocacy Training"
        subtitle="Practical courtroom sessions, seminars, workshops, and legal aid training at SJR College of Law"
        breadcrumbs={[
          { label: "Campus Life", href: "/campus-life/moot-court" },
          { label: "Moot Court & Advocacy" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#EBE6E0]">
              <Image
                src="/assets/infrastructure/moot-court-hd.jpg"
                alt="Moot Court Session at Sri Jagadguru Renukacharya College of Law"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#177249]/10 text-[#177249] text-xs font-semibold uppercase tracking-[0.18em] px-3.5 py-1">
                <Scale className="h-3.5 w-3.5" aria-hidden="true" />
                Practical Legal Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A4C]">
                Courtroom Preparation Beyond the Classroom
              </h2>
              {ABOUT_SOCIETY.teachingMethodology.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-[#342419] leading-relaxed"
                >
                  {p}
                </p>
              ))}
              <ul className="space-y-2 pt-2">
                {[
                  "Dedicated Moot Court Hall for mock trial & appellate advocacy practice.",
                  "Practical training through Special Lectures, Workshops, Symposiums, and Student Presentations.",
                  "Proximity to the High Court of Karnataka and Vidhana Soudha supporting active internships.",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-[#342419]"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-[#177249] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {shrinath && (
            <div className="rounded-2xl border border-[#177249]/20 bg-[#FCF5E8] p-7 flex flex-col sm:flex-row gap-5 items-start">
              <Quote
                className="h-8 w-8 text-[#177249] shrink-0"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm sm:text-base italic text-[#342419] leading-relaxed">
                  &ldquo;{shrinath.quote[0]}&rdquo;
                </p>
                <p className="mt-3 text-sm font-bold text-[#0B1A4C]">
                  — {shrinath.name} ({shrinath.role})
                </p>
              </div>
            </div>
          )}

          <VerificationNotice title="Moot Court Committee & Competition Calendar">
            Current academic year Moot Court Committee members, competition
            notifications, and results will be published here once supplied by
            the SJR College of Law administration.
          </VerificationNotice>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md"
            >
              <span>Explore Campus Infrastructure</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/student-corner/legal-aid"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-5 py-2.5 rounded-md"
            >
              <span>Legal Aid &amp; Community Engagement</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
