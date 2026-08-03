import { accreditations } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-navy/10 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy/50">
          Accredited &amp; Recognized By
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {accreditations.map((a) => (
            <span key={a.name} className="font-heading text-lg font-bold text-navy/70">
              {a.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
