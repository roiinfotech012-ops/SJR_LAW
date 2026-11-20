import Image from "next/image";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";

interface LeadershipMessageViewProps {
  title: string;
  name: string;
  designation: string;
  organization?: string;
  imageUrl: string;
  paragraphs: string[];
  closing: string;
  signatureLines: string[];
}

export function LeadershipMessageView({
  title,
  name,
  designation,
  organization,
  imageUrl,
  paragraphs,
  closing,
  signatureLines,
}: LeadershipMessageViewProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={`${name} — ${designation}${organization ? `, ${organization}` : ""}`}
        breadcrumbs={[
          { label: "About Us", href: "/about/college" },
          { label: title },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Portrait Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <div className="relative aspect-[3/4] bg-[#EBE6E0]">
                  <Image
                    src={imageUrl}
                    alt={`${name}, ${designation}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="p-5 bg-[#177249] text-white text-center">
                  <h2 className="text-lg font-bold leading-snug">{name}</h2>
                  <p className="text-xs font-semibold text-[#FFD900] uppercase tracking-wider mt-1">
                    {designation}
                  </p>
                  {organization && (
                    <p className="text-xs text-white/90 mt-1">{organization}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Message Panel */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-gradient-to-br from-[#177249]/5 to-[#FF6333]/5 border border-[#177249]/15 p-7 sm:p-9">
                <Quote
                  className="h-10 w-10 text-[#177249] mb-4"
                  aria-hidden="true"
                />
                <div className="space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
                  {paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className={idx === 0 ? "font-semibold text-[#0B1A4C]" : ""}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-[#177249]/15 space-y-1">
                  <p className="text-sm text-[#5C4238]">{closing}</p>
                  <div className="pt-1 space-y-0.5">
                    {signatureLines.map((line, idx) => (
                      <p
                        key={idx}
                        className={
                          idx === 0
                            ? "font-bold text-[#0B1A4C] text-base"
                            : "text-sm font-medium text-[#177249]"
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
