"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroContactForm } from "@/components/sections/hero-contact-form";

type Achievement = { value: string; caption: string };

const achievements: Achievement[] = [
  { value: "20+", caption: "Years Legacy" },
  { value: "LEEA", caption: "Accredited" },
  { value: "IOSH", caption: "Accredited" },
  { value: "OSHAD", caption: "Accredited" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image
        src="/slider-img.webp"
        alt="Arbrit safety training banner"
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-deep/80 to-navy/50 md:from-navy-deep/95 md:via-navy-deep/70 md:to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-[calc(var(--site-header-height,80px)+2.5rem)] md:pb-24 md:pt-[calc(var(--site-header-height,80px)+3.5rem)] lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-10">
        <div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            LEEA Licensed Training Partner
          </span>

          <h1 className="mt-5 max-w-[22ch] font-heading text-[clamp(1.75rem,6vw,3.5rem)] font-bold leading-[1.15] text-balance text-white sm:mt-6 sm:max-w-[18ch]">
            Health &amp; Safety Training
            <span className="mt-2 block text-[clamp(1.125rem,3.2vw,1.75rem)] font-semibold leading-snug text-white/85">
              Build Safer Workplaces. Develop Competent Professionals.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/85">
            Accredited HSE, lifting, scaffolding, fire safety and professional
            certification training for individuals and organisations across the
            UAE and Saudi Arabia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#0066b2] text-white shadow-xl shadow-black/30 transition-transform hover:scale-105 hover:bg-[#0066b2]/90"
            >
              <Link href="/courses">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              <Link href="/contact">Talk to an Advisor</Link>
            </Button>
          </div>

          {/* One credential bar, not four floating chips: glass strip over the hero photo,
              cells split by hairlines (2x2 on mobile, single row from sm up). Uniform
              value-over-caption so the stat and the accreditations read in one register. */}
          <ul className="mt-8 grid max-w-xl grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md sm:grid-cols-4 [&>li]:border-white/12 [&>li:nth-child(2)]:border-l [&>li:nth-child(4)]:border-l [&>li:nth-child(n+3)]:border-t sm:[&>li:nth-child(n+2)]:border-l sm:[&>li:nth-child(n+3)]:border-t-0">
            {achievements.map(({ value, caption }) => (
              <li key={value} className="px-4 py-3.5 sm:py-4">
                <p className="font-heading text-lg font-bold leading-none text-white sm:text-xl">
                  {value}
                </p>
                <p className="mt-1.5 text-[10px] font-medium uppercase leading-none tracking-[0.14em] text-white/55 sm:text-[11px]">
                  {caption}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
        </div>

        <motion.div
          className="mt-10 w-full lg:mt-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroContactForm />
        </motion.div>
      </div>
    </section>
  );
}
