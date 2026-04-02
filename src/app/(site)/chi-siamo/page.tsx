import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { TeamMember } from "@/types";

const team: TeamMember[] = [
  {
    name: "Dott.ssa Laura Bianchi",
    role: "Direzione sanitaria · Odontoiatria conservativa",
    bio: "Laureata a Bari, master in biomateriali. Approccio minimamente invasivo e attenzione ai tempi del paziente.",
    imageSrc: "/image1.jpg",
    imageAlt: "Ritratto professionale della dott.ssa Bianchi",
  },
  {
    name: "Dott. Andrea Conti",
    role: "Implantologia e chirurgia orale",
    bio: "Formazione avanzata in rigenerazione ossea e carico guidato. Protocolli basati su letteratura e audit clinico.",
    imageSrc: "/image2.jpg",
    imageAlt: "Ritratto professionale del dott. Conti",
  },
  {
    name: "Dott.ssa Giulia Ferri",
    role: "Ortodonzia e gnatologia",
    bio: "Specializzanda in ortodonzia con focus su adulti e allineatori digitali. Mock-up estetici condivisi in visita.",
    imageSrc: "/image3.jpg",
    imageAlt: "Ritratto professionale della dott.ssa Ferri",
  },
  {
    name: "Sara Valli",
    role: "Igieneista dentale",
    bio: "Educazione all'igiene domiciliare e protocolli supportive to implantologia. Recall personalizzati.",
    imageSrc: "/image4.jpg",
    imageAlt: "Ritratto dell'igienista Sara Valli",
  },
];

export const metadata = pageMetadata({
  title: "Chi siamo",
  description: `Storia, missione e team di ${siteConfig.name}: odontoiatria umana e digitale a Bari.`,
  path: "/chi-siamo",
});

export default function ChiSiamoPage() {
  return (
    <>
      <Section className="pb-8 pt-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              La nostra storia
            </h1>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Fondato nel 2012 come piccolo studio di quartiere, {siteConfig.name} è cresciuto
              mantenendo un obiettivo semplice: offrire cure evidence-based con empatia. Oggi
              integriamo scanner intraorale, planning 3D e laboratorio convenzionato per tempi rapidi
              senza compromessi di qualità.
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Crediamo che ogni piano terapeutico debba essere comprensibile: costi, alternative e
              rischi vengono discussi in una seconda visita dedicata, così puoi decidere con serenità.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow)] ring-1 ring-[var(--border)]">
            <Image
              src="/image3.jpg"
              alt="Sala operativa dello studio odontoiatrico"
              width={1200}
              height={880}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--muted-bg)]/40">
        <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Missione e valori
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
        <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Il team
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--muted)]">
          Team multidisciplinare con protocolli condivisi per offrire continuita terapeutica e risultati prevedibili.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden p-0" elevated={false}>
              <div className="aspect-square bg-[var(--muted-bg)]">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
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
