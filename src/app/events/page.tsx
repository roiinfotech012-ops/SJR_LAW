import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { EVENTS } from "@/content/events";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Events & Seminars Archive",
  description:
    "Academic seminars, workshops, and historical event archives of Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/events",
});

export default function EventsPage() {
  const upcoming = EVENTS.filter((e) => !e.isPast);
  const past = EVENTS.filter((e) => e.isPast);

  return (
    <>
      <PageHero
        title="Events & Seminars"
        subtitle="Clear separation between current academic events and historical college archives"
        breadcrumbs={[{ label: "Events" }]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-5xl mx-auto space-y-12">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-4">
              Upcoming Events
            </h2>
            {upcoming.length === 0 ? (
              <VerificationNotice title="No Upcoming Events Currently Listed">
                No upcoming seminars or college events are currently published
                on the official source website. For the latest academic calendar
                and seminar schedule, please contact the college office at +91
                91080 26311 or sjrcl.principal@gmail.com.
              </VerificationNotice>
            ) : null}
          </div>

          {/* Past / Archived Events */}
          <div>
            <h2 className="text-2xl font-bold text-[#0B1A4C] mb-5">
              Past Events Archive
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
                      Past Event • Archived
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
        </div>
      </section>
    </>
  );
}
