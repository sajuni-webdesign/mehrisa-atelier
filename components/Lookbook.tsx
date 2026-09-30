"use client";

import Media from "./Media";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrow } from "./Icons";
import { lookbook } from "@/lib/site";

export default function Lookbook() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section id="lookbook" aria-labelledby="lookbook-title" className="grain relative overflow-hidden bg-blush py-24 lg:py-36">
      <div className="container-lux flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          id="lookbook-title"
          eyebrow="Lookbook · Winter ’26"
          title={
            <>
              A season of <em className="text-rosegold">shaadi</em> stories
            </>
          }
          intro="Six chapters, one wedding week — styled in our newest couture, shot across the palaces of Rajasthan."
        />
        <div className="flex gap-3">
          <button onClick={() => scroll(-1)} aria-label="Previous looks" className="flex h-14 w-14 items-center justify-center rounded-full border border-wine/30 text-wine transition hover:bg-wine hover:text-ivory">
            <IconArrow className="rotate-180" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Next looks" className="flex h-14 w-14 items-center justify-center rounded-full bg-wine text-ivory transition hover:bg-rosegold">
            <IconArrow />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory scroll-px-4 gap-4 sm:scroll-px-8 lg:scroll-px-14 overflow-x-auto scroll-smooth px-4 pb-4 sm:gap-6 sm:px-8 lg:mt-20 lg:px-14"
      >
        {lookbook.map((l, i) => (
          <Reveal
            as="li"
            key={l.title}
            delay={i * 90}
            className={`group relative w-[72vw] shrink-0 snap-start sm:w-[44vw] lg:w-[27vw] ${i % 2 ? "lg:mt-20" : ""}`}
          >
            <figure>
              <div className={`relative overflow-hidden bg-petal ${i % 2 ? "aspect-[3/4] rounded-[2rem]" : "arch aspect-[3/4.2]"}`}>
                <Media
                  image={l.image}
                  video={l.video}
                  alt={l.alt}
                  sizes="(min-width:1024px) 27vw, (min-width:640px) 44vw, 72vw"
                  className="transition-transform duration-[1.6s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 font-display text-5xl italic text-ivory/90 drop-shadow">0{i + 1}</span>
              </div>
              <figcaption className="mt-5">
                <h3 className="font-display text-3xl text-wine">{l.title}</h3>
                <p className="mt-1 text-sm text-muted">{l.caption}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
        <li aria-hidden className="w-2 shrink-0" />
      </ul>
    </section>
  );
}
