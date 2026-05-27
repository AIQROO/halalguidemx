"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Car, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "wedding",
      icon: Heart,
      title: t("srvWeddingTitle"),
      subtitle: t("srvWeddingSub"),
      description: t("srvWeddingDesc"),
      ctaText: t("srvWeddingCta"),
      ctaHref: "https://muslimweddingsmexico.com",
      colorTheme: "border-terracotta/35 text-terracotta",
      accentBg: "bg-terracotta/5",
      badgeText: "Nikah",
    },
    {
      id: "transfers",
      icon: Car,
      title: t("srvTransfersTitle"),
      subtitle: t("srvTransfersSub"),
      description: t("srvTransfersDesc"),
      ctaText: t("srvTransfersCta"),
      ctaHref: "https://salamtransfers.com",
      colorTheme: "border-caribbean/35 text-caribbean",
      accentBg: "bg-caribbean/5",
      badgeText: "Salam",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#F5F2EB] scroll-mt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 text-terracotta mb-4"
          >
            <span className="w-6 h-px bg-terracotta" />
            <span className="font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase">
              {t("srvPill")}
            </span>
            <span className="w-6 h-px bg-terracotta" />
          </motion.div>

          <h2 className="font-serif text-[38px] sm:text-[46px] font-extrabold text-teal-deep leading-tight">
            {t("srvTitle")}
          </h2>
          
          <p className="font-sans text-[14px] sm:text-[15px] text-teal-medium/70 mt-2 leading-relaxed">
            {t("srvSub")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -6 }}
              className={`bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden relative group text-left rtl:text-right ${srv.colorTheme}`}
            >
              {/* Geometric pattern inside card */}
              <div className="absolute right-[-30px] top-[-30px] w-24 h-24 opacity-[0.02] text-teal-deep group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                  <polygon points="50,5 95,50 50,95 5,50" />
                  <polygon points="50,5 95,50 50,95 5,50" className="rotate-45 origin-center" />
                </svg>
              </div>

              {/* Upper Section */}
              <div>
                
                {/* Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl ${srv.accentBg} flex items-center justify-center shadow-inner`}>
                    <srv.icon className="w-6 h-6" />
                  </div>
                  <span className="font-sans text-[10px] font-bold text-teal-medium/50 uppercase tracking-widest bg-sand-light border border-sand-dark/15 px-3 py-1 rounded-full">
                    {srv.badgeText}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-[26px] font-black text-teal-deep mb-1 group-hover:text-terracotta transition-colors duration-300">
                  {srv.title}
                </h3>
                <span className="font-sans text-[13px] font-bold tracking-wide text-terracotta/80 block mb-4">
                  {srv.subtitle}
                </span>

                {/* Description */}
                <p className="font-sans text-[14px] text-teal-medium/85 leading-relaxed mb-8">
                  {srv.description}
                </p>

              </div>

              {/* Call to action button */}
              <a
                href={srv.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 font-sans text-[14px] font-bold py-3.5 rounded-xl border border-teal-deep/20 text-teal-deep hover:bg-teal-deep hover:text-cream shadow-sm hover:shadow-md transition-luxury"
              >
                {srv.ctaText}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
