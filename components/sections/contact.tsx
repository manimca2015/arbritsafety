"use client";

import { useState, type FormEvent } from "react";
import { BookOpen, Mail, MapPin, MessageSquare, Phone, Tag, User } from "lucide-react";
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
          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">Full Name</Label>
                <div className="relative">
                  <User
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                    aria-hidden="true"
                  />
                  <Input id="contact-name" name="name" placeholder="Full Name" required className="h-11 pl-10" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">Email</Label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                    aria-hidden="true"
                  />
                  <Input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="h-11 pl-10"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-phone">Phone</Label>
                <div className="relative">
                  <Phone
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                    aria-hidden="true"
                  />
                  <Input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="h-11 pl-10"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-course">Course</Label>
                <div className="relative">
                  <BookOpen
                    className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
                    aria-hidden="true"
                  />
                  <Select name="course">
                    <SelectTrigger id="contact-course" className="h-11 w-full pl-10">
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
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-location">Location</Label>
              <div className="relative">
                <MapPin
                  className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Select name="location">
                  <SelectTrigger id="contact-location" className="h-11 w-full pl-10">
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
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-subject">Subject</Label>
              <div className="relative">
                <Tag
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Input id="contact-subject" name="subject" placeholder="Subject" className="h-11 pl-10" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <div className="relative">
                <MessageSquare
                  className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-navy/40"
                  aria-hidden="true"
                />
                <Textarea id="contact-message" name="message" placeholder="Message" rows={4} className="pl-10" />
              </div>
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
            <div className="min-h-[220px] flex-1 overflow-hidden rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.005021211739!2d55.369079374853165!3d25.27041652873225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4359aaf3fcb3%3A0xd79a9fbb46a30a3d!2sArbrit%20Safety%20Training%20and%20Consultancy!5e0!3m2!1sen!2sin!4v1785752871035!5m2!1sen!2sin"
                width="600"
                height="450"
                className="h-full min-h-[220px] w-full border-0"
                title="Arbrit Safety Training and Consultancy location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
