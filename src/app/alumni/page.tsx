import { Award, ExternalLink, Users } from "lucide-react";
import { NEWS_ITEMS } from "@/content/news";
import { CONTACT_INFO } from "@/content/contact";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AlumniRegistrationForm } from "@/components/forms/AlumniRegistrationForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Alumni Association & Registration",
  description:
    "Connect with the 3,000+ alumni network of Sri Jagadguru Renukacharya College of Law, Bengaluru, view distinguished alumni honours, and register with the Alumni Association.",
  path: "/alumni",
});

export default function AlumniPage() {
  const alumniHonours = NEWS_ITEMS.filter((n) => n.category === "Alumni Honour");

  return (
    <>
      <PageHero
        title="Alumni Network"
        subtitle="Over 3,000 graduates serving across the Judiciary, Bar, Government, and Corporate sectors since 1963"
        breadcrumbs={[{ label: "Alumni" }]}
      />

      {/* Distinguished Alumni from Source */}
      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Notable Alumni"
            title="Distinguished Legal"
            accent="Luminaries"
            description="Profiles preserved from the official SJR College of Law website highlighting distinguished alumni who studied law at our institution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {alumniHonours.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-[#177249] p-6 shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-[#177249]/10 text-[#177249] flex items-center justify-center mb-3">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1A4C]">
                  {item.title.replace("Distinguished Alumnus: ", "")}
                </h3>
                <p className="text-sm text-[#342419] mt-2 leading-relaxed">
                  {item.content}
                </p>
              </article>
            ))}
          </div>

          {/* Telegram Community Banner (migrated from alumni-registration.php) */}
          <div className="rounded-2xl bg-[#177249] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-[#FFD900]" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-bold">
                  Join the SJRCL Alumni Telegram Community
                </h2>
                <p className="text-xs sm:text-sm text-white/85 mt-1">
                  Official alumni group link migrated from the legacy alumni
                  registration page.
                </p>
              </div>
            </div>
            <a
              href={CONTACT_INFO.alumniTelegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#e07b00] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors shrink-0"
            >
              <span>Join Telegram Group</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-4xl mx-auto">
          <AlumniRegistrationForm />
        </div>
      </section>
    </>
  );
}
