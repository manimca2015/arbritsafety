import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { coursesMegaMenu } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CoursesDirectory() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Courses" align="left" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coursesMegaMenu.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:border-orange/30 hover:shadow-lg"
            >
              <ul className="space-y-1">
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
              <Link
                href="/courses"
                className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-[#0066b2] px-4 py-2 text-sm font-semibold text-[#0066b2] transition-colors hover:bg-[#0066b2] hover:text-white"
              >
                View Courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
