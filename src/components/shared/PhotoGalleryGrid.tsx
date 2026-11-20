"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { InfrastructurePhoto } from "@/types/content";

interface PhotoGalleryGridProps {
  photos: InfrastructurePhoto[];
  showFilters?: boolean;
}

export function PhotoGalleryGrid({
  photos,
  showFilters = false,
}: PhotoGalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(photos.map((p) => p.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + filtered.length) % filtered.length
        );
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length]);

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#177249] text-white shadow-sm"
                  : "bg-white text-[#5C4238] border border-[#DDD3C6] hover:border-[#177249] hover:text-[#177249]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EBE6E0] shadow-sm hover:shadow-xl transition-all cursor-pointer text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-[#177249]/0 group-hover:bg-[#177249]/35 transition-colors flex items-center justify-center">
              <ZoomIn className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
            </div>
          </button>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Campus photograph viewer"
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filtered.length) % filtered.length
              );
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 h-11 w-11 rounded-full bg-[#177249] hover:bg-[#115838] text-white flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[82vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain rounded-lg"
            />
            <p className="absolute -bottom-9 left-0 right-0 text-center text-xs sm:text-sm text-white/85">
              {filtered[lightboxIndex].alt} ({lightboxIndex + 1} / {filtered.length})
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filtered.length);
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 h-11 w-11 rounded-full bg-[#177249] hover:bg-[#115838] text-white flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
