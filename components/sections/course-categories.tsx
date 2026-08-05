import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courseCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CourseCategories() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Course" title="International Course" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {courseCategories.map((category) => {
            return (
              <Link
                key={category.slug}
                href={category.href}
                className="group relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-2xl text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-navy/50 transition group-hover:bg-navy/60" />
                <span className="relative text-base font-semibold text-white">{category.title}</span>
              </Link>
            );
          })}

          <Link
            href="/courses"
            className="group flex h-64 flex-col items-center justify-center gap-3 rounded-2xl bg-orange p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
              <ArrowRight className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-white">View All Courses</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
