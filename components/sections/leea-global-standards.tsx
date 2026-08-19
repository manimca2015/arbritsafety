"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const logos = [
  { src: "/accreditation/adnoc.png", alt: "ADNOC" },
  { src: "/accreditation/ICV.webp", alt: "ICV" },
  { src: "/accreditation/iemalogo.jpg", alt: "IEMA" },
  { src: "/accreditation/iosh.png", alt: "IOSH" },
  { src: "/accreditation/LEEA-Logo.png", alt: "LEEA" },
  { src: "/accreditation/LEEA-Logo.webp", alt: "LEEA" },
  { src: "/accreditation/medic-first-aid.jpg", alt: "Medic First Aid" },
  { src: "/accreditation/permit.png", alt: "Permit" },
  { src: "/accreditation/PSMA.webp", alt: "PSMA" },
  { src: "/accreditation/STI-LOGO.jpg", alt: "STI" },
  { src: "/accreditation/taqa.webp", alt: "TAQA" },
  { src: "/accreditation/tsi-logo.webp", alt: "TSI" },
];

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-navy/10 bg-white p-4 shadow-sm">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={`${alt} accredited training partner logo`}
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function LeeaGlobalStandards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Global Standards"
          title="Our Accreditations & Partnerships"
          description="Arbrit Safety is certified by the world's most prestigious safety organisations."
        />
      </div>

      {shouldReduceMotion ? (
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-6 px-6">
          {logos.map((logo, i) => (
            <LogoCard key={`${logo.src}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      ) : (
        <div className="relative mx-auto mt-10 max-w-7xl overflow-hidden px-6">
          <motion.div
            className="flex w-max gap-6"
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
