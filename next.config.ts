import type { NextConfig } from "next";

const allowedHosts = (process.env.ALLOWED_HOSTS ?? "localhost,127.0.0.1")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins: allowedHosts,
  experimental: {
    serverActions: {
      allowedOrigins: allowedHosts,
    },
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/best-law-colleges-in-karnataka", destination: "/about/sjr-education-society", permanent: true },
      { source: "/best-law-colleges-in-karnataka.php", destination: "/about/sjr-education-society", permanent: true },
      { source: "/sjr-edu-society", destination: "/about/college", permanent: true },
      { source: "/sjr-edu-society.php", destination: "/about/college", permanent: true },
      { source: "/sjr-educational-institutions", destination: "/about/our-institutes", permanent: true },
      { source: "/sjr-educational-institutions.php", destination: "/about/our-institutes", permanent: true },
      { source: "/principals-communique", destination: "/about/principals-message", permanent: true },
      { source: "/principals-communique.php", destination: "/about/principals-message", permanent: true },
      { source: "/faculty", destination: "/staff/teaching", permanent: true },
      { source: "/faculty.php", destination: "/staff/teaching", permanent: true },
      { source: "/sjr-law-faculty", destination: "/staff/teaching", permanent: true },
      { source: "/non-teaching-staff", destination: "/staff/non-teaching", permanent: true },
      { source: "/non-teaching-staff.php", destination: "/staff/non-teaching", permanent: true },
      { source: "/llb-course-in-bangalore", destination: "/academics/llb", permanent: true },
      { source: "/llb-course-in-bangalore.php", destination: "/academics/llb", permanent: true },
      { source: "/ba-llb-in-bangalore", destination: "/academics/ba-llb", permanent: true },
      { source: "/ba-llb-in-bangalore.php", destination: "/academics/ba-llb", permanent: true },
      { source: "/additional-courses", destination: "/academics/additional-courses", permanent: true },
      { source: "/additional-courses.php", destination: "/academics/additional-courses", permanent: true },
      { source: "/sjr-law-college-admission", destination: "/admissions", permanent: true },
      { source: "/sjr-law-college-admission.php", destination: "/admissions", permanent: true },
      { source: "/infrastructure.php", destination: "/infrastructure", permanent: true },
      { source: "/law-schools-in-bangalore", destination: "/academics/syllabus/ba-llb", permanent: true },
      { source: "/law-schools-in-bangalore.php", destination: "/academics/syllabus/ba-llb", permanent: true },
      { source: "/llb-syllabus", destination: "/academics/syllabus/llb", permanent: true },
      { source: "/llb-syllabus.php", destination: "/academics/syllabus/llb", permanent: true },
      { source: "/alumni-registration.php", destination: "/alumni", permanent: true },
      { source: "/testimonials.php", destination: "/testimonials", permanent: true },
      { source: "/committe-form.php", destination: "/student-corner/committees", permanent: true },
      { source: "/discrimination-committe.php", destination: "/student-corner/grievance-redressal", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/single-event.html", destination: "/events", permanent: true },
    ];
  },
};

export default nextConfig;
