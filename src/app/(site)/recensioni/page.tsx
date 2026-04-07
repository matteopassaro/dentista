import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { StarRow } from "@/components/ui/StarRow";
import { testimonials, averageRating } from "@/lib/testimonials";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Recensioni e fiducia dei pazienti",
  description: `Recensioni e segnali di fiducia di ${siteConfig.name}: uno studio dentistico a Bari apprezzato per chiarezza, professionalita' e attenzione.`,
  path: "/recensioni",
});

export default function RecensioniPage() {
  const avg = averageRating();
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Recensioni che raccontano un’esperienza fatta di chiarezza, attenzione e cura
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Qui trovi i temi ricorrenti emersi dalle recensioni pubbliche, utili per capire come i
          pazienti descrivono l’esperienza in studio.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <StarRow rating={avg} />
          <p className="text-sm font-medium text-[var(--foreground)]">
            Media {avg} / 5 · {siteConfig.googleRatingText}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <Card key={t.role} className="hover:-translate-y-1 hover:shadow-xl">
            <StarRow rating={t.rating} />
            <blockquote className="mt-4 text-[var(--foreground)] leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-[var(--muted)]">
              <span className="font-semibold text-[var(--foreground)]">{t.author}</span>
              {t.role ? ` · ${t.role}` : null}
            </figcaption>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-3xl rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow)]">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
          Fiducia che aiuta a prenotare con piu’ serenita’
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Quando i pazienti parlano di attenzione, professionalita’ e chiarezza, prenotare la
          prima visita diventa piu’ semplice.
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
          <li>5,0 su Google Maps</li>
          <li>Tecnologie moderne</li>
          <li>Piani di cura chiari</li>
        </ul>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/prenota" variant="primary" className="w-full justify-center sm:w-auto">
            Prenota la tua visita
          </Button>
          <Button href="/contatti" variant="outline" className="w-full justify-center sm:w-auto">
            Richiedi un consulto
          </Button>
        </div>
      </div>
    </Section>
  );
}
