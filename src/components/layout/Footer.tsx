"use client";

import React from "react";
import Logo from "../ui/Logo";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-cream text-teal-deep pt-20 pb-12 overflow-hidden border-t-4 border-[#C15C3D]">
      {/* Subtle Islamic Geometric Star Background Deco */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#072A30" strokeWidth="1" className="w-full h-full rotate-12">
          <polygon points="50,5 95,50 50,95 5,50" />
          <polygon points="50,5 95,50 50,95 5,50" className="rotate-45 origin-center" />
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-6 text-left rtl:text-right">
            <Logo className="w-fit" />

            <p className="font-sans text-[14px] text-teal-deep/70 leading-relaxed max-w-md">
              {t("footerDesc")}
            </p>

            <p className="font-sans text-[12px] text-teal-deep/55 max-w-md leading-relaxed">
              {t("mosqueFootnote").split(".")[0].replace("Note: ", "").replace("ملاحظة: ", "")}
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#0D3F47] hover:bg-terracotta flex items-center justify-center text-cream transition-colors duration-300" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0D3F47] hover:bg-terracotta flex items-center justify-center text-cream transition-colors duration-300" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0D3F47] hover:bg-terracotta flex items-center justify-center text-cream transition-colors duration-300" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-left rtl:text-right">
            <h3 className="font-serif text-[18px] font-bold text-terracotta">
              {t("exploreGuide")}
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans text-[14px] text-teal-deep/70">
              <li>
                <a href="#discover" className="hover:text-teal-deep transition-colors">{t("navDiscover")}</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-teal-deep transition-colors">{t("navCategories")}</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-teal-deep transition-colors">{t("navDestinations")}</a>
              </li>
              <li>
                <a href="#mosques" className="hover:text-teal-deep transition-colors">{t("navMosques")}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-deep transition-colors">{t("navServices")}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-deep/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[13px] text-teal-deep/50 text-center sm:text-left rtl:sm:text-right">
            &copy; {currentYear} Halal Guide MX. {t("footerRights")}
          </p>
          <p className="font-sans text-[13px] font-semibold text-terracotta text-center sm:text-right rtl:sm:text-left">
            {t("footerSlogan")}
          </p>
        </div>
      </div>
    </footer>
  );
}
