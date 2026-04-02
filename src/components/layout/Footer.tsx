import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { mainNav } from "@/lib/nav";
import { siteConfig, fullAddressLine } from "@/lib/site";

export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary-dark)] text-[var(--primary-foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-white/85">{siteConfig.tagline}</p>
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
                  Prenota
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Contatti</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex gap-2 text-white/90">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>{fullAddressLine()}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:underline"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                className="text-sm text-white/80 hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                className="text-sm text-white/80 hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="text-sm text-white/80 hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70">
          © {y} {siteConfig.name}.{" "}
          <Link href="/privacy" className="underline hover:text-white">
            Privacy
          </Link>
          {" · "}
          Sito vetrina odontoiatrico personalizzabile per studi di Bari e provincia.
        </p>
      </div>
    </footer>
  );
}
