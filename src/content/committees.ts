import type { StudentCell } from "@/types/content";

export const STUDENT_CELLS: StudentCell[] = [
  {
    slug: "committees",
    title: "Institutional Committees",
    shortTitle: "Committees",
    summary:
      "Academic, co-curricular, and statutory student welfare committees functioning at SJR College of Law.",
    description: [
      "SJR College of Law maintains multiple institutional committees and student cells to support academic quality, co-curricular engagement, legal aid, and student welfare as required by Karnataka State Law University (KSLU), the Bar Council of India (BCI), and UGC guidelines.",
      "Note on Source Audit: The legacy committee page (committe-form.php) returned an empty 0-byte response without published committee rosters. Official committee member names and contact rosters for the current academic year will be published here once supplied by the college administration.",
    ],
    sourceStatus: "source-empty-gap",
    sourceUrl: "https://www.sjrlawcollege.in/committe-form.php",
  },
  {
    slug: "scholarships",
    title: "Scholarship & Grievances Cell (NSP & SSP)",
    shortTitle: "Scholarships (NSP / SSP)",
    summary:
      "Official Central and Karnataka State Government scholarship portals linked from SJR College of Law for eligible law students.",
    description: [
      "Eligible students of Sri Jagadguru Renukacharya College of Law can apply for Central and State post-matric scholarships through the official Government of India National Scholarship Portal (NSP) and the Government of Karnataka State Scholarship Portal (SSP).",
      "For verification of institutional bonafide forms, scholarship grievances, or fee-reimbursement documentation, students should contact the College Administrative Office at #9, Race Course Road, Bengaluru.",
    ],
    externalPortals: [
      {
        label: "National Scholarship Portal (NSP)",
        url: "https://scholarships.gov.in/",
        description:
          "Official Government of India portal for central sector and post-matric scholarships.",
      },
      {
        label: "State Scholarship Portal (SSP Karnataka)",
        url: "https://ssp.postmatric.karnataka.gov.in/",
        description:
          "Official Government of Karnataka Post-Matric Scholarship portal for eligible state students.",
      },
    ],
    sourceStatus: "migrated",
    sourceUrl: "https://www.sjrlawcollege.in/",
  },
  {
    slug: "grievance-redressal",
    title: "Prevention of Caste-Based Discrimination & Grievance Redressal",
    shortTitle: "Grievance Redressal",
    summary:
      "Lodge complaints with the Prevention of Caste-Based Discrimination Committee, Girl Students Grievance Redressal Cell, and SC/ST Grievance Redressal Cell.",
    description: [
      "Sri Jagadguru Renukacharya College of Law is committed to an inclusive, respectful, and discrimination-free academic environment. This section migrates the legacy Prevention of Caste-Based Discrimination Committee complaint portal and consolidates the Girl Students Grievance Redressal Cell and SC/ST Grievance Redressal Cell listed in the Student Corner.",
      "Students may submit a confidential grievance using the form below or approach the Principal's Office directly. Official committee member lists for the current academic year are pending publication from the college administration.",
    ],
    hasComplaintForm: true,
    sourceStatus: "migrated",
    sourceUrl: "https://www.sjrlawcollege.in/discrimination-committe.php",
  },
  {
    slug: "legal-aid",
    title: "Legal Aid Cell",
    shortTitle: "Legal Aid Cell",
    summary:
      "Community legal awareness, legal aid camps, and practical clinical legal education initiatives.",
    description: [
      "As highlighted in SJR College of Law's teaching methodology, the college conducts legal aid camps and practical legal awareness activities to connect classroom legal theory with real-world community service.",
      "Note on Source Audit: The legacy navigation listed Legal Aid Cell without a linked detail page. Detailed current-year coordinator details and camp schedules are pending institutional verification.",
    ],
    sourceStatus: "source-empty-gap",
    sourceUrl: "https://www.sjrlawcollege.in/",
  },
  {
    slug: "anti-ragging",
    title: "Anti-Ragging Cell",
    shortTitle: "Anti-Ragging Cell",
    summary:
      "Zero-tolerance commitment against ragging in accordance with UGC Regulations and Bar Council of India norms.",
    description: [
      "SJR College of Law enforces a strict zero-tolerance policy against ragging in any form on or off campus in compliance with UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions.",
      "Students experiencing or witnessing any incident may immediately contact the Principal's Office (+91 91080 26311 / +91 91080 26325) or email sjrcl.principal@gmail.com. Official current-year Anti-Ragging Committee member names are pending institutional verification.",
    ],
    sourceStatus: "source-empty-gap",
    sourceUrl: "https://www.sjrlawcollege.in/",
  },
  {
    slug: "human-rights",
    title: "Human Rights Cell",
    shortTitle: "Human Rights Cell",
    summary:
      "Promoting constitutional values, human rights awareness, seminars, and student discourse.",
    description: [
      "The Human Rights Cell at SJR College of Law encourages awareness of constitutional rights, legal protections, and human dignity through student seminars and lectures (such as the college's archived Seminar on Human Rights).",
      "Note on Source Audit: The legacy navigation listed Human Rights Cell without a linked detail page. Current faculty coordinator and student member rosters are pending institutional verification.",
    ],
    sourceStatus: "source-empty-gap",
    sourceUrl: "https://www.sjrlawcollege.in/",
  },
  {
    slug: "mediation-centre",
    title: "Mediation Centre",
    shortTitle: "Mediation Centre",
    summary:
      "Training students in Alternative Dispute Resolution (ADR), negotiation, conciliation, and mediation.",
    description: [
      "The Mediation Centre supports practical exposure to Alternative Dispute Resolution (ADR) mechanisms, helping aspiring advocates build negotiation, conciliation, and collaborative problem-solving skills.",
      "Note on Source Audit: The legacy navigation listed Mediation Center without a linked detail page. Current coordinator details and mediation schedules are pending institutional verification.",
    ],
    sourceStatus: "source-empty-gap",
    sourceUrl: "https://www.sjrlawcollege.in/",
  },
];
