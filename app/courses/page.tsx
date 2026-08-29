import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CourseSearch } from "@/components/sections/course-search";
import { CoursesTrustStrip } from "@/components/sections/courses-trust-strip";
import { CourseCategories } from "@/components/sections/course-categories";
import { QuickEnquiry } from "@/components/sections/quick-enquiry";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { AdvisorPrompt } from "@/components/sections/advisor-prompt";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Accredited HSE training in Dubai, Abu Dhabi & KSA — IOSH, LEEA lifting, scaffolding (STI), rope access, fire safety, first aid and lead auditor courses.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Courses"
        eyebrow="International & General Safety Training"
        description="Explore accredited HSE courses designed to build safer, more capable workplaces."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      >
        <CourseSearch />
      </PageHeader>
      <CoursesTrustStrip />
      <CourseCategories showDescriptions />
      <QuickEnquiry />
      <FeaturedCourses showViewAll />
      <AdvisorPrompt />
    </>
  );
}
