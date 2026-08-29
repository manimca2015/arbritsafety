"use client";

import { Award, BookOpenCheck, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useCountUp } from "@/hooks/use-count-up";
import { stats } from "@/lib/data";

type TrustItem = {
  icon: LucideIcon;
  /** Numeric headline that counts up on scroll. Omit for text headlines. */
  count?: number;
  suffix?: string;
  /** Static headline used when `count` is absent. */
  text?: string;
  label: string;
  detail: string;
};

function statOf(label: string, fallback: number) {
  return stats.find((stat) => stat.label === label)?.value ?? fallback;
}

const items: TrustItem[] = [
  {
    icon: BookOpenCheck,
    count: statOf("Accredited Courses", 50),
    suffix: "+",
    label: "Accredited Courses",
    detail: "HSE, lifting, scaffolding & fire safety",
  },
  {
    icon: Users,
    count: statOf("Students Trained", 15000),
    suffix: "+",
    label: "Students Trained",
    detail: "Across Dubai, Abu Dhabi & KSA",
  },
  {
    icon: Award,
    text: "LEEA",
    label: "Licensed Training Partner",
    detail: "First LTP in the UAE & KSA",
  },
];

function TrustCell({ item }: { item: TrustItem }) {
  const { icon: Icon, count, suffix, text, label, detail } = item;
  const { ref, value } = useCountUp(count ?? 0);

  return (
    <div
      ref={ref}
      className="group flex items-center gap-4 px-4 py-5 sm:justify-center sm:px-6 lg:gap-5"
    >
      <span
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0066b2]/10 text-[#0066b2] ring-1 ring-inset ring-[#0066b2]/15 transition duration-300 group-hover:bg-[#0066b2] group-hover:text-white group-hover:ring-[#0066b2] sm:h-14 sm:w-14"
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </span>

      <div className="min-w-0">
        <p className="font-heading text-2xl font-bold leading-none tracking-tight text-navy-deep sm:text-3xl">
          {count === undefined ? text : value.toLocaleString()}
          {suffix && <span className="text-[#0066b2]">{suffix}</span>}
        </p>
        <p className="mt-1.5 text-sm font-semibold leading-tight text-[#0066b2]">{label}</p>
        <p className="mt-1 text-xs leading-snug text-navy-deep/55">{detail}</p>
      </div>
    </div>
  );
}

export function CoursesTrustStrip() {
  return (
    <section aria-label="Why learners choose Arbrit" className="relative bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,102,178,0.07),transparent_70%)]"
      />

      <Reveal className="relative mx-auto max-w-7xl px-6 pb-10 pt-8 sm:pb-14 sm:pt-10">
        <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_10px_30px_-18px_rgba(18,59,109,0.45)]">
          <div aria-hidden="true" className="h-1 bg-gradient-to-r from-[#0066b2] via-[#0066b2]/40 to-[#0066b2]" />

          <ul className="grid grid-cols-1 sm:grid-cols-3">
            {items.map((item, i) => (
              <li key={item.label} className="relative">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent sm:inset-x-auto sm:inset-y-5 sm:left-0 sm:h-auto sm:w-px sm:bg-gradient-to-b"
                  />
                )}
                <TrustCell item={item} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
