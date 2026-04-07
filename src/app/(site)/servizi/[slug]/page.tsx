import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceFaq } from "@/components/servizi/ServiceFaq";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getServiceDetail, getServiceSlugs } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { mapsHref, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getServiceDetail(slug);
  if (!s) return {};
  return pageMetadata({
    title: s.title,
    description: s.shortDescription,
    path: `/servizi/${slug}`,
  });
}

export default async function ServizioDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = getServiceDetail(slug);
  if (!s) notFound();
  const mapsLink = mapsHref();

  const Icon = s.icon;

  return (
    <>
      <Section className="pb-10 pt-10">
        <nav aria-label="Percorso navigazione" className="text-sm text-[var(--muted)]">
          <ol className="flex flex-wrap gap-1">
            <li>
              <Link href="/" className="hover:text-[var(--primary)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true"> / </li>
            <li>
              <Link href="/servizi" className="hover:text-[var(--primary)]">
                Servizi
              </Link>
            </li>
            <li aria-hidden="true"> / </li>
            <li className="text-[var(--foreground)]">{s.title}</li>
          </ol>
        </nav>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <h1 className="text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                {s.title} a Bari con un percorso chiaro e su misura
              </h1>
              <p className="mt-2 max-w-2xl text-[var(--muted)]">
                {s.shortDescription} Ti spieghiamo sempre indicazioni, benefici e passaggi del
                trattamento in modo semplice.
              </p>
            </div>
          </div>
          <Button href="/prenota" variant="primary" className="shrink-0 self-start md:self-center">
            Prenota la tua visita
          </Button>
        </div>
      </Section>

      <Section className="bg-[var(--surface)] pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Cosa puoi ottenere con questo trattamento
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">{s.description}</p>
            </Card>
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Quando puo’ aiutarti davvero
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">{s.whenNeeded}</p>
            </Card>
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                I vantaggi per te
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-[var(--muted)]">
                {s.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Come si svolge il percorso
              </h2>
              <ol className="mt-4 space-y-3">
                {s.processSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-[var(--muted)]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-sm font-bold text-[var(--primary)]">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Card className="border border-[var(--primary)]/15 bg-[var(--surface)] shadow-[var(--shadow)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Consulenza
              </p>
              <h2 className="mt-3 text-balance font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Hai dubbi su questo trattamento?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Prenota una consulenza con {siteConfig.name}: valuteremo insieme indicazioni,
                tempi e trattamento piu’ adatto al tuo caso.
              </p>
              <p className="mt-3 text-xs font-medium text-[var(--foreground)]">
                Risposta rapida durante gli orari di studio.
              </p>
              <div className="mt-4">
                <Button
                  href="/prenota"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Prenota la tua visita
                </Button>
                <a
                  href={mapsLink}
                  className="mt-3 inline-flex text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apri le indicazioni
                </a>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)]">
          Dubbi frequenti prima della visita
        </h2>
        <p className="mt-2 text-[var(--muted)]">Risposte orientative — non sostituiscono la visita clinica.</p>
        <div className="mt-8 max-w-3xl">
          <ServiceFaq items={s.faq} />
        </div>
      </Section>
    </>
  );
}
