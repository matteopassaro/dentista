# Studio Dentistico Levante — sito vetrina

Sito marketing per studio odontoiatrico a Bari, progettato come template commerciale riutilizzabile per piu studi, costruito con **Next.js 16** (App Router), **React 19**, **TypeScript** e **Tailwind CSS v4**.

## Avvio

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Script

- `npm run dev` — sviluppo
- `npm run build` — build di produzione
- `npm run start` — server dopo la build
- `npm run lint` — ESLint

## Dove modificare i contenuti

| Cosa | Percorso |
|------|----------|
| Nome studio, indirizzo, telefono, email, WhatsApp, orari, embed mappa | [`src/lib/site.ts`](src/lib/site.ts) |
| Elenco e testi dei servizi (listing + pagine dettaglio + FAQ) | [`src/lib/service-details.ts`](src/lib/service-details.ts) |
| Icone servizi (mapping slug → Lucide) | [`src/lib/services.ts`](src/lib/services.ts) |
| Voci di menu | [`src/lib/nav.ts`](src/lib/nav.ts) |
| Testimonial (home + recensioni) | [`src/lib/testimonials.ts`](src/lib/testimonials.ts) |
| Articoli blog (Markdown) | [`content/blog/*.md`](content/blog) |
| SEO di base (fallback OG) | [`src/lib/seo.ts`](src/lib/seo.ts), metadata per route nei `page.tsx` |

## Prenotazioni / API

Il modulo **Prenota** invia una `POST` a [`src/app/api/appointment/route.ts`](src/app/api/appointment/route.ts), che valida il payload con Zod. In sviluppo i dati vengono loggati in console; collega qui email (es. Resend), CRM o database per la produzione.

## Come personalizzare in 15 minuti

1. Aggiorna nome studio, indirizzo, telefono, email, WhatsApp e orari in [`src/lib/site.ts`](src/lib/site.ts).
2. Sostituisci le foto in `public/` mantenendo questi nomi:
   - `image1.jpg` hero/home
   - `image2.jpg` team/chi-siamo
   - `image3.jpg` ambienti clinici
   - `image4.jpg` logo/avatar header
3. Personalizza servizi e FAQ in [`src/lib/service-details.ts`](src/lib/service-details.ts).
4. Aggiorna recensioni in [`src/lib/testimonials.ts`](src/lib/testimonials.ts).
5. Inserisci articoli reali in [`content/blog`](content/blog).
6. Verifica title/description route (`page.tsx`) e Open Graph in [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx).

## Immagini

Il progetto usa immagini locali con `next/image`. Metti sempre i file in `public/` e referenziali con path assoluto (`/image1.jpg`).

## Deploy

Configura `NEXT_PUBLIC_SITE_URL` con l’URL pubblico (es. `https://tuodominio.it`) per metadata, Open Graph e canonical corretti.

La generazione dell’immagine Open Graph è in [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx).

## Note legali

La pagina Privacy è un **segnaposto**: sostituiscila con un testo conforme al GDPR redatto o revisionato da un professionista.
