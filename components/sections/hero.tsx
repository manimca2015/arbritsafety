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
      {/*
        Below lg the hero reads as two stacked bands: a photo band (this column)
        and a blue gradient band behind the form. The photo column is `relative`
        on small screens so the background layer below is clipped to it, and
        `static` from lg up so the very same layer spans the whole section.
      */}
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-10 lg:px-6 lg:pb-24 lg:pt-[calc(var(--site-header-height,80px)+3.5rem)]">
        <div className="relative overflow-hidden px-5 pb-8 pt-[calc(var(--site-header-height,80px)+1.25rem)] sm:px-6 sm:pb-10 sm:pt-[calc(var(--site-header-height,80px)+2rem)] lg:static lg:overflow-visible lg:p-0">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <Image
              src="/slider-img.webp"
              alt="Delegates in full PPE during an Arbrit Safety health and safety training session in Dubai, UAE"
              fill
              preload
              quality={65}
              sizes="100vw"
              className="object-cover object-right lg:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/75 via-navy-deep/45 to-navy-deep/75 lg:bg-gradient-to-br lg:from-navy-deep/95 lg:via-navy-deep/70 lg:to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              LEEA Licensed Training Partner
            </span>

            <h1 className="mt-3 max-w-[22ch] font-heading text-[clamp(1.375rem,5.4vw,3.5rem)] font-bold leading-[1.15] text-balance text-white sm:mt-5 sm:max-w-[18ch] lg:text-[clamp(1.75rem,6vw,3.5rem)]">
              Health &amp; Safety Training
              <span className="mt-1.5 block text-[clamp(0.875rem,3vw,1.75rem)] font-semibold leading-snug text-white/85 sm:mt-2 lg:text-[clamp(1.125rem,3.2vw,1.75rem)]">
                Build Safer Workplaces. Develop Competent Professionals.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base lg:mt-5 lg:text-lg">
              Accredited HSE, lifting, scaffolding, fire safety and professional
              certification training for individuals and organisations across the
              UAE and Saudi Arabia.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-4 lg:mt-8">
              <Button
                asChild
                size="lg"
                className="h-10 px-4 text-sm bg-[#0066b2] text-white shadow-xl shadow-black/30 transition-transform hover:scale-105 hover:bg-[#0066b2]/90 sm:h-12 sm:px-6 sm:text-base"
              >
                <Link href="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-10 px-4 text-sm border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white sm:h-12 sm:px-6 sm:text-base"
              >
                <Link href="/contact">Talk to an Advisor</Link>
              </Button>
            </div>

            {/* Separate cards, each sized to its own label, wrapping on narrow screens. */}
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 lg:mt-7">
              {achievements.map(({ icon: Icon, value, caption }) => (
                <li
                  key={value}
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 shadow-[0_16px_40px_-20px_rgba(3,17,41,0.75)] sm:gap-2 sm:rounded-xl sm:px-4 sm:py-3"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-[#0066b2] sm:h-4 sm:w-4" aria-hidden="true" />
                  <span className="flex items-baseline gap-1 sm:gap-1.5">
                    <span className="font-heading text-[13px] font-bold leading-none tracking-tight text-navy-deep sm:text-[15px]">
                      {value}
                    </span>
                    {caption && (
                      <span className="text-[10px] font-semibold leading-none tracking-[0.01em] text-navy-deep/75 sm:text-xs">
                        {caption}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Blue gradient band behind the form (small screens only). */}
        <div className="bg-gradient-to-b from-navy via-navy to-navy-deep px-5 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:bg-none lg:p-0">
          <motion.div
            className="w-full"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
