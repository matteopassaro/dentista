import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy",
  description: `Informativa privacy di ${siteConfig.name} (testo segnaposto).`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)]">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Documento segnaposto per sviluppo UI. Sostituisci con testo legale redatto o revisionato da
          professionista (GDPR, cookie, titolare del trattamento, diritti dell&apos;interessato).
        </p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
          <p>
            Titolare del trattamento: <strong className="text-[var(--foreground)]">{siteConfig.name}</strong>
            , con sede in {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
            {siteConfig.address.city}.
          </p>
          <p>
            I dati inviati tramite moduli di contatto saranno trattati esclusivamente per rispondere
            alle richieste e, se previsto, per prenotazioni. Conservazione limitata al tempo necessario.
          </p>
          <p>
            Contatto privacy: <a href={`mailto:${siteConfig.email}`} className="text-[var(--primary)] hover:underline">{siteConfig.email}</a>
          </p>
        </div>
      </div>
    </Section>
  );
}
