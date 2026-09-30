"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Store = {
  bag: string[];
  wishlist: string[];
  toast: string | null;
  addToBag: (id: string, name: string) => void;
  toggleWishlist: (id: string, name: string) => void;
};

const StoreContext = createContext<Store | null>(null);
const KEY = "mehrisa-store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [bag, setBag] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

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

  const value = useMemo(
    () => ({ bag, wishlist, toast, addToBag, toggleWishlist }),
    [bag, wishlist, toast, addToBag, toggleWishlist]
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
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
  return ctx;
}
