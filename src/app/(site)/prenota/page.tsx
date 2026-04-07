import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Prenota la tua visita a Bari",
  description:
    "Richiedi una visita presso Ferlan Studio Dentistico a Bari: modulo rapido con ricontatto durante gli orari di studio.",
  path: "/prenota",
});

export default function PrenotaPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Prenota la tua visita dal dentista a Bari in modo semplice e veloce
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Compila il modulo con i tuoi orari preferiti e il motivo della visita: ti ricontattiamo
          per confermare disponibilita’ e primo passo del trattamento.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[var(--foreground)] shadow-sm">
            Studio dentistico a Bari
          </span>
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[var(--foreground)] shadow-sm">
            Lunedi - Venerdi 9:00 - 13:00 · 15:30 - 19:30
          </span>
        </div>
      </div>
      <div className="mt-10">
        <AppointmentForm />
      </div>
    </Section>
  );
}
