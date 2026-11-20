import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  Award,
  GraduationCap,
  FileText,
  Download,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import type { Programme } from "@/types/content";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";

export function ProgrammeDetailView({ programme }: { programme: Programme }) {
  return (
    <>
      <PageHero
        title={programme.title}
        subtitle={`${programme.duration} • ${programme.affiliation}`}
        breadcrumbs={[
          { label: "Academics", href: "/academics/llb" },
          { label: programme.shortTitle },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto">
          {/* Quick Facts Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="rounded-xl border border-gray-200 bg-slate-50 p-5 flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-lg bg-[#177249] text-white flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-[#8D6E62]">
                  Duration
                </p>
                <p className="text-sm font-bold text-[#0B1A4C]">
                  {programme.duration}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-slate-50 p-5 flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-lg bg-[#177249] text-white flex items-center justify-center shrink-0">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-[#8D6E62]">
                  Affiliation
                </p>
                <p className="text-sm font-bold text-[#0B1A4C]">
                  {programme.affiliation}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-slate-50 p-5 flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-lg bg-[#177249] text-white flex items-center justify-center shrink-0">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-[#8D6E62]">
                  Recognition
                </p>
                <p className="text-sm font-bold text-[#0B1A4C]">
                  {programme.recognition}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1A4C] mb-4">
                  Programme Overview
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
                  {programme.fullDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="rounded-2xl border border-[#177249]/20 bg-[#177249]/5 p-6">
                <h2 className="text-xl font-bold text-[#0B1A4C] mb-2">
                  Eligibility Criteria
                </h2>
                <p className="text-sm sm:text-base text-[#342419] leading-relaxed">
                  {programme.eligibility}
                </p>
                {programme.eligibilityNote && (
                  <p className="mt-3 text-xs text-[#5C4238] bg-white/80 rounded-lg p-3 border border-amber-200">
                    <strong>Note:</strong> {programme.eligibilityNote}
                  </p>
                )}
              </div>

              {/* Admission Process */}
              <div>
                <h2 className="text-xl font-bold text-[#0B1A4C] mb-4">
                  Admission Process
                </h2>
                <ol className="space-y-3">
                  {programme.admissionSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <span className="h-7 w-7 rounded-full bg-[#177249] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-[#342419] leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                {programme.registrationFeeNote && (
                  <div className="mt-4">
                    <VerificationNotice title="Time-Sensitive Fee Notice">
                      {programme.registrationFeeNote}
                    </VerificationNotice>
                  </div>
                )}
              </div>

              {/* Career Opportunities */}
              <div>
                <h2 className="text-xl font-bold text-[#0B1A4C] mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#177249]" aria-hidden="true" />
                  <span>Career Opportunities</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programme.careerOpportunities.map((career) => (
                    <div
                      key={career}
                      className="flex items-start gap-2.5 rounded-lg bg-slate-50 border border-slate-200 p-3.5 text-sm text-[#342419]"
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-[#177249] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#EBE6E0]">
                <Image
                  src={programme.image}
                  alt={programme.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {programme.syllabusPdfPath && (
                <div className="rounded-2xl border border-[#177249]/25 bg-[#FCF5E8] p-6">
                  <div className="flex items-center gap-2 text-[#0B1A4C] font-bold mb-2">
                    <FileText className="h-5 w-5 text-[#177249]" aria-hidden="true" />
                    <h3>Official KSLU Syllabus</h3>
                  </div>
                  <p className="text-xs text-[#5C4238] mb-4">
                    View or download the official Karnataka State Law University
                    revised syllabus PDF.
                  </p>
                  <div className="space-y-2.5">
                    <a
                      href={programme.syllabusPdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors"
                    >
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      <span>View Syllabus PDF</span>
                    </a>
                    <a
                      href={programme.syllabusPdfPath}
                      download
                      className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold py-2.5 px-4 rounded-md transition-colors"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      <span>Download PDF</span>
                    </a>
                    {programme.syllabusExternalUrl && (
                      <a
                        href={programme.syllabusExternalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#177249] hover:underline pt-1"
                      >
                        <span>Official KSLU Portal Source</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#0B1A4C] mb-3">
                  Why SJRCL?
                </h3>
                <ul className="space-y-2.5">
                  {programme.whySjrcl.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#342419]"
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-[#177249] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link
                    href="/admissions"
                    className="w-full inline-flex items-center justify-center bg-[#FF8C00] hover:bg-[#e07b00] text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors"
                  >
                    Admission Information &amp; Enquiry
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
