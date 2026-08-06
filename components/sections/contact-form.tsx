"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Mail, MapPin, MessageSquare, Phone, Send, Tag, User } from "lucide-react";
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
import { courseSelectOptions, locationSelectOptions } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative space-y-5 overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-white to-muted/60 p-8 shadow-sm"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange to-navy-deep"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-orange">Get In Touch</p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-navy">Send Us a Message</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label htmlFor="contact-name">Full Name</Label>
          <div className="relative">
            <User
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="contact-name"
              name="name"
              placeholder="Full Name"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="contact-email">Email</Label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label htmlFor="contact-phone">Phone</Label>
          <div className="relative">
            <Phone
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="contact-course">Course</Label>
          <div className="relative">
            <BookOpen
              className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Select name="course">
              <SelectTrigger
                id="contact-course"
                className="h-12 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
              >
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
      <div className="group space-y-1.5">
        <Label htmlFor="contact-location">Location</Label>
        <div className="relative">
          <MapPin
            className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Select name="location">
            <SelectTrigger
              id="contact-location"
              className="h-12 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            >
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
      <div className="group space-y-1.5">
        <Label htmlFor="contact-subject">Subject</Label>
        <div className="relative">
          <Tag
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Input
            id="contact-subject"
            name="subject"
            placeholder="Subject"
            className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
          />
        </div>
      </div>
      <div className="group space-y-1.5">
        <Label htmlFor="contact-message">Message</Label>
        <div className="relative">
          <MessageSquare
            className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Textarea
            id="contact-message"
            name="message"
            placeholder="Message"
            rows={4}
            className="rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
          />
        </div>
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl bg-gradient-to-r from-orange to-navy-deep text-white shadow-md shadow-orange/20 transition hover:shadow-lg hover:shadow-orange/30"
      >
        Send Message <Send className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>
      {submitted && (
        <p role="status" className="rounded-xl bg-orange/10 p-3 text-sm font-medium text-navy">
          Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
        </p>
      )}
    </motion.form>
  );
}
