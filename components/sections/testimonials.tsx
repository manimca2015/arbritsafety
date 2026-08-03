"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Students Say" />
        <div className="relative mt-12 rounded-3xl border border-navy/10 bg-muted p-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange text-orange" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 text-lg text-navy/80">&ldquo;{current.quote}&rdquo;</p>
              <p className="mt-6 font-heading font-semibold text-navy">{current.name}</p>
              <p className="text-sm text-navy/60">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
