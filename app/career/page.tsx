import type { Metadata } from "next";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { CareerForm } from "@/components/sections/career-form";
import { careerJobOpenings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Career",
  description: "Welcome to HSE job Finder - HSE job openings and recruitment across the UAE.",
};

const jobSeekerOffers = [
  "Competitive salary for those wishing to apply and get selected for the vacancies.",
  "Health and safety trainings with all the accreditions for those who want to get into the industry",
];

const employerOffers = [
  "As specialist in health and safety, we review and advice on policy and working practices for organisations of all kinds and sizes.",
  "We provide a true & comprehensive ‘360’ recruitment service.",
  "Short term and long term commitments.",
];

export default function CareerPage() {
  return (
    <>
      <PageHeader title="Career" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]} />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Welcome to HSE job Finder
          </h2>
          <p className="mt-5 text-navy/70">
            We provide human resource in the field of HSE through out UAE. You can find job
            openings related to construction, manufacturing etc. We select proffessionals with
            high ability and help the companies to manage their HSE human resource needs.
          </p>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">We Expertise</h2>
          <p className="mt-5 text-navy/70">
            So whether you are wanting to adbance in your health and safety career or looking to
            break into the industry, we can definitely help you!
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-navy">
                What we offer Job Seekers
              </h2>
              <ul className="mt-6 space-y-3">
                {jobSeekerOffers.map((offer) => (
                  <li key={offer} className="flex items-start gap-3 text-sm text-navy/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                    {offer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-navy">
                What we offer employers and recruiters
              </h2>
              <ul className="mt-6 space-y-3">
                {employerOffers.map((offer) => (
                  <li key={offer} className="flex items-start gap-3 text-sm text-navy/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Current Job Openings
          </h2>
          <p className="mt-5 max-w-2xl text-navy/70">
            We are continuously looking for talented people who would be interested in long-term
            careers with us. Our employment environment offers great opportunities learning,
            developing and contributing in different functions, regions and countries.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careerJobOpenings.map((job) => (
              <div
                key={job}
                className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">{job}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <CareerForm />
        </div>
      </section>
    </>
  );
}
