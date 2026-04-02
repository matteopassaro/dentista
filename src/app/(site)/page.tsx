import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsHome } from "@/components/home/TestimonialsHome";
import { CTASection } from "@/components/sections/CTASection";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
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
        title="Pronto a prenotare la tua prima visita?"
        description="Prenota online o chiamaci: ricevi proposta oraria rapida e piano di trattamento chiaro."
      />
      <ContactPreview />
    </>
  );
}
