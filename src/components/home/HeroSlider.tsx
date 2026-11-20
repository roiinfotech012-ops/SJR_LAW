"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ChevronLeft,
  Landmark,
  Award,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";
import { HERO_SLIDES, HERO_AT_A_GLANCE } from "@/content/college";

const iconMap = {
  landmark: Landmark,
  award: Award,
  users: Users,
  building: Building2,
};

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="SJR College of Law Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#2b1f1a]"
    >
      {/* Background Slide Images */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          aria-hidden={idx !== active}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.03]"
          />
        </div>
      ))}

      {/* Reference Dual Overlay: Warm School-Brown Horizontal + Dark Vertical */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#5C4238]/90 via-[#5C4238]/65 to-[#1f1612]/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35"
        aria-hidden="true"
      />

      {/* Content Grid */}
      <div className="relative z-10 site-container py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 7 Columns: Headline & CTAs */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#FFD900]" aria-hidden="true" />
              <span>{slide.badge}</span>
            </div>

            <p className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#FF8C00] mb-3">
              {slide.kicker}
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-bold leading-[1.06] tracking-tight drop-shadow-xl">
              <span className="block text-white">{slide.titleLine1}</span>
              <span className="block mt-1 bg-gradient-to-r from-[#FF8C00] via-[#FFD900] to-[#FF8C00] bg-clip-text text-transparent">
                {slide.titleLine2}
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href={slide.primaryCta.href}
                className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-md shadow-lg transition-colors"
              >
                <span>{slide.primaryCta.label}</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-md transition-colors"
              >
                <span>{slide.secondaryCta.label}</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right 5 Columns: Glassmorphic At-A-Glance Card (exact reference pattern) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    At a Glance
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Excellence by Numbers
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#FF8C00]/25 border border-[#FF8C00]/50 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-[#FFD900]" aria-hidden="true" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {HERO_AT_A_GLANCE.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur-sm"
                    >
                      <Icon
                        className="h-5 w-5 text-[#FF8C00] mb-2"
                        aria-hidden="true"
                      />
                      <p className="text-2xl sm:text-3xl font-bold text-white leading-none">
                        {item.value}
                      </p>
                      <p className="text-[11px] font-semibold tracking-wider text-white/85 mt-1.5 uppercase">
                        {item.label}
                      </p>
                      {item.sublabel && (
                        <p className="text-[10px] text-white/70 mt-0.5 leading-snug">
                          {item.sublabel}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls & Pill Indicators */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() =>
              setActive((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
            }
            aria-label="Previous slide"
            className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === active ? "true" : undefined}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === active
                    ? "w-8 bg-[#FF8C00]"
                    : "w-3 bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActive((prev) => (prev + 1) % HERO_SLIDES.length)}
            aria-label="Next slide"
            className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
