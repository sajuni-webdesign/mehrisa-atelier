import Image from "next/image";
import Reveal from "./Reveal";
import { IconArrow } from "./Icons";
import { img } from "@/lib/site";
import SmartVideo from "./SmartVideo";

const promises = [
  ["400+", "hours of hand embroidery", "Every bridal lehenga is worked stitch by stitch by our karigars — zardozi, dabka, resham and pearl."],
  ["24ct", "gold-dipped zari", "Heirloom-grade threads sourced from Varanasi & Surat, made to be handed down generations."],
  ["∞", "lifetime alterations", "Your lehenga grows with you — re-fits, re-styling and care, complimentary for life."],
];

export default function BridalFeature() {
  return (
    <section id="bridal" aria-labelledby="bridal-title" className="relative isolate overflow-hidden bg-plum py-24 text-ivory lg:py-36">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-wine blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-mauve/40 blur-3xl" />
      </div>
      <p aria-hidden className="pointer-events-none absolute -top-8 right-0 select-none font-script text-[30vw] leading-none text-ivory/[0.04] lg:text-[20vw]">
        Dulhan
      </p>

      <div className="container-lux grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Imagery */}
        <div className="relative lg:col-span-6">
          <Reveal variant="mask" className="arch relative mx-auto aspect-[3/4] w-[82%] overflow-hidden sm:w-[70%] lg:w-[80%]">
            <SmartVideo
              src="/videos/bridal-portrait.mp4"
              poster="/videos/bridal-portrait.jpg"
              label="Bride in a gold zardozi lehenga and red dupatta with a jadau matha patti"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={300} className="absolute -bottom-10 right-0 w-[42%] sm:right-[6%] lg:-right-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-plum shadow-2xl">
              <Image
                src={img("1740431377901-c2f28d50c759")}
                alt="Close-up of a bride in blush lehenga with maang tikka"
                fill
                sizes="(min-width:1024px) 18vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={450} className="absolute left-0 top-10 hidden sm:block lg:-left-2">
            <div className="rounded-full border border-champagne/40 bg-plum/70 px-5 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-champagne backdrop-blur">
              Bridal Couture ’26
            </div>
          </Reveal>
        </div>

        {/* Story */}
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 !text-champagne">
              <span className="h-px w-8 bg-champagne" /> The Mehrisa bride
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 id="bridal-title" className="mt-5 font-display text-[2.8rem] leading-[1] sm:text-6xl lg:text-[4.6rem]">
              Your love story, <em className="text-zari">hand-embroidered.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg leading-relaxed text-petal/80">
              In a private suite at our atelier, sip rose chai while our couturiers sketch the lehenga only you could wear —
              your colours, your motifs, even your initials hidden in the zari. Then 40 artisans bring it to life by hand.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-8">
            {promises.map(([n, t, d], i) => (
              <Reveal as="li" key={t} delay={250 + i * 120} className="grid grid-cols-[5.5rem_1fr] gap-5 border-t border-ivory/10 pt-7">
                <span className="font-display text-5xl leading-none text-champagne">{n}</span>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ivory">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-petal/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={600} className="mt-12 flex flex-wrap gap-4">
            <a href="#bespoke" className="btn btn-light btn-glow btn-nudge">
              Begin your bridal journey <IconArrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
