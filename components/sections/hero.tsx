"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data";

const locations = ["Dubai", "Abu Dhabi", "KSA"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const goTo = (next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (paused || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [paused, shouldReduceMotion]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative h-screen min-h-[680px] w-full overflow-hidden"
      style={{ marginTop: "calc(-1 * var(--site-header-height, 80px))" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            preload={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-navy/10"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute right-4 z-20 overflow-hidden rounded-2xl bg-white p-2 shadow-lg sm:right-6"
        style={{ top: "calc(var(--site-header-height, 80px) + 1rem)" }}
      >
        <Image
          src="/20-year-logo.png"
          alt="Celebrating 20 Years of Safety"
          width={713}
          height={1024}
          className="h-20 w-auto sm:h-28"
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div
          className="mx-auto w-full max-w-7xl px-6"
          style={{ paddingTop: "var(--site-header-height, 80px)" }}
        >
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -24 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              >
                <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {slide.heading}
                </h1>
                <p className="mt-5 max-w-xl text-lg text-white/85">{slide.subtext}</p>
                <Button asChild size="lg" className="mt-8 bg-orange text-white hover:bg-orange/90">
                  <Link href={slide.ctaHref}>
                    {slide.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                Health and Safety Training Courses in
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
                  >
                    <MapPin className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
