import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  /** ReactNode so sections can swap copy per breakpoint inside a single heading. */
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0066b2]">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-[#000]">{description}</p>}
    </Reveal>
  );
}
