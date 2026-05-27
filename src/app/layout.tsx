import type { Metadata, Viewport } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://halalguidemx.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Halal Guide MX — Muslim-Friendly Riviera Maya Travel Guide",
    template: "%s | Halal Guide MX",
  },
  description:
    "The boutique, locally vetted guide to halal restaurants, Muslim-friendly venues, mosques, halal-meat delivery, and Muslim travel services across Cancún, Playa del Carmen, and Tulum.",
  applicationName: "Halal Guide MX",
  category: "travel",
  keywords: [
    "Halal Mexico",
    "Halal Riviera Maya",
    "Halal Cancun",
    "Halal Playa del Carmen",
    "Halal Tulum",
    "Halal restaurants Mexico",
    "Muslim-friendly Mexico",
    "Mosques Cancun",
    "Mosque Playa del Carmen",
    "Mosque Tulum",
    "Halal meat delivery Cancun",
    "Halal travel Caribbean",
    "Muslim travel Mexico",
    "Islamic wedding Cancun",
    "Nikah Riviera Maya",
    "Halal honeymoon Mexico",
  ],
  authors: [{ name: "Halal Guide MX Editorial Team", url: SITE_URL }],
  creator: "Halal Guide MX",
  publisher: "Halal Guide MX",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-MX": "/",
      "fr-FR": "/",
      "ar": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Halal Guide MX",
    title: "Halal Guide MX — Muslim-Friendly Riviera Maya Travel Guide",
    description:
      "Verified halal restaurants, Muslim-friendly venues, active mosques, halal-meat delivery, and Muslim wedding & transfer services in Cancún, Playa del Carmen, and Tulum.",
    locale: "en_US",
    alternateLocale: ["es_MX", "fr_FR", "ar_AR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halal Guide MX — Muslim-Friendly Riviera Maya Travel Guide",
    description:
      "Verified halal restaurants, mosques, and Muslim travel services across Cancún, Playa del Carmen, and Tulum.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCF9F2" },
    { media: "(prefers-color-scheme: dark)", color: "#072A30" },
  ],
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Halal Guide MX",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "Locally vetted, boutique travel guide to halal restaurants, mosques, and Muslim-friendly services across the Mexican Caribbean.",
  areaServed: [
    { "@type": "City", name: "Cancún" },
    { "@type": "City", name: "Playa del Carmen" },
    { "@type": "City", name: "Tulum" },
    { "@type": "AdministrativeArea", name: "Quintana Roo, Mexico" },
  ],
  sameAs: [
    "https://muslimweddingsmexico.com",
    "https://salamtransfers.com",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "Halal Guide MX",
  inLanguage: ["en", "es", "fr", "ar"],
  publisher: { "@id": `${SITE_URL}#organization` },
  description:
    "Verified halal restaurants, mosques, and Muslim travel services across Cancún, Playa del Carmen, and Tulum.",
};

const travelGuideJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  name: "Halal Guide MX — Riviera Maya",
  about: {
    "@type": "TouristDestination",
    name: "Riviera Maya",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Quintana Roo, Mexico",
    },
  },
  audience: {
    "@type": "Audience",
    audienceType: "Muslim travelers",
  },
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: ["en", "es", "fr", "ar"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are there halal restaurants in the Riviera Maya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Playa del Carmen currently has the strongest, most concentrated halal food scene in the Riviera Maya, including fully halal-verified Middle Eastern, Mediterranean, and French street-food venues. Cancún and Tulum offer Muslim-friendly restaurants and a reliable raw halal-meat delivery service.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'Muslim-Friendly' mean on Halal Guide MX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 'Muslim-Friendly' listing indicates the venue is not fully halal but accommodates Muslim travelers — for example by offering halal-prepared dishes on request, certified vegetarian or seafood menus, and respectful, family-oriented environments.",
      },
    },
    {
      "@type": "Question",
      name: "Are there mosques in Cancún, Playa del Carmen, and Tulum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Masjid Al-Rahim is in downtown Cancún, Masjid Al-Rahman is in Playa del Carmen, and Masjid Al-Malik is in Tulum. They host daily prayers, with Jummah at Al-Rahim and Al-Rahman.",
      },
    },
    {
      "@type": "Question",
      name: "Can I wear a burkini on the beaches in Mexico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Riviera Maya beaches, hotel pools, and freshwater cenotes are welcoming to modest swimwear including the burkini.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#FCF9F2] text-[#072A30] font-sans antialiased selection:bg-[#C15C3D]/20 selection:text-[#C15C3D]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelGuideJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
