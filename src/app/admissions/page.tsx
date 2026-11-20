import Link from "next/link";
import { CheckCircle2, Phone, Mail, FileText } from "lucide-react";
import { PROGRAMMES } from "@/content/programmes";
import { CONTACT_INFO } from "@/content/contact";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Admissions — Eligibility & Procedure",
  description:
    "Admission procedure, eligibility criteria, programme patterns, and enquiry form for 3-Year LL.B., 5-Year B.A. LL.B., and PG Diploma in Cyber Law at SJR College of Law, Bengaluru.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  const ballb = PROGRAMMES.find((p) => p.slug === "ba-llb")!;
  const llb = PROGRAMMES.find((p) => p.slug === "llb")!;

  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Admission Procedure, Eligibility Criteria & Programme Structure for SJR College of Law, Bengaluru"
        breadcrumbs={[{ label: "Admissions" }]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto space-y-10">
          <VerificationNotice title="Important Notice on Current Academic Year Dates & Fees">
            The legacy website displayed an outdated 2023–24 admissions banner
            and a legacy non-refundable registration fee figure of ₹20,000/-
            (last updated ~2021). Sanctioned seat intake numbers were not
            published on the legacy portal. Please confirm the current academic
            year admission schedule, fee structure, KSLU/BCI eligibility norms,
            and seat availability directly with the Admissions Office at{" "}
            <a
              href={CONTACT_INFO.phones.principalAndAdmissions[0].href}
              className="font-semibold underline"
            >
              {CONTACT_INFO.phones.principalAndAdmissions[0].display}
            </a>{" "}
            or{" "}
            <a
              href={CONTACT_INFO.emails[1].href}
              className="font-semibold underline"
            >
              {CONTACT_INFO.emails[1].address}
            </a>
            .
          </VerificationNotice>

          {/* Two Programme Admission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[ballb, llb].map((prog) => (
              <article
                key={prog.slug}
                className="rounded-2xl border border-gray-200 border-t-4 border-t-[#177249] bg-white p-7 shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-[#177249]/10 text-[#177249] text-xs font-bold px-3 py-1 mb-3">
                    {prog.duration}
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B1A4C]">
                    {prog.title}
                  </h2>

                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#177249] mt-5 mb-2">
                    Eligibility Criteria
                  </h3>
                  <p className="text-sm text-[#342419] leading-relaxed">
                    {prog.eligibility}
                  </p>

                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#177249] mt-5 mb-2">
                    Admission Steps
                  </h3>
                  <ul className="space-y-2">
                    {prog.admissionSteps.map((s, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[#342419]"
                      >
                        <CheckCircle2
                          className="h-4 w-4 text-[#177249] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  {prog.registrationFeeNote && (
                    <p className="mt-4 text-xs text-[#5C4238] bg-[#FCF5E8] border border-amber-200 rounded-lg p-3">
                      {prog.registrationFeeNote}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-xs font-semibold px-4 py-2 rounded-md"
                  >
                    Full Programme Details
                  </Link>
                  {prog.syllabusHref && (
                    <Link
                      href={prog.syllabusHref}
                      className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#0B1A4C] text-xs font-semibold px-4 py-2 rounded-md"
                    >
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      KSLU Syllabus
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Admission Enquiry Form & Contact Desk */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-2xl font-bold text-[#0B1A4C]">
                Admissions Office Helpdesk
              </h2>
              <p className="text-sm text-[#5C4238] leading-relaxed">
                Reach out to the SJR College of Law Admissions Office for
                application forms, interview schedules, fee details, and
                document verification requirements.
              </p>
              <div className="rounded-xl border border-gray-200 bg-slate-50 p-5 space-y-3 text-sm text-[#342419]">
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#177249]" aria-hidden="true" />
                  <span>
                    <strong>Admission Numbers:</strong>{" "}
                    {CONTACT_INFO.phones.principalAndAdmissions[0].display} /{" "}
                    {CONTACT_INFO.phones.principalAndAdmissions[1].display}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#177249]" aria-hidden="true" />
                  <span>
                    <strong>Landline:</strong>{" "}
                    {CONTACT_INFO.phones.landline.display}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#177249]" aria-hidden="true" />
                  <span>
                    <strong>Email:</strong> {CONTACT_INFO.emails[1].address} /{" "}
                    {CONTACT_INFO.emails[0].address}
                  </span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm defaultProgramme="LL.B. (3 Years)" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
