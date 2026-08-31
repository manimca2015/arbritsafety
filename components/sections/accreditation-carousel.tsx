"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const logos = [
  { src: "/accreditation/adnoc.png", alt: "ADNOC" },
  { src: "/accreditation/HABCLogo.jpg", alt: "HABC" },
  { src: "/accreditation/ICV.webp", alt: "ICV" },
  { src: "/accreditation/iemalogo.jpg", alt: "IEMA" },
  { src: "/accreditation/iosh.png", alt: "IOSH" },
  { src: "/accreditation/LEEA-Logo.png", alt: "LEEA" },
  { src: "/accreditation/medic-first-aid.jpg", alt: "Medic First Aid" },
  { src: "/accreditation/permit.png", alt: "Permit" },
  { src: "/accreditation/PSMA.webp", alt: "PSMA" },
  { src: "/accreditation/Rakez-Logo.jpg", alt: "RAKEZ" },
  { src: "/accreditation/STI-LOGO.jpg", alt: "STI" },
  { src: "/accreditation/taqa.webp", alt: "TAQA" },
  { src: "/accreditation/trakhees.jpg", alt: "Trakhees" },
  { src: "/accreditation/tsi-logo.webp", alt: "TSI" },
];

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-xl border border-navy/10 bg-white p-3 shadow-sm sm:h-24 sm:w-40 sm:rounded-2xl sm:p-4">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={`${alt} accredited training partner logo`}
          fill
          sizes="(min-width: 640px) 160px, 128px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function AccreditationCarousel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Accreditation" />
      </div>

      {shouldReduceMotion ? (
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-3 px-6 sm:mt-10 sm:gap-6">
          {logos.map((logo) => (
            <LogoCard key={logo.src} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      ) : (
        <div className="relative mx-auto mt-8 max-w-7xl overflow-hidden px-6 sm:mt-10">
          <motion.div
            className="flex w-max gap-3 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoCard key={`${logo.src}-${i}`} src={logo.src} alt={logo.alt} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
