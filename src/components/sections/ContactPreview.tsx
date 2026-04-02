import { MapPin } from "lucide-react";
import { siteConfig, fullAddressLine } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function ContactPreview() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Dove siamo
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Siamo nel centro di Bari, facilmente raggiungibili da Murat, Madonnella e Carrassi. Disponibili parcheggi in zona.
          </p>
          <Card className="mt-6 border border-[var(--border)]" elevated={false}>
            <p className="flex gap-2 text-sm font-medium text-[var(--foreground)]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden />
              {fullAddressLine()}
            </p>
            <Button href="/contatti" variant="outline" className="mt-4">
              Apri contatti e mappa
            </Button>
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
      <p className="mt-4 text-center text-xs text-[var(--muted)]">Indicazioni stradali aggiornate in tempo reale tramite Google Maps.</p>
    </Section>
  );
}
