"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { offices, contactInfo, socialLinks } from "@/lib/data";

export function OfficesContactBlock() {
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
            className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-orange/30 hover:shadow-xl hover:shadow-navy/10"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-orange to-navy-deep transition-transform duration-300 group-hover:scale-x-100"
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange/15 to-navy/10 text-orange transition duration-300 group-hover:from-orange group-hover:to-navy-deep group-hover:text-white">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold text-navy">{office.label}</h3>
            <div className="mt-3 space-y-1.5">
              {office.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-sm text-navy/80 transition hover:text-orange"
                >
                  <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {phone}
                </a>
              ))}
            </div>
            <p className="mt-3 flex items-start gap-2 text-sm text-navy/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {office.address}
            </p>
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
          className="flex items-center gap-3 text-sm font-semibold text-navy transition hover:text-orange"
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
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
