import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CourseSearch } from "@/components/sections/course-search";
import { CourseCategories } from "@/components/sections/course-categories";
import { QuickEnquiry } from "@/components/sections/quick-enquiry";
import { FeaturedCourses } from "@/components/sections/featured-courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "International Course and General Safety Courses offered by Arbrit Safety Training & Consultancy.",
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
      <CourseCategories showDescriptions />
      <QuickEnquiry />
      <FeaturedCourses />
    </>
  );
}
