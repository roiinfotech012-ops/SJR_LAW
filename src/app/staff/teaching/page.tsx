import Link from "next/link";
import { TEACHING_FACULTY, GUEST_FACULTY } from "@/content/faculty";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaffCard } from "@/components/faculty/StaffCard";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Teaching Faculty",
  description:
    "Meet the full-time and guest teaching faculty of Sri Jagadguru Renukacharya College of Law (SJR College of Law), Bengaluru.",
  path: "/staff/teaching",
});

export default function TeachingFacultyPage() {
  return (
    <>
      <PageHero
        title="Teaching Faculty"
        subtitle="Dedicated legal educators, domain specialists, and academic mentors at SJR College of Law"
        breadcrumbs={[
          { label: "Staff", href: "/staff/teaching" },
          { label: "Teaching Faculty" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-7xl mx-auto space-y-14">
          <div>
            <SectionHeading
              eyebrow="Full-Time Faculty"
              title="SJR College of Law"
              accent="Teaching Faculty"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TEACHING_FACULTY.map((member) => (
                <StaffCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Visiting & Guest Mentors"
              title="SJR Law"
              accent="Guest Faculty"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {GUEST_FACULTY.map((member) => (
                <StaffCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/staff/non-teaching"
              className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
            >
              View Non-Teaching &amp; Administrative Staff &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
