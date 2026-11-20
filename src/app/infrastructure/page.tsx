import Image from "next/image";
import { Scale, BookOpen, Building2, Mic, Trophy, MapPin } from "lucide-react";
import { FACILITY_HIGHLIGHTS, INFRASTRUCTURE_PHOTOS } from "@/content/college";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhotoGalleryGrid } from "@/components/shared/PhotoGalleryGrid";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Campus Infrastructure & Facilities",
  description:
    "Explore the campus infrastructure of SJR College of Law, Bengaluru — Moot Court hall, Law & Digital Library, soundproof Auditorium, classrooms, sports, and 20 original campus photographs.",
  path: "/infrastructure",
});

const iconMap = {
  scale: Scale,
  book: BookOpen,
  building: Building2,
  mic: Mic,
  trophy: Trophy,
  "map-pin": MapPin,
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        title="Campus Infrastructure"
        subtitle="Moot Court, Law & Digital Library, Soundproof Auditorium, and Modern Classrooms at Race Course Road, Bengaluru"
        breadcrumbs={[{ label: "Infrastructure" }]}
      />

      {/* Key Facilities Grid */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Academic Facilities"
            title="Purpose-Built Spaces for"
            accent="Legal Education"
            description="Located in the heart of Bengaluru near the High Court of Karnataka and Vidhana Soudha, SJR College of Law provides well-maintained spaces for courtroom practice, research, and holistic student development."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACILITY_HIGHLIGHTS.map((fac) => {
              const Icon = iconMap[fac.icon];
              return (
                <article
                  key={fac.id}
                  id={fac.id}
                  className="bg-white rounded-xl border border-[#177249]/15 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative h-44 bg-[#EBE6E0]">
                    <Image
                      src={fac.image}
                      alt={fac.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-[#177249] text-white flex items-center justify-center shadow">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="text-base font-bold text-[#0B1A4C]">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4238] mt-2 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete 20-Photo Gallery with Lightbox */}
      <section id="gallery" className="scroll-mt-16 py-14 lg:py-16 bg-slate-50 border-t border-slate-200">
        <div className="site-container max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Photo Archive"
            title="Campus"
            accent="Photograph Gallery"
            description="All 20 original campus and infrastructure photographs migrated from the official SJR College of Law website. Click any photograph to inspect full-size."
          />
          <PhotoGalleryGrid photos={INFRASTRUCTURE_PHOTOS} showFilters />
        </div>
      </section>
    </>
  );
}
