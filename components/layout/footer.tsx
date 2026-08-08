"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerQuickLinks, contactInfo, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#0066b2] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_0.7fr_1.1fr]">
          <div>
            <Image
              src="/footer-logo.svg"
              alt="Arbrit Safety"
              width={180}
              height={60}
            />
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
                  <Phone className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                  <a href={`tel:${phone.number.replace(/\s+/g, "")}`} className="hover:text-white">
                    {phone.number}
                  </a>
                  <span className="text-white/50">— {phone.label}</span>
                </p>
              ))}
              <p className="pl-6 text-white/60">{contactInfo.ksaEntity}</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-white" aria-hidden="true" /> {contactInfo.address}
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
                  className="text-sm text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
              <Button type="submit" className="bg-white text-[#000] hover:bg-white/90">
                Join <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arbrit Safety Training &amp; Consultancy LLC. All rights reserved.</p>
          <nav className="flex gap-4" aria-label="Legal">
            <Link href="/terms-and-conditions" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
