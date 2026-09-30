"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

type Props = {
  src: string;
  srcMobile?: string;
  poster: string;
  posterMobile?: string;
  className?: string;
  label: string;
  /** Above-the-fold hero: show the poster immediately, stream the video only after the page has loaded. */
  priority?: boolean;
  onTimeUpdate?: (t: number) => void;
};

/**
 * Performance-first ambient video:
 *  - picks a lighter / portrait file on phones,
 *  - below-the-fold clips don't fetch even their poster until they approach the viewport,
 *  - the hero clip waits for window "load" + idle time so fonts and text paint first,
 *  - everything pauses when scrolled out of view.
 */
const SmartVideo = forwardRef<HTMLVideoElement, Props>(function SmartVideo(
  { src, srcMobile, poster, posterMobile, className = "", label, priority = false, onTimeUpdate },
  forwarded
) {
  const ref = useRef<HTMLVideoElement>(null);
  useImperativeHandle(forwarded, () => ref.current as HTMLVideoElement);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    const still = small && posterMobile ? posterMobile : poster;
    const file = small && srcMobile ? srcMobile : src;

    const showPoster = () => {
      if (v.poster.endsWith(still)) return;
      v.poster = still;
      v.style.backgroundImage = `url(${still})`;
    };

    let ready = !priority; // non-hero clips may load as soon as they are near
    let visible = false;
    let loaded = false;
    const start = () => {
      if (!ready || !visible) return;
      if (!loaded) {
        v.src = file;
        loaded = true;
      }
      if (!reduce) v.play().catch(() => {});
    };

    if (priority) {
      showPoster();
      // Small grace period after "load" so fonts, text and the poster win the bandwidth race.
      const kick = () =>
        window.setTimeout(() => {
          ready = true;
          start();
        }, 600);
      if (document.readyState === "complete") kick();
      else window.addEventListener("load", kick, { once: true });
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          showPoster();
          start();
        } else if (loaded) {
          v.pause();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src, srcMobile, poster, posterMobile, priority]);

  return (
    <video
      ref={ref}
      className={className}
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      onTimeUpdate={onTimeUpdate ? (e) => onTimeUpdate(e.currentTarget.currentTime) : undefined}
    />
  );
});

export default SmartVideo;
