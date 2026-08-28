"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { courseCategories, featuredCourses } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = "All" | "International" | "General Safety";

const filters: Filter[] = ["All", "International", "General Safety"];

const searchableCourses = [
  ...courseCategories.map((course) => ({
    title: course.title,
    href: course.href,
    duration: course.duration,
    category: "International" as const,
  })),
  ...featuredCourses.map((course) => ({
    title: course.title,
    href: course.href,
    duration: course.duration,
    category: course.category,
  })),
];

export function CourseSearch() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const trimmed = query.trim().toLowerCase();
  const isSearching = trimmed.length > 0 || filter !== "All";

  const results = useMemo(() => {
    return searchableCourses.filter((course) => {
      const matchesFilter = filter === "All" || course.category === filter;
      const matchesQuery = trimmed.length === 0 || course.title.toLowerCase().includes(trimmed);
      return matchesFilter && matchesQuery;
    });
  }, [trimmed, filter]);

  return (
    <div className="mt-8 max-w-xl">
      <Label htmlFor="course-search" className="sr-only">
        Search courses
      </Label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
          aria-hidden="true"
        />
        <Input
          id="course-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search courses, e.g. IOSH, First Aid"
          className="h-12 rounded-full border-white/20 bg-white pl-11 pr-11 shadow-lg [&::-webkit-search-cancel-button]:appearance-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-navy/50 transition hover:bg-navy/5 hover:text-navy"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
              filter === option
                ? "border-white bg-white text-[#0066b2]"
                : "border-white/40 bg-white/10 text-white hover:bg-white/20"
            )}
          >
            {option}
          </button>
        ))}
      </div>

      {isSearching && (
        <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-xl">
          <p role="status" aria-live="polite" className="border-b border-navy/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy/60">
            {results.length} {results.length === 1 ? "course" : "courses"} found
          </p>

          {results.length > 0 ? (
            <ul className="max-h-72 overflow-y-auto">
              {results.map((course) => (
                <li key={course.href} className="border-b border-navy/5 last:border-b-0">
                  <Link
                    href={course.href}
                    className="group flex items-center gap-3 px-4 py-3 transition hover:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0066b2]"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-heading text-sm font-semibold text-[#0066b2]">
                        {course.title}
                      </span>
                      <span className="mt-0.5 flex items-center gap-2 text-xs text-navy/60">
                        {course.category}
                        {course.duration && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" aria-hidden="true" />
                              {course.duration}
                            </span>
                          </>
                        )}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-navy/30 transition group-hover:translate-x-0.5 group-hover:text-[#0066b2]"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-5 text-sm text-navy/60">
              No courses match your search. Try a different keyword or category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
