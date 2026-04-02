import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">404</p>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)]">
            Pagina non trovata
          </h1>
          <p className="mt-3 max-w-md text-[var(--muted)]">
            Il contenuto potrebbe essere stato spostato. Torna alla home o ai servizi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="primary">
              Torna alla home
            </Button>
            <Button href="/contatti" variant="outline">
              Contatti
            </Button>
          </div>
          <p className="mt-8 text-sm text-[var(--muted)]">
            Se sei un visitatore, puoi anche tornare alla{" "}
            <Link href="/servizi" className="font-medium text-[var(--primary)] hover:underline">
              lista servizi
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
