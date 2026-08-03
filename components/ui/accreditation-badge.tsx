import type { Accreditation } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

export function AccreditationBadge({ name, description }: Accreditation) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
      <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-orange" aria-hidden="true" />
      <div>
        <p className="font-heading text-base font-semibold text-navy">{name}</p>
        <p className="mt-1 text-sm text-navy/70">{description}</p>
      </div>
    </div>
  );
}
