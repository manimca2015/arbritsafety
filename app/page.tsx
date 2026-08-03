import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { AboutUs } from "@/components/sections/about-us";
import { AccreditationCarousel } from "@/components/sections/accreditation-carousel";
import { CourseCategories } from "@/components/sections/course-categories";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Certifications } from "@/components/sections/certifications";
import { CorporateTraining } from "@/components/sections/corporate-training";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestBlogs } from "@/components/sections/latest-blogs";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { HseOfficersCta } from "@/components/sections/hse-officers-cta";
import { contactInfo, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Accredited health & safety training in Dubai, Abu Dhabi and KSA. Arbrit Safety Training & Consultancy is the first LEEA Licensed Training Partner in the region.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Arbrit Safety Training & Consultancy LLC",
  description:
    "Accredited health & safety, lifting, scaffolding and fire safety training in Dubai, Abu Dhabi and KSA.",
  areaServed: ["Dubai", "Abu Dhabi", "Saudi Arabia"],
  email: contactInfo.email,
  telephone: contactInfo.phones[0].number,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactInfo.address,
    addressCountry: "AE",
  },
  sameAs: socialLinks.map((link) => link.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedBy />
      <AboutUs />
      <AccreditationCarousel />
      <CourseCategories />
      <FeaturedCourses />
      <WhyChooseUs />
      <Certifications />
      <CorporateTraining />
      <Testimonials />
      <LatestBlogs />
      <Faq />
      <Contact />
      <HseOfficersCta />
    </>
  );
}
