import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const corporateBenefits = [
  "When employees are properly trained, they are more productive because they miss fewer hours due to illness and accidents.",
  "Safety awareness and appreciation for safety measures that work to reduce your legal liabilities.",
  "Active employee participation to improve workplace health and safety culture and behaviors.",
];

export function CorporateTraining() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">
            Corporate Training
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            These courses will raise the profile of health and safety in your organization, which
            will help:
          </h2>
          <ul className="mt-6 space-y-3">
            {corporateBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-navy/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm">
          <Users className="h-10 w-10 text-orange" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-xl font-bold text-navy">
            Request a Corporate Training Quote
          </h3>
          <p className="mt-2 text-sm text-navy/70">
            Tell us your team size and required certifications — we&apos;ll put together a
            tailored proposal.
          </p>
          <Button asChild size="lg" className="mt-6 w-full bg-orange text-white hover:bg-orange/90">
            <Link href="#contact">
              Request a Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
