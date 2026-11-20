import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="The requested page could not be found on SJR College of Law."
        breadcrumbs={[{ label: "404 Not Found" }]}
      />
      <section className="py-16 bg-white">
        <div className="site-container max-w-xl mx-auto text-center space-y-5">
          <p className="text-6xl font-serif font-bold text-[#177249]">404</p>
          <p className="text-base text-[#5C4238]">
            The page you are looking for may have moved to a new route as part
            of our website redesign. Use the links below to navigate to the
            desired section.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/"
              className="bg-[#177249] hover:bg-[#115838] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/admissions"
              className="bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-6 py-2.5 rounded-md transition-colors"
            >
              Admissions
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 text-[#0B1A4C] border border-[#DDD3C6] text-sm font-semibold px-6 py-2.5 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
