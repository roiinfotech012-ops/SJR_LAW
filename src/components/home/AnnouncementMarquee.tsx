import Link from "next/link";
import { ANNOUNCEMENT_MARQUEE } from "@/content/news";

export function AnnouncementMarquee() {
  const repeated = [...ANNOUNCEMENT_MARQUEE, ...ANNOUNCEMENT_MARQUEE];

  return (
    <div
      aria-label="Institutional Announcements"
      className="bg-[#177249] text-white border-t border-white/15 overflow-hidden py-2.5"
    >
      <div className="animate-sjr-marquee items-center gap-8 text-xs sm:text-sm font-medium whitespace-nowrap">
        {repeated.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-8">
            <Link
              href="/announcements"
              className="hover:text-[#FFD900] transition-colors"
            >
              {item}
            </Link>
            <span
              className="text-[#FF6333] tracking-widest text-xs select-none"
              aria-hidden="true"
            >
              ★★★
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
