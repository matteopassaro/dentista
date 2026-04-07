/**
 * Single source of truth for clinic contact and branding. Replace values for production.
 */

export const siteConfig = {
  name: "Ferlan Studio Dentistico",
  legalName: "FERLAN Societa' tra Professionisti S.R.L.",
  tagline: "Studio dentistico a Bari per visite, prevenzione e trattamenti su misura",
  description:
    "Ferlan Studio Dentistico e' il punto di riferimento per chi cerca un dentista a Bari: visite, igiene, implantologia e cure spiegate con chiarezza in Viale della Repubblica 58/E.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "it_IT",

  address: {
    street: "Viale della Repubblica, 58/E",
    city: "Bari",
    region: "BA",
    postalCode: "70125",
    country: "IT",
    countryName: "Italia",
  },

  /**
   * Publicly verified phone and WhatsApp were not available in the provided business context.
   * Fill these values when the clinic confirms them to unlock call and WhatsApp CTAs.
   */
  phone: "",
  phoneDisplay: "",
  email: "",
  whatsappE164: "",

  /**
   * Google Maps embed query or place ID style URL — replace with your clinic's embed src.
   */
  mapEmbedUrl:
    "https://www.google.com/maps?q=Viale+della+Repubblica+58%2FE,+70125+Bari&output=embed",
  mapAppUrl: "https://maps.app.goo.gl/nE5LrsVBnuJfzktt8",

  openingHours: [
    { days: "Lunedi - Venerdi", hours: "9:00 - 13:00 · 15:30 - 19:30" },
  ],

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  googleRatingText: "5,0 su Google Maps",
} as const;

export function fullAddressLine(): string {
  const { street, postalCode, city, region } = siteConfig.address;
  return `${street}, ${postalCode} ${city} ${region}`;
}

export function phoneHref(): string | null {
  const digits = siteConfig.phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : null;
}

export function emailHref(): string | null {
  return siteConfig.email ? `mailto:${siteConfig.email}` : null;
}

export function whatsappHref(
  message = "Buongiorno, vorrei prenotare una visita presso Ferlan Studio Dentistico.",
): string | null {
  if (!siteConfig.whatsappE164) return null;
  return `https://wa.me/${siteConfig.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function mapsHref(): string {
  return siteConfig.mapAppUrl;
}
