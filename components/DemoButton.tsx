"use client";

import { useStore } from "./StoreProvider";

/** A CTA that opens the "this is a demo website" notice instead of booking / ordering. */
export default function DemoButton({ className = "", children }: { className?: string; children: React.ReactNode }) {
  const { showDemo } = useStore();
  return (
    <button type="button" onClick={showDemo} className={className}>
      {children}
    </button>
  );
}
