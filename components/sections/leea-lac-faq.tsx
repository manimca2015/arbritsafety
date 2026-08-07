import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the training duration?",
    answer:
      "The LEEA Lifting Accessories Diploma (LAC) course is conducted over 5 days, combining both theoretical learning and practical assessment.",
  },
  {
    question: "Is the exam online?",
    answer:
      "Yes, the LAC exam is conducted online via the LEEA Learning Management System (LMS). Candidates must pass this assessment to receive their diploma.",
  },
  {
    question: "What is the certificate validity?",
    answer: "The LEEA Lifting Accessories Diploma (LAC) is globally recognised and remains valid for 5 years.",
  },
  {
    question: "Who should attend this course?",
    answer:
      "This course is designed for inspectors, technicians, engineers, lifting supervisors, and safety professionals involved in the inspection, testing, and compliance of lifting accessories.",
  },
];

export function LeeaLacFaq() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Common Queries" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className="rounded-2xl border border-navy/10 bg-white px-6 not-last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-[#000] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-[#000]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
