import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Scale,
  BookOpen,
  Building2,
  Mic,
  Trophy,
  MapPin,
  Quote,
  Calendar,
  Newspaper,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import {
  ABOUT_COLLEGE,
  ABOUT_SOCIETY,
  FACILITY_HIGHLIGHTS,
  INFRASTRUCTURE_PHOTOS,
  PRINCIPALS_MESSAGE,
} from "@/content/college";
import { PROGRAMMES } from "@/content/programmes";
import { TEACHING_FACULTY } from "@/content/faculty";
import { NEWS_ITEMS } from "@/content/news";
import { EVENTS } from "@/content/events";
import { CONTACT_INFO } from "@/content/contact";
import { STUDENT_CELLS } from "@/content/committees";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AnnouncementMarquee } from "@/components/home/AnnouncementMarquee";
import { HighlightsShowcase } from "@/components/home/HighlightsShowcase";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhotoGalleryGrid } from "@/components/shared/PhotoGalleryGrid";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Sri Jagadguru Renukacharya College of Law, Bengaluru",
  description:
    "Official website of Sri Jagadguru Renukacharya College of Law (SJR College of Law), Bengaluru — established in 1963 as the first private law college in Bangalore, affiliated to KSLU, Hubballi and recognised by the Bar Council of India.",
  path: "/",
});

const facilityIconMap = {
  scale: Scale,
  book: BookOpen,
  building: Building2,
  mic: Mic,
  trophy: Trophy,
  "map-pin": MapPin,
};

export default function HomePage() {
  const featuredFaculty = TEACHING_FACULTY.slice(0, 4);
  const homeGallery = INFRASTRUCTURE_PHOTOS.slice(0, 8);

  return (
    <>
      {/* 1. Hero Slider Banner */}
      <HeroSlider />

      {/* 2. Prominent Institutional Announcements Strip */}
      <AnnouncementMarquee />

      {/* 3. Introduction to SJR College of Law */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative px-3 py-3">
              <div
                className="absolute top-0 left-0 h-28 w-28 rounded-3xl border-2 border-[#177249]/50"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 right-0 h-28 w-28 rounded-3xl border-2 border-[#FF8C00]/60"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl bg-[#EBE6E0]">
                <Image
                  src={ABOUT_COLLEGE.campusImage}
                  alt="Sri Jagadguru Renukacharya College of Law campus in Bengaluru"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-lg text-xs font-bold text-[#177249]">
                  Est. 1963 • Bengaluru
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#177249]">
                    Founded by Prof. P. Shivashankar
                  </p>
                  <p className="text-xs text-[#5C4238] mt-0.5">
                    First Private Law College in Bengaluru &bull; Affiliated to KSLU, Hubballi
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-[#177249]/10 text-[#177249] text-xs font-semibold uppercase tracking-[0.18em] px-3.5 py-1 mb-3">
                About Our College
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#5C4238] leading-tight">
                A Pioneering Legacy in{" "}
                <span className="text-[#177249]">Legal Education</span>
              </h2>

              <div className="mt-5 space-y-4 text-sm sm:text-base text-[#342419] leading-relaxed">
                <p>{ABOUT_COLLEGE.paragraphs[0]}</p>
                <blockquote className="border-l-4 border-[#177249] bg-white/80 rounded-r-xl pl-4 pr-4 py-3 text-sm text-[#5C4238] italic shadow-sm">
                  &ldquo;{ABOUT_SOCIETY.mission}&rdquo;
                </blockquote>
                <p>{ABOUT_COLLEGE.paragraphs[2]}</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-xl bg-white border border-gray-200 p-3.5 text-center shadow-sm">
                  <p className="text-xl sm:text-2xl font-bold text-[#177249]">1963</p>
                  <p className="text-[11px] font-medium text-[#5C4238] mt-0.5">
                    Year Established
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-3.5 text-center shadow-sm">
                  <p className="text-xl sm:text-2xl font-bold text-[#177249]">KSLU</p>
                  <p className="text-[11px] font-medium text-[#5C4238] mt-0.5">
                    University Affiliation
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-3.5 text-center shadow-sm">
                  <p className="text-xl sm:text-2xl font-bold text-[#177249]">BCI</p>
                  <p className="text-[11px] font-medium text-[#5C4238] mt-0.5">
                    Recognised (1999–2000)
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/about/college"
                  className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] text-white font-semibold text-sm px-6 py-3 rounded-md shadow-sm transition-colors"
                >
                  <span>Read Full College History</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/about/sjr-education-society"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] font-semibold text-sm px-5 py-3 rounded-md transition-colors"
                >
                  <span>SJR Education Society</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Institution Highlights, Key Facts & Why Choose SJR College of Law */}
      <HighlightsShowcase />

      {/* 5. Academic Programmes */}
      <section className="py-14 lg:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Academic Programmes"
            title="Law Courses"
            accent="Offered at SJRCL"
            description="Professional legal degree and diploma programmes affiliated to Karnataka State Law University (KSLU), Hubballi and recognised by the Bar Council of India (BCI)."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMMES.map((prog) => (
              <article
                key={prog.slug}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all flex flex-col"
              >
                <div className="relative h-48 bg-[#EBE6E0]">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#177249] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow">
                    {prog.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#0B1A4C]">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#177249] mt-1">
                    {prog.duration} &bull; {prog.recognition}
                  </p>
                  <p className="text-sm text-[#5C4238] mt-3 leading-relaxed flex-1">
                    {prog.summary}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      href={`/academics/${prog.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors"
                    >
                      <span>View Details</span>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Principal's Message & Institutional Leadership */}
      <section className="py-16 bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Leadership & Governance"
            title="Principal's"
            accent="Communiqué"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <div className="relative min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden shadow-2xl bg-[#EBE6E0]">
              <Image
                src={PRINCIPALS_MESSAGE.portrait}
                alt={`${PRINCIPALS_MESSAGE.name}, ${PRINCIPALS_MESSAGE.designation}, SJR College of Law`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 text-white">
                <p className="text-xl font-bold">{PRINCIPALS_MESSAGE.name}</p>
                <p className="text-xs sm:text-sm text-[#FFD900] font-medium mt-0.5">
                  {PRINCIPALS_MESSAGE.designation} &bull; {PRINCIPALS_MESSAGE.qualification}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#177249]/5 to-[#FF6333]/5 border border-[#177249]/15 p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <Quote
                  className="h-9 w-9 text-[#177249] mb-4"
                  aria-hidden="true"
                />
                <p className="font-serif text-lg sm:text-xl italic text-[#0B1A4C] leading-snug mb-5">
                  &ldquo;{PRINCIPALS_MESSAGE.motto}&rdquo;
                </p>
                <div className="space-y-3.5 text-sm sm:text-[15px] text-[#342419] leading-relaxed">
                  <p>{PRINCIPALS_MESSAGE.paragraphs[0]}</p>
                  <p>{PRINCIPALS_MESSAGE.paragraphs[1]}</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2.5">
                  <Link
                    href="/about/principals-message"
                    className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                  >
                    <span>Read Complete Message</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/about/governing-council"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-4 py-2.5 rounded-md transition-colors"
                  >
                    <span>Governance</span>
                  </Link>
                </div>
                <span className="text-[11px] text-[#8D6E62]">
                  Source archive record — verify current tenure with office
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Moot Court, Practical Legal Education & Legal Aid Showcase */}
      <section className="py-14 lg:py-16 bg-[#FCF5E8] border-y border-[#e8d9be]">
        <div className="site-container max-w-6xl mx-auto space-y-10">
          <SectionHeading
            eyebrow="Practical Legal Education & Community Engagement"
            title="Moot Court, Legal Aid"
            accent="& Student Support Cells"
            description="Beyond classroom instruction, SJR College of Law prepares students through Moot Court sessions, seminars, legal aid camps, and dedicated statutory student cells."
          />

          {/* Moot Court Featured Split Card */}
          <div className="bg-white rounded-2xl border border-[#DDD3C6] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[260px] bg-[#EBE6E0]">
              <Image
                src="/assets/infrastructure/1.jpg"
                alt="Moot Court Hall at SJR College of Law"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#177249] mb-2">
                  <Scale className="h-4 w-4" aria-hidden="true" />
                  Moot Court &amp; Advocacy Training
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1A4C]">
                  Courtroom Practice, Seminars &amp; Legal Aid Camps
                </h3>
                <p className="text-sm text-[#342419] mt-3 leading-relaxed">
                  {ABOUT_SOCIETY.teachingMethodology[0]}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/campus-life/moot-court"
                  className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                >
                  <span>Explore Moot Court &amp; Advocacy</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/student-corner/legal-aid"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-4 py-2.5 rounded-md transition-colors"
                >
                  <span>Legal Aid Cell</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Student Cells & Official Scholarship Portals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STUDENT_CELLS.slice(0, 4).map((cell) => (
              <Link
                key={cell.slug}
                href={`/student-corner/${cell.slug}`}
                className="group bg-white rounded-xl border border-[#DDD3C6] hover:border-[#177249] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-lg bg-[#177249]/10 text-[#177249] flex items-center justify-center mb-3 group-hover:bg-[#177249] group-hover:text-white transition-colors">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1A4C] group-hover:text-[#177249] transition-colors">
                    {cell.shortTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4238] mt-2 leading-relaxed line-clamp-3">
                    {cell.summary}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#177249]">
                  Explore <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a
              href="https://scholarships.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white border border-[#177249]/30 text-[#0B1A4C] hover:text-[#177249] font-semibold px-4 py-2 rounded-full shadow-sm"
            >
              <span>National Scholarship Portal (NSP)</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://ssp.postmatric.karnataka.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white border border-[#177249]/30 text-[#0B1A4C] hover:text-[#177249] font-semibold px-4 py-2 rounded-full shadow-sm"
            >
              <span>Karnataka State Scholarship Portal (SSP)</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <Link
              href="/disclosures"
              className="inline-flex items-center gap-1.5 bg-[#177249] text-white hover:bg-[#115838] font-semibold px-4 py-2 rounded-full shadow-sm transition-colors"
            >
              <span>IQAC &amp; Mandatory Disclosures</span>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Faculty Highlights */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Academic Mentors"
            title="Meet Our"
            accent="Faculty"
            description="Dedicated teaching faculty combining academic scholarship with legal domain expertise."
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFaculty.map((member) => (
              <article
                key={member.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-[#EBE6E0]">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.designation}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#0B1A4C]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#177249] uppercase tracking-wide mt-1">
                      {member.designation}
                    </p>
                  </div>
                  <p className="mt-3 pt-3 border-t border-gray-100 text-xs text-[#5C4238]">
                    {member.qualification}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/staff/teaching"
              className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-sm"
            >
              <span>View All Teaching Faculty (13)</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/staff/non-teaching"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              <span>Non-Teaching Staff (10)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Campus Facilities & Infrastructure */}
      <section className="py-14 lg:py-16 bg-gradient-to-b from-[#177249]/5 via-white to-[#177249]/5">
        <div className="site-container">
          <SectionHeading
            eyebrow="Campus & Facilities"
            title="Infrastructure"
            accent="at SJR College of Law"
            description="Real campus photographs and dedicated legal education spaces at #9, Race Course Road, Bengaluru."
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACILITY_HIGHLIGHTS.map((fac) => {
              const Icon = facilityIconMap[fac.icon];
              return (
                <article
                  key={fac.id}
                  className="bg-white rounded-lg border border-[#177249]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative h-44 bg-[#EBE6E0]">
                    <Image
                      src={fac.image}
                      alt={fac.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-[#177249] text-white flex items-center justify-center shadow-md">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-base font-bold text-[#0B1A4C]">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4238] mt-2 leading-relaxed line-clamp-3 flex-1">
                      {fac.description}
                    </p>
                    <Link
                      href={`/infrastructure#${fac.id}`}
                      className="mt-4 w-full inline-flex items-center justify-center gap-1 bg-[#177249] hover:bg-[#115838] text-white text-xs font-semibold py-2 px-3 rounded-md transition-colors"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Latest News, Student Achievements & Past Events Archive */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Campus Updates & Archives"
            title="News, Achievements"
            accent="& Past Events Archive"
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-5">
                <h3 className="inline-flex items-center gap-2 text-xl font-bold text-[#0B1A4C]">
                  <Newspaper className="h-5 w-5 text-[#177249]" aria-hidden="true" />
                  <span>News &amp; Alumni Highlights</span>
                </h3>
                <Link
                  href="/news"
                  className="text-xs font-semibold text-[#177249] hover:underline"
                >
                  View All &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NEWS_ITEMS.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-xl border border-[#177249]/15 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="inline-block rounded-full border border-[#177249]/30 bg-[#177249]/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#177249]">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-[#8D6E62]">
                          {item.date}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0B1A4C] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#5C4238] mt-2 leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="inline-flex items-center gap-2 text-xl font-bold text-[#0B1A4C]">
                  <Calendar className="h-5 w-5 text-[#177249]" aria-hidden="true" />
                  <span>Past Events Archive</span>
                </h3>
                <Link
                  href="/events"
                  className="text-xs font-semibold text-[#177249] hover:underline"
                >
                  All Events &rarr;
                </Link>
              </div>

              <div className="rounded-2xl border border-[#DDD3C6] bg-slate-50/80 p-5 space-y-4">
                <p className="text-xs text-[#5C4238] bg-[#FCF5E8] border border-amber-200 rounded-lg px-3 py-2">
                  <strong>Archive Notice:</strong> No upcoming events are
                  currently published on the source portal. Historical events
                  from the college archive are preserved below.
                </p>

                {EVENTS.map((ev) => (
                  <article
                    key={ev.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex gap-3.5 p-3"
                  >
                    <div className="relative h-20 w-24 rounded-lg overflow-hidden shrink-0 bg-[#EBE6E0]">
                      <Image
                        src={ev.image}
                        alt={ev.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        Archived &bull; {ev.date}
                      </span>
                      <h4 className="text-sm font-bold text-[#0B1A4C] mt-1 leading-snug">
                        {ev.title}
                      </h4>
                      <p className="text-xs text-[#8D6E62] mt-1">
                        {ev.timings}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Photo Gallery Preview */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="site-container">
          <SectionHeading
            eyebrow="Campus Gallery"
            title="Inside"
            accent="SJR College of Law"
          />
          <div className="max-w-7xl mx-auto">
            <PhotoGalleryGrid photos={homeGallery} />
            <div className="text-center mt-8">
              <Link
                href="/infrastructure#gallery"
                className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-sm"
              >
                <span>View All 20 Campus Photographs</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Student & Alumni Testimonials */}
      <section className="py-14 lg:py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <div className="site-container">
          <SectionHeading
            eyebrow="Student & Alumni Voices"
            title="Testimonials"
            accent="from Our Graduates"
            description="Authentic reflections from SJR College of Law students and alumni serving in the Judiciary and legal profession."
          />

          <TestimonialsCarousel />

          <div className="text-center mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1.5 bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              <span>Read All Testimonials</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/alumni"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              <span>Alumni Registration</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Admission Enquiry & Google Maps Location */}
      <section className="py-14 lg:py-16 bg-white border-t border-slate-100">
        <div className="site-container">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Admission Enquiry"
            accent="& Campus Location"
            description="Have a question about 3-Year LL.B., 5-Year B.A. LL.B., or Admissions? Send us a message or visit our campus at Race Course Road, Bengaluru."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <EnquiryForm />

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="h-9 w-9 rounded-lg bg-[#177249]/10 text-[#177249] flex items-center justify-center mb-2.5">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1A4C]">Visit Campus</h3>
                  <p className="text-xs text-[#5C4238] mt-1 leading-relaxed">
                    {CONTACT_INFO.fullAddress}
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="h-9 w-9 rounded-lg bg-[#177249]/10 text-[#177249] flex items-center justify-center mb-2.5">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1A4C]">Call Admissions</h3>
                  <p className="text-xs text-[#5C4238] mt-1 leading-relaxed">
                    <a href={CONTACT_INFO.phones.principalAndAdmissions[0].href} className="hover:text-[#177249]">
                      {CONTACT_INFO.phones.principalAndAdmissions[0].display}
                    </a>
                    <br />
                    <a href={CONTACT_INFO.phones.principalAndAdmissions[1].href} className="hover:text-[#177249]">
                      {CONTACT_INFO.phones.principalAndAdmissions[1].display}
                    </a>
                    <br />
                    Landline: {CONTACT_INFO.phones.landline.display}
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="h-9 w-9 rounded-lg bg-[#177249]/10 text-[#177249] flex items-center justify-center mb-2.5">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1A4C]">Email Us</h3>
                  <p className="text-xs text-[#5C4238] mt-1 leading-relaxed break-all">
                    <a href={CONTACT_INFO.emails[0].href} className="hover:text-[#177249]">
                      {CONTACT_INFO.emails[0].address}
                    </a>
                    <br />
                    <a href={CONTACT_INFO.emails[1].href} className="hover:text-[#177249]">
                      {CONTACT_INFO.emails[1].address}
                    </a>
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="h-9 w-9 rounded-lg bg-[#177249]/10 text-[#177249] flex items-center justify-center mb-2.5">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1A4C]">
                    Directions &amp; Proximity
                  </h3>
                  <p className="text-xs text-[#5C4238] mt-1 leading-relaxed">
                    Near Anand Rao Circle, close to the High Court of Karnataka
                    &amp; Vidhana Soudha.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <iframe
                  title="Sri Jagadguru Renukacharya College of Law Location Map"
                  src={CONTACT_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
