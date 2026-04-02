import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServiceSummaries } from "@/lib/services";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function ServicesPreview() {
  const services = getServiceSummaries();
  return (
    <Section className="bg-[var(--surface)]" id="servizi">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Servizi principali
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          Dalla prevenzione alle terapie complesse: un percorso coordinato in studio.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.slug} className="group flex flex-col transition-shadow hover:shadow-lg">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[var(--muted)]">{s.shortDescription}</p>
              <Link
                href={`/servizi/${s.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] hover:underline"
              >
                Dettagli
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </Card>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/servizi"
          className="text-sm font-semibold text-[var(--primary)] hover:underline"
        >
          Vedi tutti i servizi
        </Link>
      </div>
    </Section>
  );
}
