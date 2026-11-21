import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { EVENTS } from "@/content/events";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Events & Seminars",
  description:
    "Academic seminars, workshops, and college events of Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/events",
});

export default function EventsPage() {
  const past = EVENTS.filter((e) => e.isPast);

  return (
    <>
      <PageHero
        title="Events & Seminars"
        subtitle="Academic seminars, workshops, and campus activities at SJR College of Law"
        breadcrumbs={[{ label: "Events" }]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-[#0B1A4C]">
            Seminars &amp; Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {past.map((ev) => (
              <article
                key={ev.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col"
              >
                <div className="relative h-52 bg-[#EBE6E0]">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Past Event
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#177249] font-semibold mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {ev.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {ev.timings}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1A4C]">
                    {ev.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#342419] leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
