import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Equipe attenta, spiegazioni chiare e ambiente sereno. Mi hanno seguita nell'implantologia con tempi rispettati.",
    author: "Giulia R.",
    role: "Paziente a Bari da 3 anni",
    rating: 5,
  },
  {
    quote:
      "Ortodonzia invisibile impeccabile: visite puntuali e risultato naturale. Consigliatissimi.",
    author: "Marco T.",
    role: "Professionista · Bari",
    rating: 5,
  },
  {
    quote:
      "Finalmente uno studio dove igiene e conservativa sono integrate e ogni passaggio viene spiegato chiaramente.",
    author: "Elena S.",
    role: "Mamma di due bambini · Bari",
    rating: 5,
  },
  {
    quote:
      "Ho fatto sbiancamento e una corona: tempi rapidi, zero dolore e un sorriso luminoso.",
    author: "Davide M.",
    role: "Paziente · Bari",
    rating: 4,
  },
];

export function averageRating(): number {
  if (testimonials.length === 0) return 0;
  const sum = testimonials.reduce((a, t) => a + t.rating, 0);
  return Math.round((sum / testimonials.length) * 10) / 10;
}
