import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function AboutTeaser() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-balance font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Uno studio dentistico a Bari dove ti senti ascoltato fin dalla prima visita
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Ferlan Studio Dentistico accompagna adulti e famiglie con un metodo semplice:
            ascolto, diagnosi chiara, piano condiviso e attenzione concreta al comfort durante
            ogni fase del trattamento.
          </p>
          <ul className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
            <li className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-sm">
              Tecnologie digitali e strumenti moderni quando portano reale precisione e comfort
            </li>
            <li className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-sm">
              Preventivi chiari e spiegazioni semplici per capire bene tempi, priorita’ e costi
            </li>
            <li className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-sm">
              Richiami di prevenzione e percorsi personalizzati per mantenere il sorriso sano
            </li>
          </ul>
          <div className="mt-8">
            <Button href="/prenota" variant="primary" className="w-full justify-center sm:w-auto">
              Prenota la tua visita
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)] ring-1 ring-[var(--border)]">
            <Image
              src="/ferlan-kids-area.jpg"
              alt="Professionista dello studio nell'area dedicata ai piccoli pazienti"
              width={1000}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">
            Scopri il metodo di lavoro dello studio.{" "}
            <Link href="/chi-siamo" className="text-[var(--primary)] hover:underline">
              Approfondisci
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
