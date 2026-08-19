import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";

export function Faq() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i, 5) * 0.07}>
            <AccordionItem
              value={`item-${i}`}
              className="rounded-2xl border border-navy/10 bg-muted px-6 not-last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-[#000] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-[#000]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
