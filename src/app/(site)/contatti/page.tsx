import { Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import {
  emailHref,
  fullAddressLine,
  mapsHref,
  phoneHref,
  siteConfig,
  whatsappHref,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contatti Studio Dentistico a Bari",
  description: `Indirizzo, orari e contatti di ${siteConfig.name} a Bari per prenotare una visita o richiedere un consulto.`,
  path: "/contatti",
});

export default function ContattiPage() {
  const phoneLink = phoneHref();
  const emailLink = emailHref();
  const whatsappLink = whatsappHref();
  const mapsLink = mapsHref();

  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Contatti e indicazioni per raggiungere il tuo dentista a Bari
          </h1>
          <p className="mt-3 text-[var(--muted)]">
            Trova indirizzo, orari e il canale piu’ comodo per richiedere una visita presso
            Ferlan Studio Dentistico.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
              Prenota o raggiungi lo studio
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Scegli il canale che preferisci per richiedere un consulto o aprire subito le
              indicazioni verso lo studio.
            </p>
            <div className="mt-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="flex gap-2 text-sm font-medium text-[var(--foreground)]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden />
                {fullAddressLine()}
              </p>
              <p className="mt-3 flex gap-2 text-sm text-[var(--muted)]">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden />
                {siteConfig.openingHours[0]?.days}: {siteConfig.openingHours[0]?.hours}
              </p>
            </div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/prenota" variant="primary" className="w-full justify-center sm:w-auto">
                  Prenota la tua visita
                </Button>
                <Button
                  href={mapsLink}
                  variant="outline"
                  className="w-full justify-center sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Apri le indicazioni
                </Button>
              </li>
              {phoneLink ? (
                <li>
                  <a
                    href={phoneLink}
                    className="inline-flex items-center gap-2 font-medium text-[var(--primary)] hover:underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Chiama ora {siteConfig.phoneDisplay}
                  </a>
                </li>
              ) : null}
              {emailLink ? (
                <li>
                  <a
                    href={emailLink}
                    className="inline-flex items-center gap-2 font-medium text-[var(--primary)] hover:underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
              {whatsappLink ? (
                <li>
                  <Button href={whatsappLink} variant="whatsapp" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Scrivici su WhatsApp
                  </Button>
                </li>
              ) : null}
            </ul>
            {!phoneLink && !emailLink && !whatsappLink ? (
              <p className="mt-6 text-sm text-[var(--muted)]">
                Contatto rapido online disponibile tramite modulo di prenotazione e indicazioni
                sempre aggiornate su Google Maps.
              </p>
            ) : null}
          </Card>
          <div className="min-h-[360px] overflow-hidden rounded-[var(--radius)] border border-[var(--border)] shadow-[var(--shadow)] lg:min-h-full">
            <iframe
              title={`Mappa · ${siteConfig.name}`}
              src={siteConfig.mapEmbedUrl}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
