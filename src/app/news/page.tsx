import { Newspaper } from "lucide-react";
import { NEWS_ITEMS } from "@/content/news";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "News & Institutional Updates",
  description:
    "Archived news, student achievements, and distinguished alumni honours from Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Student achievements, institutional news, and alumni honours from the SJR College of Law archive"
        breadcrumbs={[{ label: "News & Updates" }]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-5xl mx-auto space-y-6">
          <VerificationNotice title="Archive Labelling">
            All news records below were migrated from the legacy SJR College of
            Law homepage with their original dates preserved. Items from earlier
            academic years are clearly labelled as archived records.
          </VerificationNotice>

          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 border-l-4 border-l-[#177249] p-6 sm:p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#177249]/10 text-[#177249] text-xs font-semibold px-3 py-0.5">
                  <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.category}
                </span>
                <span className="rounded-full bg-slate-100 text-slate-600 text-xs font-medium px-3 py-0.5">
                  {item.date}
                </span>
                {item.isArchive && (
                  <span className="rounded-full bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-0.5">
                    Archived Record
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-[#0B1A4C]">{item.title}</h2>
              <p className="mt-3 text-sm sm:text-base text-[#342419] leading-relaxed">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
