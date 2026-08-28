"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type Location = {
  label: string;
  country: string;
  icon: string;
  theme: string;
};

const locations: Location[] = [
  {
    label: "Dubai",
    country: "United Arab Emirates",
    icon: "/Dubai-blue.png",
    theme: "from-[#0066b2] to-[#00477d]",
  },
  {
    label: "Abu Dhabi",
    country: "United Arab Emirates",
    icon: "/Abu-Dhabi-white.png",
    theme: "from-[#123a5c] to-[#0a2540]",
  },
  {
    label: "KSA",
    country: "Kingdom of Saudi Arabia",
    icon: "/Saudi-blue.png",
    theme: "from-[#0066b2] to-[#00477d]",
  },
];

const AUTOPLAY_MS = 4000;

export function LocationsStrip() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = locations[index];

  const goTo = useCallback((next: number) => {
    setIndex(((next % locations.length) + locations.length) % locations.length);
  }, []);

  useEffect(() => {
    if (paused || shouldReduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % locations.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, shouldReduceMotion]);

  return (
    <section className="border-y border-navy/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-4 md:flex-row md:gap-6 md:py-5">
        <p className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0066b2] sm:text-base">
          <MapPin className="h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
          Health and Safety Training Courses in
        </p>

        <div
          className="w-full min-w-0 flex-1"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className={cn(
              "relative h-14 overflow-hidden rounded-xl bg-gradient-to-r shadow-sm transition-colors duration-500",
              active.theme
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.label}
                className="absolute inset-0 flex items-center gap-3 pl-4 pr-24"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  aria-hidden="true"
                  className="h-8 w-8 shrink-0 bg-white"
                  style={{
                    maskImage: `url(${active.icon})`,
                    WebkitMaskImage: `url(${active.icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
                <span className="min-w-0 truncate text-sm font-semibold text-white sm:text-base">
                  {active.label}
                  <span className="ml-1.5 font-normal text-white/70">— {active.country}</span>
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-y-0 right-3 flex items-center gap-1.5">
              {locations.map((location, i) => (
                <button
                  key={location.label}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${location.label}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          </div>

          <p className="sr-only" role="status" aria-live="polite">
            {active.label} — {active.country}
          </p>
        </div>
      </div>
    </section>
  );
}
