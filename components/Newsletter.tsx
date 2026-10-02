"use client";

import { IconArrow, IconSparkle } from "./Icons";
import { useStore } from "./StoreProvider";

export default function Newsletter() {
  const { showDemo } = useStore();
  return (
    <section aria-labelledby="circle-title" className="px-3 sm:px-6">
      <div className="grain relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rosegold via-mauve to-wine px-6 py-20 text-center text-ivory sm:px-12 lg:py-28">
        <div aria-hidden className="absolute -left-20 -top-20 -z-10 h-80 w-80 rounded-full bg-rose/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-10 -z-10 h-96 w-96 rounded-full bg-champagne/30 blur-3xl" />
        <IconSparkle className="mx-auto h-5 w-5 text-champagne" />
        <p className="mt-6 font-script text-4xl text-champagne sm:text-5xl">Join the</p>
        <h2 id="circle-title" className="font-display text-5xl leading-none sm:text-7xl lg:text-8xl">
          Mehrisa Circle
        </h2>
        <p className="mx-auto mt-6 max-w-md text-petal/90">
          First look at new collections, private trunk-show invites and a welcome note (sample offer for demonstration).
        </p>

        <form
          onSubmit={(e) => {
            // Demo only: nothing is sent or stored — clear the field and show the demo notice.
            e.preventDefault();
            e.currentTarget.reset();
            showDemo();
          }}
          className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-ivory sm:p-1.5"
        >
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            className="flex-1 rounded-full bg-ivory px-6 py-4 text-sm text-ink placeholder:text-muted/70 focus:outline-none sm:bg-transparent"
          />
          <button type="submit" className="btn btn-primary btn-nudge !py-4">
            Subscribe <IconArrow />
          </button>
        </form>
        <p className="mt-5 text-[0.65rem] uppercase tracking-[0.2em] text-petal/70">No spam · Unsubscribe anytime</p>
      </div>
    </section>
  );
}
