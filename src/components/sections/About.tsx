"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 bg-[#F5F2EB] overflow-hidden scroll-mt-20">
      {/* Dynamic Background Overlays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-islamic-dot opacity-5 pointer-events-none" />

      {/* Decorative Subtle Geometric Islamic Line Art */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] text-teal-deep pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" className="w-full h-full">
          <polygon points="50,2 98,50 50,98 2,50" />
          <polygon points="50,2 98,50 50,98 2,50" className="rotate-45 origin-center" />
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Editorial Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 text-terracotta mb-6"
        >
          <span className="w-6 h-px bg-terracotta" />
          <span className="font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase">
            {t("aboutPill")}
          </span>
          <span className="w-6 h-px bg-terracotta" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-[36px] sm:text-[42px] font-bold text-teal-deep leading-tight mb-12 uppercase tracking-widest"
        >
          {t("aboutTitle")}
        </motion.h2>

        {/* The Exact User Requested Copy */}
        <div className="flex flex-col gap-8 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[17px] sm:text-[19px] text-teal-deep leading-relaxed font-semibold"
          >
            {t("aboutDesc1")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif italic text-[22px] sm:text-[25px] text-terracotta leading-relaxed border-y border-sand-dark/30 py-6 px-4"
          >
            &ldquo;{t("aboutDesc2")}&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-[15px] sm:text-[17px] text-teal-medium/85 leading-relaxed"
          >
            {t("aboutDesc3")}
          </motion.p>
        </div>

      </div>
    </section>
  );
}
