import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServiceSummaries } from "@/lib/services";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Servizi odontoiatrici",
  description: `Implantologia, ortodonzia, igiene, estetica e altro ancora presso ${siteConfig.name} a Bari.`,
  path: "/servizi",
});

export default function ServiziPage() {
  const services = getServiceSummaries();
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          I nostri servizi
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Cure coordinate in studio: dalla prevenzione alle riabilitazioni complesse.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.slug} className="group flex flex-col sm:flex-row sm:items-start sm:gap-5">
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
                  Approfondisci
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
