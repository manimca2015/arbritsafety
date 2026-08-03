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
import { courseSelectOptions, locationSelectOptions } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
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
  );
}
