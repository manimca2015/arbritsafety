import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { trainers } from "@/lib/data";

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
      <PageHeader title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Health and Safety - Mission &amp; Purpose
          </h2>
          <p className="mt-5 text-navy/70">
            There are no crossroads when it comes to health and safety training, and therefore our
            task is to provide quality, valuable training nationally in order to provide an
            increasing number of people with proper training and safe work.
          </p>
          <p className="mt-4 text-navy/70">
            Arbrit now has offices in locations in different countries, including UAE, UK, Qatar
            and India.HSE course in UAE is offered in and out of the training center in major
            business centres, and clients across all types of industries are provided with
            consulting services. We believe that our rapid growth was supported by our efforts to
            achieve quality of health and safety course training, to contribute to the strength of
            everyone, to implement new processes and technology and to consistently improve
            quality education.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
            <video controls preload="metadata" className="h-full w-full">
              <source
                src="https://arbritsafety.ae/wp-content/uploads/2024/04/Arbrit-Safety.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Bold History that Fuels the Future
          </h2>
          <p className="mt-5 text-navy/70">
            Arbrit Safety Training and Consultancy has been rapidly expanding since the company
            started in 2006 and is now one of the leading HSE courses in UAE. We vow to always
            remain true to the key principles of the mission declaration, despite the progress.
          </p>
          <p className="mt-4 text-navy/70">
            Exceptionally oriented, with internationally accepted professional standards and best,
            practices, to provide maximum safety, learning and development.
          </p>

          <h2 className="mt-14 font-heading text-3xl font-bold text-navy sm:text-4xl">
            HSE Training Research
          </h2>
          <p className="mt-5 text-navy/70">
            Arbrit courses are intended for the contractor staff to be trained on a range of basic
            skills to an international standard.
          </p>
          <ul className="mt-6 space-y-3">
            {researchPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-navy/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
            Our Trainers
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trainers.map((trainer) => (
              <div
                key={trainer.slug}
                className="flex flex-col items-center rounded-3xl border border-navy/10 bg-muted p-8 text-center shadow-sm"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow">
                  <Image src={trainer.image} alt={trainer.name} fill className="object-cover" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">{trainer.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-orange">
                  {trainer.credentials}
                </p>
                <p className="mt-4 text-sm text-navy/70">{trainer.shortBio}</p>
                <Button asChild variant="link" className="mt-4 text-orange">
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
