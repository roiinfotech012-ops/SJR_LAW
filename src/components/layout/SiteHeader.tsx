"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
  FileText,
  GraduationCap,
} from "lucide-react";
import { COLLEGE_IDENTITY } from "@/content/college";
import { CONTACT_INFO } from "@/content/contact";
import { MAIN_NAVIGATION } from "@/content/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* 1. Top Saffron Utility Bar (#FF8C00) */}
      <div className="bg-[#FF8C00] text-white text-[11px] sm:text-xs font-medium">
        <div className="site-container flex flex-wrap items-center justify-between gap-2 py-1.5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href={CONTACT_INFO.emails[0].href}
              className="inline-flex items-center gap-1.5 hover:text-[#FFD900] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.emails[0].address}</span>
            </a>
            <span className="hidden sm:inline opacity-60" aria-hidden="true">
              |
            </span>
            <a
              href={CONTACT_INFO.phones.principalAndAdmissions[0].href}
              className="hidden sm:inline-flex items-center gap-1 hover:text-[#FFD900] transition-colors"
            >
              <Phone className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.phones.principalAndAdmissions[0].display}</span>
            </a>
            <span className="hidden md:inline opacity-60" aria-hidden="true">
              |
            </span>
            <a
              href={CONTACT_INFO.phones.landline.href}
              className="hidden md:inline-flex items-center gap-1 hover:text-[#FFD900] transition-colors"
            >
              <Phone className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.phones.landline.display}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-1 hover:text-[#FFD900] transition-colors"
            >
              <GraduationCap className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Admissions</span>
            </Link>
            <span className="opacity-60" aria-hidden="true">
              |
            </span>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-1 hover:text-[#FFD900] transition-colors"
            >
              <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>KSLU Syllabus</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. White Institutional Identity Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="site-container py-3 sm:py-3.5">
          {/* Desktop & Tablet Header */}
          {/* Reference 5-part layout: Left Emblem | English block | Centre Crest | Kannada block | Right Emblem */}
          <div className="hidden md:grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-3 lg:gap-6">
            {/* Far Left: SJRES Spiritual Emblem */}
            <div className="relative h-[58px] w-[58px] lg:h-[68px] lg:w-[68px] shrink-0">
              <Image
                src={COLLEGE_IDENTITY.leftEmblemPath}
                alt="Sri Jagadguru Renukacharya emblem"
                fill
                sizes="68px"
                className="object-contain"
                priority
              />
            </div>

            {/* Left: English identity (centred text, continuous subtitle) */}
            <Link
              href="/"
              className="text-center group focus-visible:rounded-lg"
            >
              <p className="text-base lg:text-lg font-bold text-[#0B1A4C] leading-tight group-hover:text-[#177249] transition-colors">
                {COLLEGE_IDENTITY.officialName}
              </p>
              <p className="text-[11px] lg:text-xs font-medium text-[#7A1F1F] mt-1 leading-snug">
                {COLLEGE_IDENTITY.subtitle} | {COLLEGE_IDENTITY.recognition} | Est.{" "}
                {COLLEGE_IDENTITY.establishedYear} &bull; First Private Law College in Bengaluru
              </p>
            </Link>

            {/* Centre: Official SJR Education Society Crest */}
            <Link
              href="/"
              aria-label={`${COLLEGE_IDENTITY.officialName} — Home`}
              className="relative block h-[60px] w-[60px] lg:h-[68px] lg:w-[68px] shrink-0"
            >
              <Image
                src={COLLEGE_IDENTITY.logoPath}
                alt={`${COLLEGE_IDENTITY.societyName} crest`}
                fill
                sizes="68px"
                className="object-contain"
                priority
              />
            </Link>

            {/* Right: Kannada title with matching English affiliation subtitle underneath (exact reference pattern) */}
            <Link
              href="/"
              className="text-center group focus-visible:rounded-lg"
            >
              <p
                className="text-base lg:text-lg font-bold text-[#0B1A4C] leading-tight group-hover:text-[#177249] transition-colors"
                style={{ fontFamily: "var(--font-kannada)" }}
                lang="kn"
              >
                {COLLEGE_IDENTITY.kannadaName}
              </p>
              <p className="text-[11px] lg:text-xs font-medium text-[#7A1F1F] mt-1 leading-snug">
                {COLLEGE_IDENTITY.subtitle} | {COLLEGE_IDENTITY.recognition} | Est.{" "}
                {COLLEGE_IDENTITY.establishedYear} &bull; First Private Law College in Bengaluru
              </p>
            </Link>

            {/* Far Right: Sri Rambhapuri Peeta Jagadguru Emblem */}
            <div className="relative h-[58px] w-[58px] lg:h-[68px] lg:w-[68px] shrink-0">
              <Image
                src={COLLEGE_IDENTITY.rightEmblemPath}
                alt="His Holiness Jagadguru of Sri Rambhapuri Peeta emblem"
                fill
                sizes="68px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Mobile Centered Header (3 emblems row above centred title, matching reference) */}
          <div className="flex md:hidden flex-col items-center text-center">
            <Link href="/" className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src={COLLEGE_IDENTITY.leftEmblemPath}
                    alt="Sri Jagadguru Renukacharya emblem"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="relative h-14 w-14 shrink-0">
                  <Image
                    src={COLLEGE_IDENTITY.logoPath}
                    alt={`${COLLEGE_IDENTITY.officialName} crest`}
                    fill
                    sizes="56px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src={COLLEGE_IDENTITY.rightEmblemPath}
                    alt="His Holiness Jagadguru of Sri Rambhapuri Peeta emblem"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="text-sm font-bold text-[#0B1A4C] leading-snug">
                {COLLEGE_IDENTITY.officialName}
              </p>
              <p className="text-[11px] font-semibold text-[#7A1F1F] mt-0.5 leading-snug">
                {COLLEGE_IDENTITY.subtitle} &bull; {COLLEGE_IDENTITY.recognition}
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Sticky Indian Green Navigation Bar (#177249) */}
      <header ref={navRef} className="sticky top-0 z-50 w-full bg-[#177249] shadow-lg">
        <div className="site-container">
          <div className="flex items-center justify-between h-11">
            {/* Mobile Brand Label inside Nav Bar */}
            <Link
              href="/"
              className="lg:hidden text-xs font-semibold text-white/95 tracking-wide uppercase"
            >
              {COLLEGE_IDENTITY.displayName}
            </Link>

            {/* Desktop Horizontal Menu — spans full width evenly */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex w-full items-center justify-between"
            >
              {MAIN_NAVIGATION.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      item.children?.some((c) => pathname.startsWith(c.href));

                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-1.5 xl:px-2.5 py-2 text-xs xl:text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                        isActive
                          ? "text-[#FFD900] bg-white/10"
                          : "text-white hover:text-[#FFD900] hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                      className={`inline-flex items-center gap-0.5 px-1.5 xl:px-2.5 py-2 text-xs xl:text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                        isActive || isOpen
                          ? "text-[#FFD900] bg-white/10"
                          : "text-white hover:text-[#FFD900] hover:bg-white/10"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={`absolute top-full left-0 pt-1 min-w-60 z-50 transition-all duration-200 ${
                        isOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white shadow-2xl rounded-lg py-2 border border-gray-100">
                        {item.children.map((sub) => {
                          const subActive = pathname === sub.href;
                          if (sub.children && sub.children.length > 0) {
                            return (
                              <div key={sub.label} className="relative group/sub">
                                <Link
                                  href={sub.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                                    subActive
                                      ? "text-[#177249] bg-emerald-50/70 font-semibold"
                                      : "text-[#0B1A4C] hover:text-[#177249] hover:bg-gray-50"
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  <ChevronDown
                                    className="h-3.5 w-3.5 -rotate-90 shrink-0 opacity-70"
                                    aria-hidden="true"
                                  />
                                </Link>
                                <div className="hidden group-hover/sub:block absolute top-0 left-full pl-1 min-w-64 z-50">
                                  <div className="bg-white shadow-2xl rounded-lg py-2 border border-gray-100">
                                    {sub.children.map((nested) =>
                                      nested.external ? (
                                        <a
                                          key={nested.href}
                                          href={nested.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={() => setOpenDropdown(null)}
                                          className="block px-4 py-2.5 text-sm font-medium text-[#0B1A4C] hover:text-[#177249] hover:bg-gray-50 transition-colors"
                                        >
                                          {nested.label} ↗
                                        </a>
                                      ) : (
                                        <Link
                                          key={nested.href}
                                          href={nested.href}
                                          onClick={() => setOpenDropdown(null)}
                                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                            pathname === nested.href
                                              ? "text-[#177249] bg-emerald-50/70 font-semibold"
                                              : "text-[#0B1A4C] hover:text-[#177249] hover:bg-gray-50"
                                          }`}
                                        >
                                          {nested.label}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                                subActive
                                  ? "text-[#177249] bg-emerald-50/70 font-semibold"
                                  : "text-[#0B1A4C] hover:text-[#177249] hover:bg-gray-50"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden ml-auto p-2 text-white hover:text-[#FFD900] transition-colors cursor-pointer"
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-[#FFD900]" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Inline Expandable Navigation Drawer (exact reference pattern) */}
          {mobileOpen && (
            <nav
              aria-label="Mobile Navigation"
              className="lg:hidden pb-4 border-t border-white/20 pt-2 max-h-[75vh] overflow-y-auto"
            >
              <ul className="divide-y divide-white/10">
                {MAIN_NAVIGATION.map((item) => {
                  if (!item.children) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block py-3 text-sm font-medium text-white hover:text-[#FFD900]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  const expanded = mobileExpanded === item.label;
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                        aria-expanded={expanded}
                        className="w-full flex items-center justify-between py-3 text-sm font-medium text-white hover:text-[#FFD900] cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expanded ? "rotate-180 text-[#FFD900]" : ""
                          }`}
                        />
                      </button>
                      {expanded && (
                        <ul className="pl-4 pb-2 space-y-1">
                          {item.children.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-white/90 hover:text-[#FFD900]"
                              >
                                {sub.label}
                              </Link>
                              {sub.children && sub.children.length > 0 && (
                                <ul className="pl-4 pb-1 space-y-1 border-l border-white/20">
                                  {sub.children.map((nested) => (
                                    <li key={nested.href}>
                                      {nested.external ? (
                                        <a
                                          href={nested.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-1.5 text-xs text-white/80 hover:text-[#FFD900]"
                                        >
                                          {nested.label} ↗
                                        </a>
                                      ) : (
                                        <Link
                                          href={nested.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-1.5 text-xs text-white/80 hover:text-[#FFD900]"
                                        >
                                          {nested.label}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="pt-3 mt-2 border-t border-white/15">
                <Link
                  href="/admissions"
                  className="block w-full text-center bg-[#FF8C00] hover:bg-[#e07b00] text-white text-sm font-bold py-2.5 px-4 rounded-md shadow-sm transition-colors"
                >
                  Apply for Admission
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
