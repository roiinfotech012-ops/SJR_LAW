import Link from "next/link";
import { Megaphone, ChevronRight } from "lucide-react";
import { ANNOUNCEMENT_MARQUEE, NEWS_ITEMS } from "@/content/news";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Announcements & Notices",
  description:
    "Institutional announcements, academic notices, and archived updates from Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/announcements",
});

export default function AnnouncementsPage() {
  return (
    <>
      <PageHero
        title="Announcements"
        subtitle="Institutional notices, academic resources, and archived announcements"
        breadcrumbs={[{ label: "Announcements" }]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-5xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-4">
              Active Institutional Information
            </h2>
            <div className="space-y-3">
              {ANNOUNCEMENT_MARQUEE.map((notice, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-[#177249] p-4 sm:p-5 shadow-sm flex items-start gap-3"
                >
                  <Megaphone
                    className="h-5 w-5 text-[#FF8C00] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base text-[#342419] font-medium">
                    {notice}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-4">
              Archived Notices &amp; Highlights
            </h2>
            <div className="space-y-3">
              {NEWS_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#177249]">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#8D6E62]">
                      &bull; {item.date} (Archived)
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1A4C]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C4238] mt-1">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md"
            >
              Admissions Information <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-5 py-2.5 rounded-md"
            >
              Syllabus &amp; Downloads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
