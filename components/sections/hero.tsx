"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroContactForm } from "@/components/sections/hero-contact-form";

type Achievement = { icon: LucideIcon; label: string };

const achievements: Achievement[] = [
  { icon: Award, label: "LEEA Licensed Partner" },
  { icon: Sparkles, label: "20+ Years Legacy" },
  { icon: ShieldCheck, label: "LEEA · IOSH · OSHAD Accredited" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image
        src="/slide-1-construction-safety.webp"
        alt="Construction site workers in safety helmets and high-visibility gear"
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

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-10">
        <div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            20+ Years of Safety | UAE &amp; KSA
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

          <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            {achievements.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/70 bg-white px-3 py-3 text-center shadow-[0_16px_35px_-14px_rgba(0,0,0,0.55)] sm:flex-row sm:gap-3 sm:px-4 sm:text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0066b2]/12 text-[#0066b2] sm:h-10 sm:w-10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-xs font-semibold leading-tight text-navy-deep sm:text-sm lg:text-base">
                  {label}
                </span>
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
