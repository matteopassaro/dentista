"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { appointmentSchema, type AppointmentInput } from "@/lib/validations/appointment";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function AppointmentForm() {
  const [serverMessage, setServerMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    shouldFocusError: true,
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: AppointmentInput) {
    setServerMessage(null);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !body.ok) {
        setServerMessage({
          type: "error",
          text: body.error ?? "Invio non riuscito. Riprova tra poco.",
        });
        return;
      }
      reset();
      setServerMessage({
        type: "success",
        text: "Richiesta inviata. Ti contatteremo presto per confermare l’orario.",
      });
    } catch {
      setServerMessage({
        type: "error",
        text: "Errore di rete. Verifica la connessione e riprova.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-xl space-y-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-8"
      noValidate
    >
      <div>
        <h2 className="text-balance font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
          Richiedi il tuo consulto in pochi secondi
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Lascia i tuoi recapiti e il motivo della visita: ti ricontattiamo in orario di studio
          per proporti la disponibilita’ piu’ adatta.
        </p>
      </div>

      {serverMessage ? (
        <p
          role={serverMessage.type === "success" ? "status" : "alert"}
          aria-live="polite"
          className={`rounded-[var(--radius)] px-3 py-2 text-sm ${
            serverMessage.type === "success"
              ? "bg-[var(--success)]/15 text-[var(--success)]"
              : "bg-[var(--danger)]/10 text-[var(--danger)]"
          }`}
        >
          {serverMessage.text}
        </p>
      ) : null}

      <Input
        label="Nome e cognome"
        autoComplete="name"
        placeholder="Come preferisci essere richiamato…"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Telefono"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="Es. 333 123 4567…"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <Input
        label="Email (facoltativa)"
        type="email"
        autoComplete="email"
        inputMode="email"
        spellCheck={false}
        placeholder="Se preferisci ricevere conferma anche via email…"
        {...register("email")}
        error={errors.email?.message}
      />
      <Textarea
        label="Come possiamo aiutarti?"
        placeholder="Motivo della visita, fastidio o orari preferiti…"
        {...register("message")}
        error={errors.message?.message}
      />

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Invio in corso…" : "Richiedi un consulto"}
      </Button>
      <p className="text-xs leading-relaxed text-[var(--muted)]">
        Inviando il modulo autorizzi il contatto per gestire la tua richiesta di visita.
      </p>
    </form>
  );
}
