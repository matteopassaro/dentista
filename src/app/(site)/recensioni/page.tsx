import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { StarRow } from "@/components/ui/StarRow";
import { testimonials, averageRating } from "@/lib/testimonials";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Recensioni dei pazienti",
  description: `Esperienze condivise su ${siteConfig.name}: affidabilità, professionalità e accoglienza.`,
  path: "/recensioni",
});

export default function RecensioniPage() {
  const avg = averageRating();
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Recensioni
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          La fiducia si costruisce nel tempo. Ecco alcuni feedback raccolti in studio.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <StarRow rating={avg} />
          <p className="text-sm font-medium text-[var(--foreground)]">
            Media {avg} / 5 · {testimonials.length} recensioni
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <Card key={t.author}>
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
          Trasparenza
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Collega qui le recensioni verificate da Google o Doctoralia per rafforzare la prova sociale.
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
          <li>ISO qualità</li>
          <li>Formazione continua</li>
          <li>Materiali tracciati</li>
        </ul>
      </div>
    </Section>
  );
}
