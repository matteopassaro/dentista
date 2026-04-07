import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServiceSummaries } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Servizi odontoiatrici a Bari",
  description: `Visite, igiene, implantologia, estetica e trattamenti su misura presso ${siteConfig.name}, studio dentistico a Bari.`,
  path: "/servizi",
});

export default function ServiziPage() {
  const services = getServiceSummaries();
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Trattamenti pensati per farti tornare a sorridere con serenita’
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Nel nostro studio dentistico a Bari trovi cure coordinate, spiegate con chiarezza e
          calibrate sulle tue esigenze cliniche ed estetiche.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.slug}
              className="group flex flex-col border border-transparent sm:flex-row sm:items-start sm:gap-5 hover:-translate-y-1 hover:border-[var(--primary)]/10 hover:shadow-xl"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div className="mt-4 flex-1 sm:mt-0">
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                  <Link
                    href={`/servizi/${s.slug}`}
                    className="hover:text-[var(--primary)] hover:underline"
                  >
                    {s.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.shortDescription}</p>
                <Link
                  href={`/servizi/${s.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]"
                >
                  Scopri il trattamento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Button href="/prenota" variant="primary">
          Richiedi un consulto
        </Button>
      </div>
    </Section>
  );
}
