import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function AboutTeaser() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Un team che mette al centro il paziente
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Lo Studio Levante riunisce medici odontoiatri, igienisti e personale di reception
            formati su protocolli digitali. Crediamo in spiegazioni chiare, diagnosi condivise e
            dolore sotto controllo.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[var(--muted)]">
            <li>Diagnostica 3D e scanner intraorale quando indicato</li>
            <li>Piani finanziari trasparenti e preventivi dettagliati</li>
            <li>Igiene e mantenimento programmati</li>
          </ul>
          <Button href="/chi-siamo" variant="primary" className="mt-8">
            Leggi la nostra storia
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)] ring-1 ring-[var(--border)]">
            <Image
              src="/image2.jpg"
              alt="Team odontoiatrico durante una visita di controllo"
              width={1000}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">
            Scopri il team e il nostro metodo di lavoro.{" "}
            <Link href="/chi-siamo" className="text-[var(--primary)] hover:underline">
              Team
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
