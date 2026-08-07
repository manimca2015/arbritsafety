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
    answer: "The course spans 3 days, including structured training sessions and practical learning.",
  },
  {
    question: "Is the exam online?",
    answer:
      "Yes, a 50-minute online examination is conducted through the LEEA Learning Management System (LMS). Results are usually available shortly after completion.",
  },
  {
    question: "What is the certificate validity?",
    answer:
      "The LEEA Foundation Certificate does not have a fixed validity period and serves as an entry-level qualification toward advanced LEEA certifications.",
  },
  {
    question: "Who should attend this course?",
    answer:
      "This course is ideal for beginners, entry-level workers, and professionals looking to build a basic understanding of lifting equipment, safety practices, and operations.",
  },
];

export function LeeaFaq() {
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
