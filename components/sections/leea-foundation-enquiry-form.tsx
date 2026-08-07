"use client";

import { useState, type FormEvent } from "react";
import { Building2, BookOpen, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
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

const leeaCourseOptions = ["LEEA Foundation Certificate (FOU)", "LEEA Lifting Accessories Diploma (LAC)"];

export function LeeaFoundationEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-5 overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-white to-muted/60 p-8 shadow-sm"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#0066b2]" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0066b2]">Admission Enquiry</p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-[#0066b2]">Secure your spot in our upcoming batch</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label htmlFor="leea-name">Name</Label>
          <div className="relative">
            <User
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input id="leea-name" name="name" placeholder="Name" required className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm" />
          </div>
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="leea-email">Email</Label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="leea-email"
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
          <Label htmlFor="leea-phone">Phone</Label>
          <div className="relative">
            <Phone
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="leea-phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="leea-company">Company Name</Label>
          <div className="relative">
            <Building2
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="leea-company"
              name="company"
              placeholder="Company Name"
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="leea-course">Course</Label>
        <div className="relative">
          <BookOpen
            className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Select name="course">
            <SelectTrigger id="leea-course" className="h-12 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm">
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent>
              {leeaCourseOptions.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="leea-message">Message</Label>
        <div className="relative">
          <MessageSquare
            className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Textarea
            id="leea-message"
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
        className="w-full rounded-xl bg-[#0066b2] text-white shadow-md shadow-[#0066b2]/20 transition hover:bg-[#0066b2]/90 hover:shadow-lg hover:shadow-[#0066b2]/30"
      >
        Send <Send className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>

      {submitted && (
        <p role="status" className="rounded-xl bg-orange/10 p-3 text-sm font-medium text-[#000]">
          Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
        </p>
      )}
    </form>
  );
}
