import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { contactInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title="Join the Community of HSE Professionals"
          description="Send us your details and our team will get back to you with course and scheduling options."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
              {contactInfo.phones.map((phone) => (
                <p key={phone.label} className="flex items-center gap-3 text-sm text-navy/80">
                  <Phone className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                  <a href={`tel:${phone.number.replace(/\s+/g, "")}`} className="hover:text-orange">
                    {phone.number}
                  </a>
                  <span className="text-navy/50">— {phone.label}</span>
                </p>
              ))}
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <Mail className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-orange">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-3 text-sm text-navy/80">
                <MapPin className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" /> {contactInfo.address}
              </p>
              <p className="pl-8 text-sm text-navy/50">{contactInfo.ksaEntity}</p>
            </div>
            <div className="min-h-[220px] flex-1 overflow-hidden rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.005021211739!2d55.369079374853165!3d25.27041652873225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4359aaf3fcb3%3A0xd79a9fbb46a30a3d!2sArbrit%20Safety%20Training%20and%20Consultancy!5e0!3m2!1sen!2sin!4v1785752871035!5m2!1sen!2sin"
                width="600"
                height="450"
                className="h-full min-h-[220px] w-full border-0"
                title="Arbrit Safety Training and Consultancy location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
