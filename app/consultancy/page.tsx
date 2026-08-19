import type { Metadata } from "next";
import { ClipboardCheck, HardHat, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { OfficesContactBlock } from "@/components/sections/offices-contact-block";

export const metadata: Metadata = {
  title: "Consultancy",
  description:
    "HSE consultancy services from Arbrit Safety Training & Consultancy across Dubai, Abu Dhabi and the Kingdom of Saudi Arabia.",
};

const services = [
  { label: "Project HSE support", icon: HardHat },
  { label: "Safety audit", icon: ClipboardCheck },
  { label: "Hazop/SIL studies", icon: ShieldAlert },
];

export default function ConsultancyPage() {
  return (
    <>
      <PageHeader
        title="Consultancy"
        eyebrow="Expert HSE Guidance for Every Sector"
        description="HSE consultancy services from Arbrit Safety Training & Consultancy across Dubai, Abu Dhabi and the Kingdom of Saudi Arabia."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Consultancy" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
            Consultancy Services
          </h2>
          <p className="mt-5 text-[#000]">
            We specialize in HSE Human resource that cater accross different sectors including:
            Health care, Construction and Engineering, Manufacturing etc. We maintain long term
            relationships with our clients by simply analyzing and assisting them through every
            step of the way.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {services.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-muted p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-[#000]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
            Contact Details
          </h2>
          <div className="mt-10">
            <OfficesContactBlock />
          </div>
        </div>
      </section>
    </>
  );
}
