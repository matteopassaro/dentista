import { Clock3, MapPin } from "lucide-react";
import { fullAddressLine, mapsHref, phoneHref, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function ContactPreview() {
  const mapsLink = mapsHref();
  const phoneLink = phoneHref();

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-balance font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Raggiungerci a Bari e’ semplice, prenotare anche
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Ci trovi in una zona comoda di Bari, con indicazioni immediate, orari chiari e un
            percorso di prenotazione semplice per visite e controlli.
          </p>
          <Card className="mt-6 border border-[var(--border)]" elevated={false}>
            <p className="flex gap-2 text-sm font-medium text-[var(--foreground)]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden />
              {fullAddressLine()}
            </p>
            <p className="mt-3 flex gap-2 text-sm text-[var(--muted)]">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden />
              {siteConfig.openingHours[0]?.days}: {siteConfig.openingHours[0]?.hours}
            </p>
            <div className="mt-5">
              <Button href="/prenota" variant="primary" className="w-full justify-center sm:w-auto">
                Prenota la tua visita
              </Button>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                >
                  Apri le indicazioni
                </a>
                {phoneLink ? (
                  <a
                    href={phoneLink}
                    className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                  >
                    Chiama ora
                  </a>
                ) : null}
              </div>
            </div>
          </Card>
        </div>
        <div className="min-h-[280px] overflow-hidden rounded-[var(--radius)] border border-[var(--border)] shadow-[var(--shadow)]">
          <iframe
            title={`Mappa · ${siteConfig.name}`}
            src={siteConfig.mapEmbedUrl}
            className="h-full min-h-[280px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-[var(--muted)]">
        Indicazioni stradali aggiornate in tempo reale tramite Google Maps.
      </p>
    </Section>
  );
}
