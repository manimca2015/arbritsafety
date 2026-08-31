"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ChevronDown, Clock, MapPin } from "lucide-react";
import { featuredCourses } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { JoinCourseDialog } from "@/components/sections/join-course-dialog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const MOBILE_VISIBLE = 4;

export function FeaturedCourses({
  showViewAll = false,
}: {
  /** Shows a "View All Courses" button linking to the full course directory. */
  showViewAll?: boolean;
} = {}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Mobile: compact two-column card grid */}
        <div className="sm:hidden">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0066b2]">
                Course
              </p>
              <h2 className="font-heading text-[26px] font-bold leading-tight text-navy-deep">
                General Safety Courses
              </h2>
            </div>
            {featuredCourses.length > MOBILE_VISIBLE && !expanded && (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="flex shrink-0 items-center gap-1.5 pb-1 text-sm font-semibold text-[#0066b2]"
              >
                View More Courses
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {featuredCourses.map((course, i) => {
              if (!expanded && i >= MOBILE_VISIBLE) return null;
              const meta = [course.duration, course.certification].filter(Boolean);
              return (
                <Link
                  key={course.slug}
                  href={course.href}
                  className="overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                >
                  <span className="relative block aspect-[4/3] w-full">
                    <Image
                      src={course.image}
                      alt={`${course.title} safety training course`}
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="block px-3 py-3">
                    <span className="block font-heading text-[15px] font-bold leading-snug text-navy-deep">
                      {course.title}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-navy-deep/60">
                      {meta.join(" · ")}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <JoinCourseDialog
            courseTitle="General Safety Courses"
            trigger={
              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066b2] px-4 py-3 font-heading text-sm font-bold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                Join Course
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            }
          />
        </div>

        {/* Tablet and up: original card grid */}
        <div className="hidden sm:block">
          <SectionHeading eyebrow="Course" title="General Safety Courses" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course, i) => {
              const hiddenOnMobile = !expanded && i >= MOBILE_VISIBLE;
              return (
                <Reveal key={course.slug} delay={(i % 4) * 0.08} className="flex">
                <div
                  className={cn(
                    "group flex flex-1 flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#0066b2] hover:shadow-lg",
                    hiddenOnMobile && "hidden sm:flex"
                  )}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={course.image}
                      alt={`${course.title} safety training course`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#0066b2] transition-colors duration-300 group-hover:text-white">
                      {course.category}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-bold text-[#0066b2] transition-colors duration-300 group-hover:text-white">
                      {course.title}
                    </h3>
                    <ul className="mt-3 mb-auto space-y-1.5 border-t border-navy/10 pt-3 text-xs font-medium text-navy-deep/70 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white/90">
                      <li className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {course.duration}
                      </li>
                      {course.location && (
                        <li className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {course.location}
                        </li>
                      )}
                      {course.certification && (
                        <li className="flex items-center gap-1.5">
                          <BadgeCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {course.certification}
                        </li>
                      )}
                    </ul>
                    <Button
                      asChild
                      className="mt-5 w-full justify-center bg-[#0066b2] font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#0066b2]/90 group-hover:bg-white group-hover:text-[#0066b2] group-hover:hover:bg-white/90"
                    >
                      <Link href={course.href}>
                        View Course <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
                </Reveal>
              );
            })}

            <JoinCourseDialog
              courseTitle="General Safety Courses"
              trigger={
                <button
                  type="button"
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
                    <span className="font-heading text-lg font-bold text-white">Join Course</span>
                  </div>
                </button>
              }
            />
          </div>

          {featuredCourses.length > MOBILE_VISIBLE && !expanded && (
            <div className="mt-8 flex justify-center sm:hidden">
              <Button
                type="button"
                variant="outline"
                onClick={() => setExpanded(true)}
                className="border-[#0066b2]/30 font-semibold text-[#0066b2] hover:bg-[#0066b2]/5"
              >
                View More Courses
                <ChevronDown className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          )}

          {showViewAll && (
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="group bg-[#0066b2] text-white shadow-md shadow-[#0066b2]/20 transition hover:bg-[#0066b2]/90"
              >
                <Link href="#all-courses">
                  View All Courses
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          )}
        </div>

        {showViewAll && (
          <div className="mt-8 flex justify-center sm:hidden">
            <Button
              asChild
              size="lg"
              className="group bg-[#0066b2] text-white shadow-md shadow-[#0066b2]/20 transition hover:bg-[#0066b2]/90"
            >
              <Link href="#all-courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
