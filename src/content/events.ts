import type { EventItem } from "@/types/content";

/**
 * All events discovered on https://www.sjrlawcollege.in/ are from 2018.
 * Per migration rules, they are strictly preserved as Past / Archived events
 * and NEVER presented as upcoming events.
 */
export const EVENTS: EventItem[] = [
  {
    id: "seminar-human-rights-2018",
    slug: "seminar-on-human-rights-2018",
    title: "Seminar on Human Rights and Laws",
    date: "24 March 2018",
    timings: "10:00 AM – 1:00 PM",
    isPast: true,
    excerpt:
      "Academic seminar conducted by SJR College of Law focusing on Human Rights and constitutional legal frameworks.",
    description:
      "Sri Jagadguru Renukacharya College of Law conducted a Seminar on Human Rights and Laws on 24 March 2018 (10:00 – 13:00), bringing together students and faculty to discuss human rights jurisprudence and contemporary legal protections.",
    image: "/assets/events/seminar.jpg",
    sourceUrl: "https://www.sjrlawcollege.in/",
  },
  {
    id: "techno-fest-2k18",
    slug: "sjr-college-techno-fest-2k18",
    title: "SJR College Techno Fest 2K18",
    date: "24 February 2018",
    timings: "5:00 PM – 10:00 PM",
    isPast: true,
    excerpt:
      "Inter-collegiate student festival hosted at SJR College in February 2018.",
    description:
      "SJR College hosted Techno Fest 2K18 on 24 February 2018 (17:00 – 22:00), encouraging student participation in cultural, literary, and extracurricular activities.",
    image: "/assets/events/fest.jpg",
    sourceUrl: "https://www.sjrlawcollege.in/",
  },
];
