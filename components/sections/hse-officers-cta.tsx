import Link from "next/link";
import { ArrowRight, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HseOfficersCta() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 rounded-3xl bg-[#0066b2] px-8 py-10 text-center shadow-lg md:flex-row md:items-center md:justify-between md:px-12 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
              <HardHat className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                We Also Supply HSE Officers for Short and Long Term Projects
              </p>
              <p className="mt-2 max-w-md text-sm text-white/70 sm:text-base">
                Certified officers ready to embed with your project team, on-site or on-call.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-[#000] hover:bg-white/90">
              <Link href="/contact">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
