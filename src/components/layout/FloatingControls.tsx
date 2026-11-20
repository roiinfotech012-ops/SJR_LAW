"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, GraduationCap } from "lucide-react";

export function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 360);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Bottom-Left Floating Orange Apply for Admission Button */}
      <Link
        href="/admissions"
        className="fixed bottom-6 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.22)] border-2 border-white/85 transition-all hover:scale-105 whitespace-nowrap"
      >
        <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Apply for Admission</span>
      </Link>

      {/* Floating Scroll-to-Top FAB (bottom-right) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
          className="fixed bottom-20 right-5 z-40 h-12 w-12 rounded-full bg-[#177249] hover:bg-[#115838] text-white flex items-center justify-center shadow-lg border-2 border-white/80 transition-transform hover:scale-105 cursor-pointer"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
