import Link from "next/link";
import {
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { StudentCell } from "@/types/content";
import { STUDENT_CELLS } from "@/content/committees";
import { PageHero } from "@/components/shared/PageHero";
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
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
              {cell.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* External Scholarship Portals */}
            {cell.externalPortals && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            {/* Key Objectives & Mandate */}
            {cell.objectives && cell.objectives.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-[#FCF5E8]/60 p-6">
                <h2 className="text-lg font-bold text-[#0B1A4C] mb-4">
                  Key Objectives &amp; Mandate
                </h2>
                <ul className="space-y-2.5">
                  {cell.objectives.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#342419] leading-relaxed"
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-[#177249] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities & Student Support */}
            {cell.activities && cell.activities.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-[#0B1A4C] mb-4">
                  Functions &amp; Student Support
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cell.activities.map((activity) => (
                    <div
                      key={activity.title}
                      className="rounded-xl border border-gray-200 border-t-4 border-t-[#177249] bg-white p-5 shadow-xs"
                    >
                      <h3 className="text-sm font-bold text-[#0B1A4C]">
                        {activity.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C4238] mt-1.5 leading-relaxed">
                        {activity.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How to Reach / Procedure */}
            {cell.procedure && cell.procedure.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-[#0B1A4C] mb-3">
                  Procedure &amp; Student Assistance
                </h2>
                <ol className="space-y-2.5">
                  {cell.procedure.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm text-[#342419] leading-relaxed"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#177249] text-white text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Grievance Form (when enabled) */}
            {cell.hasComplaintForm && (
              <div className="pt-2">
                <GrievanceForm />
              </div>
            )}

            {/* Office Contact Card */}
            {!cell.hasComplaintForm && (
              <div className="rounded-2xl border border-[#177249]/20 bg-white p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="text-sm font-bold text-[#0B1A4C]">
                    Need Assistance or Want to Submit a Representation?
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#5C4238]">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-[#177249]" />
                      +91 91080 26311 / +91 91080 26325
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-[#177249]" />
                      sjrcl.principal@gmail.com
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#177249]" />
                      #9, Race Course Road, Bengaluru
                    </span>
                  </div>
                </div>
                <Link
                  href="/student-corner/grievance-redressal"
                  className="shrink-0 inline-flex items-center justify-center bg-[#177249] hover:bg-[#115838] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-md transition-colors"
                >
                  Lodge Grievance &rarr;
                </Link>
              </div>
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
