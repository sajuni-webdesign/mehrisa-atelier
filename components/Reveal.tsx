"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  variant?: "fade" | "mask";
} & React.HTMLAttributes<HTMLElement>;

/** Lightweight scroll reveal — one shared IntersectionObserver, zero animation libs. */
let observer: IntersectionObserver | null = null;
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer!.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
  }
  return observer;
}

export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, variant = "fade", style, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);
  return (
    <Tag
      ref={ref}
      className={`${variant === "mask" ? "reveal-mask" : "reveal"} ${className}`}
      style={{ ...style, ["--delay" as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
