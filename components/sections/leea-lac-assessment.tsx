import { ClipboardCheck, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const assessments = [
  {
    icon: FileText,
    title: "Written Examination",
    description:
      "Closed-book examination covering standards, legislation, inspection procedures, and safety practices.",
  },
  {
    icon: ClipboardCheck,
    title: "Practical Assessment",
    description: "Hands-on assessment involving thorough inspection, defect identification, and reporting accuracy.",
  },
];

export function LeeaLacAssessment() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Evaluation" title="Assessment" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {assessments.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2] transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-[#0066b2]">{title}</h3>
              <p className="mt-2 text-sm text-[#000]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
