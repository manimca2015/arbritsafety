import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredCourses } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function FeaturedCourses() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Course" title="General Safety Courses" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => {
            return (
              <div
                key={course.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#0066b2] hover:shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#0066b2] transition-colors duration-300 group-hover:text-white">
                    {course.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-[#0066b2] transition-colors duration-300 group-hover:text-white">
                    {course.title}
                  </h3>
                  <Button
                    asChild
                    variant="link"
                    className="mt-4 justify-start px-0 text-[#0066b2] transition-colors duration-300 group-hover:text-white"
                  >
                    <Link href={course.href}>
                      View Course <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}

          <Link
            href="/courses"
            className="group relative flex h-full min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-navy/10 shadow-sm transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#0066b2] transition group-hover:scale-105"
            />
            <div className="relative flex flex-col items-center gap-3 p-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-bold text-white">View All Courses</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
