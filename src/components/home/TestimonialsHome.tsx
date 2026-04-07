import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StarRow } from "@/components/ui/StarRow";
import { siteConfig } from "@/lib/site";

export function TestimonialsHome() {
  const slice = testimonials.slice(0, 3);
  return (
    <Section className="bg-[var(--muted-bg)]/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          La fiducia dei pazienti nasce da chiarezza, attenzione e cura
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          Sintesi dei temi piu’ citati nelle recensioni pubbliche dello studio, utile per capire
          cosa apprezzano di piu’ i pazienti che ci scelgono a Bari.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm">
          <StarRow rating={5} size="sm" decorative />
          {siteConfig.googleRatingText}
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {slice.map((t) => (
          <Card key={t.role} className="hover:-translate-y-1 hover:shadow-xl">
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
      <div className="mt-8 text-center">
        <Link href="/recensioni" className="text-sm font-semibold text-[var(--primary)] hover:underline">
          Approfondisci la fiducia dei pazienti
        </Link>
      </div>
    </Section>
  );
}
