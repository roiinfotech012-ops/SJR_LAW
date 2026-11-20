"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Landmark,
  Award,
  Users,
  Building2,
  Scale,
  BookOpen,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { ABOUT_SOCIETY } from "@/content/college";

interface AnimatedStat {
  id: string;
  target: number;
  prefix?: string;
  suffix?: string;
  formatLocale?: boolean;
  title: string;
  subtitle: string;
  icon: "landmark" | "award" | "users" | "building";
}

const STATS: AnimatedStat[] = [
  {
    id: "first-private",
    target: 1,
    suffix: "st",
    title: "Private Law College",
    subtitle: "Established in Bengaluru (1963)",
    icon: "landmark",
  },
  {
    id: "est-year",
    target: 1963,
    prefix: "Est. ",
    title: "Academic Legacy",
    subtitle: "Over 6 decades (Legacy archive: 57+ yrs)",
    icon: "award",
  },
  {
    id: "alumni",
    target: 3000,
    suffix: "+",
    formatLocale: true,
    title: "Alumni Network",
    subtitle: "Judges, Advocates & Legal Counsel",
    icon: "users",
  },
  {
    id: "institutes",
    target: 10,
    suffix: "+",
    title: "SJR Group Institutes",
    subtitle: "Under SJR Education Society",
    icon: "building",
  },
];

const statIconMap = {
  landmark: Landmark,
  award: Award,
  users: Users,
  building: Building2,
};

const pillarIcons = [Scale, GraduationCap, BookOpen, Building2, Users, MapPin];

function CountUpNumber({
  target,
  prefix = "",
  suffix = "",
  formatLocale = false,
  start,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  formatLocale?: boolean;
  start: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const duration = target > 500 ? 1300 : 900;
    const startVal = target === 1963 ? 1900 : 0;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(startVal + (target - startVal) * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, prefersReducedMotion]);

  const formatted = formatLocale ? value.toLocaleString("en-IN") : String(value);
  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function HighlightsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#FCF5E8]/80 via-white to-slate-50 border-y border-[#e8d9be]"
    >
      {/* Subtle decorative institutional accents */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#177249]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FF8C00]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative site-container max-w-6xl mx-auto">
        {/* Animated Section Heading */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#177249]/10 border border-[#177249]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#177249] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#FF8C00]" aria-hidden="true" />
            Institutional Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#5C4238] leading-tight tracking-tight">
            Six Decades of Legal Excellence{" "}
            <span className="text-[#177249]">in the Heart of Bengaluru</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#177249] via-[#FF8C00] to-[#FFD900]" />
        </motion.div>

        {/* Elevated Animated 4-Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {STATS.map((stat, idx) => {
            const Icon = statIconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                className="group relative rounded-2xl bg-white border border-[#DDD3C6]/80 shadow-[0_10px_30px_-12px_rgba(11,26,76,0.12)] hover:shadow-[0_20px_40px_-15px_rgba(23,114,73,0.22)] transition-shadow overflow-hidden p-6"
              >
                {/* Unified website color accent bar (#177249 green -> #FF8C00 saffron on hover) */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[#177249] group-hover:bg-[#FF8C00] transition-colors duration-300" />

                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#177249] group-hover:bg-[#FF8C00] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8D6E62]/70">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-3xl sm:text-[34px] font-bold text-[#0B1A4C] leading-none tracking-tight">
                  <CountUpNumber
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    formatLocale={stat.formatLocale}
                    start={inView}
                  />
                </p>

                <p className="text-sm font-bold text-[#177249] mt-2">
                  {stat.title}
                </p>
                <p className="text-xs text-[#5C4238] mt-1 leading-relaxed">
                  {stat.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose SJR College of Law — Animated 6 Pillars */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#177249]">
                Our Strengths
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1A4C] mt-0.5">
                Why Choose SJR College of Law?
              </h3>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A1F1F] bg-[#F7D8A4] px-3.5 py-1.5 rounded-full">
              Est. 1963 • Race Course Road
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ABOUT_SOCIETY.whySjrcl.map((point, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <motion.div
                  key={idx}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.07 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  className="group relative rounded-2xl border border-[#DDD3C6] bg-white p-5 shadow-sm hover:border-[#177249] hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-[#177249]/10 text-[#177249] group-hover:bg-[#177249] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-[#342419] leading-relaxed">
                      {point}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
