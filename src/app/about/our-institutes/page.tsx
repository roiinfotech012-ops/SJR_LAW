import { Building2, MapPin, Phone } from "lucide-react";
import { SISTER_INSTITUTES } from "@/content/college";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Our Institutes — SJR Education Society",
  description:
    "Directory of educational institutions managed by Sri Jagadguru Renukacharya Education Society across Bengaluru.",
  path: "/about/our-institutes",
});

export default function OurInstitutesPage() {
  return (
    <>
      <PageHero
        title="Our Institutes"
        subtitle="Educational institutions managed by Sri Jagadguru Renukacharya Education Society across Bengaluru"
        breadcrumbs={[
          { label: "About Us", href: "/about/college" },
          { label: "Our Institutes" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SISTER_INSTITUTES.map((inst) => (
              <article
                key={inst.name}
                className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-[#177249] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#177249]/10 text-[#177249] flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#0B1A4C]">
                      {inst.name}
                    </h2>
                    <p className="mt-2 flex items-start gap-2 text-sm text-[#5C4238]">
                      <MapPin
                        className="h-4 w-4 text-[#177249] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{inst.address}</span>
                    </p>
                    <p className="mt-1.5 flex items-start gap-2 text-sm text-[#5C4238]">
                      <Phone
                        className="h-4 w-4 text-[#177249] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>
                        {inst.phone}
                        {inst.telefax ? ` • Telefax: ${inst.telefax}` : ""}
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
