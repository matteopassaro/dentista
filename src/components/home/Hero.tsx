import Image from "next/image";
import { MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section className="pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20" containerClassName="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="animate-fade-up max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
          {siteConfig.name}
        </p>
        <h1 className="mt-3 text-balance font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
          Dentista a Bari per chi cerca cure chiare, precise e senza stress
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Da Ferlan Studio Dentistico trovi visite, igiene, implantologia e trattamenti su misura
          con attenzione al comfort, spiegazioni comprensibili e tecnologie moderne quando utili.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {[
            { icon: Star, text: siteConfig.googleRatingText },
            { icon: ShieldCheck, text: "Piani di cura chiari" },
            { icon: Sparkles, text: "Tecnologie moderne" },
          ].map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[var(--foreground)] shadow-sm"
            >
              <Icon className="h-4 w-4 text-[var(--primary)]" aria-hidden />
              {text}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/prenota" variant="primary" className="w-full justify-center sm:w-auto">
            Prenota la tua visita
          </Button>
          <Button href="/contatti" variant="outline" className="w-full justify-center sm:w-auto">
            Richiedi un consulto
          </Button>
        </div>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
          <MapPin className="h-4 w-4 text-[var(--primary)]" aria-hidden />
          Viale della Repubblica, 58/E · Bari
        </p>
      </div>
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)] ring-1 ring-[var(--border)]">
          <Image
            src="/ferlan-adult-treatment.jpg"
            alt="Dentista durante un trattamento presso Ferlan Studio Dentistico a Bari"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-[var(--radius)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] ring-1 ring-[var(--border)] sm:block">
          <p className="text-sm font-semibold text-[var(--foreground)]">Prima visita con piano chiaro</p>
          <p className="text-xs text-[var(--muted)]">Tempi, priorita’ e trattamenti spiegati con semplicita’</p>
        </div>
      </div>
    </Section>
  );
}
