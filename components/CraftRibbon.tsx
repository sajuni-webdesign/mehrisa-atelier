import Reveal from "./Reveal";

type C = { name: string; note: string; icon: React.ReactNode };

const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const crafts: C[] = [
  {
    name: "Zardozi",
    note: "Gold-thread embroidery",
    icon: (
      <svg viewBox="0 0 48 48" {...s}>
        <path d="M10 38 38 10" />
        <ellipse cx="36.5" cy="11.5" rx="1.4" ry="3" transform="rotate(45 36.5 11.5)" />
        <path d="M34 14c-8 2-4 10-12 12s-10 8-6 12" strokeDasharray="2 2.5" />
        <circle cx="12" cy="36" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Chikankari",
    note: "Lucknowi shadow work",
    icon: (
      <svg viewBox="0 0 48 48" {...s}>
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <path key={r} d="M24 24c-3-4-3-9 0-13 3 4 3 9 0 13Z" transform={`rotate(${r} 24 24)`} />
        ))}
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        {[30, 90, 150, 210, 270, 330].map((r) => (
          <circle key={r} cx="24" cy="8" r=".9" fill="currentColor" transform={`rotate(${r} 24 24)`} />
        ))}
      </svg>
    ),
  },
  {
    name: "Banarasi",
    note: "Handloom silk brocade",
    icon: (
      <svg viewBox="0 0 48 48" {...s}>
        <path d="M24 6 42 24 24 42 6 24Z" />
        <path d="M24 13 35 24 24 35 13 24Z" />
        <path d="M15 15l18 18M33 15 15 33" strokeDasharray="1.5 2.5" />
        <circle cx="24" cy="24" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Kanjeevaram",
    note: "Temple-border silk",
    icon: (
      <svg viewBox="0 0 48 48" {...s}>
        <path d="M8 40h32M11 40V33h26v7M14 33v-6h20v6M17 27v-6h14v6M20 21v-6h8v6M22 15l2-6 2 6" />
        <circle cx="24" cy="30" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Gota Patti",
    note: "Rajasthani appliqué",
    icon: (
      <svg viewBox="0 0 48 48" {...s}>
        <path d="M24 42C12 34 10 20 24 6c14 14 12 28 0 36Z" />
        <path d="M24 42V12" />
        <path d="M24 20l-6-4M24 27l-8-4M24 34l-7-3M24 20l6-4M24 27l8-4M24 34l7-3" />
      </svg>
    ),
  },
];

/** A still, embroidered band of the atelier's signature crafts — no scrolling. */
export default function CraftRibbon() {
  return (
    <section aria-label="Our signature crafts" className="relative bg-wine text-ivory">
      <div aria-hidden className="zari-border h-2 opacity-70" />
      <ul className="container-lux grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {crafts.map((c, i) => (
          <Reveal
            as="li"
            key={c.name}
            delay={i * 90}
            className={`group flex flex-col items-center px-3 py-6 text-center sm:py-9 lg:py-11 ${
              i < crafts.length - 1 ? "lg:border-r lg:border-champagne/15" : ""
            } ${i === crafts.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
          >
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16 border border-champagne/35 text-champagne transition-all duration-700 group-hover:scale-110 group-hover:border-champagne group-hover:bg-champagne/10">
              <span className="h-9 w-9 transition-transform duration-700 group-hover:rotate-12">{c.icon}</span>
            </span>
            <span className="mt-3 font-display text-[1.5rem] sm:text-[1.7rem] italic leading-none text-champagne">{c.name}</span>
            <span className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ivory/85">{c.note}</span>
          </Reveal>
        ))}
      </ul>
      <div aria-hidden className="zari-border h-2 opacity-70" />
    </section>
  );
}
