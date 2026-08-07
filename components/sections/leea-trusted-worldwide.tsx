"use client";

import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  "LEEA Training Partner",
  "Proven Industry Expertise",
  "Globally Aligned Standards",
  "Certified Industry Experts",
];

export function LeeaTrustedWorldwide() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Trusted Worldwide" title="Why Choose Arbrit?" align="left" />

            <p className="mt-6 text-[#000]">
              Arbrit Safety is a globally established health and safety training and consultancy provider with a
              strong presence across the UAE and the Middle East. Since its inception in 2006, Arbrit has trained
              thousands of professionals and built a reputation for delivering internationally accredited
              programmes aligned with leading bodies such as LEEA and IOSH.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-muted p-4 text-sm font-semibold text-[#000]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                  {reason}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#leea-name"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-orange px-8 text-base font-semibold text-white shadow-md shadow-orange/20 transition hover:bg-orange/90 hover:shadow-lg hover:shadow-orange/30"
              >
                Enquire Now
              </a>
              <a
                href="https://wa.me/971586695300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#0066b2]/30 px-8 text-base font-semibold text-[#0066b2] transition hover:bg-[#0066b2] hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Whatsapp Us
              </a>
            </div>
          </div>

          <motion.div
            className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg sm:h-[420px]"
            animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/constructions.webp"
              alt="Arbrit LEEA lifting operations training"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
