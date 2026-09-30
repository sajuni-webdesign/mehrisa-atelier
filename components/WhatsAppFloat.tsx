import { site } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Mehrisa! I have a question about your collection.")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with a stylist on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition-all duration-500 hover:pr-6 sm:bottom-8 sm:right-8"
    >
      <IconWhatsApp />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-500 group-hover:max-w-40">
        Ask a stylist
      </span>
    </a>
  );
}
