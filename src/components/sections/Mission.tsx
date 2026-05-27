"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users2, Compass, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Mission() {
  const { t } = useLanguage();

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: t("badge1Title"),
      description: t("badge1Desc"),
    },
    {
      icon: Users2,
      title: t("badge2Title"),
      description: t("badge2Desc"),
    },
    {
      icon: Heart,
      title: t("badge3Title"),
      description: t("badge3Desc"),
    },
    {
      icon: Compass,
      title: t("badge4Title"),
      description: t("badge4Desc"),
    },
  ];

  return (
    <section id="discover" className="relative py-24 bg-[#FCF9F2] overflow-hidden scroll-mt-20">
      {/* Decorative Subtle Geometric Islamic Line Art */}
      <div className="absolute left-[-150px] top-1/3 w-[400px] h-[400px] opacity-[0.03] pointer-events-none text-teal-deep">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <polygon points="50,5 95,50 50,95 5,50" />
          <polygon points="50,5 95,50 50,95 5,50" className="rotate-45 origin-center" />
          <circle cx="50" cy="50" r="25" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left rtl:text-right">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2 text-terracotta"
            >
              <span className="w-8 h-px bg-terracotta" />
              <span className="font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase">
                {t("missionPill")}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-[36px] sm:text-[44px] font-extrabold text-teal-deep leading-tight"
            >
              {t("missionTitle")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 font-sans text-[15px] sm:text-[16px] text-teal-medium/80 leading-relaxed"
            >
              <p className="font-medium text-teal-deep text-[17px]">
                {t("missionDesc1")}
              </p>
              <p>
                {t("missionDesc2")}
              </p>
              <p>
                {t("missionDesc3")}
              </p>
            </motion.div>

            {/* Asymmetric editorial quote card */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-6 bg-sand/35 border-l-4 rtl:border-l-0 rtl:border-r-4 border-terracotta rounded-r-2xl rtl:rounded-r-none rtl:rounded-l-2xl mt-4"
            >
              <p className="font-serif italic text-[15px] text-teal-deep leading-relaxed">
                &ldquo;{t("missionQuote")}&rdquo;
              </p>
              <span className="block font-sans text-[11px] font-bold text-terracotta tracking-wider uppercase mt-2">
                — {t("missionQuoteAuthor")}
              </span>
            </motion.div>
          </div>

          {/* Right Trust Grid Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white hover:bg-sand/20 border border-sand-dark/25 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group text-left rtl:text-right"
                >
                  <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto text-caribbean/30 group-hover:text-caribbean transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-sand/55 flex items-center justify-center text-terracotta mb-4 group-hover:bg-terracotta group-hover:text-cream transition-colors duration-300 shadow-inner">
                    <badge.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-[18px] font-bold text-teal-deep mb-2">
                    {badge.title}
                  </h3>
                  
                  <p className="font-sans text-[13px] text-teal-medium/70 leading-relaxed">
                    {badge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
