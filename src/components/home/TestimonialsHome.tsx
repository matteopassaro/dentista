import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StarRow } from "@/components/ui/StarRow";

export function TestimonialsHome() {
  const slice = testimonials.slice(0, 3);
  return (
    <Section className="bg-[var(--muted-bg)]/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Cosa dicono i pazienti
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          Esperienze condivise dai pazienti che ci hanno scelto a Bari.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {slice.map((t) => (
          <Card key={t.author}>
            <StarRow rating={t.rating} decorative />
            <blockquote className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-xs text-[var(--muted)]">
              <span className="font-semibold text-[var(--foreground)]">{t.author}</span> — {t.role}
            </figcaption>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/recensioni" className="text-sm font-semibold text-[var(--primary)] hover:underline">
          Tutte le recensioni
        </Link>
      </p>
    </Section>
  );
}
