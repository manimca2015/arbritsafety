import { MapPin } from "lucide-react";

const locations = ["Dubai", "Abu Dhabi", "KSA"];

export function TrustedBy() {
  return (
    <section className="border-y border-navy/10 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block h-1 w-16 rounded-full bg-orange" aria-hidden="true" />
        <p className="mt-4 font-heading text-xl font-bold text-navy sm:text-2xl">
          Health and Safety Training Courses in
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {locations.map((location) => (
            <span
              key={location}
              className="flex items-center gap-2 rounded-full border border-navy/10 bg-muted px-4 py-2 text-sm font-semibold text-navy"
            >
              <MapPin className="h-4 w-4 text-orange" aria-hidden="true" />
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
