import Link from "next/link";
import { Button } from "@/components/ui/button";

const credentials = ["STI", "IOSH", "Highfield", "IRCA Lead Auditor", "RAKEZ"];

export function AboutUs() {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-navy px-6 py-16 sm:px-12 md:py-24 lg:px-16">
          <div className="mx-auto max-w-xl lg:mx-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">Who We Are</p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">About Us</h2>
            <p className="mt-5 text-white/75">
              We proudly introduce Arbrit Safety Training &amp; Consultancy L.L.C. as a platform for
              quality training programs with a commitment to deliver quality training classes in
              Occupational Health and Safety, STI – Scaffold Training Institute, First Aid,
              Construction Safety, Appointed person for lifting operation, Institution of
              Occupational Safety and Health (IOSH), Highfield, IRCA – Lead Auditor, RAKEZ approved
              safety training, etc.
            </p>
            <p className="mt-4 text-white/75">
              We provide a comprehensive range of Health and safety training courses in Dubai,
              Sharjah, RAK and Abu Dhabi &amp; KSA. We educate people to help them improve their
              knowledge and skills, reduce risks, create healthier and safer workplaces for
              everyone, and improve long-term business performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white"
                >
                  {credential}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8 bg-orange text-white hover:bg-orange/90">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/yIJkf2ja3Gw"
            title="Arbrit Safety Training & Consultancy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
