"use client";

import { useState, type FormEvent } from "react";
import { Building2, Mail, MapPin, Phone, Send, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormTrustSignals } from "@/components/ui/form-trust-signals";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/reveal";
import { locationSelectOptions } from "@/lib/data";

const serviceOptions = [
  "Project HSE support",
  "Safety audit / gap assessment",
  "HAZOP & SIL studies",
  "Risk assessment & HIRA",
  "HSE management system (ISO 45001)",
  "HSE manpower & competency",
  "Not sure yet — advise me",
];

const assurances = [
  "A senior consultant reviews every enquiry — not a call centre",
  "Scope and fixed price agreed before any work starts",
  "Your project details stay confidential; NDAs signed on request",
];

export function ConsultancyEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultancy-enquiry" className="scroll-mt-24 bg-[#0066b2] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal from="left">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Talk to a Consultant
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Tell us what you are up against
          </h2>
          <p className="mt-4 text-base text-white/80">
            A failed audit, a new contract requirement, an incident, or a system that has never been
            written down — describe it in a line or two and we will come back with a scope, a
            timeline and a fixed price.
          </p>

          <ul className="mt-8 space-y-3">
            {assurances.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <FormTrustSignals variant="dark" className="mt-8" />
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-7 shadow-xl sm:p-9">
            <h3 className="font-heading text-xl font-bold text-[#0066b2]">
              Request a consultancy proposal
            </h3>
            <p className="mt-2 text-sm text-[#000]">
              A few details help us route your enquiry to the right consultant first time.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-company">Company</Label>
                <div className="relative">
                  <Building2
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                    aria-hidden="true"
                  />
                  <Input
                    id="consultancy-company"
                    name="company"
                    placeholder="Company name"
                    required
                    className="h-12 rounded-xl bg-white pl-10 shadow-sm"
                  />
                </div>
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-name">Contact Name</Label>
                <div className="relative">
                  <User
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                    aria-hidden="true"
                  />
                  <Input
                    id="consultancy-name"
                    name="name"
                    placeholder="Full name"
                    required
                    className="h-12 rounded-xl bg-white pl-10 shadow-sm"
                  />
                </div>
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-email">Work Email</Label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                    aria-hidden="true"
                  />
                  <Input
                    id="consultancy-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="h-12 rounded-xl bg-white pl-10 shadow-sm"
                  />
                </div>
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-phone">Phone</Label>
                <div className="relative">
                  <Phone
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                    aria-hidden="true"
                  />
                  <Input
                    id="consultancy-phone"
                    name="phone"
                    type="tel"
                    placeholder="+971 ..."
                    required
                    className="h-12 rounded-xl bg-white pl-10 shadow-sm"
                  />
                </div>
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-service">Service Required</Label>
                <Select name="service">
                  <SelectTrigger
                    id="consultancy-service"
                    className="h-12 w-full rounded-xl bg-white shadow-sm"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="group space-y-1.5">
                <Label htmlFor="consultancy-location">Site Location</Label>
                <div className="relative">
                  <MapPin
                    className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                    aria-hidden="true"
                  />
                  <Select name="location">
                    <SelectTrigger
                      id="consultancy-location"
                      className="h-12 w-full rounded-xl bg-white pl-10 shadow-sm"
                    >
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locationSelectOptions.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="group space-y-1.5 sm:col-span-2">
                <Label htmlFor="consultancy-message">What do you need help with?</Label>
                <Textarea
                  id="consultancy-message"
                  name="message"
                  rows={4}
                  placeholder="e.g. We have a client HSE audit in six weeks and no documented management system."
                  className="min-h-[110px] rounded-xl bg-white px-3.5 py-2.5 shadow-sm"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 w-full justify-center rounded-xl bg-[#0066b2] font-semibold text-white shadow-md hover:bg-[#0066b2]/90 sm:col-span-2"
              >
                Request a proposal <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            {submitted && (
              <p
                role="status"
                className="mt-4 rounded-xl bg-[#0066b2]/10 p-3 text-sm font-medium text-[#0066b2]"
              >
                Thanks &mdash; this form isn&apos;t connected to a backend yet, but we&apos;ve noted
                your interest.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
