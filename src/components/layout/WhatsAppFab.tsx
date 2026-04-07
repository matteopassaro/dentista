import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { phoneHref, whatsappHref } from "@/lib/site";

export function WhatsAppFab() {
  const phoneLink = phoneHref();
  const whatsappLink = whatsappHref();

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[var(--surface)]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl gap-3">
          {phoneLink ? (
            <Button href={phoneLink} variant="outline" className="flex-1 justify-center">
              <Phone className="h-4 w-4" aria-hidden />
              Chiama ora
            </Button>
          ) : null}
          {whatsappLink ? (
            <Button
              href={whatsappLink}
              variant="whatsapp"
              className="flex-1 justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </Button>
          ) : (
            <Button href="/prenota" variant="primary" className="flex-1 justify-center">
              <CalendarDays className="h-4 w-4" aria-hidden />
              Prenota la tua visita
            </Button>
          )}
        </div>
      </div>

      {whatsappLink ? (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] md:flex"
          aria-label="Apri chat WhatsApp con lo studio"
        >
          <MessageCircle className="h-7 w-7" aria-hidden />
        </a>
      ) : null}
    </>
  );
}
