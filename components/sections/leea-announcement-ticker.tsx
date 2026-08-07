"use client";

import { Award, Megaphone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const announcements = [
  "ARBRIT SAFETY SIGNS OFFICIAL CONTRACT WITH LEEA",
  "FIRST LEEA LICENSED TRAINING PARTNER (LTP) IN UAE & KSA",
  "DELIVERING LEEA FOUNDATION CER",
];

export function LeeaAnnouncementTicker() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex flex-col overflow-hidden bg-gradient-to-r from-[#004c86] via-[#0066b2] to-[#004c86] shadow-lg sm:flex-row sm:items-stretch">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent" />

      <span className="relative z-10 flex shrink-0 items-center justify-center gap-2 bg-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[4px_0_12px_-2px_rgba(0,0,0,0.25)] sm:justify-start sm:py-4">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <Megaphone className="h-4 w-4 shrink-0" aria-hidden="true" />
        Announcement
      </span>

      {shouldReduceMotion ? (
        <div className="flex flex-wrap items-center justify-center gap-3 px-6 py-4 sm:justify-start">
          {announcements.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-center text-sm font-semibold uppercase tracking-wide text-white"
            >
              <Award className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div className="relative flex min-h-[3.25rem] w-full items-center overflow-hidden sm:min-h-0">
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0066b2] to-transparent sm:w-16" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0066b2] to-transparent sm:w-16" />

          <motion.div
            className="flex w-max items-center gap-4 whitespace-nowrap px-6 py-3 sm:py-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...announcements, ...announcements].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm"
              >
                <Award className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {item}
                <Award className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              </span>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
