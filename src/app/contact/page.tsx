import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "@/content/contact";
import { PageHero } from "@/components/shared/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Contact Sri Jagadguru Renukacharya College of Law at #9, Race Course Road, Anand Rao Circle, Gandhi Nagar, Bengaluru – 560 009. Phone, email, directions, and enquiry form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Visit our campus at Race Course Road, Bengaluru or send us an enquiry"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Reference /contact 2-Column Split */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Details List */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl font-bold text-[#0B1A4C] mb-2">
                Get in Touch
              </h2>
              <p className="text-sm text-[#5C4238] leading-relaxed mb-4">
                Reach out to the Principal&apos;s Office or Admissions Desk at
                Sri Jagadguru Renukacharya College of Law, Bengaluru.
              </p>

              <div className="rounded-xl border border-gray-200 bg-slate-50 p-4 flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-full bg-[#177249] text-white flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1A4C]">
                    College Address
                  </h3>
                  <p className="text-sm text-[#5C4238] mt-1 leading-relaxed">
                    {CONTACT_INFO.fullAddress}
                  </p>
                  <a
                    href={CONTACT_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#177249] hover:underline mt-2"
                  >
                    <span>Open Directions in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-slate-50 p-4 flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-full bg-[#177249] text-white flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-sm text-[#5C4238] space-y-1">
                  <h3 className="font-bold text-[#0B1A4C]">
                    Telephone &amp; Admissions
                  </h3>
                  <p>
                    Principal / Admissions:{" "}
                    <a
                      href={CONTACT_INFO.phones.principalAndAdmissions[0].href}
                      className="font-medium text-[#0B1A4C] hover:text-[#177249]"
                    >
                      {CONTACT_INFO.phones.principalAndAdmissions[0].display}
                    </a>
                    {" / "}
                    <a
                      href={CONTACT_INFO.phones.principalAndAdmissions[1].href}
                      className="font-medium text-[#0B1A4C] hover:text-[#177249]"
                    >
                      {CONTACT_INFO.phones.principalAndAdmissions[1].display}
                    </a>
                  </p>
                  <p>
                    Landline:{" "}
                    <a
                      href={CONTACT_INFO.phones.landline.href}
                      className="font-medium text-[#0B1A4C] hover:text-[#177249]"
                    >
                      {CONTACT_INFO.phones.landline.display}
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-slate-50 p-4 flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-full bg-[#177249] text-white flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-sm text-[#5C4238] space-y-1">
                  <h3 className="font-bold text-[#0B1A4C]">Email Addresses</h3>
                  {CONTACT_INFO.emails.map((e) => (
                    <p key={e.address}>
                      {e.label}:{" "}
                      <a
                        href={e.href}
                        className="font-medium text-[#0B1A4C] hover:text-[#177249] break-all"
                      >
                        {e.address}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <VerificationNotice title="Contact Directory Verification Note">
                {CONTACT_INFO.phones.legacyNotes}
              </VerificationNotice>
            </div>

            {/* Right Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>

          {/* Full-Width Embedded Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <iframe
              title="Sri Jagadguru Renukacharya College of Law Campus Map"
              src={CONTACT_INFO.googleMapsEmbedUrl}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
