"use client";

import { useState } from "react";
import { Search, FileText, Download, ExternalLink } from "lucide-react";
import type { DocumentItem } from "@/types/content";

export function DocumentLibraryClient({
  documents,
}: {
  documents: DocumentItem[];
}) {
  const [query, setQuery] = useState("");

  const filtered = documents.filter((d) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      d.title.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <div className="relative max-w-xl">
        <Search
          className="h-4 w-4 text-[#8D6E62] absolute left-3.5 top-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <label htmlFor="doc-search" className="sr-only">
          Search documents
        </label>
        <input
          id="doc-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search syllabus or documents..."
          className="w-full rounded-lg border border-[#DDD3C6] bg-white pl-10 pr-4 py-2.5 text-sm text-[#342419] focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-sm text-[#5C4238]">
          No documents matched &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((doc) => (
            <article
              key={doc.id}
              className="bg-white rounded-2xl border border-gray-200 border-l-4 border-l-[#177249] p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#177249]/10 text-[#177249] flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="rounded-full bg-[#177249]/10 text-[#177249] text-xs font-semibold px-2.5 py-0.5">
                      {doc.category}
                    </span>
                    <span className="text-xs font-semibold text-[#5C4238]">
                      {doc.fileType} &bull; {doc.fileSize}
                    </span>
                    <span className="text-xs text-[#8D6E62]">
                      &bull; Source Date: {doc.lastKnownDate}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0B1A4C]">
                    {doc.title}
                  </h2>
                  <p className="text-sm text-[#5C4238] mt-1 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap md:flex-col gap-2 shrink-0">
                <a
                  href={doc.localPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span>View PDF</span>
                </a>
                <a
                  href={doc.localPath}
                  download
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-xs sm:text-sm font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download</span>
                </a>
                <a
                  href={doc.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#177249] hover:underline py-1"
                >
                  <span>{doc.externalLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
