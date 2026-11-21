import type { NavItem } from "@/types/content";

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about/college",
    children: [
      { label: "About SJR College of Law", href: "/about/college" },
      { label: "SJR Education Society", href: "/about/sjr-education-society" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Chief Patron's Message", href: "/about/chief-patrons-message" },
      { label: "President's Message", href: "/about/presidents-message" },
      { label: "Secretary's Message", href: "/about/secretarys-message" },
      { label: "Principal's Message", href: "/about/principals-message" },
      { label: "Governing Council & Management", href: "/about/governing-council" },
      { label: "Teaching Staff", href: "/staff/teaching" },
      { label: "Non-Teaching Staff", href: "/staff/non-teaching" },
      { label: "Our Institutes", href: "/about/our-institutes" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "LL.B. (3 Years)", href: "/academics/llb" },
      { label: "B.A. LL.B. (5 Years)", href: "/academics/ba-llb" },
      { label: "Additional Courses", href: "/academics/additional-courses" },
      { label: "Admission Procedure", href: "/admissions" },
    ],
  },
  {
    label: "Syllabus",
    href: "/academics/syllabus/ba-llb",
    children: [
      { label: "BA LLB Syllabus", href: "/academics/syllabus/ba-llb" },
      { label: "LLB Syllabus", href: "/academics/syllabus/llb" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life/moot-court",
    children: [
      { label: "Moot Court & Advocacy", href: "/campus-life/moot-court" },
      { label: "Legal Aid & Outreach", href: "/student-corner/legal-aid" },
      { label: "Alumni Network", href: "/alumni" },
      { label: "Student Testimonials", href: "/testimonials" },
      { label: "Campus Photo Gallery", href: "/infrastructure#gallery" },
    ],
  },
  {
    label: "Facilities",
    href: "/infrastructure",
    children: [
      { label: "All Campus Facilities", href: "/infrastructure" },
      { label: "Moot Court Hall", href: "/infrastructure#moot-court" },
      { label: "Law & Digital Library", href: "/infrastructure#law-library" },
      { label: "Soundproof Auditorium", href: "/infrastructure#auditorium" },
      { label: "Classrooms & Sports", href: "/infrastructure#classrooms" },
    ],
  },
  {
    label: "Student Corner",
    href: "/student-corner",
    children: [
      { label: "Committees", href: "/student-corner/committees" },
      {
        label: "Scholarship Grievances Cell (NSP / SSP Links)",
        href: "/student-corner/scholarships",
        children: [
          {
            label: "NSP Link",
            href: "https://scholarships.gov.in/",
            external: true,
          },
          {
            label: "SSP Link",
            href: "https://ssp.postmatric.karnataka.gov.in/",
            external: true,
          },
        ],
      },
      { label: "Legal Aid Cell", href: "/student-corner/legal-aid" },
      { label: "Anti Ragging Cell", href: "/student-corner/anti-ragging" },
      {
        label: "Girl Students Grievance Redressal Cell",
        href: "/student-corner/girl-students-grievance",
        children: [
          {
            label: "SC/ST Grievance Redressal Cell",
            href: "/student-corner/sc-st-grievance",
          },
          {
            label: "Prevention of Caste Based Discrimination Committee",
            href: "/student-corner/grievance-redressal",
          },
          { label: "Human Rights Cell", href: "/student-corner/human-rights" },
          { label: "Mediation Center", href: "/student-corner/mediation-centre" },
        ],
      },
    ],
  },
  {
    label: "IQAC & Disclosures",
    href: "/disclosures",
    children: [
      { label: "Approvals & Mandatory Disclosures", href: "/disclosures" },
      { label: "BCI & KSLU Affiliation", href: "/disclosures#approvals" },
      { label: "Course-Wise Approvals", href: "/disclosures#courses" },
      { label: "Statutory Committees", href: "/student-corner/committees" },
      { label: "Official Syllabus PDFs", href: "/downloads" },
    ],
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News & Alumni Honours", href: "/news" },
      { label: "Events Archive", href: "/events" },
      { label: "Announcements & Notices", href: "/announcements" },
    ],
  },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About SJR College of Law", href: "/about/college" },
  { label: "SJR Education Society", href: "/about/sjr-education-society" },
  { label: "Principal's Message", href: "/about/principals-message" },
  { label: "Teaching Faculty", href: "/staff/teaching" },
  { label: "Campus Facilities", href: "/infrastructure" },
  { label: "IQAC & Disclosures", href: "/disclosures" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_ACADEMIC_LINKS: NavItem[] = [
  { label: "LL.B. (3 Years)", href: "/academics/llb" },
  { label: "B.A. LL.B. (5 Years)", href: "/academics/ba-llb" },
  { label: "Additional Courses", href: "/academics/additional-courses" },
  { label: "Admission Procedure", href: "/admissions" },
  { label: "B.A. LL.B. Syllabus", href: "/academics/syllabus/ba-llb" },
  { label: "LL.B. Syllabus", href: "/academics/syllabus/llb" },
  { label: "Downloads & Documents", href: "/downloads" },
];

export const FOOTER_STUDENT_LINKS: NavItem[] = [
  { label: "Moot Court & Advocacy", href: "/campus-life/moot-court" },
  { label: "Student Corner", href: "/student-corner" },
  { label: "Scholarships (NSP & SSP)", href: "/student-corner/scholarships" },
  { label: "Grievance Redressal", href: "/student-corner/grievance-redressal" },
  { label: "Alumni Network", href: "/alumni" },
  { label: "News & Events", href: "/news" },
];
