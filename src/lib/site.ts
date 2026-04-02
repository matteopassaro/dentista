/**
 * Single source of truth for clinic contact and branding. Replace values for production.
 */

export const siteConfig = {
  name: "Studio Dentistico Levante",
  tagline: "Odontoiatria moderna nel cuore di Bari",
  description:
    "Lo Studio Dentistico Levante offre cure odontoiatriche complete a Bari, con approccio umano, protocolli digitali e piani terapeutici trasparenti.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "it_IT",

  address: {
    street: "Via Sparano da Bari, 142",
    city: "Bari",
    region: "BA",
    postalCode: "70121",
    country: "IT",
    countryName: "Italia",
  },

  phone: "+39 080 123 4567",
  phoneDisplay: "+39 080 123 4567",
  email: "info@studiodentisticolevante.it",
  whatsappE164: "393491112233",

  /**
   * Google Maps embed query or place ID style URL — replace with your clinic's embed src.
   */
  mapEmbedUrl:
    "https://www.google.com/maps?q=Via+Sparano+da+Bari+142,+Bari&output=embed",

  openingHours: [
    { days: "Lunedì – Venerdì", hours: "9:00 – 19:30" },
    { days: "Sabato", hours: "9:00 – 13:30" },
    { days: "Domenica", hours: "Chiuso" },
  ],

  social: {
    instagram: "https://www.instagram.com/studiodentisticolevante",
    facebook: "https://www.facebook.com/studiodentisticolevante",
    linkedin: "https://www.linkedin.com/company/studiodentisticolevante",
  },
} as const;

export function fullAddressLine(): string {
  const { street, postalCode, city, region } = siteConfig.address;
  return `${street}, ${postalCode} ${city} (${region})`;
}

export function whatsappHref(): string {
  return `https://wa.me/${siteConfig.whatsappE164}`;
}
