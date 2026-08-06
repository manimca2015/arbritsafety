"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const cardStep = (el: HTMLDivElement) => {
    const card = el.children[0] as HTMLElement | undefined;
    return card ? card.offsetWidth + 24 : el.clientWidth;
  };

  const initials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const advance = (el: HTMLDivElement, direction: 1 | -1) => {
    const behavior = shouldReduceMotion ? "auto" : "smooth";
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    const atStart = el.scrollLeft <= 1;

    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior });
    } else if (direction === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior });
    } else {
      el.scrollBy({ left: direction * cardStep(el), behavior });
    }
  };

  useEffect(() => {
    if (paused || shouldReduceMotion) return;

    const timer = setInterval(() => {
      const el = trackRef.current;
      if (el) advance(el, 1);
    }, 4000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, shouldReduceMotion]);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Students Say" />
        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
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
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                  <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                </div>
                <p className="mt-5 text-[#000]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066b2] text-sm font-semibold text-white"
                  >
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-[#000]">{testimonial.name}</p>
                    <p className="text-sm text-navy/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => {
                const el = trackRef.current;
                if (el) advance(el, -1);
              }}
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-navy/20"
              onClick={() => {
                const el = trackRef.current;
                if (el) advance(el, 1);
              }}
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
