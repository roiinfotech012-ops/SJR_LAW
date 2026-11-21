import { DOCUMENTS } from "@/content/documents";
import { PageHero } from "@/components/shared/PageHero";
import { DocumentLibraryClient } from "@/components/documents/DocumentLibraryClient";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Documents & Downloads Library",
  description:
    "View and download official Karnataka State Law University (KSLU) LL.B. and B.A. LL.B. revised syllabus PDFs for SJR College of Law, Bengaluru.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Documents & Downloads"
        subtitle="Official Karnataka State Law University (KSLU) academic syllabus documents"
        breadcrumbs={[{ label: "Downloads" }]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-5xl mx-auto">
          <DocumentLibraryClient documents={DOCUMENTS} />
        </div>
      </section>
    </>
  );
}
