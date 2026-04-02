import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      aria-label="Apri chat WhatsApp con lo studio"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
    </a>
  );
}
