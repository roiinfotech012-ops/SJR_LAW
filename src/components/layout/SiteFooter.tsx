import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { COLLEGE_IDENTITY } from "@/content/college";
import { CONTACT_INFO } from "@/content/contact";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_ACADEMIC_LINKS,
  FOOTER_STUDENT_LINKS,
} from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#177249] text-white">
      {/* 4px Saffron Orange Top Border Accent (exact reference detail) */}
      <div className="h-1 w-full bg-[#FF8C00]" />

      {/* Subtle White Radial Dot Grid Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 footer-dot-pattern opacity-[0.06]"
        aria-hidden="true"
      />

      <div className="relative site-container py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Institutional Brand & Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-14 w-14 rounded-lg bg-white p-1.5 shrink-0 shadow-md">
                <Image
                  src={COLLEGE_IDENTITY.logoPath}
                  alt={`${COLLEGE_IDENTITY.displayName} logo`}
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="font-bold text-base leading-tight text-white">
                  {COLLEGE_IDENTITY.displayName}
                </p>
                <p className="text-xs text-white/80 mt-0.5">
                  Race Course Road, Bengaluru
                </p>
              </div>
            </div>
            <p className="text-sm text-white/85 leading-relaxed">
              Sri Jagadguru Renukacharya College of Law was the first private
              law college established in Bengaluru (1963), affiliated to KSLU,
              Hubballi and recognised by the Bar Council of India.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {CONTACT_INFO.socialLinks.map((social) => {
                const Icon =
                  social.platform === "Facebook"
                    ? Facebook
                    : social.platform === "Twitter"
                    ? Twitter
                    : Instagram;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-9 w-9 rounded-full bg-white/15 hover:bg-[#FF8C00] flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-base font-bold text-white">Quick Links</h2>
            <div className="h-0.5 w-10 bg-[#FF8C00] mt-2 mb-4" />
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-[#FFD900] transition-colors"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#FF8C00]" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Law Programmes & Student Corner */}
          <div>
            <h2 className="text-base font-bold text-white">
              Academics &amp; Student Services
            </h2>
            <div className="h-0.5 w-10 bg-[#FF8C00] mt-2 mb-4" />
            <ul className="space-y-2">
              {FOOTER_ACADEMIC_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-[#FFD900] transition-colors"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#FF8C00]" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              {FOOTER_STUDENT_LINKS.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-[#FFD900] transition-colors"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#FF8C00]" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h2 className="text-base font-bold text-white">Contact Us</h2>
            <div className="h-0.5 w-10 bg-[#FF8C00] mt-2 mb-4" />
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#FFD900] shrink-0 mt-1" aria-hidden="true" />
                <span>{CONTACT_INFO.fullAddress}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-[#FFD900] shrink-0 mt-1" aria-hidden="true" />
                <div className="space-y-0.5">
                  <p>
                    <a
                      href={CONTACT_INFO.phones.principalAndAdmissions[0].href}
                      className="hover:text-[#FFD900] transition-colors"
                    >
                      {CONTACT_INFO.phones.principalAndAdmissions[0].display}
                    </a>
                    {" / "}
                    <a
                      href={CONTACT_INFO.phones.principalAndAdmissions[1].href}
                      className="hover:text-[#FFD900] transition-colors"
                    >
                      {CONTACT_INFO.phones.principalAndAdmissions[1].display}
                    </a>
                  </p>
                  <p>
                    Landline:{" "}
                    <a
                      href={CONTACT_INFO.phones.landline.href}
                      className="hover:text-[#FFD900] transition-colors"
                    >
                      {CONTACT_INFO.phones.landline.display}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#FFD900] shrink-0 mt-1" aria-hidden="true" />
                <div className="space-y-0.5">
                  {CONTACT_INFO.emails.map((email) => (
                    <p key={email.address}>
                      <a
                        href={email.href}
                        className="hover:text-[#FFD900] transition-colors break-all"
                      >
                        {email.address}
                      </a>
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Saffron Orange Bottom Copyright Bar (#FF8C00) */}
      <div className="bg-[#FF8C00] text-white text-xs sm:text-sm font-medium">
        <div className="site-container py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {COLLEGE_IDENTITY.officialName},
            Bengaluru. All rights reserved.
          </p>
          <p className="text-white/95">
            {COLLEGE_IDENTITY.societyName} &bull; Affiliated to KSLU, Hubballi
          </p>
        </div>
      </div>
    </footer>
  );
}
