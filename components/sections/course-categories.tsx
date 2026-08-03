import Link from "next/link";
import { courseCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CourseCategories() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Course Categories"
          title="Find the Right Training Path"
          description="From lifting and access to fire safety and management systems, explore our full range of accredited HSE courses."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {courseCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={category.href}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange transition group-hover:bg-orange group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">{category.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
