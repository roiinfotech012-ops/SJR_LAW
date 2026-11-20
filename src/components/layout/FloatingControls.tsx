"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronUp, GraduationCap } from "lucide-react";

export function FloatingControls() {
  const pathname = usePathname();
  const [showApplyButton, setShowApplyButton] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const heroThreshold = pathname === "/" ? 620 : 240;
    const onScroll = () => {
      const y = window.scrollY;
      setShowApplyButton(y > heroThreshold);
      setShowScrollTop(y > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      {/* Bottom-Left Floating Orange Apply for Admission Button (appears after scrolling past hero) */}
      <Link
        href="/admissions"
        aria-hidden={!showApplyButton}
        tabIndex={showApplyButton ? 0 : -1}
        className={`fixed bottom-6 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 shadow-[0_6px_18px_rgba(0,0,0,0.22)] border-2 border-white/85 transition-all duration-300 hover:scale-105 whitespace-nowrap ${
          showApplyButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
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
