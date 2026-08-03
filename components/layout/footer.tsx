"use client";

import Link from "next/link";
import { Globe, Camera, Briefcase, Mail, MapPin, Phone, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerCourseColumns, navLinks, contactInfo } from "@/lib/data";

const socialIcons = [Globe, Camera, Briefcase, Video];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="font-heading text-xl font-bold">Arbrit Safety</p>
            <p className="mt-3 text-sm text-white/70">
              Arbrit Safety Training &amp; Consultancy LLC — the first LEEA Licensed Training Partner
              in the UAE &amp; KSA, delivering accredited health &amp; safety, lifting, and scaffolding
              training.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange" aria-hidden="true" /> {contactInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange" aria-hidden="true" /> {contactInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange" aria-hidden="true" /> {contactInfo.address}
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerCourseColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/60">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/80 hover:text-orange">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-orange">
                {link.label}
              </Link>
            ))}
          </nav>
          <form className="flex w-full max-w-sm gap-2 md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Subscribe for updates"
              className="border-white/20 bg-white/5 text-white placeholder:text-white/50"
              aria-label="Email address"
              required
            />
            <Button type="submit" className="bg-orange text-white hover:bg-orange/90">
              Join
            </Button>
          </form>
        </div>

        <p className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Arbrit Safety Training &amp; Consultancy LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
