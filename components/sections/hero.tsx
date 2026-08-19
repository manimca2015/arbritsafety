"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

type StackCard = {
  src: string;
  alt: string;
  position: string;
  rotate: number;
  z: number;
  floatDuration: number;
  floatDelay: number;
};

const stackCards: StackCard[] = [
  {
    src: "/Rescue-Training.jpg",
    alt: "Confined space rescue training drill",
    position: "hidden lg:block left-[2%] -top-[9%] h-[24%] w-[24%]",
    rotate: 5,
    z: 25,
    floatDuration: 6.5,
    floatDelay: 0.6,
  },
  {
    src: "/hero/slide-1-construction-safety.jpg",
    alt: "Site team briefing before a construction safety exercise",
    position: "left-0 top-0 h-[64%] w-[60%]",
    rotate: -4,
    z: 20,
    floatDuration: 5.5,
    floatDelay: 0,
  },
  {
    src: "/course/LEEA-Appointed-Lifting-Person.jpg",
    alt: "Crane and lifting operation under LEEA-certified supervision",
    position: "right-0 top-[2%] h-[44%] w-[40%]",
    rotate: 6,
    z: 30,
    floatDuration: 5,
    floatDelay: 0.3,
  },
  {
    src: "/international-course/rope-access.webp",
    alt: "Rope access technician training on a structure",
    position: "hidden sm:block left-[12%] bottom-0 h-[36%] w-[36%]",
    rotate: -8,
    z: 40,
    floatDuration: 6,
    floatDelay: 0.9,
  },
  {
    src: "/hero/slide-2-training-classroom.jpg",
    alt: "Safety trainees in a classroom training session",
    position: "hidden sm:block right-0 bottom-[6%] h-[44%] w-[44%]",
    rotate: 4,
    z: 15,
    floatDuration: 5.8,
    floatDelay: 0.45,
  },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const yearsStat = stats[0];

  return (
    <section className="relative isolate overflow-hidden bg-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-1.5 text-sm font-semibold text-[#0066b2]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            20+ Years of Safety | UAE &amp; KSA
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-[#0066b2] sm:text-5xl">
            Health &amp; Safety Training - Build Safer Workplaces. Develop
            Competent Professionals.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-[#000]">
            Accredited HSE, lifting, scaffolding, fire safety and professional
            certification training for individuals and organisations across the
            UAE and Saudi Arabia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#0066b2] text-white shadow-xl shadow-[#0066b2]/30 transition-transform hover:scale-105 hover:bg-[#0066b2]/90"
            >
              <Link href="/courses">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-navy/30 text-[#000] hover:bg-navy/5">
              <Link href="/contact">Talk to an Advisor</Link>
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {["20+ Years Experience", "UAE & KSA", "LEEA Licensed Training Partner", "Accredited Training"].map(
              (point) => (
                <li key={point} className="flex items-center gap-1.5 text-sm font-medium text-[#000]/70">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
                  {point}
                </li>
              )
            )}
          </ul>
        </motion.div>

        <div className="relative h-[360px] sm:h-[420px] lg:h-[540px]">
          {stackCards.map((card, i) => (
            <motion.div
              key={card.src}
              className={`absolute ${card.position}`}
              style={{ zIndex: card.z }}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.9, rotate: card.rotate + (i % 2 === 0 ? -6 : 6), y: 24 }
              }
              whileInView={{ opacity: 1, scale: 1, rotate: card.rotate, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="group h-full w-full overflow-hidden rounded-3xl border border-white/60 shadow-[0_20px_45px_-15px_rgba(0,102,178,0.35)]"
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: card.floatDuration,
                        delay: card.floatDelay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.04, rotate: 0 }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    priority={i === 1}
                    sizes="(min-width: 1024px) 320px, 220px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}

          <motion.div
            className="absolute -bottom-5 -right-3 z-40 sm:-right-5"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="rounded-2xl border-2 border-[#0066b2]/20 bg-white p-5 shadow-[0_20px_45px_-12px_rgba(0,102,178,0.55)]"
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 5, delay: 1.1, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <p className="font-heading text-4xl font-extrabold leading-none text-[#0066b2]">
                {yearsStat.value}
                {yearsStat.suffix}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-wide text-navy/70 uppercase">
                {yearsStat.label}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
