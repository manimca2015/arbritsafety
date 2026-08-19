import { MapPin } from "lucide-react";

const locations = [
  { label: "Dubai", country: "United Arab Emirates" },
  { label: "Abu Dhabi", country: "United Arab Emirates" },
  { label: "KSA", country: "Kingdom of Saudi Arabia" },
];

function LocationRun({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-x-6 pr-6"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {locations.map(({ label, country }) => (
        <div key={label} className="flex shrink-0 items-center gap-x-6">
          <span className="whitespace-nowrap text-sm font-semibold text-[#000]">
            {label}
            <span className="ml-1 font-normal text-[#000]/50">— {country}</span>
          </span>
          <span className="h-4 w-px shrink-0 bg-navy/15" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

export function LocationsStrip() {
  return (
    <section className="border-y border-navy/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-4 md:flex-row md:gap-6 md:py-5">
        <p className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0066b2] sm:text-base">
          <MapPin className="h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
          Health and Safety Training Courses in
        </p>

        <div className="group relative w-full min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_2rem,black_calc(100%-2rem),transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <LocationRun />
            <LocationRun ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
