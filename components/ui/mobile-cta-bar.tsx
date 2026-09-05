import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { contactInfo } from "@/lib/data";

/**
 * Fixed bottom action bar shown on phones only.
 * Desktop already surfaces these CTAs in the header/top bar, so it hides at `md`.
 */
export function MobileCtaBar() {
  const phone = contactInfo.phones[0];

  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 shadow-[0_-8px_24px_-12px_rgba(18,59,109,0.45)] backdrop-blur-sm md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={`tel:${phone.number.replace(/\s+/g, "")}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#0066b2] bg-white text-sm font-semibold text-[#0066b2] transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>

        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0066b2] text-sm font-semibold text-white shadow-sm transition active:scale-[0.98] hover:bg-[#0066b2]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
