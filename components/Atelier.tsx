import Image from "next/image";
import Reveal from "./Reveal";
import SmartVideo from "./SmartVideo";
import Counter from "./Counter";
import { img } from "@/lib/site";

const crafts = ["Zardozi", "Chikankari", "Kantha", "Gota Patti", "Aari", "Mukaish", "Resham", "Pearl-work"];
const stats = [
  { to: 12, suffix: "", label: "Years of couture" },
  { to: 180, suffix: "+", label: "Master artisans" },
  { to: 4000, suffix: "+", label: "Brides dressed" },
  { to: 27, suffix: "", label: "Countries shipped" },
];

export default function Atelier() {
  return (
    <section id="atelier" aria-labelledby="atelier-title" className="relative overflow-hidden py-24 lg:py-36">
      <div className="container-lux grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-rosegold" /> Inside the atelier
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 id="atelier-title" className="mt-5 font-display text-[2.6rem] leading-[1.02] text-wine sm:text-6xl lg:text-[4.2rem]">
              Where every thread <em className="text-rosegold">tells a tale</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 leading-relaxed text-muted">
              Behind a blue door on Camac Street, 180 karigars — many from families who embroidered for royal courts — work
              beside our master tailors. Seams are sewn with precision; every motif, sequin and pearl is placed by hand —
              with needles, adda frames, patience and generations of instinct.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Signature crafts">
              {crafts.map((c) => (
                <li key={c} className="rounded-full border border-petal bg-pearl px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-wine">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-petal pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="flex flex-col-reverse">
                <dt className="mt-2 text-[0.64rem] uppercase tracking-[0.24em] text-muted">{s.label}</dt>
                <dd className="font-display text-5xl text-wine lg:text-6xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-7">
          <Reveal variant="mask" className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[16/12] lg:aspect-[4/4.4]">
            <SmartVideo
              src="/videos/atelier-stitch.mp4"
              poster="/videos/atelier-poster.jpg"
              label="Close-up of an artisan's needle stitching through fabric"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory sm:bottom-8 sm:left-8">
              <p className="max-w-xs font-display text-2xl italic leading-snug sm:text-3xl">“A single motif can take a karigar three days.”</p>
              <span className="hidden items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-champagne sm:flex">
                <span className="h-2 w-2 animate-pulse rounded-full bg-rose" /> Live from the frame
              </span>
            </div>
          </Reveal>

          <Reveal delay={350} className="absolute -left-4 -top-10 w-[36%] sm:-left-8 lg:-left-16 lg:w-[32%]">
            <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-ivory shadow-2xl">
              <Image
                src={img("1763400126795-d83e07d3449e")}
                alt="Macro of silk embroidery with gold and blue threads"
                fill
                sizes="(min-width:1024px) 18vw, 36vw"
                className="animate-spin-slow object-cover [animation-duration:60s]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
