import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, fullAddressLine, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contatti",
  description: `Indirizzo, telefono, email e orari di ${siteConfig.name} a Bari.`,
  path: "/contatti",
});

export default function ContattiPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Contatti
          </h1>
          <p className="mt-3 text-[var(--muted)]">
            Siamo a tua disposizione per informazioni, preventivi e prenotazioni.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
              Studio
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{fullAddressLine()}</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 font-medium text-[var(--primary)] hover:underline"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 font-medium text-[var(--primary)] hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Button href={whatsappHref()} variant="whatsapp" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Scrivici su WhatsApp
                </Button>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">Orari</h3>
              <table className="mt-2 w-full text-left text-sm text-[var(--muted)]">
                <tbody>
                  {siteConfig.openingHours.map((row) => (
                    <tr key={row.days} className="border-b border-[var(--border)] last:border-0">
                      <th className="py-2 pr-4 font-medium text-[var(--foreground)]">{row.days}</th>
                      <td className="py-2">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="min-h-[360px] overflow-hidden rounded-[var(--radius)] border border-[var(--border)] shadow-[var(--shadow)] lg:min-h-full">
            <iframe
              title={`Mappa · ${siteConfig.name}`}
              src={siteConfig.mapEmbedUrl}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
