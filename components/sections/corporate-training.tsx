import Link from "next/link";
import { CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const corporateBenefits = [
  "On-site training delivered at your project location",
  "Flexible scheduling around shift and project timelines",
  "Certified instructors across lifting, scaffolding, and fire safety",
  "Group and bulk enrollment pricing available",
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
            We Also Supply HSE Officers for Short &amp; Long Term Projects
          </h2>
          <p className="mt-4 text-navy/70">
            Beyond training, Arbrit provides qualified HSE officers and tailored corporate
            training programs so your workforce stays compliant and protected.
          </p>
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
            <Link href="/contact#corporate">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
