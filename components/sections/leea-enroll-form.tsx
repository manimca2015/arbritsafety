"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Building2, BookOpen, Mail, Phone, Send, User } from "lucide-react";
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
import { FormTrustSignals } from "@/components/ui/form-trust-signals";

const leeaCourseOptions = ["LEEA Foundation Certificate (FOU)", "LEEA Lifting Accessories Diploma (LAC)"];

export function LeeaEnrollForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-5 overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 shadow-lg"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#0066b2]" />

      <div className="flex justify-center">
        <div className="relative h-12 w-40">
          <Image
            src="/arbritsafety-logo.png"
            alt="Arbrit Safety Training & Consultancy logo"
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-heading text-2xl font-bold text-[#0066b2]">Start Your Certification</h2>
        <p className="mt-1 text-sm text-navy/60">Join the elite class of LEEA certified professionals</p>
      </div>

      <FormTrustSignals />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group space-y-1.5">
          <Label htmlFor="enroll-name">Name</Label>
          <div className="relative">
            <User
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input id="enroll-name" name="name" placeholder="Name" required className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm" />
          </div>
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="enroll-email">Email</Label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="enroll-email"
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
          <Label htmlFor="enroll-phone">Phone</Label>
          <div className="relative">
            <Phone
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="enroll-phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
        </div>
        <div className="group space-y-1.5">
          <Label htmlFor="enroll-company">Company Name</Label>
          <div className="relative">
            <Building2
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
              aria-hidden="true"
            />
            <Input
              id="enroll-company"
              name="company"
              placeholder="Company Name"
              className="h-12 rounded-xl border-navy/15 bg-white pl-10 shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="group space-y-1.5">
        <Label htmlFor="enroll-course">Course</Label>
        <div className="relative">
          <BookOpen
            className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-orange"
            aria-hidden="true"
          />
          <Select name="course">
            <SelectTrigger id="enroll-course" className="h-12 w-full rounded-xl border-navy/15 bg-white pl-10 shadow-sm">
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

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl bg-orange text-white shadow-md shadow-orange/20 transition hover:bg-orange/90 hover:shadow-lg hover:shadow-orange/30"
      >
        Enquire Now <Send className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>

      {submitted && (
        <p role="status" className="rounded-xl bg-orange/10 p-3 text-sm font-medium text-[#000]">
          Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
        </p>
      )}
    </form>
  );
}
