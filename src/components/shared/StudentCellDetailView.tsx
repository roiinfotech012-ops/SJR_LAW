import Link from "next/link";
import { ExternalLink, ShieldCheck } from "lucide-react";
import type { StudentCell } from "@/types/content";
import { STUDENT_CELLS } from "@/content/committees";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { GrievanceForm } from "@/components/forms/GrievanceForm";

export function StudentCellDetailView({ cell }: { cell: StudentCell }) {
  return (
    <>
      <PageHero
        title={cell.title}
        subtitle={cell.summary}
        breadcrumbs={[
          { label: "Student Corner", href: "/student-corner" },
          { label: cell.shortTitle },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
              {cell.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {cell.externalPortals && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {cell.externalPortals.map((portal) => (
                  <a
                    key={portal.url}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-[#177249]/25 bg-[#FCF5E8] hover:border-[#177249] p-5 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-base font-bold text-[#0B1A4C] group-hover:text-[#177249] flex items-center justify-between gap-2">
                        <span>{portal.label}</span>
                        <ExternalLink className="h-4 w-4 shrink-0" />
                      </p>
                      <p className="text-xs sm:text-sm text-[#5C4238] mt-2 leading-relaxed">
                        {portal.description}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-semibold text-[#177249]">
                      Visit Official Government Portal &rarr;
                    </span>
                  </a>
                ))}
              </div>
            )}

            {cell.hasComplaintForm && (
              <div className="pt-2">
                <GrievanceForm />
              </div>
            )}

            {cell.sourceStatus === "source-empty-gap" && (
              <VerificationNotice title="Official Committee Roster Pending">
                No committee member names or dedicated subpage content were
                published for this cell on the legacy website. Official
                current-year faculty coordinator and member names will be added
                once verified by SJR College of Law administration.
              </VerificationNotice>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
              <h2 className="text-base font-bold text-[#0B1A4C] mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#177249]" />
                <span>Student Corner Directory</span>
              </h2>
              <ul className="space-y-2">
                {STUDENT_CELLS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/student-corner/${c.slug}`}
                      className={`block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                        c.slug === cell.slug
                          ? "bg-[#177249] text-white font-semibold"
                          : "bg-white text-[#0B1A4C] hover:text-[#177249] border border-gray-200"
                      }`}
                    >
                      {c.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
