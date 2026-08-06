import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { OfficesContactBlock } from "@/components/sections/offices-contact-block";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Arbrit Safety Training & Consultancy in Dubai, Abu Dhabi and the Kingdom of Saudi Arabia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        eyebrow="We'd Love to Hear From You"
        description="Get in touch with Arbrit Safety Training & Consultancy in Dubai, Abu Dhabi and the Kingdom of Saudi Arabia."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mx-auto max-w-2xl text-center text-navy/70">
            Reach our Dubai, Abu Dhabi, or Kingdom of Saudi Arabia office directly, or send us a
            message below.
          </p>

          <div className="mt-12">
            <OfficesContactBlock />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactForm />
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-navy/10 shadow-lg lg:min-h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.005021211739!2d55.369079374853165!3d25.27041652873225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4359aaf3fcb3%3A0xd79a9fbb46a30a3d!2sArbrit%20Safety%20Training%20and%20Consultancy!5e0!3m2!1sen!2sin!4v1785752871035!5m2!1sen!2sin"
                width="600"
                height="450"
                className="h-full min-h-[400px] w-full border-0"
                title="Arbrit Safety Training and Consultancy location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-start gap-3 rounded-2xl border border-navy/10 bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:max-w-xs">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium text-navy">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
