"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data";

const GOLD = "#FFC107";

const locations = ["Dubai", "Abu Dhabi", "KSA"];

function splitHeading(heading: string, highlight?: string) {
  if (!highlight || !heading.includes(highlight)) return { before: heading, after: "" };
  const idx = heading.indexOf(highlight);
  return { before: heading.slice(0, idx).trim(), after: heading.slice(idx + highlight.length).trim() };
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const swiperRef = useRef<SwiperType | null>(null);

  const goTo = (next: number) => {
    const target = (next + heroSlides.length) % heroSlides.length;
    swiperRef.current?.slideToLoop(target);
  };

  const slide = heroSlides[index];
  const SecondaryIcon = slide.secondaryCtaIcon;
  const { before, after } = splitHeading(slide.heading, slide.highlight);

  return (
    <section
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-navy"
      style={{ marginTop: "calc(-1 * var(--site-header-height, 80px))" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        onSlideChange={(s) => setIndex(s.realIndex)}
        className="absolute inset-0 h-full w-full"
        style={{ height: "100%" }}
      >
        {heroSlides.map((s, i) => (
          <SwiperSlide key={i} className="relative h-full w-full" style={{ height: "100%" }}>
            <div className="hero-ken-burns absolute inset-0">
              <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(9,32,86,0.95) 0%, rgba(9,32,86,0.8) 45%, rgba(9,32,86,0.15) 100%)",
              }}
              aria-hidden="true"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 z-10 flex h-full items-center">
        <div
          className="pointer-events-none mx-auto w-full max-w-7xl px-6"
          style={{ paddingTop: "var(--site-header-height, 80px)" }}
        >
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -24 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                className="pointer-events-auto"
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur"
                  style={{ borderColor: `${GOLD}66`, backgroundColor: "rgba(255,255,255,0.08)", color: GOLD }}
                >
                  <span
                    className="flex h-4 w-4 items-center justify-center rounded-full text-navy"
                    style={{ backgroundColor: GOLD }}
                  >
                    <Check className="h-2.5 w-2.5" aria-hidden="true" />
                  </span>
                  Building Safer Workplaces
                </span>

                <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {before}
                  {slide.highlight && (
                    <span className="block" style={{ color: GOLD }}>
                      {slide.highlight}
                    </span>
                  )}
                  {after && ` ${after}`}
                </h1>
                <p className="mt-5 max-w-xl text-lg text-white/85">{slide.subtext}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="text-navy shadow-lg hover:brightness-95"
                    style={{ backgroundColor: GOLD }}
                  >
                    <Link href={slide.ctaHref}>
                      {slide.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                  >
                    <Link href={slide.secondaryCtaHref}>
                      <SecondaryIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                      {slide.secondaryCtaLabel}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 z-20 hidden bg-white p-2 shadow-xl sm:block"
        style={{ top: "calc(var(--site-header-height, 80px) + 1rem)" }}
      >
        <Image
          src="/20-year-logo.png"
          alt="Celebrating 20 Years of Safety"
          width={713}
          height={1024}
          className="h-32 w-auto object-contain"
        />
      </motion.div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-transparent hover:bg-[#FFC107] hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-transparent hover:bg-[#FFC107] hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute inset-x-6 bottom-20 z-20 hidden sm:block">
        <div className="ml-auto flex max-w-3xl flex-wrap items-center gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
            <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: GOLD }} aria-hidden="true" />
            Health and Safety Training Courses in
          </p>
          <div className="flex flex-1 flex-wrap gap-4">
            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-2 rounded-2xl p-1.5 transition duration-300 hover:-translate-y-1"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${GOLD}26`, color: GOLD }}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-white">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-6 z-20 flex flex-wrap items-center justify-end gap-4">
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-sm font-semibold text-white/80 sm:flex">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
            <span>{String(heroSlides.length).padStart(2, "0")}</span>
          </div>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-1.5 w-8 overflow-hidden rounded-full bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {i === index ? (
                  <span
                    key={`${index}-fill`}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      backgroundColor: GOLD,
                      ...(shouldReduceMotion
                        ? { width: "100%" }
                        : {
                            width: "0%",
                            animation: "hero-progress 5s linear forwards",
                            animationPlayState: paused ? "paused" : "running",
                          }),
                    }}
                  />
                ) : (
                  <span className="absolute inset-y-0 left-0 w-full rounded-full bg-transparent hover:bg-white/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
