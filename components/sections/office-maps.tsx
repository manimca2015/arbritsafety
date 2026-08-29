import { ExternalLink, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { offices } from "@/lib/data";

/**
 * Address-search embed, used for offices with no verified listing on file.
 * Google resolves the address string, so the pin is approximate — see the
 * `mapEmbed` note on the Office type.
 */
function searchEmbed(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

function directionsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function OfficeMaps() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {offices.map((office, i) => (
        <Reveal key={office.label} delay={Math.min(i, 5) * 0.08}>
          <figure className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm">
            <div className="relative h-52 w-full bg-muted">
              <iframe
                src={office.mapEmbed ?? searchEmbed(office.address)}
                title={`Map showing the Arbrit Safety office in ${office.label}`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <figcaption className="flex flex-1 flex-col p-5">
              <h3 className="font-heading text-base font-bold text-[#0066b2]">{office.label}</h3>
              <p className="mt-2 flex items-start gap-2 text-sm leading-snug text-[#000]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {office.address}
              </p>
              <a
                href={directionsHref(office.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#0066b2] hover:underline"
              >
                Get directions
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
