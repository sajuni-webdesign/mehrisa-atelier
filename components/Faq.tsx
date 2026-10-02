import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconPlus } from "./Icons";
import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24 lg:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="faq-title"
            eyebrow="Good to know"
            title={
              <>
                Questions, <em className="text-rosegold">answered</em>
              </>
            }
            intro="Everything about appointments, customisation, shipping and care. Sample FAQs for demonstration – contact Sajuni to build yours."
          />
        </div>
        <div className="lg:col-span-7">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="group border-b border-petal py-6 [&_summary::-webkit-details-marker]:hidden" name="faq">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl text-wine transition-colors hover:text-rosegold sm:text-[1.7rem]">
                  {f.q}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-petal transition-all duration-500 group-open:rotate-45 group-open:border-rosegold group-open:bg-rosegold group-open:text-ivory">
                    <IconPlus />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pr-12 leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
