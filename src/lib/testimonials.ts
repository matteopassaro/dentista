import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Chiarezza nelle spiegazioni, ambiente ordinato e attenzione nel mettere a proprio agio anche chi arriva con un po' di ansia.",
    author: "Tema ricorrente",
    role: "Prima visita e controlli",
    rating: 5,
  },
  {
    quote:
      "Professionalita', delicatezza durante le cure e puntualita' sono tra gli aspetti piu' citati nelle recensioni pubbliche.",
    author: "Tema ricorrente",
    role: "Igiene e trattamenti conservativi",
    rating: 5,
  },
  {
    quote:
      "Molti pazienti apprezzano la sensazione di essere ascoltati e la chiarezza nel capire tempi, costi e alternative.",
    author: "Tema ricorrente",
    role: "Piani di cura personalizzati",
    rating: 5,
  },
  {
    quote:
      "Le recensioni pubbliche sottolineano spesso un approccio umano, professionale e orientato al comfort del paziente.",
    author: "Tema ricorrente",
    role: "Esperienza in studio",
    rating: 5,
  },
];

export function averageRating(): number {
  if (testimonials.length === 0) return 0;
  const sum = testimonials.reduce((a, t) => a + t.rating, 0);
  return Math.round((sum / testimonials.length) * 10) / 10;
}
