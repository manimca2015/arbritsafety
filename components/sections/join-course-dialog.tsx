"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export function JoinCourseDialog({ courseTitle }: { courseTitle: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-orange text-white hover:bg-orange/90">
          Join Course
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Join Course</DialogTitle>
          <DialogDescription>{courseTitle}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <p role="status" className="text-sm font-medium text-navy">
              Thanks — this form isn&apos;t connected to a backend yet, but we&apos;ve noted your interest.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
