import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2, ExternalLink } from "lucide-react";
import { COLLEGE_IDENTITY } from "@/content/college";
import { PROGRAMMES } from "@/content/programmes";
import { STUDENT_CELLS } from "@/content/committees";
import { DOCUMENTS } from "@/content/documents";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "IQAC, Approvals & Mandatory Disclosures",
  description:
    "Approvals, KSLU affiliation, Bar Council of India recognition, course-wise details, statutory committees, and mandatory disclosures for Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/disclosures",
});

const REGULATORY_CHECKLIST = [
  {
    item: "Bar Council of India (BCI) Recognition",
    publishedStatus:
      "Recognised by the Bar Council of India (since academic year 1999–2000 as published on official source).",
    docStatus: "Latest BCI renewal letter PDF pending upload from office",
  },
  {
    item: "University Affiliation",
    publishedStatus:
      "Affiliated to Karnataka State Law University (KSLU), Hubballi (originally established under University of Mysore in 1963).",
    docStatus: "Current continuation of affiliation certificate pending upload",
  },
  {
    item: "UGC Recognition",
    publishedStatus:
      "Principal's Communiqué notes coverage under UGC Section 2(f) & 12(B).",
    docStatus: "Official UGC certificate copy pending upload",
  },
  {
    item: "Managing Society Registration",
    publishedStatus:
      "Managed by Sri Jagadguru Renukacharya Education Society (established 1945; rechristened 1955).",
    docStatus: "Society registration certificate pending upload",
  },
  {
    item: "State Government NOC / Building & Fire Safety Clearances",
    publishedStatus:
      "Located at #9, Race Course Road, Anand Rao Circle, Bengaluru – 560 009.",
    docStatus: "Statutory clearance PDFs pending institutional upload",
  },
];

export default function DisclosuresPage() {
  return (
    <>
      <PageHero
        title="IQAC, Approvals & Disclosures"
        subtitle={`${COLLEGE_IDENTITY.officialName} — University Affiliation, BCI Recognition & Statutory Transparency`}
        breadcrumbs={[{ label: "IQAC & Disclosures" }]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto space-y-12">
          <VerificationNotice title="Statutory Disclosure Transparency">
            Only institutional recognitions and documents verified on the
            official source website (<code>www.sjrlawcollege.in</code>) are
            listed as published below. Where official renewal certificates,
            sanctioned intake letters, or committee rosters were not published on
            the legacy website, they are transparently marked as pending upload
            from the college administration.
          </VerificationNotice>

          {/* 1. Regulatory Approvals & Affiliations */}
          <div id="approvals" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-5 flex items-center gap-2.5">
              <ShieldCheck className="h-6 w-6 text-[#177249]" aria-hidden="true" />
              <span>Regulatory Approvals &amp; Institutional Recognition</span>
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#177249] text-white">
                    <th className="py-3.5 px-5 font-semibold">Approval / Record</th>
                    <th className="py-3.5 px-5 font-semibold">Published Institutional Details</th>
                    <th className="py-3.5 px-5 font-semibold">Document Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {REGULATORY_CHECKLIST.map((row) => (
                    <tr key={row.item} className="hover:bg-slate-50/70">
                      <td className="py-4 px-5 font-bold text-[#0B1A4C]">
                        {row.item}
                      </td>
                      <td className="py-4 px-5 text-[#342419]">
                        {row.publishedStatus}
                      </td>
                      <td className="py-4 px-5 text-xs font-medium text-[#7A1F1F]">
                        {row.docStatus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Course-Wise Approvals */}
          <div id="courses" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-5">
              Course-Wise Academic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROGRAMMES.map((prog) => (
                <article
                  key={prog.slug}
                  className="rounded-2xl border border-gray-200 border-t-4 border-t-[#177249] bg-slate-50/70 p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1A4C]">
                      {prog.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#342419]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#177249] shrink-0 mt-0.5" />
                        <span>
                          <strong>Duration:</strong> {prog.duration}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#177249] shrink-0 mt-0.5" />
                        <span>
                          <strong>Affiliation:</strong> {prog.affiliation}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#177249] shrink-0 mt-0.5" />
                        <span>
                          <strong>Recognition:</strong> {prog.recognition}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#FF8C00] shrink-0 mt-0.5" />
                        <span>
                          <strong>Sanctioned Intake:</strong> Verify current year
                          seat matrix with Admissions Office
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-200 flex flex-wrap gap-3 text-xs font-semibold">
                    <Link
                      href={`/academics/${prog.slug}`}
                      className="text-[#177249] hover:underline"
                    >
                      Programme Details &rarr;
                    </Link>
                    {prog.syllabusHref && (
                      <Link
                        href={prog.syllabusHref}
                        className="text-[#0B1A4C] hover:text-[#177249] hover:underline"
                      >
                        KSLU Syllabus &rarr;
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 3. Statutory Committees & Student Welfare Cells */}
          <div>
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-5">
              Statutory Committees &amp; Student Support Cells
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STUDENT_CELLS.map((cell) => (
                <Link
                  key={cell.slug}
                  href={`/student-corner/${cell.slug}`}
                  className="rounded-xl border border-gray-200 hover:border-[#177249] bg-white p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-base font-bold text-[#0B1A4C]">
                    {cell.title}
                  </h3>
                  <p className="text-xs text-[#5C4238] mt-1.5 line-clamp-2">
                    {cell.summary}
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-[#177249]">
                    Open Section &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Published Official Documents */}
          <div>
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-5 flex items-center gap-2">
              <FileText className="h-6 w-6 text-[#177249]" aria-hidden="true" />
              <span>Published Academic Documents</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DOCUMENTS.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-xl border border-gray-200 bg-[#FCF5E8] p-5 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-bold text-[#0B1A4C]">{doc.title}</p>
                    <p className="text-xs text-[#5C4238] mt-1">
                      {doc.fileType} &bull; {doc.fileSize}
                    </p>
                  </div>
                  <a
                    href={doc.localPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-xs font-semibold px-4 py-2 rounded-md shrink-0"
                  >
                    <span>View PDF</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
