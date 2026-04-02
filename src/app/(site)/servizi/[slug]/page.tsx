import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceFaq } from "@/components/servizi/ServiceFaq";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getServiceDetail, getServiceSlugs } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

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
              <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                {s.title}
              </h1>
              <p className="mt-2 max-w-2xl text-[var(--muted)]">{s.shortDescription}</p>
            </div>
          </div>
          <Button href="/prenota" variant="primary" className="shrink-0 self-start md:self-center">
            Prenota appuntamento
          </Button>
        </div>
      </Section>

      <Section className="bg-[var(--surface)] pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                In sintesi
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">{s.description}</p>
            </Card>
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Quando è indicato
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">{s.whenNeeded}</p>
            </Card>
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Vantaggi
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-[var(--muted)]">
                {s.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
            <Card elevated={false} className="border border-[var(--border)]">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Come lavoriamo
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
            <Card className="border border-[var(--border)] bg-[var(--primary-dark)] text-[var(--primary-foreground)]">
              <p className="text-sm font-semibold">Hai dubbi su questo servizio?</p>
              <p className="mt-2 text-sm text-white/90">
                Prenota una consulenza con {siteConfig.name}: valuteremo insieme indicazioni e tempistiche.
              </p>
              <Button
                href="/prenota"
                variant="outline"
                className="mt-4 w-full justify-center border-white text-[var(--primary-foreground)] hover:bg-white/10"
              >
                Richiedi visita
              </Button>
            </Card>
          </aside>
        </div>
      </Section>

      <Section>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)]">
          Domande frequenti
        </h2>
        <p className="mt-2 text-[var(--muted)]">Risposte orientative — non sostituiscono la visita clinica.</p>
        <div className="mt-8 max-w-3xl">
          <ServiceFaq items={s.faq} />
        </div>
      </Section>
    </>
  );
}
