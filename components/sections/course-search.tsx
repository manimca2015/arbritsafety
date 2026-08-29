"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courseCategories, featuredCourses } from "@/lib/data";

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
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div className="mt-8 max-w-3xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative sm:w-56 sm:shrink-0">
          <Label htmlFor="course-filter" className="sr-only">
            Filter by category
          </Label>
          <SlidersHorizontal
            className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
            aria-hidden="true"
          />
          <Select value={filter} onValueChange={(value) => setFilter(value as Filter)}>
            <SelectTrigger
              id="course-filter"
              className="h-12 w-full rounded-full border-white/20 bg-white pl-11 shadow-lg"
            >
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {filters.map((option) => (
                <SelectItem key={option} value={option}>
                  {option === "All" ? "All Categories" : option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="relative flex-1">
          <Label htmlFor="course-search" className="sr-only">
            Search courses
          </Label>
          <Input
            ref={inputRef}
            id="course-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses, e.g. IOSH, First Aid"
            className="h-12 rounded-full border-white/20 bg-white pl-5 pr-11 shadow-lg [&::-webkit-search-cancel-button]:appearance-none"
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

        {/* Results filter as you type, so this focuses the field rather than
            submitting — it's an affordance, not a second search trigger. */}
        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          aria-label="Search courses"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0066b2] shadow-lg transition hover:bg-white/90 hover:text-[#0066b2]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
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
