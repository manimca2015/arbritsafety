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
import { Label } from "@/components/ui/label";
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
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">Full Name</Label>
                <Input id="contact-name" name="name" placeholder="Full Name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-phone">Phone</Label>
                <Input id="contact-phone" type="tel" name="phone" placeholder="Phone" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-course">Course</Label>
                <Select name="course">
                  <SelectTrigger id="contact-course">
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
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-location">Location</Label>
              <Select name="location">
                <SelectTrigger id="contact-location" className="w-full">
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
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input id="contact-subject" name="subject" placeholder="Subject" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" name="message" placeholder="Message" rows={4} />
            </div>
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
              {contactInfo.phones.map((phone) => (
                <p key={phone.label} className="flex items-center gap-3 text-sm text-navy/80">
                  <Phone className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                  <a href={`tel:${phone.number.replace(/\s+/g, "")}`} className="hover:text-orange">
                    {phone.number}
                  </a>
                  <span className="text-navy/50">— {phone.label}</span>
                </p>
              ))}
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <Mail className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-orange">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <MapPin className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" /> {contactInfo.address}
              </p>
              <p className="pl-8 text-sm text-navy/50">{contactInfo.ksaEntity}</p>
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
