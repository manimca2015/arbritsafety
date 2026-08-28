"use client";

import { useState, type FormEvent } from "react";
import { BookOpen, Mail, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { courseSelectOptions } from "@/lib/data";

export function HeroContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full space-y-4 overflow-hidden rounded-3xl border border-white/60 bg-white p-6 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.45)]"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#0066b2]" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0066b2]">Free Consultation</p>
        <h2 className="mt-1 font-heading text-xl font-bold text-[#0066b2]">Request a Callback</h2>
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="hero-name">Full Name</Label>
        <div className="relative">
          <User
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Input
            id="hero-name"
            name="name"
            placeholder="Full Name"
            required
            className="h-11 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
          />
        </div>
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="hero-email">Email</Label>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Input
            id="hero-email"
            type="email"
            name="email"
            placeholder="Email"
            required
            className="h-11 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
          />
        </div>
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="hero-phone">Phone</Label>
        <div className="relative">
          <Phone
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Input
            id="hero-phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            className="h-11 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
          />
        </div>
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="hero-course">Course</Label>
        <div className="relative">
          <BookOpen
            className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Select name="course">
            <SelectTrigger id="hero-course" className="h-11 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm">
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

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl bg-[#0066b2] text-white shadow-md shadow-[#0066b2]/20 transition hover:bg-[#0066b2]/90 hover:shadow-lg hover:shadow-[#0066b2]/30"
      >
        Request a Callback <Send className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>

      {submitted && (
        <p role="status" className="rounded-xl bg-orange/10 p-3 text-sm font-medium text-[#000]">
          Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
        </p>
      )}
    </form>
  );
}
