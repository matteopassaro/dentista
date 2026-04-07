import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsHome } from "@/components/home/TestimonialsHome";
import { CTASection } from "@/components/sections/CTASection";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Dentista a Bari",
  description:
    "Ferlan Studio Dentistico e' lo studio dentistico a Bari per chi cerca visite chiare, prevenzione e trattamenti su misura con attenzione al comfort.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutTeaser />
      <TestimonialsHome />
      <CTASection
        title="Prenota la tua visita e ricevi indicazioni chiare fin dal primo contatto"
        description="Richiedi un consulto in pochi minuti: ti aiutiamo a trovare il trattamento piu’ adatto e l’orario migliore per te."
      />
      <ContactPreview />
    </>
  );
}
