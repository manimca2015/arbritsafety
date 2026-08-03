"use client";

import { stats } from "@/lib/data";
import { useCountUp } from "@/hooks/use-count-up";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
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
    <section className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">Why Choose Us</p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Two Decades of Trusted HSE Training
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
