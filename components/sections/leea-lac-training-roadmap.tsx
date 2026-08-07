import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const modules = [
  {
    title: "Module 1: Slinging Accessories",
    topics: [
      "Examiners’ tools and equipment",
      "Types of examination",
      "Textile slings",
      "Chain and chain slings",
      "Wire rope and wire rope slings",
      "Eyebolts",
      "Hoist rings",
      "Shackles",
      "Rigging screws and turnbuckles",
    ],
  },
  {
    title: "Module 2: Non-Fixed Load Attachments",
    topics: [
      "Plate clamps",
      "Beam clamps (including traditional types)",
      "Lifting beams",
      "Lifting magnets",
      "Vacuum lifting devices",
      "‘C’ hooks",
      "Crane forks",
      "Lifting inserts",
    ],
  },
];

export function LeeaLacTrainingRoadmap() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Training Roadmap" title="Course Modules" />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {modules.map((module) => (
            <div key={module.title} className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-[#0066b2]">{module.title}</h3>
              <ul className="mt-5 space-y-3">
                {module.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-[#000]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                    {topic}
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
