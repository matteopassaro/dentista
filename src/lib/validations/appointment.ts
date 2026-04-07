import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Inserisci il nome completo (almeno 2 caratteri).")
    .max(120, "Il nome è troppo lungo."),
  phone: z
    .string()
    .trim()
    .min(8, "Inserisci un numero di telefono valido.")
    .max(32, "Numero di telefono non valido.")
    .regex(/^[\d\s+().-]+$/, "Il telefono può contenere solo cifre e simboli comuni."),
  email: z
    .string()
    .trim()
    .max(160, "L'indirizzo email e' troppo lungo.")
    .refine(
      (value) => value === "" || z.string().email().safeParse(value).success,
      "Inserisci un indirizzo email valido.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Scrivi un breve messaggio (almeno 10 caratteri).")
    .max(2000, "Il messaggio è troppo lungo."),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
