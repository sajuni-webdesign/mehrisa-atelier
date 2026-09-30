"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { useStore } from "./StoreProvider";
import { IconBag, IconClose, IconHeart, IconHome, IconSearch } from "./Icons";

const announcements = [
  "Complimentary shipping across India",
  "Bridal appointments now open for Winter ’26",
  "Insured express delivery to 27+ countries",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(0);
  const [active, setActive] = useState("#top");
  const { bag, wishlist } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setInterval(() => setMsg((m) => (m + 1) % announcements.length), 3800);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Scroll-spy: the active item is the nearest section whose top has passed 40% of the viewport
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.4;
      let current = navLinks[0].href;
      let best = -Infinity;
      for (const l of navLinks) {
        const top = document.querySelector(l.href)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && top > best) {
          best = top;
          current = l.href;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Announcement ribbon */}
        <div
          className={`overflow-hidden whitespace-nowrap bg-wine text-center text-[0.56rem] font-medium uppercase tracking-[0.16em] text-champagne transition-all duration-500 sm:text-[0.66rem] sm:tracking-[0.28em] ${
            scrolled ? "h-0" : "h-8"
          }`}
        >
          <p key={msg} className="intro-fade flex h-8 items-center justify-center px-4">
            {announcements[msg]}
          </p>
        </div>

        <div
          className={`border-b backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "border-petal/60 bg-ivory/90 text-wine shadow-[0_10px_40px_-20px_rgba(91,26,50,0.35)]"
              : "border-ivory/15 bg-plum/30 text-ivory"
          }`}
        >
          <nav aria-label="Primary" className="container-lux grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:h-20">
            <div className="flex items-center gap-8">
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="group -ml-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
              >
                <span className="h-px w-6 bg-current transition-all group-hover:w-4" />
                <span className="h-px w-6 bg-current" />
              </button>
              <ul className="hidden items-center gap-1 xl:flex">
                {navLinks.slice(0, 4).map((l) => (
                  <NavItem key={l.href} href={l.href} label={l.label} active={active === l.href} light={!scrolled} />
                ))}
              </ul>
            </div>

            <a href="#top" aria-label={`${site.name} — home`} className="flex flex-col items-center leading-none">
              <span className="font-display text-[1.7rem] font-medium tracking-[0.34em] lg:text-[2rem]">MEHRISA</span>
              <span className={`-mt-0.5 font-script text-base lg:text-lg ${scrolled ? "text-rosedeep" : "text-champagne"}`}>atelier</span>
            </a>

            <div className="flex items-center justify-end gap-4">
              <ul className="hidden items-center gap-1 xl:flex">
                {navLinks.slice(4).map((l) => (
                  <NavItem key={l.href} href={l.href} label={l.label} active={active === l.href} light={!scrolled} />
                ))}
              </ul>
              <div className="flex items-center gap-1 sm:gap-2">
                <button aria-label="Search" className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-current/10 sm:flex">
                  <IconSearch />
                </button>
                <a href="#new-arrivals" aria-label={`Wishlist, ${wishlist.length} items`} className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-current/10">
                  <IconHeart />
                  {wishlist.length > 0 && <Badge n={wishlist.length} />}
                </a>
                <a href="#new-arrivals" aria-label={`Shopping bag, ${bag.length} items`} className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-current/10">
                  <IconBag />
                  {bag.length > 0 && <Badge n={bag.length} />}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile / tablet drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 xl:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-plum/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`grain absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-pearl p-8 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-script text-3xl text-rosegold">Mehrisa</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-full text-wine hover:bg-blush">
              <IconClose />
            </button>
          </div>
          <ul className="mt-12 space-y-5">
            {navLinks.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }} className={`transition-all duration-700 ${open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}>
                <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 font-display text-4xl text-wine">
                  <span className="font-sans text-[0.65rem] tracking-widest text-rosedeep">0{i + 1}</span>
                  {l.label}
                  {active === l.href && <span className="h-1.5 w-1.5 self-center rounded-full bg-rosegold" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-2 border-t border-petal pt-6 text-sm text-muted">
            <p>{site.hours}</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block text-wine">{site.phone}</a>
          </div>
        </aside>
      </div>
    </>
  );
}

function NavItem({ href, label, active, light }: { href: string; label: string; active: boolean; light: boolean }) {
  const isHome = href === "#top";
  return (
    <li>
      <a
        href={href}
        aria-current={active ? "page" : undefined}
        className={`relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
          active
            ? light
              ? "bg-champagne text-plum"
              : "bg-wine text-ivory"
            : light
              ? "text-ivory/90 hover:bg-ivory/10 hover:text-ivory"
              : "text-wine hover:bg-blush"
        }`}
      >
        {isHome && <IconHome />}
        {label}
      </a>
    </li>
  );
}

function Badge({ n }: { n: number }) {
  return (
    <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rosegold px-1 text-[0.6rem] font-bold text-ivory">
      {n}
    </span>
  );
}
