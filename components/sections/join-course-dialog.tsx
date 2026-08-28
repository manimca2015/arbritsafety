"use client";

import { useState, type FormEvent, type ReactNode } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormTrustSignals } from "@/components/ui/form-trust-signals";
import { careerCourseOptions } from "@/lib/data";

export function JoinCourseDialog({
  courseTitle,
  preselectCourse,
  trigger,
}: {
  courseTitle: string;
  /** Pre-selects this course in the Course dropdown. Pass the page's course title on course detail pages. */
  preselectCourse?: string;
  trigger?: ReactNode;
}) {
  const [submitted, setSubmitted] = useState(false);

  const courseOptions =
    preselectCourse && !careerCourseOptions.includes(preselectCourse)
      ? [preselectCourse, ...careerCourseOptions]
      : careerCourseOptions;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button size="lg" className="bg-[#0066b2] text-white hover:bg-[#0066b2]/90">
            Join Course
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Join Course</DialogTitle>
          <DialogDescription>{courseTitle}</DialogDescription>
        </DialogHeader>
        <FormTrustSignals />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="join-name">Full Name</Label>
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Input id="join-name" name="name" placeholder="Full Name" required className="h-11 pl-10" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="join-email">Email</Label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Input
                  id="join-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="h-11 pl-10"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="join-phone">Phone / WhatsApp</Label>
              <div className="relative">
                <Phone
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Input
                  id="join-phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone / WhatsApp"
                  required
                  className="h-11 pl-10"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="join-course">Course of Interest</Label>
              <div className="relative">
                <BookOpen
                  className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Select name="course" defaultValue={preselectCourse}>
                  <SelectTrigger id="join-course" className="h-11 w-full pl-10">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courseOptions.map((course) => (
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
            <Label htmlFor="join-message">
              Message <span className="font-normal text-navy/50">(optional)</span>
            </Label>
            <Textarea
              id="join-message"
              name="message"
              rows={3}
              placeholder="Tell us briefly what you need"
              className="min-h-[80px] px-3.5 py-2.5"
            />
          </div>
          <Button type="submit" size="lg" className="w-full bg-orange text-white hover:bg-orange/90">
            Enquire Now <Send className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          {submitted && (
            <p role="status" className="text-sm font-medium text-[#000]">
              Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
