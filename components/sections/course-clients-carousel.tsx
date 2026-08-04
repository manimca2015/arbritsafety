"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ClientLogo } from "@/lib/data";

function LogoCard({ src, alt }: ClientLogo) {
  return (
    <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-navy/10 bg-white p-4 shadow-sm">
      <div className="relative h-full w-full">
        <Image src={src} alt={alt} fill sizes="160px" className="object-contain" />
      </div>
    </div>
  );
}

export function CourseClientsCarousel({ logos }: { logos: ClientLogo[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      {shouldReduceMotion ? (
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo) => (
            <LogoCard key={logo.src} {...logo} />
          ))}
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoCard key={`${logo.src}-${i}`} {...logo} />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
