"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const corporateBenefits = [
  "When employees are properly trained, they are more productive because they miss fewer hours due to illness and accidents.",
  "Safety awareness and appreciation for safety measures that work to reduce your legal liabilities.",
  "Active employee participation to improve workplace health and safety culture and behaviors.",
];

export function CorporateTraining() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0066b2]">
            Corporate Training
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
            These courses will raise the profile of health and safety in your organization, which
            will help:
          </h2>
          <ul className="mt-6 space-y-3">
            {corporateBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-[#000]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm"
        >
          <Users className="h-10 w-10 text-orange" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-xl font-bold text-[#0066b2]">
            Request a Corporate Training Quote
          </h3>
          <p className="mt-2 text-sm text-[#000]">
            Tell us your team size and required certifications — we&apos;ll put together a
            tailored proposal.
          </p>

          <div className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="corporate-name">Contact Name</Label>
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Input
                  id="corporate-name"
                  name="name"
                  placeholder="Contact Name"
                  required
                  className="h-11 bg-white pl-10"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="corporate-email">Email</Label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                    aria-hidden="true"
                  />
                  <Input
                    id="corporate-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="h-11 bg-white pl-10"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="corporate-phone">Phone</Label>
                <div className="relative">
                  <Phone
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                    aria-hidden="true"
                  />
                  <Input
                    id="corporate-phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="h-11 bg-white pl-10"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="corporate-team-size">Team Size</Label>
                <div className="relative">
                  <Users
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                    aria-hidden="true"
                  />
                  <Input
                    id="corporate-team-size"
                    type="number"
                    min={1}
                    name="teamSize"
                    placeholder="e.g. 25"
                    required
                    className="h-11 bg-white pl-10"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="corporate-certifications">Required Certifications</Label>
                <Input
                  id="corporate-certifications"
                  name="certifications"
                  placeholder="e.g. IOSH, LEEA"
                  className="h-11 bg-white"
                />
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full bg-[#0066b2] text-white hover:bg-[#0066b2]/90">
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>

          {submitted && (
            <p role="status" className="mt-4 text-sm font-medium text-[#000]">
              Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your
              interest.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
