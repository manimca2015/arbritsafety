import type { Metadata } from "next";
import { Building2, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { offices, contactInfo, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Arbrit Safety Training & Consultancy in Dubai, Abu Dhabi and the Kingdom of Saudi Arabia.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact Us"
            description="Reach our Dubai, Abu Dhabi, or Kingdom of Saudi Arabia office directly, or send us a message below."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.label}
                className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{office.label}</h3>
                <div className="mt-3 space-y-1.5">
                  {office.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-2 text-sm text-navy/80 hover:text-orange"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                      {phone}
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-sm text-navy/60">{office.address}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:flex-row sm:justify-between">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-orange"
            >
              <Mail className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
              {contactInfo.email}
            </a>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy transition hover:bg-navy hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactForm />
            <div className="min-h-[400px] overflow-hidden rounded-3xl lg:min-h-full">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
