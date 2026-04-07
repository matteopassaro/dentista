"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/lib/nav";
import { mapsHref, phoneHref, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

function NavLinks({
  onNavigate,
  pathname,
  mobile = false,
}: {
  onNavigate?: () => void;
  pathname: string;
  mobile?: boolean;
}) {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-1"
          : "flex flex-col gap-1 md:flex-row md:items-center md:gap-1 lg:flex-nowrap lg:gap-1.5"
      }
    >
      {mainNav.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href} className={mobile ? "" : "lg:shrink-0"}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`block rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors ${
                mobile ? "px-4 py-3 text-base" : "md:inline-block lg:px-2.5 xl:px-3"
              } ${
                active
                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                  : "text-[var(--foreground)] hover:bg-[var(--muted-bg)]/60"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const phoneLink = phoneHref();
  const mapsLink = mapsHref();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-[var(--radius)] p-2.5 text-[var(--foreground)] hover:bg-[var(--muted-bg)]"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Chiudi menu" : "Apri menu"}</span>
        {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/45"
            aria-label="Chiudi menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-[var(--surface)] shadow-[var(--shadow)]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigazione mobile"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 pb-3 pt-[max(1rem,env(safe-area-inset-top))]">
              <span className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--foreground)]">
                Menu
              </span>
              <button
                type="button"
                className="rounded-[var(--radius)] p-2.5 hover:bg-[var(--muted-bg)]"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Chiudi</span>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              <nav
                aria-label="Principale mobile"
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-2"
              >
                <NavLinks pathname={pathname} mobile onNavigate={() => setOpen(false)} />
              </nav>
            </div>
            <div className="border-t border-[var(--border)] bg-[var(--surface)] px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
              <p className="text-sm font-medium text-[var(--foreground)]">{siteConfig.address.street}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{siteConfig.openingHours[0]?.hours}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Button
                  href="/prenota"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Prenota la tua visita
                </Button>
                <Button
                  href={mapsLink}
                  variant="outline"
                  className="w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Apri le indicazioni
                </Button>
              </div>
              {phoneLink ? (
                <a
                  href={phoneLink}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Chiama ora {siteConfig.phoneDisplay}
                </a>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const phoneLink = phoneHref();
  const mapsLink = mapsHref();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--surface)]/90">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3 lg:max-w-[16rem] xl:max-w-none">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[var(--primary)]/20">
            <Image
              src="/ferlan-logo.jpg"
              alt=""
              width={40}
              height={40}
              className="h-auto w-full object-cover"
            />
          </span>
          <span className="truncate font-[family-name:var(--font-heading)] text-base font-semibold leading-tight text-[var(--foreground)] sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center" aria-label="Principale">
          <NavLinks pathname={pathname} />
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          {phoneLink ? (
            <a
              href={phoneLink}
              className="hidden items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:underline xl:inline-flex"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              Chiama ora
            </a>
          ) : (
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:underline xl:inline-flex"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              Viale della Repubblica, 58/E
            </a>
          )}
          <Button href="/prenota" variant="primary" className="whitespace-nowrap">
            Prenota la tua visita
          </Button>
        </div>

        <MobileNav key={pathname} pathname={pathname} />
      </div>
    </header>
  );
}
