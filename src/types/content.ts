export type VerificationStatus =
  | "verified"
  | "flagged"
  | "archived"
  | "pending-institutional-input";

export interface SourceMeta {
  sourceUrl: string;
  lastKnownDate?: string;
  verificationStatus: VerificationStatus;
  verificationNote?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface HighlightMetric {
  value: string;
  label: string;
  sublabel?: string;
  icon: "landmark" | "award" | "users" | "building";
  verificationNote?: string;
}

export interface Programme {
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  pattern: string;
  affiliation: string;
  recognition: string;
  badge: string;
  summary: string;
  fullDescription: string[];
  eligibility: string;
  eligibilityNote?: string;
  admissionSteps: string[];
  registrationFeeNote?: string;
  careerOpportunities: string[];
  whySjrcl: string[];
  syllabusHref?: string;
  syllabusPdfPath?: string;
  syllabusExternalUrl?: string;
  image: string;
  source: SourceMeta;
}

export interface StaffMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  category: "teaching-fulltime" | "teaching-guest" | "non-teaching";
  image: string;
  sourceUrl: string;
  featured?: boolean;
  note?: string;
}

export interface SisterInstitute {
  name: string;
  address: string;
  phone: string;
  telefax?: string;
  note?: string;
}

export interface InfrastructurePhoto {
  id: string;
  src: string;
  alt: string;
  category: "Campus" | "Academic Spaces" | "Moot Court & Auditorium" | "Library & Facilities";
}

export interface FacilityHighlight {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: "scale" | "book" | "building" | "mic" | "trophy" | "map-pin";
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: "Alumni Honour" | "Student Achievement" | "Institutional Notice";
  date: string;
  isArchive: boolean;
  excerpt: string;
  content: string;
  sourceUrl: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  timings: string;
  isPast: boolean;
  excerpt: string;
  description: string;
  image: string;
  sourceUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string[];
  image: string;
  sourceUrl: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: "Academic Syllabus" | "Institutional" | "Admissions" | "Committees";
  description: string;
  fileType: "PDF";
  fileSize: string;
  localPath: string;
  externalUrl: string;
  externalLabel: string;
  sourcePageUrl: string;
  lastKnownDate: string;
}

export interface StudentCell {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string[];
  objectives?: string[];
  activities?: { title: string; detail: string }[];
  procedure?: string[];
  hasComplaintForm?: boolean;
  externalPortals?: { label: string; url: string; description: string }[];
  sourceStatus: "migrated" | "source-empty-gap";
  sourceUrl: string;
}
