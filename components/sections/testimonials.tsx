"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Students Say" />
        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-full shrink-0 snap-start rounded-3xl border border-navy/10 bg-muted p-8 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange text-orange" aria-hidden="true" />
                  ))}
                  <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                </div>
                <p className="mt-5 text-navy/80">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-6 font-heading font-semibold text-navy">{testimonial.name}</p>
                <p className="text-sm text-navy/60">{testimonial.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => scroll(-1)}
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => scroll(1)}
              aria-label="Scroll testimonials right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
