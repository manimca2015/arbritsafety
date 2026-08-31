"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ChevronDown, Clock, MapPin } from "lucide-react";
import { courseCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const MOBILE_VISIBLE = 4;

export function CourseCategories({
  showDescriptions = false,
}: {
  /** Shows the one-line course summary on each card. */
  showDescriptions?: boolean;
} = {}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-muted py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Mobile: numbered editorial list */}
        <div className="sm:hidden">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0066b2]">
                Course
              </p>
              <h2 className="font-heading text-[26px] font-bold leading-tight text-navy-deep">
                International Course
              </h2>
            </div>
            {courseCategories.length > MOBILE_VISIBLE && !expanded && (
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

          <ul className="mt-6 divide-y divide-navy/10 border-t border-navy/10">
            {courseCategories.map((category, i) => {
              if (!expanded && i >= MOBILE_VISIBLE) return null;
              const meta = [category.duration, category.location, category.certification].filter(
                Boolean
              );
              return (
                <li key={category.slug}>
                  <Link
                    href={category.href}
                    className="flex items-center gap-3 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                  >
                    <span className="w-6 shrink-0 font-heading text-sm font-bold text-[#0066b2]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative h-[62px] w-[88px] shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={category.image}
                        alt={`${category.title} accredited training course`}
                        fill
                        sizes="88px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-[15px] font-bold leading-snug text-navy-deep">
                        {category.title}
                      </span>
                      <span className="mt-1 block text-xs leading-snug text-navy-deep/60">
                        {meta.map((part, idx) => (
                          <span key={part} className={idx === 2 ? "uppercase" : undefined}>
                            {part}
                            {idx < meta.length - 1 && " · "}
                          </span>
                        ))}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tablet and up: original card grid */}
        <div className="hidden sm:block">
          <SectionHeading eyebrow="Course" title="International Course" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courseCategories.map((category, i) => {
              const Icon = category.icon;
              const hiddenOnMobile = !expanded && i >= MOBILE_VISIBLE;
              return (
                <Reveal key={category.slug} delay={(i % 4) * 0.08} className="h-full">
                <Link
                  href={category.href}
                  className={cn(
                    "group relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:p-6",
                    showDescriptions ? "min-h-80" : "min-h-72",
                    hiddenOnMobile && "hidden sm:flex"
                  )}
                >
                  <Image
                    src={category.image}
                    alt={`${category.title} accredited training course`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#0066b2] via-[#0066b2]/70 to-[#0066b2]/10 transition group-hover:via-[#0066b2]/55" />
                  <div className="relative w-full">
                    <span className="flex items-start gap-2">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                      <span className="text-base font-semibold text-white">{category.title}</span>
                    </span>
                    {showDescriptions && category.description && (
                      <p className="mt-2 line-clamp-2 text-xs leading-snug text-white/80">
                        {category.description}
                      </p>
                    )}
                    <ul className="mt-3 space-y-1 border-t border-white/25 pt-2.5 text-xs font-medium text-white/90">
                      {category.duration && (
                        <li className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {category.duration}
                        </li>
                      )}
                      {category.location && (
                        <li className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {category.location}
                        </li>
                      )}
                      {category.certification && (
                        <li className="flex items-center gap-1.5">
                          <BadgeCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {category.certification}
                        </li>
                      )}
                    </ul>
                    <span className="mt-4 flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0066b2] shadow-sm transition-colors duration-300 group-hover:bg-white/90">
                      View Course <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
                </Reveal>
              );
            })}
          </div>

          {courseCategories.length > MOBILE_VISIBLE && !expanded && (
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
      </div>
    </section>
  );
}
