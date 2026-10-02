"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site";
import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

const INTERVAL = 5500;

export default function Testimonials() {
  const [i, setI] = useState(0);
  // Only fetch portraits that have been shown or are up next — keeps the section light.
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0, 1]));
  useEffect(() => {
    setSeen((s) => (s.has(i) && s.has((i + 1) % testimonials.length) ? s : new Set([...s, i, (i + 1) % testimonials.length])));
  }, [i]);
  const go = (d: number) => setI((x) => (x + d + testimonials.length) % testimonials.length);

  // Continuous loop: each slide schedules the next; manual navigation restarts the timer.
  useEffect(() => {
    const t = setTimeout(() => setI((x) => (x + 1) % testimonials.length), INTERVAL);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section
      aria-labelledby="love-title"
      aria-roledescription="carousel"
      className="relative overflow-hidden bg-pearl py-24 lg:py-36"
    >
      <div className="container-lux grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="relative mx-auto w-[70%] sm:w-[50%] lg:col-span-4 lg:w-full">
          <div className="arch relative aspect-[3/4] overflow-hidden bg-petal">
            {testimonials.map((t, k) => seen.has(k) && (
              <Image
                key={t.name}
                src={t.image}
                alt={`${t.name}, Mehrisa client`}
                fill
                sizes="(min-width:1024px) 30vw, 60vw"
                className={`object-cover transition-all duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] ${k === i ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
              />
            ))}
          </div>
          <div aria-hidden className="absolute -right-6 -top-6 font-display text-[9rem] leading-none text-rose">“</div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-rosegold" /> Love letters
          </p>
          <p className="mt-2 text-[0.75rem] italic text-muted">Sample reviews shown for demonstration.</p>
          <h2 id="love-title" className="sr-only">What our brides say</h2>

          <div className="mt-8 grid" aria-live="polite">
            {testimonials.map((t, k) => (
              <figure
                key={t.name}
                aria-hidden={k !== i}
                className={`[grid-area:1/1] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${k === i ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-6 opacity-0"}`}
              >
                <blockquote className="font-display text-[1.75rem] leading-snug text-wine sm:text-4xl lg:text-[2.7rem]">
                  <em>{t.quote}</em>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />
                  <span>
                    <span className="block font-sans text-sm font-semibold uppercase tracking-[0.2em] text-wine">{t.name}</span>
                    <span className="text-xs text-muted">{t.detail}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-petal pt-8">
            <button onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-wine/30 text-wine transition hover:bg-wine hover:text-ivory">
              <IconArrow className="rotate-180" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, k) => (
                <button key={t.name} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} aria-current={k === i} className="py-3">
                  <span className={`relative block h-[3px] overflow-hidden rounded-full transition-all duration-500 ${k === i ? "w-14 bg-petal" : "w-5 bg-petal hover:bg-rose"}`}>
                    {k === i && (
                      <span
                        key={i}
                        className="absolute inset-0 origin-left rounded-full bg-rosegold"
                        style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next testimonial" className="flex h-12 w-12 items-center justify-center rounded-full bg-wine text-ivory transition hover:bg-rosegold">
              <IconArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
