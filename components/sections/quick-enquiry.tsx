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
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/reveal";
import { courseSelectOptions } from "@/lib/data";

export function QuickEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#0066b2] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                Quick Enquiry
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                Not sure which course fits?
              </h2>
              <p className="mt-3 text-base text-white/80">
                Share your details and our training advisor will call you back.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group space-y-1.5">
                  <Label htmlFor="enquiry-name" className="text-white/80">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                      aria-hidden="true"
                    />
                    <Input
                      id="enquiry-name"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="h-12 rounded-xl border-white/20 bg-white pl-10 shadow-sm"
                    />
                  </div>
                </div>

                <div className="group space-y-1.5">
                  <Label htmlFor="enquiry-email" className="text-white/80">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                      aria-hidden="true"
                    />
                    <Input
                      id="enquiry-email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="h-12 rounded-xl border-white/20 bg-white pl-10 shadow-sm"
                    />
                  </div>
                </div>

                <div className="group space-y-1.5">
                  <Label htmlFor="enquiry-phone" className="text-white/80">
                    Phone / WhatsApp
                  </Label>
                  <div className="relative">
                    <Phone
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                      aria-hidden="true"
                    />
                    <Input
                      id="enquiry-phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp"
                      required
                      className="h-12 rounded-xl border-white/20 bg-white pl-10 shadow-sm"
                    />
                  </div>
                </div>

                <div className="group space-y-1.5">
                  <Label htmlFor="enquiry-course" className="text-white/80">
                    Course of Interest
                  </Label>
                  <div className="relative">
                    <BookOpen
                      className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40 transition-colors group-focus-within:text-[#0066b2]"
                      aria-hidden="true"
                    />
                    <Select name="course">
                      <SelectTrigger
                        id="enquiry-course"
                        className="h-12 w-full rounded-xl border-white/20 bg-white pl-10 shadow-sm"
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

                <div className="group space-y-1.5 sm:col-span-2">
                  <Label htmlFor="enquiry-message" className="text-white/80">
                    Message <span className="font-normal text-white/50">(optional)</span>
                  </Label>
                  <Textarea
                    id="enquiry-message"
                    name="message"
                    rows={2}
                    placeholder="Tell us briefly what you need"
                    className="min-h-[72px] rounded-xl border-white/20 bg-white px-3.5 py-2.5 shadow-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full justify-center rounded-xl bg-white font-semibold text-[#0066b2] shadow-md transition hover:bg-white/90 sm:col-span-2"
                >
                  Send Enquiry <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              {submitted && (
                <p
                  role="status"
                  className="mt-4 rounded-xl bg-white/15 p-3 text-sm font-medium text-white"
                >
                  Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your
                  interest.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
