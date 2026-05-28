"use client";

import React, { useState } from "react";
import Logo from "../ui/Logo";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/translations/dictionary";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  const navLinks = [
    { name: t("navDiscover"), href: "#discover" },
    { name: t("navCategories"), href: "#categories" },
    { name: t("navDestinations"), href: "#destinations" },
    { name: t("navMosques"), href: "#mosques" },
    { name: t("navServices"), href: "#services" },
    { name: t("navFaq"), href: "#faq" },
  ];

  // Cream navbar at all times — dark teal text on cream glass
  const linkColor = "text-teal-deep hover:text-terracotta";
  const selectorWrap = "border-teal-light/20 bg-[#FAF6F0]/65 hover:border-terracotta";
  const selectorIcon = "text-teal-deep/60";
  const selectorText = "text-teal-deep";
  const ctaButton = "bg-teal-deep hover:bg-terracotta text-cream shadow-md shadow-teal-deep/10 hover:shadow-terracotta/20";
  const mobileBtnColor = "text-teal-deep hover:text-terracotta hover:bg-sand/30";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full glass-nav py-3 shadow-md shadow-[#072a30]/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#top"
              aria-label="Halal Guide MX — Home"
              className="flex-shrink-0 transition-opacity hover:opacity-90"
            >
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-[14px] font-semibold transition-colors duration-300 relative group ${linkColor}`}
                >
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA & Language Selector */}
            <div className="hidden md:flex items-center gap-4">
              <div className={`flex items-center gap-1.5 border backdrop-blur-md rounded-full px-3 py-1.5 transition-luxury ${selectorWrap}`}>
                <Globe className={`w-3.5 h-3.5 transition-colors duration-300 ${selectorIcon}`} />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className={`bg-transparent text-[11px] font-sans font-bold uppercase tracking-wider focus:outline-none cursor-pointer pr-1 border-0 transition-colors duration-300 ${selectorText}`}
                  aria-label="Select language"
                >
                  <option value="en" className="text-teal-deep">EN</option>
                  <option value="es" className="text-teal-deep">ES</option>
                  <option value="fr" className="text-teal-deep">FR</option>
                  <option value="ar" className="text-teal-deep">AR</option>
                </select>
              </div>

              <a
                href="#destinations"
                className={`inline-flex items-center gap-1.5 font-sans text-[13px] font-bold px-4.5 py-2.5 rounded-full transition-luxury group ${ctaButton}`}
              >
                {t("exploreGuide")}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors ${mobileBtnColor}`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-teal-deep/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 bottom-0 z-40 w-[280px] bg-[#FCF9F2] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-500 md:hidden ${
          dir === "rtl"
            ? isMobileMenuOpen ? "left-0 translate-x-0" : "left-0 -translate-x-full"
            : isMobileMenuOpen ? "right-0 translate-x-0" : "right-0 translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 mt-16 text-left rtl:text-right">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-[18px] font-bold text-teal-deep hover:text-terracotta transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-sand-dark/30 pt-6">
          <p className="text-[12px] font-sans text-teal-medium/60 leading-relaxed text-left rtl:text-right">
            Curated locally for Muslim travelers. Discover Cancún, Playa del Carmen, and Tulum.
          </p>

          <div className="flex items-center gap-2 border border-teal-light/20 bg-sand/35 rounded-full px-4 py-2.5 w-full justify-center transition-luxury mb-1">
            <Globe className="w-4 h-4 text-teal-deep/60" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-teal-deep text-[13px] font-sans font-bold uppercase tracking-wider focus:outline-none cursor-pointer border-0"
              aria-label="Select language"
            >
              <option value="en">English (EN)</option>
              <option value="es">Español (ES)</option>
              <option value="fr">Français (FR)</option>
              <option value="ar">العربية (AR)</option>
            </select>
          </div>

          <a
            href="#destinations"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-teal-deep hover:bg-terracotta text-cream font-sans text-[14px] font-bold py-3 rounded-full shadow-lg transition-luxury"
          >
            {t("exploreGuide")}
          </a>
        </div>
      </div>
    </>
  );
}
