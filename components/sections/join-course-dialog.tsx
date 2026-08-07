"use client";

import { useState, type FormEvent, type ReactNode } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { careerCourseOptions, careerLocationOptions } from "@/lib/data";

export function JoinCourseDialog({
  courseTitle,
  trigger,
}: {
  courseTitle: string;
  trigger?: ReactNode;
}) {
  const [submitted, setSubmitted] = useState(false);

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="join-name">Name</Label>
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Input id="join-name" name="name" placeholder="Name" required className="h-11 pl-10" />
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
              <Label htmlFor="join-phone">Phone</Label>
              <div className="relative">
                <Phone
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Input
                  id="join-phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="h-11 pl-10"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="join-course">Select Course</Label>
              <div className="relative">
                <BookOpen
                  className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
                  aria-hidden="true"
                />
                <Select name="course">
                  <SelectTrigger id="join-course" className="h-11 w-full pl-10">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    {careerCourseOptions.map((course) => (
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
            <Label htmlFor="join-location">Select Location</Label>
            <div className="relative">
              <MapPin
                className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-navy/40"
                aria-hidden="true"
              />
              <Select name="location">
                <SelectTrigger id="join-location" className="h-11 w-full pl-10">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {careerLocationOptions.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="join-subject">Subject</Label>
            <div className="relative">
              <Tag
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40"
                aria-hidden="true"
              />
              <Input id="join-subject" name="subject" placeholder="Subject" className="h-11 pl-10" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="join-message">Message</Label>
            <div className="relative">
              <MessageSquare
                className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-navy/40"
                aria-hidden="true"
              />
              <Textarea id="join-message" name="message" placeholder="Message" rows={3} className="pl-10" />
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full bg-orange text-white hover:bg-orange/90">
            Submit <Send className="ml-2 h-4 w-4" aria-hidden="true" />
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
