"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/lib/site";

type Store = {
  bag: string[];
  wishlist: string[];
  toast: string | null;
  addToBag: (id: string, name: string) => void;
  toggleWishlist: (id: string, name: string) => void;
  showDemo: () => void;
};

const StoreContext = createContext<Store | null>(null);
const KEY = "mehrisa-store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [bag, setBag] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const demoCta = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "{}");
      if (Array.isArray(saved.bag)) setBag(saved.bag);
      if (Array.isArray(saved.wishlist)) setWishlist(saved.wishlist);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ bag, wishlist }));
    } catch {}
  }, [bag, wishlist]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const addToBag = useCallback((id: string, name: string) => {
    setBag((b) => [...b, id]);
    setToast(`${name} added to your bag`);
  }, []);

  const toggleWishlist = useCallback((id: string, name: string) => {
    setWishlist((w) => {
      const has = w.includes(id);
      setToast(has ? `${name} removed from wishlist` : `${name} saved to wishlist ♡`);
      return has ? w.filter((x) => x !== id) : [...w, id];
    });
  }, []);

  // Demo-site notice: shown instead of booking / ordering / subscribing. Sends no data anywhere.
  const showDemo = useCallback(() => setDemoOpen(true), []);

  useEffect(() => {
    if (!demoOpen) return;
    demoCta.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDemoOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [demoOpen]);

  const value = useMemo(
    () => ({ bag, wishlist, toast, addToBag, toggleWishlist, showDemo }),
    [bag, wishlist, toast, addToBag, toggleWishlist, showDemo]
  );

  return (
    <StoreContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full bg-plum/95 px-6 py-3 text-xs tracking-wide text-ivory shadow-2xl backdrop-blur transition-all duration-500 ${
          toast ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {toast}
      </div>

      {demoOpen && (
        <div className="fixed inset-0 z-[95] flex items-end justify-center p-4 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="demo-title">
          <div className="intro-fade absolute inset-0 bg-plum/55 backdrop-blur-sm" onClick={() => setDemoOpen(false)} />
          <div className="intro-fade relative w-full max-w-md overflow-hidden rounded-[1.75rem] bg-ivory text-center shadow-[0_40px_80px_-30px_rgba(46,12,27,0.7)]">
            <div aria-hidden className="zari-border h-2 opacity-80" />
            <div className="px-6 pb-7 pt-7 sm:px-9 sm:pb-9">
              <p className="eyebrow">Demo website</p>
              <p id="demo-title" className="mt-4 font-display text-2xl leading-snug text-wine sm:text-[1.7rem]">
                This is a demo website. Want a boutique website like this, with collections and WhatsApp orders?
              </p>
              <p className="mt-3 text-sm text-muted">Contact Sajuni on WhatsApp.</p>
              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
                <a ref={demoCta} href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  WhatsApp Sajuni
                </a>
                <button type="button" onClick={() => setDemoOpen(false)} className="btn btn-ghost">
                  Continue browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
  return ctx;
}
