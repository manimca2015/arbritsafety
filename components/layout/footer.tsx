"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerQuickLinks, contactInfo, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-2xl bg-white p-2">
              <Image
                src="/logo.jpg"
                alt="Arbrit Safety"
                width={235}
                height={76}
                className="h-10 w-auto rounded-xl"
              />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Arbrit Safety training and Consultancy L.L.C has developed a reputation for providing
              quality, cost effective, training, courses and most of our courses are multilingual
              (English/Hindi/Urdu/Arabic)
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Official Info</p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              {contactInfo.phones.map((phone) => (
                <p key={phone.label} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  <a href={`tel:${phone.number.replace(/\s+/g, "")}`} className="hover:text-orange">
                    {phone.number}
                  </a>
                  <span className="text-white/50">— {phone.label}</span>
                </p>
              ))}
              <p className="pl-6 text-white/60">{contactInfo.ksaEntity}</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-orange">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" /> {contactInfo.address}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Quick Links</p>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
              {footerQuickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Newsletter</p>
            <p className="mt-4 text-sm text-white/70">
              Subscribe our newsletter to get our latest update &amp; news
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="border-white/20 bg-white/5 text-white placeholder:text-white/50"
                aria-label="Email address"
                required
              />
              <Button type="submit" className="bg-orange text-white hover:bg-orange/90">
                Join
              </Button>
            </form>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Arbrit Safety Training &amp; Consultancy LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
