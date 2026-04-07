import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { TeamMember } from "@/types";

const team: TeamMember[] = [
  {
    name: "Dr. Federico Crudo",
    role: "Odontoiatria, implantologia e protesi",
    bio: "Visite orientate alla chiarezza del piano di cura, con attenzione a comfort, precisione e continuita' terapeutica.",
    imageSrc: "/ferlan-adult-treatment.jpg",
    imageAlt: "Dentista durante un trattamento presso Ferlan Studio Dentistico",
  },
  {
    name: "Area Igiene e Prevenzione",
    role: "Igiene professionale e richiami personalizzati",
    bio: "Percorsi su misura per mantenere denti e gengive sani nel tempo, con consigli pratici per la routine quotidiana.",
    imageSrc: "/ferlan-kids-area.jpg",
    imageAlt: "Professionista dello studio nell'area dedicata ai piccoli pazienti",
  },
  {
    name: "Assistenza Clinica",
    role: "Supporto al paziente in ogni fase del trattamento",
    bio: "Un'organizzazione attenta rende le cure piu' semplici, piu' ordinate e piu' serene da vivere.",
    imageSrc: "/ferlan-waiting-room.jpg",
    imageAlt: "Sala d'attesa di Ferlan Studio Dentistico a Bari",
  },
  {
    name: "Accoglienza e Prenotazioni",
    role: "Front office e gestione delle visite",
    bio: "Informazioni chiare, supporto nell'organizzazione degli appuntamenti e attenzione ai tempi di ogni paziente.",
    imageSrc: "/ferlan-pediatric-treatment.jpg",
    imageAlt: "Trattamento odontoiatrico pediatrico presso Ferlan Studio Dentistico",
  },
];

export const metadata = pageMetadata({
  title: "Chi siamo",
  description: `Metodo, team e valori di ${siteConfig.name}: uno studio dentistico a Bari orientato a chiarezza, comfort e precisione.`,
  path: "/chi-siamo",
});

export default function ChiSiamoPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              Cure dentali a Bari con un metodo chiaro, professionale e attento alla persona
            </h1>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              {siteConfig.name} nasce per offrire un’esperienza piu’ semplice a chi cerca un
              dentista a Bari: ascolto reale, spiegazioni comprensibili e trattamenti proposti con
              chiarezza fin dalla prima visita.
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Crediamo che ogni piano terapeutico debba essere compreso prima di essere iniziato:
              tempi, priorita’, alternative e indicazioni vengono condivisi con calma, cosi’ puoi
              decidere con serenita’.
            </p>
            <div className="mt-8">
              <Button href="/prenota" variant="primary">
                Richiedi un consulto
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)] ring-1 ring-[var(--border)]">
            <Image
              src="/ferlan-waiting-room.jpg"
              alt="Sala d'attesa di Ferlan Studio Dentistico a Bari"
              width={1200}
              height={880}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--muted-bg)]/40">
        <h2 className="text-center text-balance font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Perche’ i pazienti scelgono il nostro studio dentistico a Bari
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
              Ascolto
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Ogni bocca ha una storia: tempi, paure e obiettivi estetici sono parte del piano, non un
              optional.
            </p>
          </Card>
          <Card>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
              Precisione
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Workflow digitali per ridurre rifacimenti e margini di errore nelle fasi chirurgiche e
              protesiche.
            </p>
          </Card>
          <Card>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
              Prevenzione
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Richiami programmati e motivazione all&apos;igiene quotidiana come leva principale di
              salute.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-center text-balance font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Un team organizzato per accompagnarti con piu’ serenita’
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--muted)]">
          Competenze complementari e un metodo condiviso per offrirti continuita’ terapeutica,
          risposte chiare e una gestione piu’ fluida della visita.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden p-0" elevated={false}>
              <div className="relative aspect-square bg-[var(--muted-bg)]">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--foreground)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[var(--primary)]">{member.role}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
