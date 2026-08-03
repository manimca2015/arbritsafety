"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { accreditations, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            First LEEA Licensed Training Partner in UAE & KSA
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Health &amp; Safety Training That Protects Your People and Your Business
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy/70">
            Accredited HSE, lifting, scaffolding, and fire safety courses in Dubai, Abu Dhabi and
            KSA — delivered by the region&apos;s first LEEA Licensed Training Partner.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-orange text-white hover:bg-orange/90">
              <Link href="/courses">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-navy text-navy">
              <Link href="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {accreditations.map((a) => (
              <span key={a.name} className="flex items-center gap-2 text-sm font-semibold text-navy/70">
                <ShieldCheck className="h-4 w-4 text-orange" aria-hidden="true" />
                {a.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy via-navy-deep to-orange/60 shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-heading text-2xl font-bold text-navy">
              {stats[0].value}
              {stats[0].suffix}
            </p>
            <p className="text-xs text-navy/60">{stats[0].label}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
