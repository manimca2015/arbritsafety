"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const outcomes = [
  "Understand key legislation, standards, and terminology",
  "Identify different types of lifting equipment & applications",
  "Recognise roles and responsibilities within lifting teams",
  "Apply basic lifting principles (Load Weight & CoG)",
  "Identify hazards and apply control measures",
  "Understand inspection awareness, tagging, and traceability",
  "Communicate effectively using standard lifting signals",
  "Demonstrate awareness of risk assessment & lift planning",
];

export function LeeaCompetenceExcellence() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg sm:h-[420px]"
            animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/course/LEEA-Appointed-Lifting-Person.jpg"
              alt="LEEA lifting operations training in progress"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div>
            <SectionHeading eyebrow="Competence Excellence" title="Learning Outcomes" align="left" />

            <p className="mt-6 text-[#000]">
              Upon successful completion, participants will be able to demonstrate mastery in critical lifting
              operation facets.
            </p>

            <ul className="mt-8 space-y-3">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm font-medium text-[#000]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
