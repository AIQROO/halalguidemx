"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationModel, translations } from "@/translations/dictionary";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: (key: keyof TranslationModel) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const VALID_LANGS: readonly Language[] = ["en", "es", "fr", "ar"];

function readInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem("halal-guide-lang") as Language | null;
  return saved && VALID_LANGS.includes(saved) ? saved : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("halal-guide-lang", lang);
    }
  };

  // Sync only the DOM (external system) when language changes — no setState.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const t = (key: keyof TranslationModel): string => {
    const set = translations[language];
    return set[key] || translations.en[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
