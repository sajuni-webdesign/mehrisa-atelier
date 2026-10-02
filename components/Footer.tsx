import { site } from "@/lib/site";
import { IconInstagram, IconPinterest, IconYoutube } from "./Icons";
import { Mandala, Paisley } from "./Motif";
import DemoButton from "./DemoButton";

const cols = [
  { h: "Shop", links: ["Bridal Couture", "Lehengas", "Sarees", "Anarkali & Suits", "Indo-Western", "Kurtis"] },
  { h: "Atelier", links: ["Our Story", "Bespoke Journey", "Lookbook", "Artisans", "Journal"] },
  { h: "Care", links: ["Book Appointment", "Size Guide", "Shipping & Returns", "Garment Care", "FAQs"] },
];

export default function Footer() {
  return (
    <footer className="relative isolate mt-24 overflow-hidden bg-plum pt-20 text-petal/80 lg:mt-36 lg:pt-28">
      <div aria-hidden className="zari-border absolute inset-x-0 top-0 h-2 opacity-70" />
      <Mandala className="animate-spin-slow pointer-events-none absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] text-champagne/[0.07] [animation-duration:120s] lg:-right-24 lg:h-[46rem] lg:w-[46rem]" />
      <div className="container-lux">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-3xl tracking-[0.3em] text-ivory">MEHRISA</p>
            <p className="-mt-1 font-script text-2xl text-rose">atelier</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Luxury, handcrafted Indian couture. Bridal lehengas, handwoven sarees and
              festive wear for the modern woman.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { I: IconInstagram, l: "Instagram" },
                { I: IconPinterest, l: "Pinterest" },
                { I: IconYoutube, l: "YouTube" },
              ].map(({ I, l }) => (
                <a key={l} href={site.designerUrl} target="_blank" rel="noopener" aria-label={`${l} (demo link to sajuni.in)`} className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory transition hover:border-champagne hover:bg-champagne hover:text-plum">
                  <I />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            {cols.map((c) => (
              <div key={c.h}>
                <h2 className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-champagne">{c.h}</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l}>
                      {l === "Book Appointment" ? (
                        <DemoButton className="link-underline text-left transition-colors hover:text-ivory">{l}</DemoButton>
                      ) : (
                        <a href="#top" className="link-underline transition-colors hover:text-ivory">{l}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <address className="not-italic lg:col-span-3">
            <h2 className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-champagne">Contact the designer – Sajuni</h2>
            <p className="mt-5 text-sm leading-relaxed">{site.address}</p>
            <p className="mt-4 text-sm">{site.hours}</p>
            <p className="mt-1 text-[0.7rem] italic text-petal/60">Sample opening hours for demonstration.</p>
            <p className="mt-4 space-y-1 text-sm">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block text-ivory hover:text-champagne">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="block text-ivory hover:text-champagne">{site.email}</a>
            </p>
          </address>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 py-8 text-xs sm:flex-row sm:items-center">
          <p>
            © Demo website designed by Sajuni ·{" "}
            <a href={site.designerUrl} target="_blank" rel="noopener" className="text-champagne hover:text-ivory">
              sajuni.in
            </a>
          </p>
          <p className="flex gap-6">
            <a href="#top" className="hover:text-ivory">Privacy</a>
            <a href="#top" className="hover:text-ivory">Terms</a>
            <a href="#top" className="hover:text-ivory">Accessibility</a>
          </p>
        </div>
      </div>

      {/* Paisley procession — a quiet, embroidered sign-off */}
      <div aria-hidden className="flex items-end justify-center gap-6 overflow-hidden pb-8 text-champagne/[0.14] sm:gap-10">
        {Array.from({ length: 11 }, (_, i) => (
          <Paisley
            key={i}
            className={`shrink-0 ${i % 2 ? "h-12 w-8 -scale-x-100" : "h-16 w-11"} ${i === 5 ? "!h-24 !w-16 text-champagne/30" : ""}`}
          />
        ))}
      </div>
      <div aria-hidden className="zari-border h-2 opacity-60" />
    </footer>
  );
}
