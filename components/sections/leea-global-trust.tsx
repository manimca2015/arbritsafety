import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reviews = [
  {
    name: "Amsil Iqbal",
    role: "Verified Student",
    quote:
      "The LEEA Foundation Certificate course was exceptional. The instructors are truly industry experts and the facilities in Dubai are top-notch. Highly recommended for safety professionals.",
  },
  {
    name: "Hamza Mehar",
    role: "Safety Supervisor",
    quote:
      "Arbrit provides a highly professional environment for LEEA training. The Foundation course was easy to follow and helped build a strong understanding of lifting principles and safety practices.",
  },
  {
    name: "Mekalesh Jijuashok",
    role: "Operations Lead",
    quote:
      "I’m very satisfied with the training. The course covered all the fundamentals, and the practical examples made it easier to understand real-world lifting scenarios.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A11.99 11.99 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.27A11.99 11.99 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.35.6 4.6 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.27 6.61l4 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

export function LeeaGlobalTrust() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Global Trust"
          title="Student Success Stories"
          description="Join thousands of satisfied professionals who have advanced their careers with Arbrit Safety."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-3xl border border-navy/10 bg-muted p-8 shadow-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 text-[#000]">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066b2] text-sm font-semibold text-white"
                >
                  {initials(review.name)}
                </span>
                <div>
                  <p className="font-heading font-semibold text-[#000]">{review.name}</p>
                  <p className="text-sm text-navy/60">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/cciJYuNWaQn3dzVB7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-8 text-base font-semibold text-[#000] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <GoogleIcon />
            Read More Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
