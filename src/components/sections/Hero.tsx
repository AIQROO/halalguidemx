"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [selectedCity, setSelectedCity] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Smooth scroll to the destinations section
    const targetElement = document.getElementById("destinations");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      
      // We'll pass search intent by dispatching a custom event that Destinations.tsx listens to!
      const event = new CustomEvent("search-filter", {
        detail: { city: selectedCity, query: searchQuery }
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-[#072A30] via-[#0D3F47] to-[#16535d] text-[#FCF9F2]">
      
      {/* Dynamic Background Overlays */}
      {/* 1. CSS grid pattern for map-inspired feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      {/* 2. Custom Islamic dot pattern */}
      <div className="absolute inset-0 bg-islamic-dot opacity-5 pointer-events-none" />

      {/* 3. Subtle rotating vector Islamic geometric stars */}
      <div className="absolute top-1/4 right-[-100px] w-[500px] h-[500px] opacity-10 pointer-events-none animate-[spin_120s_linear_infinite]">
        <svg viewBox="0 0 100 100" fill="none" stroke="#FCF9F2" strokeWidth="0.5" className="w-full h-full">
          <polygon points="50,2 98,50 50,98 2,50" />
          <polygon points="50,2 98,50 50,98 2,50" className="rotate-30 origin-center" />
          <polygon points="50,2 98,50 50,98 2,50" className="rotate-60 origin-center" />
          <circle cx="50" cy="50" r="35" />
        </svg>
      </div>

      {/* 4. Elegant Tropical Palm Vector shadows in background */}
      <div className="absolute left-[-50px] bottom-[-50px] w-[350px] h-[450px] opacity-[0.08] pointer-events-none rotate-12">
        <svg viewBox="0 0 100 120" fill="#FCF9F2" className="w-full h-full">
          {/* SVG Palm Frond Silhouette */}
          <path d="M10,110 C40,90 70,50 80,10 C60,30 40,60 30,80 C32,65 37,45 42,25 C34,40 28,60 22,75 C25,58 29,38 31,18 C24,35 18,55 14,70 C15,50 16,30 15,10 C10,32 8,55 6,68 Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left rtl:text-right">
            
            {/* Top Editorial Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-[#FCF9F2]/10 backdrop-blur-md border border-[#FCF9F2]/15 px-4 py-1.5 rounded-full w-fit"
            >
              <Star className="w-3.5 h-3.5 text-terracotta fill-terracotta" />
              <span className="font-sans text-[12px] font-bold tracking-wider uppercase text-cream/90">
                {t("heroPill")}
              </span>
            </motion.div>

            {/* Main Editorial Header */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[42px] sm:text-[58px] lg:text-[66px] font-extrabold leading-[1.08] tracking-tight"
            >
              {t("heroTitle")} <br className="hidden sm:inline" />
              <span className="text-terracotta">
                {t("heroTitleAccent")}
              </span> <br />
              {t("heroTitleEnd")}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[16px] sm:text-[18px] text-cream/80 leading-relaxed max-w-2xl font-light"
            >
              {t("heroSubtitle")}
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-cream font-sans text-[15px] font-bold px-7 py-3.5 rounded-full shadow-lg shadow-terracotta/20 transition-luxury group"
              >
                {t("heroBtnExplore")}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
              </a>
              <a
                href="#discover"
                className="inline-flex items-center gap-2 bg-[#FCF9F2]/10 hover:bg-[#FCF9F2]/20 border border-[#FCF9F2]/20 text-cream font-sans text-[15px] font-bold px-7 py-3.5 rounded-full transition-luxury"
              >
                {t("heroBtnHow")}
              </a>
            </motion.div>

          </div>

          {/* Right Floating Search & Visual Overlay Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md glass-card-dark p-8 rounded-3xl shadow-2xl relative overflow-hidden text-left rtl:text-right"
            >
              {/* Overlay highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-caribbean/10 rounded-full blur-2xl pointer-events-none" />

              <h2 className="font-serif text-[24px] font-bold text-cream mb-1 flex items-center gap-2">
                {t("heroSearchTitle")}
              </h2>
              <p className="font-sans text-[13px] text-cream/60 mb-6 leading-relaxed">
                {t("heroSearchSub")}
              </p>

              {/* Form search */}
              <form onSubmit={handleSearchSubmit} className="flex flex-col gap-4">
                
                {/* Select City */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-cream/70">
                    {t("heroLabelDest")}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full bg-[#0D3F47] border border-teal-light/50 rounded-xl ps-4 pe-10 py-3 text-cream font-sans text-[14px] focus:outline-none focus:border-terracotta transition-colors appearance-none cursor-pointer"
                    >
                      <option value="all">{t("heroOptAll")}</option>
                      <option value="cancun">{t("heroOptCancun")}</option>
                      <option value="playa">{t("heroOptPlaya")}</option>
                      <option value="tulum">{t("heroOptTulum")}</option>
                    </select>
                    <MapPin className="absolute end-4 top-3.5 w-4 h-4 text-cream/40 pointer-events-none" />
                  </div>
                </div>

                {/* Search Text Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-cream/70">
                    {t("heroLabelSearch")}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t("heroPlaceholder")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#0D3F47] border border-teal-light/50 rounded-xl ps-4 pe-10 py-3 text-cream font-sans text-[14px] focus:outline-none focus:border-terracotta transition-colors placeholder:text-cream/35"
                    />
                    <Search className="absolute end-4 top-3.5 w-4 h-4 text-cream/40 pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-terracotta hover:bg-terracotta-hover text-cream font-sans text-[14px] font-bold py-3.5 rounded-xl transition-luxury flex items-center justify-center gap-2 shadow-lg shadow-terracotta/15 hover:shadow-terracotta/25"
                >
                  <Search className="w-4 h-4" />
                  {t("heroBtnSearch")}
                </button>
              </form>

              {/* Quick stats badges */}
              <div className="mt-6 pt-6 border-t border-teal-light/35 flex justify-between items-center text-center gap-2">
                <div className="flex-1 min-w-0">
                  <div className="text-[18px] font-bold text-caribbean-light">10+</div>
                  <div className="text-[9.5px] sm:text-[10px] text-cream/50 uppercase tracking-widest mt-0.5 truncate">{t("statPlaces")}</div>
                </div>
                <div className="h-8 w-px bg-teal-light/30 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[18px] font-bold text-caribbean-light">3</div>
                  <div className="text-[9.5px] sm:text-[10px] text-cream/50 uppercase tracking-widest mt-0.5 truncate">{t("statMosques")}</div>
                </div>
                <div className="h-8 w-px bg-teal-light/30 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[18px] font-bold text-caribbean-light">100%</div>
                  <div className="text-[9.5px] sm:text-[10px] text-cream/50 uppercase tracking-widest mt-0.5 truncate">{t("statVetted")}</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
