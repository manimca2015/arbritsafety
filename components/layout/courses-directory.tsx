"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search, SlidersHorizontal, X } from "lucide-react";
import { coursesMegaMenu } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const ALL = "All Categories";

export function CoursesDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  const trimmed = query.trim().toLowerCase();
  const isFiltering = trimmed.length > 0 || category !== ALL;

  const groups = useMemo(() => {
    return coursesMegaMenu
      .map((group) => ({
        title: group.title,
        links:
          trimmed.length > 0
            ? group.links.filter((link) => link.label.toLowerCase().includes(trimmed))
            : group.links,
      }))
      .filter((group) => group.links.length > 0)
      .filter((group) => category === ALL || group.title === category);
  }, [trimmed, category]);

  const total = groups.reduce((count, group) => count + group.links.length, 0);

  return (
    <section id="all-courses" className="scroll-mt-28 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Courses" align="left" />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="group relative w-full sm:max-w-sm">
            <Label htmlFor="directory-search" className="sr-only">
              Search courses
            </Label>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
              aria-hidden="true"
            />
            <Input
              id="directory-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search all courses"
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 pr-10 shadow-sm [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-navy/50 transition hover:bg-navy/5 hover:text-navy"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Label htmlFor="directory-category" className="sr-only">
              Filter by category
            </Label>
            <SlidersHorizontal
              className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
              aria-hidden="true"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger
                id="directory-category"
                className="h-12 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
              >
                <SelectValue placeholder={ALL} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>{ALL}</SelectItem>
                {coursesMegaMenu.map((group) => (
                  <SelectItem key={group.title} value={group.title}>
                    {group.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <p role="status" aria-live="polite" className="mt-3 text-sm text-navy/60">
          {isFiltering
            ? `${total} ${total === 1 ? "course" : "courses"} found`
            : `${total} courses — tap a category to browse`}
        </p>

        {groups.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {groups.map((group, groupIndex) => {
              const isOpen = isFiltering || openGroup === groupIndex;

              return (
                <div
                  key={group.title}
                  className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:border-orange/30 hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen && !isFiltering ? null : groupIndex)}
                    aria-expanded={isOpen}
                    aria-controls={`course-group-${groupIndex}`}
                    className="flex w-full items-center justify-between gap-2 text-left font-heading text-base font-bold text-[#0066b2] sm:pointer-events-none"
                  >
                    <span className="flex items-baseline gap-2">
                      {group.title}
                      <span className="text-xs font-medium text-navy/50">{group.links.length}</span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform sm:hidden",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <ul
                    id={`course-group-${groupIndex}`}
                    className={cn(
                      "mt-3 space-y-1 border-t border-navy/10 pt-2.5 sm:block",
                      !isOpen && "hidden"
                    )}
                  >
                    {group.links.map((link, linkIndex) => (
                      <li key={`${groupIndex}-${linkIndex}`}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-[#000] transition-colors hover:bg-orange/5 hover:text-orange"
                        >
                          <ChevronRight
                            className="h-3.5 w-3.5 shrink-0 text-orange/60 transition-transform group-hover:translate-x-0.5 group-hover:text-orange"
                            aria-hidden="true"
                          />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-6 rounded-2xl border border-navy/10 bg-muted p-6 text-sm text-navy/60">
            No courses match your search. Try a different keyword or category.
          </p>
        )}
      </div>
    </section>
  );
}
