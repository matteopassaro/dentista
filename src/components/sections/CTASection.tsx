import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { phoneHref } from "@/lib/site";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  const phoneLink = phoneHref();

  return (
    <Section className="bg-[var(--primary)] text-[var(--primary-foreground)]">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-balance font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-white/90">{description}</p>
          <p className="mt-3 text-sm text-white/80">Risposta rapida durante gli orari di studio.</p>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[16rem]">
          <Button
            href="/prenota"
            variant="outline"
            className="w-full justify-center border-white bg-white text-[var(--primary)] hover:bg-white/95"
          >
            Prenota la tua visita
          </Button>
          {phoneLink ? (
            <a
              href={phoneLink}
              className="text-center text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
            >
              Oppure chiama ora
            </a>
          ) : (
            <Link
              href="/contatti"
              className="text-center text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
            >
              Oppure richiedi un consulto
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
