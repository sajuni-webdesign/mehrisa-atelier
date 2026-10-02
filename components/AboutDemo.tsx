import Reveal from "./Reveal";
import { IconArrowUpRight, IconWhatsApp } from "./Icons";
import { site } from "@/lib/site";

export default function AboutDemo() {
  return (
    <section id="about-demo" aria-labelledby="about-demo-title" className="pt-24 lg:pt-36">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-rosegold" /> Portfolio demo <span className="h-px w-8 bg-rosegold" />
          </p>
          <h2 id="about-demo-title" className="mt-5 font-display text-[2.6rem] leading-[1.02] text-wine sm:text-6xl">
            About this demo
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            This is a demo boutique &amp; bridal couture website designed and developed by Sajuni (Saptashi Saha), a website
            designer &amp; developer based in Silchar, Assam. It shows what a modern boutique website can include: collection
            categories, product showcase with prices, lookbook, bespoke appointment journey, reviews, FAQs, WhatsApp enquiries,
            newsletter, mobile-friendly design and fast performance built with Next.js &amp; React. The boutique name, people,
            address, products, prices and reviews on this site are sample content.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={site.designerUrl} target="_blank" rel="noopener" className="btn btn-primary btn-shine">
              Get a website like this <IconArrowUpRight />
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener" className="btn btn-ghost btn-wiggle">
              <IconWhatsApp width={18} height={18} /> WhatsApp Sajuni
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
