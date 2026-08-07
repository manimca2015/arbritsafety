import { Award, Building2, Globe2, MessageCircle, Phone, Target, TrendingUp, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: Target,
    title: "Technical Precision",
    description:
      "Our curriculum is meticulously aligned with the latest LEEA technical standards and global safety regulations.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Learn from LEEA approved instructors with decades of hands-on experience in oil & gas, construction, and offshore.",
  },
  {
    icon: Award,
    title: "18+ Years Legacy",
    description:
      "Established in 2006, we have a proven track record of empowering thousands of safety professionals across the GCC.",
  },
  {
    icon: Globe2,
    title: "Global Recognition",
    description: "Our LEEA certificates are internationally recognised, opening doors to career opportunities worldwide.",
  },
  {
    icon: Building2,
    title: "Elite Facilities",
    description: "State-of-the-art practical training areas and modern classrooms designed for immersive learning.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Beyond training, we provide a pathway for advanced LEEA diplomas and professional networking.",
  },
];

export function LeeaOurCommitment() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Commitment"
          title="The Arbrit Edge"
          description="We go beyond simple certification to ensure every student gains real-world competence."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2] transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-[#0066b2]">{title}</h3>
              <p className="mt-2 text-sm text-[#000]">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+971586695300"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0066b2] px-8 text-base font-semibold text-white shadow-md shadow-[#0066b2]/20 transition hover:bg-[#0066b2]/90 hover:shadow-lg hover:shadow-[#0066b2]/30"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call For Consultation
          </a>
          <a
            href="https://wa.me/971586695300"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#0066b2]/30 px-8 text-base font-semibold text-[#0066b2] transition hover:bg-[#0066b2] hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
