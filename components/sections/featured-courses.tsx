import Link from "next/link";
import { ArrowRight, Clock, Signal } from "lucide-react";
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
            const Icon = course.icon;
            return (
              <div
                key={course.slug}
                className="flex flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div
                  aria-hidden="true"
                  className="flex h-32 items-center justify-center rounded-t-2xl bg-gradient-to-br from-navy to-navy-deep"
                >
                  <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                    {course.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-navy">{course.title}</h3>
                  <div className="mt-3 flex items-center gap-4 text-xs text-navy/60">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Signal className="h-3.5 w-3.5" aria-hidden="true" /> {course.level}
                    </span>
                  </div>
                  <Button asChild variant="link" className="mt-4 justify-start px-0 text-orange">
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
              className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-orange/70 transition group-hover:scale-105"
            />
            <div className="relative flex flex-col items-center gap-3 p-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-bold text-white">View All Courses</span>
            </div>
          </Link>
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-navy text-navy">
            <Link href="/courses">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
