import Link from "next/link";
import { Button } from "@/components/ui/button";

const credentials = ["STI", "IOSH", "Highfield", "IRCA Lead Auditor", "RAKEZ"];

export function AboutUs() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">Who We Are</p>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">About Us</h2>
          <p className="mt-5 text-navy/70">
            We proudly introduce Arbrit Safety Training &amp; Consultancy L.L.C. as a platform for
            quality training programs with a commitment to deliver quality training classes in
            Occupational Health and Safety, STI – Scaffold Training Institute, First Aid,
            Construction Safety, Appointed person for lifting operation, Institution of
            Occupational Safety and Health (IOSH), Highfield, IRCA – Lead Auditor, RAKEZ approved
            safety training, etc.
          </p>
          <p className="mt-4 text-navy/70">
            We provide a comprehensive range of Health and safety training courses in Dubai,
            Sharjah, RAK and Abu Dhabi &amp; KSA. We educate people to help them improve their
            knowledge and skills, reduce risks, create healthier and safer workplaces for
            everyone, and improve long-term business performance.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {credentials.map((credential) => (
              <span
                key={credential}
                className="rounded-full border border-navy/10 bg-white px-4 py-1.5 text-xs font-semibold text-navy shadow-sm"
              >
                {credential}
              </span>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 bg-orange text-white hover:bg-orange/90">
            <Link href="/about">About Us</Link>
          </Button>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-3xl shadow-lg">
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
