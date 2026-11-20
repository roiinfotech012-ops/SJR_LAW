import Link from "next/link";
import { NON_TEACHING_STAFF } from "@/content/staff";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaffCard } from "@/components/faculty/StaffCard";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Non-Teaching Staff",
  description:
    "Administrative, office, accounts, and support staff of Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/staff/non-teaching",
});

export default function NonTeachingStaffPage() {
  return (
    <>
      <PageHero
        title="Non-Teaching Staff"
        subtitle="Administrative, accounts, and campus support personnel at SJR College of Law"
        breadcrumbs={[
          { label: "Staff", href: "/staff/teaching" },
          { label: "Non-Teaching Staff" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-7xl mx-auto space-y-10">
          <SectionHeading
            eyebrow="Administration & Support"
            title="Meet Our"
            accent="Non-Teaching Staff"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {NON_TEACHING_STAFF.map((member) => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/staff/teaching"
              className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
            >
              &larr; View Teaching Faculty
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
