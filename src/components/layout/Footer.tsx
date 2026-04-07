import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { mainNav } from "@/lib/nav";
import {
  emailHref,
  fullAddressLine,
  mapsHref,
  phoneHref,
  siteConfig,
  whatsappHref,
} from "@/lib/site";

export function Footer() {
  const y = new Date().getFullYear();
  const phoneLink = phoneHref();
  const emailLink = emailHref();
  const whatsappLink = whatsappHref();
  const mapsLink = mapsHref();
  const socialLinks = [
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "Facebook", href: siteConfig.social.facebook },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary-dark)] text-[var(--primary-foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-white/85">{siteConfig.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/prenota"
                className="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius)] bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-white/90"
              >
                Prenota la tua visita
              </Link>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius)] border border-white/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Apri le indicazioni
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Link rapidi
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/prenota" className="text-white/85 hover:text-white hover:underline">
                  Prenota la tua visita
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Contatti</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 text-white/90 hover:text-white hover:underline"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  <span>{fullAddressLine()}</span>
                </a>
              </li>
              <li className="flex gap-2 text-white/90">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>{siteConfig.openingHours[0]?.days}: {siteConfig.openingHours[0]?.hours}</span>
              </li>
              {phoneLink ? (
                <li>
                  <a
                    href={phoneLink}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              ) : null}
              {emailLink ? (
                <li>
                  <a
                    href={emailLink}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
              {whatsappLink ? (
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Scrivici su WhatsApp
                  </a>
                </li>
              ) : null}
            </ul>
            {socialLinks.length ? (
              <div className="mt-4 flex gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <p className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70">
          © {y} {siteConfig.name}.{" "}
          <Link href="/privacy" className="underline hover:text-white">
            Privacy
          </Link>
          {" · "}Studio dentistico a Bari in {siteConfig.address.street}.
        </p>
      </div>
    </footer>
  );
}
