import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * Inner-page hero matching the exact reference PageHero:
 * 1. Warm cream (#F7D8A4) breadcrumb strip with #0B1A4C text
 * 2. Full-width #177249 green banner with centered white bold H1 and short white underline
 */
export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section aria-label={title}>
      {/* Warm Cream Breadcrumb Bar */}
      <div className="bg-[#F7D8A4] py-2 border-b border-[#e8c68d]">
        <div className="site-container">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-medium text-[#0B1A4C]/85">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#177249] transition-colors"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={crumb.label} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  {crumb.href && idx < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#177249] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-[#0B1A4C]" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Indian Green Title Banner */}
      <div className="relative bg-[#177249] text-white py-12 sm:py-14 lg:py-16 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 footer-dot-pattern opacity-[0.06]"
          aria-hidden="true"
        />
        <div className="relative site-container text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {title}
          </h1>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-white/85" />
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
