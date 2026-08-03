import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HseOfficersCta() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-navy px-8 py-10 text-center shadow-lg md:flex-row md:justify-between md:px-12 md:text-left">
          <p className="font-heading text-xl font-bold text-white sm:text-2xl">
            We also Supply HSE Officers for short term and long term projects
          </p>
          <Button asChild size="lg" className="shrink-0 bg-white text-navy hover:bg-white/90">
            <Link href="#contact">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
