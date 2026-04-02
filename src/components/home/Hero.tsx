import Image from "next/image";
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
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
          Sorriso sano, cure precise e piani chiari
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Odontoiatria integrata a Bari: prevenzione, implantologia, ortodonzia ed estetica con
          tecnologie digitali e un team che ti ascolta davvero.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/prenota" variant="primary">
            Prenota appuntamento
          </Button>
          <Button href="/servizi" variant="outline">
            Scopri i servizi
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)] ring-1 ring-[var(--border)]">
          <Image
            src="/image1.jpg"
            alt="Reception luminosa di studio odontoiatrico a Bari"
            width={1200}
            height={900}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-[var(--radius)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] ring-1 ring-[var(--border)] sm:block">
          <p className="text-sm font-semibold text-[var(--foreground)]">Piani personalizzati</p>
          <p className="text-xs text-[var(--muted)]">Trasparenza su tempi e costi</p>
        </div>
      </div>
    </Section>
  );
}
