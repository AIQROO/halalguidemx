import type { MetadataRoute } from "next";

const SITE_URL = "https://halalguidemx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const sections = [
    "",
    "#discover",
    "#categories",
    "#destinations",
    "#mosques",
    "#services",
    "#faq",
    "#about",
  ];

  return sections.map((hash, idx) => ({
    url: `${SITE_URL}/${hash}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: idx === 0 ? 1 : 0.7,
    alternates: {
      languages: {
        en: `${SITE_URL}/${hash}`,
        es: `${SITE_URL}/${hash}`,
        fr: `${SITE_URL}/${hash}`,
        ar: `${SITE_URL}/${hash}`,
      },
    },
  }));
}
