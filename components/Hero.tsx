import HeroVideo from "./HeroVideo";
import { IconArrow, IconCalendar } from "./Icons";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate min-h-[100svh] overflow-hidden bg-plum text-ivory">
      <HeroVideo />

      {/* Cinematic grading: wine wash from the left, soft vignette, readable base */}
      <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-r from-plum/85 via-plum/35 to-transparent" />
      <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-t from-plum/90 via-transparent to-plum/40" />
      <div aria-hidden className="absolute inset-0 z-10 shadow-[inset_0_0_180px_rgba(46,12,27,0.55)]" />
      <div aria-hidden className="absolute inset-0 z-10 bg-plum/30 lg:hidden" />
      <div aria-hidden className="absolute inset-y-0 right-0 z-10 hidden w-[30%] bg-gradient-to-l from-plum/75 via-plum/30 to-transparent lg:block" />

      <div className="container-lux relative z-20 flex min-h-[100svh] flex-col justify-end pb-20 pt-32 sm:pb-24 lg:justify-center lg:pb-20 lg:pt-36 [@media(max-height:820px)]:lg:pt-32">
        <div className="max-w-[40rem]">
          <p className="intro-fade inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-champagne/30 bg-plum/25 px-4 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-champagne backdrop-blur-md sm:text-[0.64rem] sm:tracking-[0.3em]" style={{ ["--delay" as string]: "150ms" }}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose" />
            Bridal & Festive Couture<span className="hidden sm:inline"> · Winter ’26</span>
          </p>

          <p className="intro-fade mt-6 font-script text-[2rem] leading-none text-champagne sm:text-[2.6rem]" style={{ ["--delay" as string]: "300ms" }}>
            for the bride in you
          </p>

          <h1 id="hero-title" className="mt-1 font-display text-[3.3rem] font-normal leading-[0.92] tracking-[-0.02em] sm:text-[4.8rem] lg:text-[5.6rem] xl:text-[6.4rem] [@media(max-height:820px)]:lg:text-[4.8rem]">
            <span className="intro-line block overflow-hidden pb-1">
              <span style={{ ["--delay" as string]: "400ms" }}>
                Couture, <em className="font-normal text-petal">woven</em>
              </span>
            </span>
            <span className="intro-line block overflow-hidden pb-3">
              <span className="flex items-center gap-4 sm:gap-6" style={{ ["--delay" as string]: "550ms" }}>
                <span className="font-sans text-[0.22em] font-semibold uppercase not-italic tracking-[0.4em] text-champagne/90">in</span>
                <em className="text-zari font-medium">grace.</em>
                <span aria-hidden className="hidden h-px flex-1 max-w-32 bg-gradient-to-r from-champagne/80 to-transparent sm:block" />
              </span>
            </span>
          </h1>

          <p className="intro-fade mt-5 max-w-md text-[0.95rem] leading-relaxed text-ivory/85" style={{ ["--delay" as string]: "800ms" }}>
            Heirloom bridal lehengas, handwoven Banarasi sarees and festive couture — hand-embroidered by master artisans,
            tailored to the woman you are becoming.
          </p>

          <div className="intro-fade mt-8 flex flex-wrap items-center gap-3 sm:gap-4" style={{ ["--delay" as string]: "950ms" }}>
            <a href="#collections" className="btn btn-light btn-shine btn-shine-gold btn-glow btn-nudge">
              Explore Collections <IconArrow />
            </a>
            <span className="relative inline-flex">
              <a href="#bespoke" className="btn btn-halo-dark btn-wiggle text-champagne hover:text-plum">
                <IconCalendar /> Book a Bridal Visit
              </a>
              <span className="pointer-events-none absolute -top-2.5 right-6 flex items-center gap-1.5 rounded-full bg-rose px-2.5 py-1 text-[0.52rem] font-bold uppercase tracking-[0.18em] text-plum shadow-lg">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum" /> Complimentary
              </span>
            </span>
          </div>

          <dl className="intro-fade mt-10 hidden [@media(max-height:820px)]:mt-7 max-w-md grid-cols-3 gap-6 border-t border-ivory/15 pt-5 sm:grid" style={{ ["--delay" as string]: "1100ms" }}>
            {[
              ["12", "Years of couture"],
              ["4k+", "Brides dressed"],
              ["180", "Artisan hands"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col-reverse">
                <dt className="mt-1 text-[0.58rem] uppercase tracking-[0.22em] text-ivory/65">{l}</dt>
                <dd className="font-display text-3xl text-champagne">{n}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Saree-border trim along the hero's lower edge */}
      <div aria-hidden className="zari-border absolute inset-x-0 bottom-0 z-20 h-2 opacity-80" />
    </section>
  );
}
