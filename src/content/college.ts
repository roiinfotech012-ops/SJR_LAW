import type {
  HeroSlide,
  HighlightMetric,
  SisterInstitute,
  FacilityHighlight,
  InfrastructurePhoto,
} from "@/types/content";

export const COLLEGE_IDENTITY = {
  officialName: "Sri Jagadguru Renukacharya College of Law",
  kannadaName: "ಶ್ರೀ ಜಗದ್ಗುರು ರೇಣುಕಾಚಾರ್ಯ ಕಾನೂನು ಕಾಲೇಜು",
  kannadaHeaderSubtitle:
    "ಕರ್ನಾಟಕ ರಾಜ್ಯ ಕಾನೂನು ವಿಶ್ವವಿದ್ಯಾಲಯ, ಹುಬ್ಬಳ್ಳಿಗೆ ಸಂಯೋಜಿತ | ಭಾರತೀಯ ವಕೀಲರ ಪರಿಷತ್ತಿನಿಂದ ಮಾನ್ಯತೆ ಪಡೆದಿದೆ | ಸ್ಥಾಪನೆ: 1963 • ಬೆಂಗಳೂರಿನ ಮೊದಲ ಖಾಸಗಿ ಕಾನೂನು ಕಾಲೇಜು",
  displayName: "SJR College of Law",
  shortName: "SJRCL",
  establishedYear: 1963,
  societyName: "Sri Jagadguru Renukacharya Education Society",
  societyEstablishedYear: 1945,
  founder: "Prof. P. Shivashankar",
  subtitle: "Affiliated to Karnataka State Law University, Hubballi",
  recognition: "Recognised by the Bar Council of India",
  combinedAffiliation:
    "Affiliated to Karnataka State Law University (KSLU), Hubballi | Recognised by the Bar Council of India (BCI)",
  logoPath: "/assets/branding/sjre.png",
  leftEmblemPath: "/assets/branding/sjr-emblem-left.png",
  rightEmblemPath: "/assets/branding/sjr-emblem-right.png",
  faviconPath: "/assets/branding/favicon.png",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sjrlawcollege.in",
  legacyMetaDescription:
    "Sri Jagadguru Renukacharya College of Law (SJR College of Law), Bengaluru — established in 1963 as the first private law college in Bangalore, affiliated to Karnataka State Law University (KSLU), Hubballi and recognised by the Bar Council of India (BCI).",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/assets/banners/slide1.jpg",
    alt: "Sri Jagadguru Renukacharya College of Law campus and academic heritage in Bengaluru",
    badge: "ESTABLISHED 1963 • BENGALURU",
    kicker: "SRI JAGADGURU RENUKACHARYA COLLEGE OF LAW",
    titleLine1: "First Private Law",
    titleLine2: "College in Bengaluru",
    subtitle:
      "It is not wisdom but Authority that makes a law — nurturing legal stalwarts in the Judiciary, Litigation, and Corporate sectors since 1963.",
    primaryCta: { label: "Explore Our Programmes", href: "/academics/llb" },
    secondaryCta: { label: "Admission Information", href: "/admissions" },
  },
  {
    id: "slide-2",
    image: "/assets/banners/slide2.jpg",
    alt: "SJR College of Law students and legal education learning environment",
    badge: "AFFILIATED TO KSLU • RECOGNISED BY BCI",
    kicker: "ACADEMIC EXCELLENCE & PRACTICAL TRAINING",
    titleLine1: "Change Is the End Result",
    titleLine2: "of All True Learning",
    subtitle:
      "Offering 3-Year LL.B., 5-Year Integrated B.A. LL.B., and PG Diploma in Cyber Law with Moot Court practice, seminars, and legal aid camps.",
    primaryCta: { label: "About Our College", href: "/about/college" },
    secondaryCta: { label: "View KSLU Syllabuses", href: "/downloads" },
  },
  {
    id: "slide-3",
    image: "/assets/banners/slide3.jpg",
    alt: "SJR College of Law located in the heart of Bengaluru near the High Court",
    badge: "RACE COURSE ROAD • HEART OF BENGALURU",
    kicker: "LEGAL LEGACY & MODERN PEDAGOGY",
    titleLine1: "Be a Part of History",
    titleLine2: "in the Legal Field",
    subtitle:
      "Located minutes from the High Court of Karnataka and Vidhana Soudha, offering unmatched access to internships and courtroom exposure.",
    primaryCta: { label: "Contact Admissions", href: "/contact" },
    secondaryCta: { label: "Explore Infrastructure", href: "/infrastructure" },
  },
];

export const HERO_AT_A_GLANCE: HighlightMetric[] = [
  {
    value: "1st",
    label: "PRIVATE LAW COLLEGE",
    sublabel: "In Bengaluru (Est. 1963)",
    icon: "landmark",
  },
  {
    value: "Est. 1963",
    label: "LEGAL LEGACY",
    sublabel: "Over Six Decades of Excellence",
    icon: "award",
  },
  {
    value: "3000+",
    label: "ALUMNI NETWORK",
    sublabel: "Judiciary, Bar & Corporate",
    icon: "users",
  },
  {
    value: "10+",
    label: "SJR GROUP INSTITUTES",
    sublabel: "Under SJR Education Society",
    icon: "building",
  },
];

export const ABOUT_COLLEGE = {
  heading: "Sri Jagadguru Renukacharya College of Law",
  shortIntro:
    "Sri Jagadguru Renukacharya College of Law (SJR College of Law) was the first ever private law college established in Bangalore. It was established under the aegis of the Mysore University in the year 1963. It was founded by the eminent legal educationalist Prof. P. Shivashankar.",
  paragraphs: [
    "Sri Jagadguru Renukacharya College of Law (SJR College of Law) was the first ever private law college established in Bangalore. It was established under the aegis of the Mysore University in the year 1963. It was founded by the eminent legal educationalist Prof. P. Shivashankar. The college initially offered a 3-year LL.B. degree; however, in 1999 the college introduced the 5-year B.A. LL.B. degree. After the exclusive Law University, Karnataka State Law University (KSLU), came into existence, SJR College of Law is affiliated with it. We are also recognised by the Bar Council of India, in the academic year 1999–2000.",
    "This institution, established in 1963, has a history of producing some of the stalwarts in the Judicial, Litigation, and Corporate sectors. The institution, however, does not rest on the laurels of the past. The new is not only encouraged but embraced. Classrooms here are equipped with all modern facilities, and the faculty applies modern and innovative methodologies to teach the students.",
    "Apart from the facilities that are inherent to the college, the location also plays a key role. The college is in the heart of the city. It is close to the High Court, the Legislative Assembly, and is the transport hub of Bengaluru. This makes it convenient for students to apply for internship positions which the college encourages students to undertake.",
  ],
  campusImage: "/assets/campus/about-sjrcl.jpg",
  secondaryImage: "/assets/infrastructure/6.jpg",
  sourceUrl: "https://www.sjrlawcollege.in/sjr-edu-society.php",
};

export const ABOUT_SOCIETY = {
  heading: "About SJR Education Society",
  paragraphs: [
    "Jagadguru Renukacharya Educational Institutions was established in the year 1945 under the name of Veerashaiva Education Society. Initially the institution was affiliated to the University of Mysore, which was the first university in the erstwhile State of Mysore. The University of Mysore was one of the universities that permitted private managements to commence colleges in under-graduate studies.",
    "Veerashaiva Education Society was one of the first to commence an intermediate college in the private sector. This was possible because of the generosity of a philanthropist, a member of the Veerashaiva Education Society, Shroff B. Basappa. In recognition and acknowledgement of this unstinted generosity the new college was named Basappa Intermediate College.",
    "The next significant milestone was in 1955 when the college became a first-grade college. This was due to the gift of land, housing the present college building, belonging to His Holiness, the Jagadguru of Sri Rambhapuri Peeta. His Holiness gifted this to the society and, to honour this great and significant contribution, the Society was rechristened Sri Jagadguru Renukacharya Education Society and Basappa Intermediate College was renamed Sri Jagadguru Renukacharya College of Science, Arts and Commerce.",
    "With its humble beginning, the Society has metamorphosed into a colossal epicentre serving the cause of education for over seven glorious decades.",
    "The Society has changed and shaped the education sector in Karnataka and is an institution of historical importance that has kept pace with the changing times and needs of education. The Society has been the crucible that has contributed by producing great citizens in the form of administrators, advocates, judges, and public leaders. In keeping with its mission, the Society moulds the minds of the youth to create better citizens of India.",
  ],
  mission:
    "At SJR College of Law our mission is to provide education that will equip our students to deal with the practicalities of life. We believe in instilling in our students not only the knowledge of law but the passion for law. We also believe in aiding our students to be well-rounded individuals who contribute to society proactively.",
  whySjrcl: [
    "Sri Jagadguru Renukacharya College of Law is one of the most reputed institutions of legal education, established in 1963.",
    "Affiliated to Karnataka State Law University, Hubballi and recognised by the Bar Council of India.",
    "Experienced faculty with specialised domain knowledge and student-oriented mentorship.",
    "Excellent infrastructure facilities including Moot Court, well-stocked Law & Digital Library, soundproof Auditorium, and well-equipped Classrooms.",
    "Rich network of over 3,000 Alumni across the Judiciary, Litigation, and Corporate sectors.",
    "Prime central Bengaluru location near the High Court of Karnataka and Vidhana Soudha for convenient internships.",
  ],
  teachingMethodology: [
    "At SJR College of Law we encourage innovation in our teaching methodologies to cultivate in the students the passion for law, equip them for their futures, and make them well-rounded individuals. Apart from classroom teaching, we conduct seminars, moot courts, student presentations, assignments, and legal aid camps. At SJR College of Law we want all students to identify for themselves their strengths and passions that can dictate the choice of their careers.",
    "Our faculty is dynamic and extremely student-oriented. For them each student is important and they ensure each student is given individual attention.",
  ],
  whyChooseLaw: [
    "Frequently students are confused as to why they should choose law. Law is a growing and dynamic field with vast outreach. Unlike other professional courses, there are several diametrically different careers that students can pursue after completing their education in Law. Apart from conventional Litigation, Judiciary, and Corporate fields, legal education is required for careers in activism, politics, academics, sports law, space law, media law, and public policy.",
    "This ever-expanding field of law is rewarding not only in the financial sense but for growth, recognition, and meaningful contribution to society. If you believe that the world needs to change, pursuing a legal profession gives you the tools to make that change.",
    "At SJR College of Law we believe in helping our students achieve beyond their potential. Not only do we encourage them to dream big, we equip them to succeed in realising those dreams.",
  ],
  societyImage: "/assets/campus/sjr-edu-society.png",
  founderImage: "/assets/faculty/111.jpg",
  sourceUrl: "https://www.sjrlawcollege.in/best-law-colleges-in-karnataka.php",
};

export const PRINCIPALS_MESSAGE = {
  name: "Dr. Jayashree R Salimath",
  designation: "Principal",
  qualification: "LL.B., LL.M., Ph.D.",
  portrait: "/assets/faculty/sjrlawprincipal.jpeg",
  cardPortrait: "/assets/faculty/newprinciple.jpeg",
  heading: "Message to All Aspirants",
  motto:
    "Our aim is to instil a synergy of human values and universal knowledge, to lead a challenging and fulfilling life with Indian values and global vision.",
  paragraphs: [
    "It is my pleasure to welcome you to the SJRES community as a member of this esteemed institution, and to the new arena of the legal field. SJR College of Law was established in 1963. It is the First Private Law College in Bangalore, affiliated to Karnataka State Law University and recognised by the Bar Council of India, and covered under UGC 2(f) & 12(B). We are proud to introduce ourselves as an institution which caters to the needs of every student. We impart 3-year LL.B., 5-year B.A. LL.B., and PG Diploma courses.",
    "Today, education means much more than merely acquiring knowledge. It is about developing skills, building leadership qualities, and improving employability of young talent. In the post-liberalisation and globalisation scenario in India, change has taken place in all fields of our country. Specifically, law is rapidly becoming one of the most desirable career choices. Our college has dedicated faculty to guide students to pursue a career in Law. This institution has produced numerous legal luminaries including Supreme Court Judges, High Court Judges, successful lawyers, and political leaders.",
    "We encourage our students to participate in curricular, co-curricular, and extracurricular activities like Cultural, Literary, and Moot Court events to hone their skills. Our aim is to instil a synergy of human values and universal knowledge, to lead a challenging and fulfilling life with Indian values and global vision.",
    "Once again, I welcome you to become part of SJR College of Law and I wish you all the best for all your future endeavours.",
  ],
  sourceUrl: "https://www.sjrlawcollege.in/principals-communique.php",
};

export const SISTER_INSTITUTES: SisterInstitute[] = [
  {
    name: "SJR College of Science, Arts and Commerce",
    address: "#9, Race Course Road, Bangalore – 560 009",
    phone: "+91-80-22264952",
    telefax: "+91-80-22250545",
  },
  {
    name: "SJR College of Law",
    address: "#9, Race Course Road, Bangalore – 560 009",
    phone: "+91-80-22263468 / 080-29563468",
    telefax: "+91-80-22250545",
  },
  {
    name: "SJR Pre-University College",
    address: "#9, Race Course Road, Bangalore – 560 009",
    phone: "+91-80-22207469",
  },
  {
    name: "SJR Rajajinagar College",
    address: "#1050/A, 4th 'M' Block, Dr. Rajkumar Road, Rajajinagar, Bangalore – 560 010",
    phone: "+91-80-23102070",
  },
  {
    name: "SJR Primary and High School",
    address: "#1050/A, 4th 'M' Block, Dr. Rajkumar Road, Rajajinagar, Bangalore – 560 010",
    phone: "+91-80-23359477",
  },
  {
    name: "SJR Degree College for Women",
    address: "#1/D, 4th 'M' Block, Rajajinagar, Bangalore – 560 010",
    phone: "+91-80-23303463",
  },
  {
    name: "SJR PU College for Women",
    address: "#1/D, 4th 'M' Block, Rajajinagar, Bangalore – 560 010",
    phone: "+91-80-233011736",
  },
  {
    name: "SJR Public School",
    address: "CA Site No. 3 (P), 5th Cross, 7th Main, 1st Stage, IIIrd Block, HBR Layout, Kalyan Nagar, Bangalore – 560 043",
    phone: "+91-80-25432147",
  },
  {
    name: "SJR Primary School",
    address: "Kengeri Satellite Town, Bangalore – 560 060",
    phone: "+91-80-28486017",
  },
  {
    name: "SJR Kengeri Public School",
    address: "CA Site No. 13, 3rd Main Road, Kengeri Satellite Town, Bangalore – 560 060",
    phone: "+91-80-28484675",
  },
];

export const FACILITY_HIGHLIGHTS: FacilityHighlight[] = [
  {
    id: "moot-court",
    title: "Moot Court Hall",
    description:
      "Dedicated moot court hall for practical advocacy sessions, mock trials, and inter-collegiate moot court preparation.",
    image: "/assets/infrastructure/moot-court-hd.jpg",
    icon: "scale",
  },
  {
    id: "law-library",
    title: "Law & Digital Library",
    description:
      "Updated library housing national and international law journals, textbooks, reports, commentaries, newspapers, and internet-enabled computer systems.",
    image: "/assets/infrastructure/2.jpg",
    icon: "book",
  },
  {
    id: "auditorium",
    title: "Soundproof Auditorium",
    description:
      "Well-equipped soundproof auditorium hosting national seminars, guest lectures, legal symposiums, and cultural events.",
    image: "/assets/infrastructure/3.jpg",
    icon: "mic",
  },
  {
    id: "classrooms",
    title: "Modern Classrooms",
    description:
      "Spacious, well-equipped classrooms designed for interactive legal pedagogy, presentations, and case-study discussions.",
    image: "/assets/infrastructure/4.jpg",
    icon: "building",
  },
  {
    id: "sports",
    title: "Indoor & Outdoor Sports",
    description:
      "Sports facilities supporting student participation in KSLU inter-collegiate athletics meets and extra-curricular tournaments.",
    image: "/assets/infrastructure/5.jpg",
    icon: "trophy",
  },
  {
    id: "central-campus",
    title: "Prime Race Course Road Campus",
    description:
      "Centrally located near the High Court of Karnataka, Vidhana Soudha, and Bengaluru's major transport hub for easy internship access.",
    image: "/assets/infrastructure/6.jpg",
    icon: "map-pin",
  },
  {
    id: "seminar-spaces",
    title: "Seminar & Workshop Facilities",
    description:
      "Academic spaces supporting special lectures, legal workshops, debates, and student society activities.",
    image: "/assets/infrastructure/7.jpg",
    icon: "building",
  },
  {
    id: "student-amenities",
    title: "Campus & Student Amenities",
    description:
      "Accessible campus environment supporting student committees, legal aid initiatives, and holistic legal education.",
    image: "/assets/infrastructure/8.jpg",
    icon: "scale",
  },
];

export const INFRASTRUCTURE_PHOTOS: InfrastructurePhoto[] = Array.from(
  { length: 20 },
  (_, idx) => {
    const num = idx + 1;
    const categories: InfrastructurePhoto["category"][] = [
      "Moot Court & Auditorium",
      "Library & Facilities",
      "Academic Spaces",
      "Campus",
    ];
    return {
      id: `infra-${num}`,
      src: `/assets/infrastructure/${num}.jpg`,
      alt: `SJR College of Law campus and infrastructure photograph ${num}`,
      category: categories[idx % categories.length],
    };
  }
);
