import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, Flag, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { HistoryCoverflow } from "@/components/sections/history-coverflow";
import { Button } from "@/components/ui/button";
import { PosterVideo } from "@/components/ui/poster-video";
import { HseOfficersCta } from "@/components/sections/hse-officers-cta";
import { LinkedinIcon } from "@/components/icons/social-icons";
import { trainers, historyGallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Arbrit Safety Training & Consultancy - mission, history, training approach, and our trainers.",
};

const milestones = [
  {
    icon: Flag,
    year: "2006",
    title: "Founded in Dubai",
    description:
      "Arbrit Safety Training & Consultancy opens with a single focus: practical, accredited HSE training.",
  },
  {
    icon: BadgeCheck,
    year: "Licensed",
    title: "First LEEA Training Partner in UAE & KSA",
    description:
      "Appointed an official LEEA Licensed Training Partner for the Foundation Certificate (FOU) and LAC Diploma.",
  },
  {
    icon: Users,
    year: "Today",
    title: "15,000+ delegates trained",
    description:
      "50+ accredited courses delivered from offices across the UAE, UK, Qatar and India.",
  },
];

const approachPoints = [
  "Every course is grounded in real, practical scenarios, and we revise the material whenever standards or site practice change.",
  "Delegates train on the same equipment they use at work, so what they learn transfers straight to the job.",
  "One provider for your whole HSE programme, from entry-level awareness through to accredited international qualifications.",
  "Service levels agreed up front, at prices that let you train your entire workforce, not just a handful of people.",
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
              Health and safety is not an area where standards can slip. Arbrit Safety Training
              &amp; Consultancy delivers accredited HSE training that gives workers the practical
              skills to do their jobs safely, and gives employers the confidence that their teams
              are competent, compliant and ready for the risks of the job.
            </p>
            <p className="mt-4 text-[#000]">
              Since 2006 we have grown into a training provider with offices across the UAE, UK,
              Qatar and India. We run courses at our own training centres and on site at client
              premises, and we advise organisations across every major industry on their wider HSE
              needs. That growth comes from getting the fundamentals right: qualified trainers,
              current equipment, course material we keep up to date, and a standard of delivery we
              hold ourselves to on every programme.
            </p>
          </div>

          <PosterVideo
            src="https://arbritsafety.ae/wp-content/uploads/2024/04/Arbrit-Safety.mp4"
            poster="/about/arbrit-video-poster.webp"
            posterAlt="Arbrit Safety team member working at a desk in the Dubai office"
            label="Play the Arbrit Safety company video"
            duration="0:59"
            sizeClassName="h-[320px] sm:h-[380px] lg:h-[420px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            posterPosition="object-[center_15%]"
          />
        </div>
      </section>

      <HseOfficersCta />

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Since 2006"
            title="Bold History that Fuels the Future"
            description="Arbrit Safety Training and Consultancy has grown steadily since 2006 and is now one of the leading HSE training providers in the UAE. However far we have come, the principles we started with have not changed: internationally recognised standards, proven best practice, and training that genuinely improves safety on the job."
          />

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {milestones.map((milestone, index) => (
              <li
                key={milestone.year}
                className="relative flex flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {index < milestones.length - 1 && (
                  <span
                    className="absolute left-full top-[3.25rem] hidden h-px w-6 bg-[#0066b2]/25 md:block"
                    aria-hidden="true"
                  />
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066b2]/10 text-[#0066b2]">
                  <milestone.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 font-heading text-2xl font-bold text-[#0066b2]">{milestone.year}</p>
                <h3 className="mt-1 text-base font-semibold text-[#000]">{milestone.title}</h3>
                <p className="mt-2 text-sm text-[#000]/80">{milestone.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <HistoryCoverflow photos={historyGallery} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0066b2]">How We Train</p>
              <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
                Our Training Approach
              </h2>
              <p className="mt-5 text-[#000]">
                Arbrit courses are intended for the contractor staff to be trained on a range of
                basic skills to an international standard.
              </p>
            </div>
            <ul className="space-y-4 rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm">
              {approachPoints.map((point) => (
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
                className="group flex flex-col items-center rounded-3xl border border-navy/10 bg-[#0066b2] p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white/30 shadow transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name}, safety trainer at Arbrit Safety`}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">{trainer.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {trainer.credentials}
                </p>
                {trainer.linkedin ? (
                  <a
                    href={trainer.linkedin}
                    target={trainer.linkedin.startsWith("http") ? "_blank" : undefined}
                    rel={trainer.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`${trainer.name} on LinkedIn`}
                    className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
                <p className="mt-4 text-sm text-white/90">{trainer.shortBio}</p>
                <Button asChild variant="link" className="mt-4 text-white">
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
