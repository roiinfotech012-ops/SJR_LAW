import Link from "next/link";
import { ShieldCheck, ChevronRight, ExternalLink } from "lucide-react";
import { STUDENT_CELLS } from "@/content/committees";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Student Corner — Cells, Committees & Scholarships",
  description:
    "Student support cells, committees, National and State Scholarship Portals (NSP & SSP), grievance redressal, legal aid, and anti-ragging cell at SJR College of Law, Bengaluru.",
  path: "/student-corner",
});

export default function StudentCornerPage() {
  return (
    <>
      <PageHero
        title="Student Corner"
        subtitle="Committees, Scholarship Portals (NSP / SSP), Grievance Redressal & Student Welfare Cells"
        breadcrumbs={[{ label: "Student Corner" }]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_CELLS.map((cell) => (
              <Link
                key={cell.slug}
                href={`/student-corner/${cell.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-[#177249] p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#177249]/10 text-[#177249] group-hover:bg-[#177249] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0B1A4C] group-hover:text-[#177249]">
                    {cell.title}
                  </h2>
                  <p className="text-sm text-[#5C4238] mt-2 leading-relaxed">
                    {cell.summary}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#177249]">
                  View Details <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl bg-[#177249] text-white p-7 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold">
                Direct Official Scholarship Portals
              </h2>
              <p className="text-sm text-white/85 mt-1">
                Apply for Central and Karnataka State post-matric scholarships
                through official government websites.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://scholarships.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white text-[#0B1A4C] hover:bg-[#FFD900] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-md transition-colors"
              >
                <span>NSP Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://ssp.postmatric.karnataka.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#FF8C00] hover:bg-[#e07b00] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-md transition-colors"
              >
                <span>Karnataka SSP Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
