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

export function FeaturedCourses() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
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
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
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
      </div>
    </section>
  );
}
