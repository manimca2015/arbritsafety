import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const consultancyFaqs = [
  {
    question: "How quickly can you mobilise a consultant to our site?",
    answer:
      "For audits and assessments in the UAE we can usually be on site within a week of scope sign-off. Placed HSE officers and longer secondments typically mobilise within two weeks, subject to visa and site induction requirements. Saudi engagements are coordinated through our Riyadh office.",
  },
  {
    question: "Do you work outside Dubai?",
    answer:
      "Yes. We operate from offices in Dubai, Abu Dhabi and Riyadh and deliver consultancy across the UAE and the Kingdom of Saudi Arabia. Travel and accommodation for remote sites are quoted transparently as part of the proposal.",
  },
  {
    question: "How is a consultancy engagement priced?",
    answer:
      "Audits, studies and assessments are quoted as a fixed fee against a defined scope and number of site days. Placed HSE personnel and ongoing advisory support are charged monthly. You get the full commercial picture before anything starts — there are no open-ended retainers.",
  },
  {
    question: "What do we actually receive at the end?",
    answer:
      "A written report with findings graded by risk and supported by photographic evidence, a corrective action plan naming an owner and target date for each item, and any documentation produced during the engagement — HSE plans, risk assessments, procedures or study reports. Close-out verification is available as an add-on.",
  },
  {
    question: "Can you help us achieve ISO 45001 certification?",
    answer:
      "Yes. We run the gap analysis, build the policy and procedure set, establish the internal audit programme and support you through the certification audit itself. We are not a certification body, so there is no conflict of interest in us preparing you for one.",
  },
  {
    question: "Can consultancy and training be combined?",
    answer:
      "That is usually the point. When an audit uncovers a competency gap, the same team can close it with accredited IOSH, NEBOSH, LEEA, Highfield or Scaffold Training Institute courses delivered at our centre or on your site — so the finding and the fix do not sit with two different suppliers.",
  },
  {
    question: "Do you provide HSE officers on secondment?",
    answer:
      "Yes. We screen and verify HSE candidates against your project requirements and place them full-time, part-time or as short-term cover. They remain supported by our senior consultants, so you get a team behind the person on your site.",
  },
];

export function ConsultancyFaq() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions clients ask before they call"
        />
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {consultancyFaqs.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i, 5) * 0.06}>
              <AccordionItem
                value={`consultancy-faq-${i}`}
                className="rounded-2xl border border-navy/10 bg-white px-6 not-last:border-b-0"
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
