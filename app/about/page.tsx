import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { HistoryCoverflow } from "@/components/sections/history-coverflow";
import { Button } from "@/components/ui/button";
import { trainers, historyGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Arbrit Safety Training & Consultancy - mission, history, HSE training research, and our trainers.",
};

const researchPoints = [
  "The courses clearly show the need for realistic, practical material and, where necessary, have up-to-date or revised choices.",
  "The functional aspect typically includes the current equipment used by company operators is available in all relevant courses.",
  "Provide the full range HSE capacity to provide a one-stop shop for our clients with their entire HSE needs",
  "Quality and service levels agreed and at affordable prices.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        eyebrow="Committed to Safer Workplaces Since 2006"
        description="We are committed to delivering quality, practical HSE training and consultancy that build safer workplaces and stronger safety cultures across the UAE."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0066b2]">Who We Are</p>
            <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
              Health and Safety - Mission &amp; Purpose
            </h2>
            <p className="mt-5 text-[#000]">
              There are no crossroads when it comes to health and safety training, and therefore
              our task is to provide quality, valuable training nationally in order to provide an
              increasing number of people with proper training and safe work.
            </p>
            <p className="mt-4 text-[#000]">
              Arbrit now has offices in locations in different countries, including UAE, UK, Qatar
              and India.HSE course in UAE is offered in and out of the training center in major
              business centres, and clients across all types of industries are provided with
              consulting services. We believe that our rapid growth was supported by our efforts
              to achieve quality of health and safety course training, to contribute to the
              strength of everyone, to implement new processes and technology and to consistently
              improve quality education.
            </p>
          </div>

          <div className="h-[320px] overflow-hidden rounded-2xl shadow-lg sm:h-[380px] lg:h-[420px]">
            <video controls preload="metadata" className="h-full w-full object-cover">
              <source
                src="https://arbritsafety.ae/wp-content/uploads/2024/04/Arbrit-Safety.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Since 2006"
            title="Bold History that Fuels the Future"
            description="Arbrit Safety Training and Consultancy has been rapidly expanding since the company started in 2006 and is now one of the leading HSE courses in UAE. We vow to always remain true to the key principles of the mission declaration, despite the progress. Exceptionally oriented, with internationally accepted professional standards and best practices, to provide maximum safety, learning and development."
          />

          <div className="mt-14">
            <HistoryCoverflow photos={historyGallery} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0066b2]">Research</p>
              <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
                HSE Training Research
              </h2>
              <p className="mt-5 text-[#000]">
                Arbrit courses are intended for the contractor staff to be trained on a range of
                basic skills to an international standard.
              </p>
            </div>
            <ul className="space-y-4 rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm">
              {researchPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#000]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our Team" title="Our Trainers" description="Meet the certified experts who lead our training programs." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trainers.map((trainer) => (
              <div
                key={trainer.slug}
                className="flex flex-col items-center rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-sm"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-muted shadow">
                  <Image src={trainer.image} alt={trainer.name} fill className="object-cover" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#000]">{trainer.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-orange">
                  {trainer.credentials}
                </p>
                <p className="mt-4 text-sm text-[#000]">{trainer.shortBio}</p>
                <Button asChild variant="link" className="mt-4 text-[#0066b2]">
                  <Link href={`/about/trainers/${trainer.slug}`}>
                    Read more <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
