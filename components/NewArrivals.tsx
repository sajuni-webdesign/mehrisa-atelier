"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconHeart, IconPlus } from "./Icons";
import { useStore } from "./StoreProvider";
import { formatINR, products, type Product } from "@/lib/site";

const filters = ["All", "Bridal", "Lehenga", "Saree", "Anarkali", "Indo-Western", "Kurta"] as const;

export default function NewArrivals() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(() => (active === "All" ? products : products.filter((p) => p.category === active)), [active]);

  return (
    <section id="new-arrivals" aria-labelledby="new-title" className="bg-pearl py-24 lg:py-36">
      <div className="container-lux">
        <div className="flex flex-col items-start gap-10">
          <SectionHeading
            id="new-title"
            eyebrow="Just arrived"
            title={
              <>
                The festive <em className="text-rosegold">edit</em>
              </>
            }
            intro="Fresh off the embroidery frame — limited pieces for the season of shaadis, pujas and soirées."
          />
          <div role="tablist" aria-label="Filter by category" className="no-scrollbar -mx-4 flex w-[calc(100%+2rem)] gap-2 overflow-x-auto px-4 lg:mx-0 lg:w-auto lg:flex-wrap lg:px-0">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  active === f ? "border-wine bg-wine text-ivory" : "border-petal text-wine hover:border-rosegold hover:bg-blush"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
          {list.map((p, i) => (
            <Reveal as="li" key={p.id} delay={(i % 4) * 90}>
              <ProductCard p={p} priority={false} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <a href="#collections" className="btn btn-halo text-wine before:bg-wine hover:text-ivory">View all 400+ pieces</a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, priority }: { p: Product; priority: boolean }) {
  const { wishlist, toggleWishlist, addToBag } = useStore();
  const saved = wishlist.includes(p.id);

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl bg-blush">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          priority={priority}
          sizes="(min-width:1024px) 23vw, 48vw"
          className="object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
        {p.tag && (
          <span className="absolute left-1/2 top-[12%] -translate-x-1/2 rounded-full bg-ivory/90 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-wine backdrop-blur sm:text-[0.6rem]">
            {p.tag}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(p.id, p.name)}
          aria-label={saved ? `Remove ${p.name} from wishlist` : `Save ${p.name} to wishlist`}
          aria-pressed={saved}
          className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110 ${
            saved ? "bg-rosegold text-ivory" : "bg-ivory/85 text-wine"
          }`}
        >
          <IconHeart filled={saved} width={18} height={18} />
        </button>
        <button
          onClick={() => addToBag(p.id, p.name)}
          className="absolute inset-x-3 bottom-3 mr-12 flex items-center justify-center gap-2 rounded-full bg-wine/95 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ivory opacity-100 transition-all duration-500 hover:bg-rosegold lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        >
          <IconPlus width={14} height={14} /> <span className="hidden sm:inline">Add to bag</span><span className="sm:hidden">Add</span>
        </button>
      </div>
      <div className="mt-4 px-1">
        <p className="text-[0.6rem] uppercase tracking-[0.22em] text-rosedeep">{p.fabric}</p>
        <h3 className="mt-1.5 font-display text-xl leading-tight text-wine sm:text-2xl">{p.name}</h3>
        <p className="mt-1.5 flex items-baseline gap-2 text-sm font-medium text-ink">
          {formatINR(p.price)}
          {p.compareAt && <s className="text-xs text-muted/70">{formatINR(p.compareAt)}</s>}
        </p>
      </div>
    </article>
  );
}
