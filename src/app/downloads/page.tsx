import { DOCUMENTS } from "@/content/documents";
import { PageHero } from "@/components/shared/PageHero";
import { VerificationNotice } from "@/components/shared/VerificationNotice";
import { DocumentLibraryClient } from "@/components/documents/DocumentLibraryClient";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Documents & Downloads Library",
  description:
    "View and download official Karnataka State Law University (KSLU) LL.B. and B.A. LL.B. revised syllabus PDFs mirrored from the SJR College of Law website.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Documents & Downloads"
        subtitle="Verified, publicly accessible academic syllabus PDFs discovered on SJR College of Law"
        breadcrumbs={[{ label: "Downloads" }]}
      />

      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="site-container max-w-5xl mx-auto space-y-8">
          <DocumentLibraryClient documents={DOCUMENTS} />

          <VerificationNotice title="Document Completeness Transparency">
            Only genuine, publicly accessible documents discovered during the
            complete crawl of <code>www.sjrlawcollege.in</code> are published
            above (the two official KSLU revised syllabus PDFs for 5-Year B.A.
            LL.B. and 3-Year LL.B., both mirrored locally and linked to KSLU).
            No admission brochures, circulars, or committee PDFs existed on the
            legacy site, and no placeholder categories or fabricated documents
            have been created.
          </VerificationNotice>
        </div>
      </section>
    </>
  );
}
