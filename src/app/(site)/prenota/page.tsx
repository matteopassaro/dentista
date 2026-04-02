import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Prenota appuntamento",
  description:
    "Richiedi una visita allo Studio Dentistico Levante: modulo rapido con conferma dal front-office.",
  path: "/prenota",
});

export default function PrenotaPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Prenota un appuntamento
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Compila i campi: ti richiamiamo entro poche ore lavorative per confermare data e orario.
          Per urgenze usa il numero diretto in header.
        </p>
      </div>
      <div className="mt-10">
        <AppointmentForm />
      </div>
    </Section>
  );
}
