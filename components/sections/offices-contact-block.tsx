"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { offices, contactInfo, socialLinks } from "@/lib/data";

/**
 * Address-search embed, used for offices with no verified listing on file.
 * Google resolves the address string, so the pin is approximate — see the
 * `mapEmbed` note on the Office type.
 */
function searchEmbed(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

function directionsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function OfficesContactBlock({
  /** Render a map at the top of each office card. Off by default so pages that
   *  already show their own map (e.g. Contact) aren't given a second one. */
  showMaps = false,
}: {
  showMaps?: boolean;
} = {}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {offices.map((office, i) => (
          <motion.div
            key={office.label}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#0066b2]/30 hover:shadow-xl hover:shadow-[#0066b2]/10"
          >
            {showMaps && (
              <div className="h-44 w-full shrink-0 bg-muted">
                <iframe
                  src={office.mapEmbed ?? searchEmbed(office.address)}
                  title={`Map showing the Arbrit Safety office in ${office.label}`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            )}

            <div className="relative flex flex-1 flex-col p-6">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-[#0066b2] transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066b2]/10 text-[#0066b2] transition duration-300 group-hover:bg-[#0066b2] group-hover:text-white">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#0066b2]">{office.label}</h3>
              <div className="mt-3 space-y-1.5">
                {office.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-sm text-[#000] transition hover:text-orange"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                    {phone}
                  </a>
                ))}
              </div>
              <p className="mt-3 flex items-start gap-2 text-sm text-navy">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {office.address}
              </p>
              {showMaps && (
                <a
                  href={directionsHref(office.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#0066b2] hover:underline"
                >
                  Get directions
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="mt-8 flex flex-col items-center gap-5 rounded-3xl border border-navy/10 bg-gradient-to-r from-white via-muted to-white p-6 shadow-sm sm:flex-row sm:justify-between"
      >
        <a
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-3 text-sm font-semibold text-[#000] transition hover:text-orange"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange/10 text-orange">
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          </span>
          {contactInfo.email}
        </a>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-[#000] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0066b2] hover:text-white"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
