"use client";

import { useEffect, useState } from "react";
import SmartVideo from "./SmartVideo";

/** Chapter cues are timed to the crossfades baked into each montage file. */
const DESKTOP = [
  { at: 0, title: "Shringar", note: "Tresses & adornment" },
  { at: 5, title: "Payal", note: "Silver at her feet" },
  { at: 9.5, title: "Kamarbandh", note: "The waist jewel" },
  { at: 14, title: "Chooda", note: "Bangles of blessing" },
  { at: 18.5, title: "The Reveal", note: "Her moment" },
];
const MOBILE = [
  { at: 0, title: "Lehenga", note: "Hand-embroidered red" },
  { at: 5, title: "Dupatta", note: "Veiled in zari" },
  { at: 9.5, title: "Nath", note: "Pearls & polki" },
  { at: 14, title: "The Reveal", note: "Her moment" },
];

export default function HeroVideo() {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(0);
  const chapters = mobile ? MOBILE : DESKTOP;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobile(mq.matches);
  }, []);

  const onTime = (t: number) => {
    let i = 0;
    chapters.forEach((c, k) => {
      if (t >= c.at) i = k;
    });
    setActive((prev) => (prev === i ? prev : i));
  };

  return (
    <>
      {/* Server-rendered still paints instantly (right crop per device) while the film streams in after load */}
      <picture>
        <source media="(max-width: 767px)" srcSet="/videos/hero-bride-mobile.jpg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/videos/hero-bride.jpg" alt="" fetchPriority="high" decoding="async" className="hero-kenburns absolute inset-0 h-full w-full object-cover" />
      </picture>
      <SmartVideo
        priority
        src="/videos/hero-bride.mp4"
        srcMobile="/videos/hero-bride-mobile.mp4"
        poster="/videos/hero-bride.jpg"
        posterMobile="/videos/hero-bride-mobile.jpg"
        label="An Indian bride getting ready — hair, payal, kamarbandh, chooda and the final reveal"
        onTimeUpdate={onTime}
        className="hero-kenburns absolute inset-0 h-full w-full object-cover"
      />

      {/* Chapter rail — desktop */}
      <ol aria-hidden className="absolute right-10 top-1/2 z-20 hidden -translate-y-1/2 space-y-5 xl:right-14 lg:block">
        {chapters.map((c, i) => (
          <li key={c.title} className={`flex items-center justify-end gap-4 transition-all duration-700 ${i === active ? "opacity-100" : "opacity-45"}`}>
            <span className="text-right">
              <span className={`block font-display text-xl italic leading-none transition-all duration-700 ${i === active ? "text-champagne" : "text-ivory"}`}>
                {c.title}
              </span>
              <span className={`mt-1 block text-[0.56rem] uppercase tracking-[0.28em] text-ivory/70 transition-all duration-700 ${i === active ? "max-h-4" : "max-h-0 overflow-hidden"}`}>
                {c.note}
              </span>
            </span>
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className={`absolute inset-0 rounded-full border transition-all duration-700 ${i === active ? "scale-100 border-champagne" : "scale-50 border-transparent"}`} />
              <span className={`h-1.5 w-1.5 rounded-full ${i === active ? "bg-champagne" : "bg-ivory/70"}`} />
            </span>
          </li>
        ))}
      </ol>

      {/* Chapter caption — mobile */}
      <div aria-hidden className="absolute right-4 top-40 z-20 flex sm:top-36 items-center gap-2 rounded-full border border-ivory/20 bg-plum/30 px-3 py-1.5 backdrop-blur-md lg:hidden">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-champagne" />
        <span key={active} className="intro-fade font-display text-sm italic text-ivory">
          {String(active + 1).padStart(2, "0")} · {chapters[active].title}
        </span>
      </div>
    </>
  );
}
