import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ABOUT_COLLEGE, COLLEGE_IDENTITY } from "@/content/college";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About SJR College of Law",
  description:
    "Founded in 1963 by Prof. P. Shivashankar, Sri Jagadguru Renukacharya College of Law is the first private law college established in Bengaluru.",
  path: "/about/college",
});

export default function AboutCollegePage() {
  return (
    <>
      <PageHero
        title="About SJR College of Law"
        subtitle={`${COLLEGE_IDENTITY.subtitle} • ${COLLEGE_IDENTITY.recognition}`}
        breadcrumbs={[
          { label: "About Us", href: "/about/college" },
          { label: "About SJR College of Law" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#177249] mb-2">
                Established 1963 • First Private Law College in Bengaluru
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A4C] mb-5">
                {ABOUT_COLLEGE.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
                {ABOUT_COLLEGE.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/academics/llb"
                  className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                >
                  <span>3-Year LL.B.</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/academics/ba-llb"
                  className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                >
                  <span>5-Year B.A. LL.B.</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/about/principals-message"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                >
                  <span>Principal&apos;s Message</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#EBE6E0]">
                <Image
                  src={ABOUT_COLLEGE.campusImage}
                  alt="Sri Jagadguru Renukacharya College of Law building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#EBE6E0]">
                <Image
                  src={ABOUT_COLLEGE.secondaryImage}
                  alt="SJR College of Law campus facilities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
