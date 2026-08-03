import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HseOfficersCta() {
  return (
    <section className="bg-navy py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-heading text-xl font-bold text-white sm:text-2xl">
          We also Supply HSE Officers for short term and long term projects
        </p>
        <Button asChild size="lg" className="shrink-0 bg-white text-navy hover:bg-white/90">
          <Link href="#contact">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
