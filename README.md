# Halal Guide MX

Boutique travel guide to halal restaurants, Muslim-friendly venues, mosques, and Muslim travel services across the Mexican Caribbean (Cancún, Playa del Carmen, Tulum).

Production: **https://halalguidemx.com**

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- In-app i18n (EN/ES/FR/AR with RTL)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

The project is ready to deploy out of the box.

1. Push to GitHub (`AIQROO/halalguidemx`).
2. Import the repo in Vercel.
3. Add `halalguidemx.com` as a production domain.
4. No env vars required.

## SEO & GEO (AI search optimization)

- Full Open Graph + Twitter Card metadata in `src/app/layout.tsx`.
- JSON-LD structured data: `Organization`, `WebSite`, `TravelGuide`, `FAQPage`, and a mosque `ItemList`.
- `robots.ts` explicitly allows `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Claude-Web`, `Google-Extended`, `anthropic-ai`, `CCBot`, and `Applebot-Extended`.
- `sitemap.ts` with hreflang alternates.
- Web manifest at `/site.webmanifest`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # root metadata, JSON-LD, fonts
│   ├── page.tsx            # composes home sections
│   ├── globals.css         # Tailwind v4 theme + utilities
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Mission, Categories, Destinations, Mosques, Services, Faq, About
│   └── ui/                 # Logo
├── context/
│   └── LanguageContext.tsx # i18n provider, RTL handling
└── translations/
    └── dictionary.ts       # EN/ES/FR/AR copy
```
