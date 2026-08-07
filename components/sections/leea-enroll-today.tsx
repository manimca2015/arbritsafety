import { Clock3, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeeaEnrollForm } from "@/components/sections/leea-enroll-form";

export function LeeaEnrollToday() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Enroll Today" title="Secure Your Future in Lifting Safety" align="left" />

            <p className="mt-6 text-[#000]">
              Arbrit Safety is the premier destination for LEEA certification in the Middle East. Our graduates
              are highly sought after in Oil &amp; Gas, Construction, and Offshore sectors worldwide.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-muted p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-[#0066b2]">Regional Headquarters</p>
                  <p className="mt-1 text-sm text-[#000]">
                    Office 305, Al Twar Center, Al Nahda Street, Al Qusais, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-muted p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <Clock3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-[#0066b2]">24/7 Support</p>
                  <p className="mt-1 text-sm text-[#000]">Message us for instant course details &amp; availability.</p>
                  <a href="tel:+971586695300" className="mt-1 block text-sm font-semibold text-orange">
                    +971 58 669 5300
                  </a>
                </div>
              </div>
            </div>
          </div>

          <LeeaEnrollForm />
        </div>
      </div>
    </section>
  );
}
