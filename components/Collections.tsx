import Media from "./Media";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight } from "./Icons";
import { collections } from "@/lib/site";

const layout = [
  "col-span-2 row-span-2 lg:col-span-5 lg:row-span-2",
  "lg:col-span-4",
  "row-span-2 lg:col-span-3 lg:row-span-2",
  "lg:col-span-4",
  "col-span-2 lg:col-span-6",
  "col-span-2 lg:col-span-6",
];

export default function Collections() {
  return (
    <section id="collections" aria-labelledby="collections-title" className="relative py-24 lg:py-36">
      <div className="container-lux">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="collections-title"
            eyebrow="Shop by collection"
            title={
              <>
                Dressed for every <em className="text-rosegold">celebration</em>
              </>
            }
          />
          <Reveal delay={200} className="max-w-sm">
            <p className="text-[0.95rem] leading-relaxed text-muted">
              From the first haldi to the final vidaai — six curated worlds of Indian couture, each piece finished by hand in
              our atelier.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[15rem] grid-cols-2 gap-3 sm:auto-rows-[20rem] sm:gap-4 lg:mt-20 lg:grid-cols-12 lg:auto-rows-[19rem] lg:gap-5">
          {collections.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 120} variant="mask" className={`group relative overflow-hidden rounded-[1.75rem] bg-blush ${layout[i]}`}>
              <a href="#new-arrivals" className="absolute inset-0 z-10" aria-label={`Shop ${c.title}`} />
              <Media
                image={c.image}
                video={c.video}
                alt={c.alt}
                sizes={i === 0 ? "(min-width:1024px) 42vw, 100vw" : i > 3 ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 30vw, 50vw"}
                className="object-[50%_22%]"
              />
              {c.video && (
                <span className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-plum/40 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-ivory backdrop-blur-md sm:left-7 sm:top-7">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose" /> In motion
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/10 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-ivory sm:p-7">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.28em] text-champagne sm:text-[0.62rem]">{c.count}</p>
                  <h3 className={`mt-1 font-display leading-none ${i === 0 ? "text-4xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-4xl"}`}>{c.title}</h3>
                  <p className="mt-2 hidden max-w-[16rem] text-sm text-petal/90 opacity-0 transition-all duration-700 group-hover:opacity-100 sm:block sm:translate-y-2 sm:group-hover:translate-y-0">
                    {c.note}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/40 backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-champagne group-hover:bg-champagne group-hover:text-wine sm:h-14 sm:w-14">
                  <IconArrowUpRight />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
