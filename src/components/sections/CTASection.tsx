import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <Section className="bg-[var(--primary)] text-[var(--primary-foreground)]">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-white/90">{description}</p>
        </div>
        <Button
          href="/prenota"
          variant="outline"
          className="w-full justify-center border-white text-[var(--primary-foreground)] hover:bg-white/10 md:w-auto"
        >
          Prenota appuntamento
        </Button>
      </div>
    </Section>
  );
}
