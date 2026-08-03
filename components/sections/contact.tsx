"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactInfo, courseSelectOptions, locationSelectOptions } from "@/lib/data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title="Join the Community of HSE Professionals"
          description="Send us your details and our team will get back to you with course and scheduling options."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder="Full Name" aria-label="Full Name" required />
              <Input type="email" name="email" placeholder="Email" aria-label="Email" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input type="tel" name="phone" placeholder="Phone" aria-label="Phone" required />
              <Select name="course">
                <SelectTrigger aria-label="Select Course">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  {courseSelectOptions.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select name="location">
              <SelectTrigger className="w-full" aria-label="Select Location">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locationSelectOptions.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input name="subject" placeholder="Subject" aria-label="Subject" />
            <Textarea name="message" placeholder="Message" aria-label="Message" rows={4} />
            <Button type="submit" size="lg" className="w-full bg-orange text-white hover:bg-orange/90">
              Send Message
            </Button>
            {submitted && (
              <p role="status" className="text-sm font-medium text-navy">
                Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6">
            <div className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <Phone className="h-5 w-5 text-orange" aria-hidden="true" /> {contactInfo.phone}
              </p>
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <Mail className="h-5 w-5 text-orange" aria-hidden="true" /> {contactInfo.email}
              </p>
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <MapPin className="h-5 w-5 text-orange" aria-hidden="true" /> {contactInfo.address}
              </p>
            </div>
            <div
              aria-hidden="true"
              className="flex min-h-[220px] flex-1 items-center justify-center rounded-3xl bg-gradient-to-br from-navy to-navy-deep"
            >
              <MapPin className="h-10 w-10 text-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
