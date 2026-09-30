import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrow, IconWhatsApp } from "./Icons";
import { site } from "@/lib/site";

const steps = [
  { t: "Consult", d: "A private styling session — in our Kolkata salon or on video — to understand your occasion, palette and personality.", time: "Day 1" },
  { t: "Design", d: "Hand-drawn sketches, fabric swatches and embroidery samplers, refined with you until it feels unmistakably yours.", time: "Week 1–2" },
  { t: "Craft", d: "Our karigars hand-embroider your piece on traditional adda frames — you receive progress films along the way.", time: "Week 3–10" },
  { t: "Fit & Celebrate", d: "Two couture fittings, final pressing and a hand-delivered keepsake trunk. Then — you shine.", time: "Your day" },
];

export default function Bespoke() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Mehrisa! I'd love to book a bespoke consultation.")}`;
  return (
    <section id="bespoke" aria-labelledby="bespoke-title" className="relative py-24 lg:py-36">
      <div className="container-lux">
        <SectionHeading
          id="bespoke-title"
          align="center"
          eyebrow="The bespoke journey"
          title={
            <>
              Made for you, <em className="text-rosegold">only you</em>
            </>
          }
          intro="From the first sketch to the final twirl, a couture experience designed around your story — in four graceful steps."
        />

        <ol className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden className="absolute left-0 right-0 top-[2.6rem] hidden h-px bg-gradient-to-r from-transparent via-rose to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 140} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-[5.2rem] w-[5.2rem] items-center justify-center rounded-full border border-rose bg-ivory font-display text-4xl italic text-rosegold shadow-[0_0_0_10px_var(--color-ivory)]">
                {i + 1}
              </span>
              <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">{s.time}</p>
              <h3 className="mt-2 font-display text-3xl text-wine">{s.t}</h3>
              <p className="mx-auto mt-3 max-w-[17rem] text-sm leading-relaxed text-muted">{s.d}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-16 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${site.email}?subject=Bespoke%20appointment`} className="btn btn-primary btn-shine">
            Book an appointment <IconArrow />
          </a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-wiggle">
            <IconWhatsApp width={18} height={18} /> Chat on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
