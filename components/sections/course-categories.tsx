"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ChevronDown, Clock, MapPin } from "lucide-react";
import { courseCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const MOBILE_VISIBLE = 4;

export function CourseCategories() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Course" title="International Course" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {courseCategories.map((category, i) => {
            const Icon = category.icon;
            const hiddenOnMobile = !expanded && i >= MOBILE_VISIBLE;
            return (
              <Reveal key={category.slug} delay={(i % 4) * 0.08}>
              <Link
                href={category.href}
                className={cn(
                  "group relative flex h-72 flex-col items-start justify-end overflow-hidden rounded-2xl p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
                  hiddenOnMobile && "hidden sm:flex"
                )}
              >
                <Image
                  src={category.image}
                  alt={`${category.title} accredited training course`}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0066b2] via-[#0066b2]/70 to-[#0066b2]/10 transition group-hover:via-[#0066b2]/55" />
                <div className="relative w-full">
                  <span className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                    <span className="text-base font-semibold text-white">{category.title}</span>
                  </span>
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
    </section>
  );
}
