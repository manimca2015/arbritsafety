import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ConsultancyEnquiry } from "@/components/sections/consultancy-enquiry";
import { ConsultancyOverview } from "@/components/sections/consultancy-overview";
import { ConsultancySectors } from "@/components/sections/consultancy-sectors";
import { ConsultancyServices } from "@/components/sections/consultancy-services";
import { ConsultancyTeam } from "@/components/sections/consultancy-team";
import { ConsultancyTrustStrip } from "@/components/sections/consultancy-trust-strip";
import { OfficesContactBlock } from "@/components/sections/offices-contact-block";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "HSE Consultancy Services | Audits, HAZOP & SIL, Project Support",
  description:
    "Independent HSE consultancy from Arbrit Safety across Dubai, Abu Dhabi and Saudi Arabia — safety audits, HAZOP and SIL studies, ISO 45001 systems, risk assessment and project HSE support.",
};

const dubaiPhone =
  contactInfo.phones.find((phone) => phone.label === "Dubai")?.number ?? contactInfo.phones[0].number;

export default function ConsultancyPage() {
  return (
    <>
      <PageHeader
        title="HSE Consultancy"
        eyebrow="Dubai · Abu Dhabi · Kingdom of Saudi Arabia"
        description="Cut your risk, pass the audit, and get your people home safe — with HSE consultants who walk your site, not just your paperwork."
        image="/hero/slide-1-construction-safety.jpg"
        imageAlt="Arbrit HSE consultants on a construction site in the UAE"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Consultancy" }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-white font-semibold text-[#0066b2] hover:bg-white/90">
            <Link href="#consultancy-enquiry">
              Request a Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/70 bg-transparent font-semibold text-white hover:bg-white/10"
          >
            <Link href={`tel:${dubaiPhone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {dubaiPhone}
            </Link>
          </Button>
        </div>
      </PageHeader>

      <ConsultancyTrustStrip />
      <ConsultancyOverview />
      <ConsultancyServices />
      <ConsultancyEnquiry />
      <ConsultancySectors />
      <ConsultancyTeam />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
                Contact Details
              </h2>
              <p className="mt-4 max-w-2xl text-[#000]">
                Three offices across the UAE and Saudi Arabia. Call the one nearest your site, or
                send us the details and we will route your enquiry to the right consultant.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:shrink-0">
              <Button asChild size="lg" className="bg-[#0066b2] text-white hover:bg-[#0066b2]/90">
                <Link href="#consultancy-enquiry">
                  Request a Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0066b2] text-[#0066b2] hover:bg-[#0066b2]/5"
              >
                <Link href={`tel:${dubaiPhone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Talk to our consultants
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-10">
            <OfficesContactBlock showMaps />
          </div>
        </div>
      </section>
    </>
  );
}
