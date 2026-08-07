import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { LeeaFoundationEnquiryForm } from "@/components/sections/leea-foundation-enquiry-form";
import { LeeaAnnouncementTicker } from "@/components/sections/leea-announcement-ticker";
import { LeeaTrustedWorldwide } from "@/components/sections/leea-trusted-worldwide";
import { LeeaFoundationCourseOverview } from "@/components/sections/leea-foundation-course-overview";
import { LeeaCompetenceExcellence } from "@/components/sections/leea-competence-excellence";
import { LeeaTrainingRoadmap } from "@/components/sections/leea-training-roadmap";
import { LeeaCertification } from "@/components/sections/leea-certification";
import { LeeaOurCommitment } from "@/components/sections/leea-our-commitment";
import { LeeaGlobalTrust } from "@/components/sections/leea-global-trust";
import { LeeaHandsOnExperience } from "@/components/sections/leea-hands-on-experience";
import { LeeaGlobalStandards } from "@/components/sections/leea-global-standards";
import { LeeaFaq } from "@/components/sections/leea-faq";
import { LeeaEnrollToday } from "@/components/sections/leea-enroll-today";

export const metadata: Metadata = {
  title: "LEEA Foundation Certificate (FOU) Training in the UAE",
  description:
    "Arbrit Safety is the first LEEA Licensed Training Partner (LTP) in the UAE. Get certified with globally recognised LEEA accreditation.",
};

const highlights = [
  "Official Contract with LEEA for UAE",
  "Internationally recognised certification",
  "Practical + theoretical training by industry experts",
  "Designed for high-risk industries: oil & gas, construction",
];

export default function LeeaFoundationCertificatePage() {
  return (
    <>
      <section id="enquiry" className="relative overflow-hidden bg-muted">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-1.5 text-sm font-semibold text-[#0066b2]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Authorised LEEA Training Provider
            </span>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-[#0066b2] sm:text-5xl">
              LEEA Foundation Certificate (FOU) Training in the UAE
            </h1>

            <p className="mt-5 max-w-xl text-lg text-[#000]">
              Arbrit Safety is the First LEEA Licensed Training Partner (LTP) in UAE. Get Certified with Globally
              Recognised LEEA Accreditation.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-medium text-[#000]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#leea-name"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-orange px-8 text-base font-semibold text-white shadow-md shadow-orange/20 transition hover:bg-orange/90 hover:shadow-lg hover:shadow-orange/30"
            >
              Book Your Seat Now
            </a>
          </div>

          <LeeaFoundationEnquiryForm />
        </div>
      </section>

      <LeeaAnnouncementTicker />
      <LeeaTrustedWorldwide />
      <LeeaFoundationCourseOverview />
      <LeeaCompetenceExcellence />
      <LeeaTrainingRoadmap />
      <LeeaCertification />
      <LeeaOurCommitment />
      <LeeaGlobalTrust />
      <LeeaHandsOnExperience />
      <LeeaGlobalStandards />
      <LeeaFaq />
      <LeeaEnrollToday />
    </>
  );
}
