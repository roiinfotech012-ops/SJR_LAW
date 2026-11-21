import Image from "next/image";
import { Quote } from "lucide-react";
import { PRINCIPALS_MESSAGE } from "@/content/college";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Principal's Message",
  description:
    "Principal's Communiqué — Message to all law aspirants from Dr. Jayashree R Salimath, Principal, Sri Jagadguru Renukacharya College of Law, Bengaluru.",
  path: "/about/principals-message",
});

export default function PrincipalsMessagePage() {
  return (
    <>
      <PageHero
        title="Principal's Communiqué"
        subtitle={PRINCIPALS_MESSAGE.heading}
        breadcrumbs={[
          { label: "About Us", href: "/about/college" },
          { label: "Principal's Message" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <div className="relative aspect-[3/4] bg-[#EBE6E0]">
                  <Image
                    src={PRINCIPALS_MESSAGE.portrait}
                    alt={`${PRINCIPALS_MESSAGE.name}, ${PRINCIPALS_MESSAGE.designation}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5 bg-[#177249] text-white text-center">
                  <h2 className="text-lg font-bold">{PRINCIPALS_MESSAGE.name}</h2>
                  <p className="text-xs font-semibold text-[#FFD900] uppercase tracking-wider mt-1">
                    {PRINCIPALS_MESSAGE.designation}
                  </p>
                  <p className="text-xs text-white/90 mt-1">
                    {PRINCIPALS_MESSAGE.qualification}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-[#177249]/5 to-[#FF6333]/5 border border-[#177249]/15 p-7 sm:p-9">
                <Quote
                  className="h-10 w-10 text-[#177249] mb-4"
                  aria-hidden="true"
                />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A4C] mb-4">
                  {PRINCIPALS_MESSAGE.heading}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
                  {PRINCIPALS_MESSAGE.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 pt-5 border-t border-[#177249]/15">
                  <p className="font-bold text-[#0B1A4C]">
                    {PRINCIPALS_MESSAGE.name}
                  </p>
                  <p className="text-sm text-[#177249] font-medium">
                    {PRINCIPALS_MESSAGE.designation}, Sri Jagadguru Renukacharya
                    College of Law
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
