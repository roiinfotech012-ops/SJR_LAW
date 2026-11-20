"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/content/testimonials";

export function TestimonialsCarousel() {
  const [startIdx, setStartIdx] = useState(0);

  const visible = [
    TESTIMONIALS[startIdx % TESTIMONIALS.length],
    TESTIMONIALS[(startIdx + 1) % TESTIMONIALS.length],
  ];

  const prev = () =>
    setStartIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setStartIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 border-t-4 border-t-[#177249] shadow-md p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <Quote
                className="h-8 w-8 text-[#177249]/30 mb-3"
                aria-hidden="true"
              />
              <p className="text-sm text-[#342419] italic leading-relaxed line-clamp-5">
                &ldquo;{item.quote[0]}&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3.5">
              <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-[#177249]/35 shrink-0 bg-[#EBE6E0]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1A4C]">
                  {item.name}
                </h3>
                <p className="text-xs font-medium text-[#177249]">
                  {item.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Circular Green Prev/Next Arrows (exact reference styling) */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonials"
          className="h-10 w-10 rounded-full bg-[#177249] hover:bg-[#115838] text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-xs font-semibold text-[#5C4238]">
          {startIdx + 1} / {TESTIMONIALS.length}
        </span>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonials"
          className="h-10 w-10 rounded-full bg-[#177249] hover:bg-[#115838] text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
