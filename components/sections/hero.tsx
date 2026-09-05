"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroContactForm } from "@/components/sections/hero-contact-form";

type Achievement = { icon: LucideIcon; value: string; caption?: string };

const achievements: Achievement[] = [
  { icon: Sparkles, value: "20+", caption: "Years Legacy" },
  { icon: Award, value: "LEEA" },
  { icon: ShieldCheck, value: "IOSH" },
  { icon: BadgeCheck, value: "OSHAD" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image
        src="/slider-img.webp"
        alt="Delegates in full PPE during an Arbrit Safety health and safety training session in Dubai, UAE"
        fill
        preload
        quality={65}
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

          {/* Separate cards, each sized to its own label, wrapping on narrow screens. */}
          <ul className="mt-7 flex flex-wrap gap-2 sm:gap-3">
            {achievements.map(({ icon: Icon, value, caption }) => (
              <li
                key={value}
                className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-3.5 py-2.5 shadow-[0_16px_40px_-20px_rgba(3,17,41,0.75)] sm:px-4 sm:py-3"
              >
                <Icon className="h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
                <span className="flex items-baseline gap-1.5">
                  <span className="font-heading text-sm font-bold leading-none tracking-tight text-navy-deep sm:text-[15px]">
                    {value}
                  </span>
                  {caption && (
                    <span className="text-[11px] font-semibold leading-none tracking-[0.01em] text-navy-deep/75 sm:text-xs">
                      {caption}
                    </span>
                  )}
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
