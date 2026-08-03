type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-navy/70">{description}</p>}
    </div>
  );
}
