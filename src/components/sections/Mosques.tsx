"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Mosque {
  id: string;
  name: string;
  city: string;
  address: string;
  features: string[];
  region: string;
  countryCode: string;
}

export default function Mosques() {
  const { t } = useLanguage();

  const mosques: Mosque[] = [
    {
      id: "masjid-al-rahim",
      name: "MASJID AL-RAHIM • Cancún",
      city: t("heroOptCancun"),
      address: "Calle Alce #24, SM 20, Cancún, Quintana Roo.",
      features: [t("mosqueFriday"), t("mosqueWudu"), t("mosqueCentral")],
      region: "Quintana Roo",
      countryCode: "MX",
    },
    {
      id: "masjid-al-rahman",
      name: "MASJID AL-RAHMAN • Playa del Carmen",
      city: t("heroOptPlaya"),
      address: "Calle 3 Sur esquina con 60 Avenida Sur, Ejidal, Playa del Carmen.",
      features: [t("mosqueDaily"), t("mosqueSpacious"), t("mosqueActive")],
      region: "Quintana Roo",
      countryCode: "MX",
    },
    {
      id: "masjid-al-malik",
      name: "MASJID AL-MALIK • Tulum",
      city: t("heroOptTulum"),
      address: "Calle 17 esquina Calle 4, Villas Tulum.",
      features: [t("mosquePristine"), t("mosqueQuiet"), t("mosqueKey")],
      region: "Quintana Roo",
      countryCode: "MX",
    },
  ];

  const mosqueListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Active mosques in the Riviera Maya",
    itemListElement: mosques.map((m, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Mosque",
        name: m.name.split(" •")[0].trim(),
        address: {
          "@type": "PostalAddress",
          streetAddress: m.address,
          addressLocality: m.city,
          addressRegion: m.region,
          addressCountry: m.countryCode,
        },
      },
    })),
  };

  return (
    <section id="mosques" className="relative py-24 bg-[#FCF9F2] overflow-hidden scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mosqueListJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Decorative Islamic Background Art */}
      <div className="absolute left-[-120px] bottom-[-100px] w-[350px] h-[350px] opacity-[0.03] pointer-events-none text-teal-deep">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <polygon points="50,5 95,50 50,95 5,50" />
          <polygon points="50,5 95,50 50,95 5,50" className="rotate-45 origin-center" />
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-terracotta mb-4">
            <span className="w-8 h-px bg-terracotta" />
            <span className="font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase">
              {t("mosquePill")}
            </span>
            <span className="w-8 h-px bg-terracotta" />
          </div>
          <h2 className="font-serif text-[38px] sm:text-[46px] font-extrabold text-teal-deep leading-tight">
            {t("mosqueTitle")}
          </h2>
          <p className="font-sans text-[14px] sm:text-[15px] text-teal-medium/70 mt-2">
            {t("mosqueSub")}
          </p>
        </div>

        {/* 3-Column Mosque Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mosques.map((mosque) => (
            <motion.div
              key={mosque.id}
              whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(7, 42, 48, 0.05)" }}
              className="bg-white border border-sand-dark/25 p-6 rounded-2xl flex flex-col justify-between shadow-sm transition-all duration-300 relative group text-left rtl:text-right"
            >
              <div>
                {/* Header bar */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-sans text-[11px] font-black text-terracotta uppercase tracking-widest bg-sand/30 border border-sand-dark/20 px-3 py-1 rounded-full">
                    {mosque.city}
                  </span>
                  <MapPin className="w-5 h-5 text-teal-deep/30 group-hover:text-terracotta transition-colors duration-300" />
                </div>

                {/* Name */}
                <h3 className="font-serif text-[21px] font-black text-teal-deep mb-2.5 leading-snug">
                  {mosque.name}
                </h3>

                {/* Address details */}
                <p className="font-sans text-[13.5px] text-teal-medium/75 font-medium leading-relaxed mb-6 min-h-[60px]">
                  {mosque.address}
                </p>
              </div>

              {/* Highlights checklist */}
              <div className="pt-4 border-t border-sand-light flex flex-wrap gap-2 text-left rtl:text-right">
                {mosque.features.map((feat) => (
                  <span key={feat} className="bg-sand-light text-teal-deep text-[11px] font-sans font-medium px-2.5 py-1 rounded-md border border-sand-dark/15">
                    {feat}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Managed association note */}
        <div className="bg-sand/35 border border-sand-dark/25 p-5 rounded-2xl flex items-start gap-3 mt-4 text-left rtl:text-right max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
          <p className="font-sans text-[12.5px] text-teal-medium/80 leading-relaxed font-semibold">
            {t("mosqueFootnote")}
          </p>
        </div>

      </div>
    </section>
  );
}
