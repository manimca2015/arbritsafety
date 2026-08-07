import { SectionHeading } from "@/components/ui/section-heading";

type Module = {
  letter?: string;
  title: string;
  duration: string;
};

type Day = {
  label: string;
  modules: Module[];
};

const days: Day[] = [
  {
    label: "Day 1",
    modules: [
      { title: "Foundation Introduction Session", duration: "1 Hour 30 Min" },
      { letter: "A", title: "Legislations and Regulations", duration: "2 Hours 45 Min" },
      { letter: "B", title: "Managing Risk", duration: "2 Hours 15 Min" },
    ],
  },
  {
    label: "Day 2",
    modules: [
      { letter: "C", title: "Industry Relevant Definitions", duration: "2.5 Hours" },
      { letter: "D", title: "Manufacturing of Lifting Equipment", duration: "1.5 Hours" },
      { letter: "E", title: "Materials and Properties", duration: "2.5 Hours" },
    ],
  },
  {
    label: "Day 3",
    modules: [
      { letter: "F", title: "Lifting Accessories", duration: "2.5 Hours" },
      { letter: "G", title: "Lifting Appliances", duration: "2 Hours" },
      { letter: "H", title: "Purchasing and Control of Lifting Equipment", duration: "2 Hours" },
    ],
  },
];

export function LeeaTrainingRoadmap() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Training Roadmap" title="Course Modules" />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {days.map((day) => (
            <div key={day.label} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-[#0066b2]">{day.label}</h3>
              <div className="mt-5 space-y-4">
                {day.modules.map((module, i) => {
                  const isFoundation = !module.letter;
                  return (
                    <div
                      key={i}
                      className={`group flex items-start gap-4 rounded-2xl p-4 transition-colors duration-300 ${
                        isFoundation ? "bg-[#0066b2]" : "bg-muted hover:bg-[#0066b2]"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-colors duration-300 ${
                          isFoundation ? "bg-white/20" : "bg-[#0066b2] group-hover:bg-white/20"
                        }`}
                      >
                        {module.letter ?? "•"}
                      </span>
                      <div>
                        <p
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            isFoundation ? "text-white" : "text-[#000] group-hover:text-white"
                          }`}
                        >
                          {module.title}
                        </p>
                        <p
                          className={`mt-1 text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                            isFoundation ? "text-white/80" : "text-orange group-hover:text-white"
                          }`}
                        >
                          {module.duration}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
