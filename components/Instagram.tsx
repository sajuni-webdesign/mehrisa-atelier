import Media from "./Media";
import Reveal from "./Reveal";
import { IconInstagram } from "./Icons";
import { instagram, site } from "@/lib/site";

export default function Instagram() {
  return (
    <section aria-labelledby="ig-title" className="pb-24 lg:pb-36">
      <div className="container-lux text-center">
        <Reveal>
          <p className="eyebrow">Follow the atelier</p>
          <h2 id="ig-title" className="mt-4 font-display text-4xl text-wine sm:text-5xl">
            <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="link-underline">
              @{site.instagram}
            </a>
          </h2>
        </Reveal>
      </div>
      <ul className="mt-12 grid grid-cols-3 gap-1.5 px-1.5 sm:gap-3 sm:px-3 lg:grid-cols-6">
        {instagram.map((p, i) => (
          <Reveal as="li" key={p.image} delay={i * 70} variant="mask" className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
            <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" aria-label={`View on Instagram: ${p.alt}`} className="absolute inset-0 block">
              <Media image={p.image} video={p.video} alt={p.alt} sizes="(min-width:1024px) 17vw, 33vw" />
              <span className="absolute inset-0 z-10 flex items-center justify-center bg-wine/50 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <IconInstagram width={28} height={28} />
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
