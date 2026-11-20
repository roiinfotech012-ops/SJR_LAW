import Image from "next/image";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/content/testimonials";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Student & Alumni Testimonials",
  description:
    "Authentic testimonials from students and alumni of Sri Jagadguru Renukacharya College of Law (SJR College of Law), Bengaluru.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Genuine reflections from students and alumni of Sri Jagadguru Renukacharya College of Law"
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-5xl mx-auto space-y-6">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-[#177249] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="relative h-24 w-24 rounded-full overflow-hidden ring-2 ring-[#177249]/35 shrink-0 bg-[#EBE6E0]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#0B1A4C]">
                      {item.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#177249]">
                      {item.role}
                    </p>
                  </div>
                  <Quote
                    className="h-8 w-8 text-[#177249]/25 shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4 space-y-3 text-sm sm:text-base text-[#342419] leading-relaxed italic">
                  {item.quote.map((paragraph, idx) => (
                    <p key={idx}>&ldquo;{paragraph}&rdquo;</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
