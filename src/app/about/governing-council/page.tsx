import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { COLLEGE_IDENTITY } from "@/content/college";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Governing Council",
  description:
    "Governance overview for Sri Jagadguru Renukacharya College of Law under the Sri Jagadguru Renukacharya Education Society.",
  path: "/about/governing-council",
});

export default function GoverningCouncilPage() {
  return (
    <>
      <PageHero
        title="Governing Council"
        subtitle={`Managed by ${COLLEGE_IDENTITY.societyName} (Est. ${COLLEGE_IDENTITY.societyEstablishedYear})`}
        breadcrumbs={[
          { label: "About Us", href: "/about/college" },
          { label: "Governing Council" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl border border-gray-200 p-7 bg-slate-50">
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-3">
              Institutional Governance
            </h2>
            <p className="text-sm sm:text-base text-[#342419] leading-relaxed">
              Sri Jagadguru Renukacharya College of Law operates under the aegis
              of the <strong>{COLLEGE_IDENTITY.societyName}</strong>, established
              in 1945 (originally as Veerashaiva Education Society and
              rechristened in 1955 in honour of His Holiness, the Jagadguru of
              Sri Rambhapuri Peeta).
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/about/sjr-education-society"
              className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Read About SJR Education Society
            </Link>
            <Link
              href="/about/presidents-message"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Leadership Messages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
