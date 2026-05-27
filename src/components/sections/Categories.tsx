"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Categories() {
  const { t } = useLanguage();

  const categories = [
    {
      symbol: "☪",
      title: "HALAL",
      badgeText: t("catHalalBadge"),
      colorClass: "border-terracotta text-terracotta hover:bg-terracotta/5",
      accentBg: "bg-terracotta/10",
      description: t("catHalalDesc"),
    },
    {
      symbol: "🌙",
      title: "MUSLIM-FRIENDLY",
      badgeText: t("catFriendlyBadge"),
      colorClass: "border-caribbean text-caribbean hover:bg-caribbean/5",
      accentBg: "bg-caribbean/10",
      description: t("catFriendlyDesc"),
    },
    {
      symbol: "🛒",
      title: "HALAL SUPPLY",
      badgeText: t("catSupplyBadge"),
      colorClass: "border-olive text-olive hover:bg-olive/5",
      accentBg: "bg-olive/10",
      description: t("catSupplyDesc"),
    },
  ];

  return (
    <section id="categories" className="relative py-24 bg-gradient-to-b from-[#FCF9F2] to-[#F5F2EB] overflow-hidden scroll-mt-20">
      
      {/* Decorative Subtle Geometric Islamic Line Art */}
      <div className="absolute right-[-100px] top-10 w-[350px] h-[350px] opacity-[0.03] pointer-events-none text-teal-deep">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <polygon points="50,5 95,50 50,95 5,50" />
          <polygon points="50,5 95,50 50,95 5,50" className="rotate-30 origin-center" />
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 text-terracotta mb-4"
          >
            <span className="w-6 h-px bg-terracotta" />
            <span className="font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase">
              {t("catPill")}
            </span>
            <span className="w-6 h-px bg-terracotta" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[36px] sm:text-[44px] font-extrabold text-teal-deep leading-tight"
          >
            {t("catTitle")}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[15px] sm:text-[16px] text-teal-medium/80 mt-4 leading-relaxed"
          >
            {t("catSub")}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative flex flex-col justify-between h-full bg-white border border-sand-dark/30 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group text-left rtl:text-right"
            >
              
              {/* Subtle background vector shape inside cards */}
              <div className="absolute right-[-40px] top-[-40px] w-32 h-32 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none text-teal-deep">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                  <polygon points="50,5 95,50 50,95 5,50" />
                  <polygon points="50,5 95,50 50,95 5,50" className="rotate-45 origin-center" />
                </svg>
              </div>

              {/* Upper Section */}
              <div>
                
                {/* Header details */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Symbol Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${category.accentBg} flex items-center justify-center text-[26px] shadow-inner select-none`}>
                    {category.symbol}
                  </div>
                  {/* Badge */}
                  <span className="font-sans text-[11px] font-bold text-teal-medium/50 uppercase tracking-widest bg-sand-light border border-sand-dark/20 px-3.5 py-1.5 rounded-full">
                    {category.badgeText}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[24px] font-black text-teal-deep mb-4 group-hover:text-terracotta transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[14px] text-teal-medium/85 leading-relaxed min-h-[105px]">
                  {category.description}
                </p>

              </div>

              {/* Bottom Deco Bar */}
              <div className="mt-8 pt-4 border-t border-sand-light flex justify-between items-center text-[12px] font-sans font-bold tracking-wider text-teal-deep/50 uppercase">
                <span>{t("catVettedStd")}</span>
                <span className="text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("catViewListings")} &rarr;
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
