"use client";

import { Award, BookOpenCheck, Clock, Users, type LucideIcon } from "lucide-react";
import { stats } from "@/lib/data";
import { useCountUp } from "@/hooks/use-count-up";
import { Reveal } from "@/components/ui/reveal";

const statIcons: Record<string, LucideIcon> = {
  "Years of Experience": Clock,
  "Students Trained": Users,
  "Course Pass Rate": Award,
  "Accredited Courses": BookOpenCheck,
};

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animatedValue } = useCountUp(value);
  const Icon = statIcons[label];

  return (
    <div ref={ref} className="text-center">
      {Icon && (
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10">
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
      )}
      <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
        {animatedValue.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-[#0066b2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Why Choose Us</p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Two Decades of Trusted HSE Training
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
