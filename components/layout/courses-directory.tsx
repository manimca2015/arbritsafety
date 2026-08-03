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
              className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm"
            >
              <ul className="space-y-2.5">
                {group.links.map((link, linkIndex) => (
                  <li key={`${groupIndex}-${linkIndex}`} className="text-sm text-navy/80">
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
