import Link from "next/link";
import { FileText, Download, ExternalLink } from "lucide-react";
import { DOCUMENTS } from "@/content/documents";
import { PageHero } from "@/components/shared/PageHero";
import { buildPageMetadata } from "@/lib/seo";

const doc = DOCUMENTS.find((d) => d.id === "kslu-llb-3yr-syllabus")!;

export const metadata = buildPageMetadata({
  title: "LL.B. Syllabus — KSLU",
  description:
    "Official Karnataka State Law University (KSLU) 3-Year LL.B. Revised Syllabus PDF for students of SJR College of Law, Bengaluru.",
  path: "/academics/syllabus/llb",
});

export default function LlbSyllabusPage() {
  return (
    <>
      <PageHero
        title="LL.B. Syllabus"
        subtitle="For 3 Years LL.B. Syllabus — Karnataka State Law University (KSLU), Hubballi"
        breadcrumbs={[
          { label: "Syllabus", href: "/academics/syllabus/llb" },
          { label: "LL.B. Syllabus" },
        ]}
      />

      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container max-w-5xl mx-auto space-y-8">
          <div className="rounded-2xl border border-gray-200 border-t-4 border-t-[#177249] bg-white p-7 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-[#177249]/10 text-[#177249] text-xs font-bold px-3 py-1 mb-2">
                {doc.fileType} &bull; {doc.fileSize}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1A4C] underline decoration-[#FF8C00] decoration-2 underline-offset-4">
                For 3 Years LL.B. Syllabus
              </h2>
              <p className="text-sm sm:text-base text-[#342419] mt-3">
                <strong>Kindly visit the following link:</strong>{" "}
                <a
                  href={doc.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#177249] hover:underline inline-flex items-center gap-1"
                >
                  <span>KSLU Academics (LL.B.)</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </p>
              <p className="text-sm text-[#5C4238] mt-2">{doc.description}</p>
            </div>
            <div className="flex flex-col gap-2.5 shrink-0">
              <a
                href={doc.localPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Open PDF
              </a>
              <a
                href={doc.localPath}
                download
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-5 py-2.5 rounded-md"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-slate-100">
            <iframe
              title="3-Year LL.B. Revised Syllabus PDF"
              src={doc.localPath}
              className="w-full h-[680px]"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/academics/llb"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0B1A4C] text-sm font-semibold px-5 py-2.5 rounded-md"
            >
              &larr; Back to 3-Year LL.B. Programme
            </Link>
            <Link
              href="/academics/syllabus/ba-llb"
              className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md"
            >
              View 5-Year B.A., LL.B. Syllabus &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
