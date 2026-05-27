"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, AlertTriangle, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationModel } from "@/translations/dictionary";

interface LocalizedString {
  en: string;
  es: string;
  fr: string;
  ar: string;
}

interface LocalizedList {
  en: string[];
  es: string[];
  fr: string[];
  ar: string[];
}

interface Listing {
  id: string;
  name: string; // Keep brand names as is, but can translate details
  category: "Halal" | "Muslim-Friendly" | "Halal Supply";
  isEditorsPick?: boolean;
  whyWeLikeIt: LocalizedString;
  highlights?: LocalizedList;
  notes?: LocalizedString;
  coverage?: LocalizedString;
  contact?: {
    phone?: string;
    email?: string;
  };
}

interface DestinationData {
  city: string;
  slug: string;
  intro: LocalizedString;
  listings: Listing[];
}

export default function Destinations() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const { language, t } = useLanguage();

  // Vetted travel listings data with complete localized support
  const destinations: DestinationData[] = [
    {
      city: "Cancún",
      slug: "cancun",
      intro: {
        en: "Cancún is the main gateway to the Mexican Caribbean and one of the easiest places to begin a Muslim-friendly trip to Mexico.",
        es: "Cancún es la puerta de entrada principal al Caribe Mexicano y uno de los lugares más fáciles para comenzar un viaje amigable con el islam en México.",
        fr: "Cancún est la principale porte d'entrée des Caraïbes mexicaines et l'un des endroits les plus faciles pour commencer un voyage musulman-friendly au Mexique.",
        ar: "كانكون هي البوابة الرئيسية لمنطقة الكاريبي المكسيكية وواحدة من أسهل الأماكن لبدء رحلة صديقة للمسلمين في المكسيك.",
      },
      listings: [
        {
          id: "iftar-cancun",
          name: "IFTAR HALAL MEAT • Cancún",
          category: "Halal Supply",
          whyWeLikeIt: {
            en: "Reliable halal meat delivery for families, villas, Airbnb guests, private chefs, and long stays in Cancún.",
            es: "Entrega confiable de carne halal para familias, villas, huéspedes de Airbnb, chefs privados y estancias largas en Cancún.",
            fr: "Livraison fiable de viande halal pour les familles, les villas, les invités Airbnb, les chefs privés et les longs séjours à Cancún.",
            ar: "توصيل لحوم حلال موثوق للعائلات، الفلل، ضيوف Airbnb، الطهاة الخاصين، والإقامات الطويلة في كانكون.",
          },
          coverage: {
            en: "Hotel Zone, Downtown Cancún, Puerto Cancún, and selected residential areas.",
            es: "Zona Hotelera, Centro de Cancún, Puerto Cancún y áreas residenciales seleccionadas.",
            fr: "Zone Hôtelière, Centre-ville de Cancún, Puerto Cancún et zones résidentielles sélectionnées.",
            ar: "المنطقة الفندقية، وسط مدينة كانكون، بويرتو كانكون، ومناطق سكنية مختارة.",
          },
          contact: {
            phone: "+52 984 107 2118",
            email: "admin@halalmeatandmeals.com",
          },
        },
        {
          id: "la-french-riviera",
          name: "LA FRENCH RIVIERA RESTAURANT & HOOKAH LOUNGE",
          category: "Muslim-Friendly",
          whyWeLikeIt: {
            en: "Elegant French restaurant and hookah lounge atmosphere with Muslim-friendly accommodations and halal menu options under request.",
            es: "Elegante restaurante francés y ambiente de salón de hookah con adaptaciones amigables con el islam y opciones de menú halal bajo solicitud.",
            fr: "Atmosphère élégante de restaurant français et de salon à chicha avec des hébergements adaptés aux musulmans et des options de menu halal sur demande.",
            ar: "مطعم فرنسي أنيق وأجواء صالة شيشة مع خدمات ملائمة للمسافرين المسلمين وخيارات قائمة طعام حلال عند الطلب.",
          },
          notes: {
            en: "Alcohol may be served on-site. Always confirm halal menu availability before ordering.",
            es: "Se puede servir alcohol en el lugar. Confirma siempre la disponibilidad del menú halal antes de ordenar.",
            fr: "De l'alcool peut être servi sur place. Confirmez toujours la disponibilité du menu halal avant de commander.",
            ar: "قد يتم تقديم المشروبات الكحولية في الموقع. يرجى دائماً تأكيد توفر القائمة الحلال قبل الطلب.",
          },
        },
        {
          id: "marrakesh-cancun",
          name: "MARRAKESH RESTAURANT & HOOKAH LOUNGE",
          category: "Muslim-Friendly",
          whyWeLikeIt: {
            en: "Moroccan-inspired atmosphere, Middle Eastern cuisine, hookah, tea culture, and one of Cancún’s most recognizable Arab-style dining experiences.",
            es: "Atmósfera de inspiración marroquí, cocina del Medio Oriente, hookah, cultura del té y una de las experiencias culinarias de estilo árabe más reconocidas de Cancún.",
            fr: "Atmosphère d'inspiration marocaine, cuisine du Moyen-Orient, chicha, culture du thé et l'une des expériences culinaires de style arabe les plus reconnaissables de Cancún.",
            ar: "أجواء مستوحاة من المغرب، مأكولات الشرق الأوسط، شيشة، ثقافة الشاي، وواحدة من أشهر تجارب الطعام على الطراز العربي في كانكون.",
          },
          notes: {
            en: "Alcohol may be served on-site. Always confirm halal preparation and menu availability.",
            es: "Se puede servir alcohol en el lugar. Confirma siempre la preparación y la disponibilidad del menú halal antes de ordenar.",
            fr: "De l'alcool peut être servi sur place. Confirmez toujours la préparation et la disponibilité du menu halal.",
            ar: "قد يتم تقديم المشروبات الكحولية في الموقع. يرجى دائماً تأكيد طريقة التحضير الحلال وتوفر القائمة.",
          },
        },
      ],
    },
    {
      city: "Playa del Carmen",
      slug: "playa",
      intro: {
        en: "Playa del Carmen is currently the strongest halal destination in the Riviera Maya.",
        es: "Playa del Carmen es actualmente el destino halal más sólido de la Riviera Maya.",
        fr: "Playa del Carmen est actuellement la destination halal la plus solide de la Riviera Maya.",
        ar: "تعتبر بلايا ديل كارمن حالياً أقوى وجهة حلال في ريفييرا مايا.",
      },
      listings: [
        {
          id: "ar-rayan",
          name: "AR-RAYAN RESTAURANT",
          category: "Halal",
          isEditorsPick: true,
          whyWeLikeIt: {
            en: "One of the strongest halal dining concepts in the Riviera Maya, combining Middle Eastern, Mediterranean, Indian-inspired, grilled, and Mexican halal dishes.",
            es: "Uno de los conceptos gastronómicos halal más sólidos de la Riviera Maya, que combina platos halal de Medio Oriente, del Mediterráneo, de inspiración india, a la parrilla y mexicanos.",
            fr: "L'un des concepts de restauration halal les plus solides de la Riviera Maya, combinant des plats halal du Moyen-Orient, de la Méditerranée, d'inspiration indienne, grillés et mexicains.",
            ar: "واحد من أقوى مفاهيم الطعام الحلال في ريفييرا مايا، يجمع بين المأكولات الشرق أوسطية، المتوسطية، المستوحاة من الهند، المشويات، والأطباق المكسيكية الحلال.",
          },
          highlights: {
            en: ["No alcohol served", "Premium halal meat", "Family-friendly environment", "Near Quinta Avenida"],
            es: ["No se sirve alcohol", "Carne halal premium", "Ambiente familiar", "Cerca de la Quinta Avenida"],
            fr: ["Aucun alcool servi", "Viande halal premium", "Environnement familial", "Près de la Quinta Avenida"],
            ar: ["لا يتم تقديم الكحول", "لحوم حلال ممتازة", "بيئة مناسبة للعائلات", "بالقرب من الجادة الخامسة"],
          },
        },
        {
          id: "french-kebab",
          name: "FRENCH KEBAB",
          category: "Halal",
          isEditorsPick: true,
          whyWeLikeIt: {
            en: "Authentic French-style halal kebab with a casual European street-food atmosphere.",
            es: "Auténtico kebab halal de estilo francés con un ambiente informal de comida callejera europea.",
            fr: "Authentique kebab halal de style français avec une atmosphère décontractée de street-food européenne.",
            ar: "كباب حلال أصيل على الطراز الفرنسي مع أجواء طعام الشارع الأوروبي غير الرسمية.",
          },
          highlights: {
            en: ["House sauces", "Halal meat", "Uber Eats & Rappi", "Family-friendly", "Casual dining"],
            es: ["Salsas caseras", "Carne halal", "Uber Eats y Rappi", "Ambiente familiar", "Comida casual"],
            fr: ["Sauces maison", "Viande halal", "Uber Eats & Rappi", "Environnement familial", "Restauration décontractée"],
            ar: ["صلصات البيت الخاصة", "لحوم حلال معتمدة", "أوبر إيتس ورابي", "مناسب للعائلات", "طعام غير رسمي"],
          },
        },
        {
          id: "le-coq",
          name: "LE COQ EXPRESS",
          category: "Halal",
          whyWeLikeIt: {
            en: "French-style halal brasserie ideal for breakfast, brunch, lunch, or dinner.",
            es: "Brasserie halal de estilo francés ideal para el desayuno, brunch, almuerzo o cena.",
            fr: "Brasserie halal de style français idéale pour le petit-déjeuner, le brunch, le déjeuner ou le dîner.",
            ar: "براسيري حلال على الطراز الفرنسي مثالي للإفطار، الغداء المبكر، الغداء، أو العشاء.",
          },
          highlights: {
            en: ["Crepes", "Sandwiches", "Halal tacos", "Casual French atmosphere"],
            es: ["Crepas", "Sándwiches", "Tacos halal", "Ambiente francés informal"],
            fr: ["Crêpes", "Sandwichs", "Tacos halal", "Atmosphère française décontractée"],
            ar: ["كريب فرنسي", "سندوتشات منوعة", "تاكو حلال", "أجواء فرنسية غير رسمية"],
          },
        },
        {
          id: "street-food-latino",
          name: "STREET FOOD LATINO Y MÁS",
          category: "Muslim-Friendly",
          whyWeLikeIt: {
            en: "A relaxed Latin atmosphere with no alcohol and flexible menu accommodations for Muslim travelers.",
            es: "Un ambiente latino relajado sin alcohol y adaptaciones de menú flexibles para viajeros musulmanes.",
            fr: "Une atmosphère latine détendue sans alcool et des adaptations de menu flexibles pour les voyageurs musulmans.",
            ar: "أجواء لاتينية مريحة بدون كحول وتعديلات مرنة في قائمة الطعام للمسافرين المسلمين.",
          },
          notes: {
            en: "Not fully halal. Always confirm ingredients and preparation methods.",
            es: "No es totalmente halal. Confirma siempre los ingredientes y métodos de preparación.",
            fr: "Pas entièrement halal. Confirmez toujours les ingrédients et les méthodes de préparation.",
            ar: "ليس حلالاً بالكامل. يرجى دائماً التأكد من المكونات وطرق التحضير قبل الطلب.",
          },
        },
        {
          id: "iftar-playa",
          name: "IFTAR HALAL MEAT • Playa del Carmen",
          category: "Halal Supply",
          whyWeLikeIt: {
            en: "Halal meat access for travelers staying in Airbnb properties, villas, apartments, or long stays.",
            es: "Acceso a carne halal para viajeros que se alojan en propiedades de Airbnb, villas, departamentos o estancias largas.",
            fr: "Accès à de la viande halal pour les voyageurs séjournant dans des propriétés Airbnb, des villas, des appartements ou de longs séjours.",
            ar: "توفير لحوم حلال للمسافرين المقيمين في عقارات Airbnb، الفلل، الشقق، أو الإقامات الطويلة.",
          },
        },
      ],
    },
    {
      city: "Tulum",
      slug: "tulum",
      intro: {
        en: "Tulum requires more planning than Playa del Carmen, but Muslim travelers can still enjoy it comfortably with the right strategy.",
        es: "Tulum requiere más planificación que Playa del Carmen, pero los viajeros musulmanes aún pueden disfrutarlo cómodamente con la estrategia correcta.",
        fr: "Tulum nécessite plus de planification que Playa del Carmen, mais les voyageurs musulmans peuvent toujours en profiter confortablement avec la bonne stratégie.",
        ar: "يتطلب تولوم تخطيطاً أكثر من بلايا ديل كارمن، ولكن لا يزال بإمكان المسافرين المسلمين الاستمتاع به بشكل مريح مع الاستراتيجية الصحيحة.",
      },
      listings: [
        {
          id: "pasha-tulum",
          name: "PASHA TULUM",
          category: "Muslim-Friendly",
          whyWeLikeIt: {
            en: "Turkish and Middle Eastern restaurant with familiar flavors, mezze, kebabs, baklava, and Mediterranean atmosphere.",
            es: "Restaurante turco y de Medio Oriente con sabores familiares, mezze, kebabs, baklava y ambiente mediterráneo.",
            fr: "Restaurant turc et moyen-oriental avec des saveurs familières, mezze, kebabs, baklava et atmosphère méditerranéenne.",
            ar: "مطعم تركي وشرق أوسطي مع نكهات مألوفة، مازة، كباب، بقلاوة، وأجواء متوسطية.",
          },
          notes: {
            en: "Alcohol may be served. Always confirm halal menu availability before ordering.",
            es: "Se puede servir alcohol. Confirma siempre la disponibilidad del menú halal antes de ordenar.",
            fr: "De l'alcool peut être servi. Confirmez toujours la disponibilité du menu halal avant de commander.",
            ar: "قد يتم تقديم الكحول. يرجى دائماً تأكيد توفر القائمة الحلال قبل الطلب.",
          },
        },
        {
          id: "iftar-tulum",
          name: "IFTAR HALAL MEAT • Tulum",
          category: "Halal Supply",
          whyWeLikeIt: {
            en: "Reliable halal meat delivery for villas, private chefs, long stays, and travelers staying in Tulum hotel zone or Aldea Zama.",
            es: "Entrega confiable de carne halal para villas, chefs privados, estancias largas y viajeros que se hospedan en la zona hotelera de Tulum o Aldea Zama.",
            fr: "Livraison fiable de viande halal pour les villas, les chefs privés, les longs séjours et les voyageurs séjournant dans la zone hôtelière de Tulum ou Aldea Zama.",
            ar: "توصيل لحوم حلال موثوق للفلل، الطهاة الخاصين، الإقامات الطويلة، والمسافرين المقيمين في منطقة الفنادق في تولوم أو الديا زاما.",
          },
        },
      ],
    },
  ];

  // Helper resolvers for localized fields
  const rText = (str: LocalizedString): string => {
    return str[language] || str["en"];
  };

  const rList = (list?: LocalizedList): string[] | undefined => {
    if (!list) return undefined;
    return list[language] || list["en"];
  };

  // Global search listener connected to Hero.tsx
  useEffect(() => {
    const handleSearchEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const { city, query } = customEvent.detail;
        if (city) setActiveTab(city);
        if (query) setSearchFilter(query);
      }
    };

    window.addEventListener("search-filter", handleSearchEvent);
    return () => window.removeEventListener("search-filter", handleSearchEvent);
  }, []);

  // Filter listings based on active tab and search query
  const getFilteredDestinations = () => {
    return destinations
      .map((dest) => {
        // Filter listings inside city
        const matchingListings = dest.listings.filter((item) => {
          const matchedWhy = rText(item.whyWeLikeIt).toLowerCase();
          const matchedNotes = item.notes ? rText(item.notes).toLowerCase() : "";
          const matchedHighlights = item.highlights ? rList(item.highlights)?.join(" ").toLowerCase() : "";
          const matchedQuery = searchFilter.toLowerCase();

          const matchesSearch =
            searchFilter === "" ||
            item.name.toLowerCase().includes(matchedQuery) ||
            matchedWhy.includes(matchedQuery) ||
            matchedNotes.includes(matchedQuery) ||
            (matchedHighlights && matchedHighlights.includes(matchedQuery)) ||
            item.category.toLowerCase().includes(matchedQuery);

          return matchesSearch;
        });

        return { ...dest, listings: matchingListings };
      })
      .filter((dest) => {
        // Filter cities based on active tab
        const matchesTab = activeTab === "all" || dest.slug === activeTab;
        // Only include city if it matches tab and has matching listings
        return matchesTab && dest.listings.length > 0;
      });
  };

  const filteredData = getFilteredDestinations();

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Halal":
        return (
          <span className="inline-flex items-center gap-1 bg-terracotta/10 border border-terracotta/20 text-terracotta font-sans text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            ☪ {t("catHalalBadge")}
          </span>
        );
      case "Muslim-Friendly":
        return (
          <span className="inline-flex items-center gap-1 bg-caribbean/10 border border-caribbean/20 text-caribbean font-sans text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            🌙 {t("catFriendlyBadge")}
          </span>
        );
      case "Halal Supply":
        return (
          <span className="inline-flex items-center gap-1 bg-olive/10 border border-olive/20 text-olive font-sans text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            🛒 {t("catSupplyBadge")}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="destinations"
      className="relative py-24 bg-[#F5F2EB] scroll-mt-20 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left rtl:text-right">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-terracotta mb-4">
              <span className="w-8 h-px bg-terracotta" />
              <span className="font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase">
                {t("destPill")}
              </span>
            </div>
            <h2 className="font-serif text-[38px] sm:text-[46px] font-extrabold text-teal-deep leading-tight">
              {t("destTitle")}
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-teal-medium/70 mt-2">
              {t("destSub")}
            </p>
          </div>

          {/* Search Reset Indicator */}
          {searchFilter && (
            <div className="flex items-center gap-3 bg-white border border-sand-dark/30 px-4 py-2 rounded-xl text-teal-deep font-sans text-[13px] rtl:flex-row-reverse">
              <span>{t("destActiveSearch")}: <strong className="text-terracotta">&ldquo;{searchFilter}&rdquo;</strong></span>
              <button
                onClick={() => setSearchFilter("")}
                className="text-terracotta font-bold hover:underline cursor-pointer ml-1 rtl:mr-1"
              >
                {t("destClear")}
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Tab Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-sand-dark/20 pb-6 mb-12">
          {[
            { label: t("destTabAll"), value: "all" },
            { label: t("heroOptCancun"), value: "cancun" },
            { label: t("heroOptPlaya"), value: "playa" },
            { label: t("heroOptTulum"), value: "tulum" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`font-sans text-[13px] font-bold uppercase tracking-wider px-5 py-3 rounded-full border transition-luxury cursor-pointer ${
                activeTab === tab.value
                  ? "bg-teal-deep border-teal-deep text-cream shadow-md"
                  : "bg-white border-sand-dark/40 text-teal-medium hover:border-teal-deep hover:text-teal-deep"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Render Cities & Listings */}
        <div className="flex flex-col gap-20">
          <AnimatePresence mode="popLayout">
            {filteredData.length > 0 ? (
              filteredData.map((dest) => (
                <motion.div
                  key={dest.city}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative pb-12 border-b border-sand-dark/20 last:border-0 last:pb-0"
                >
                  
                  {/* City Editorial Intro Header Card */}
                  <div className="lg:col-span-4 sticky lg:top-24 bg-white/40 border border-sand-dark/20 p-8 rounded-3xl backdrop-blur-sm shadow-inner overflow-hidden group text-left rtl:text-right">
                    {/* Tropical leaf decorative vector shadow */}
                    <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 opacity-[0.03] text-teal-deep pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500">
                      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full rotate-45">
                        <path d="M10,80 C30,70 50,40 60,10 C40,25 25,50 10,80 C15,60 20,40 25,20 C18,35 12,55 5,70 C10,50 15,30 20,10 C5,30 0,60 0,80 Z" />
                      </svg>
                    </div>

                    <div className="relative z-10 flex flex-col gap-4">
                      <span className="font-sans text-[11px] font-black text-terracotta uppercase tracking-[0.25em]">
                        {t("destCityLabel")}
                      </span>
                      <h3 className="font-serif text-[42px] font-black text-teal-deep leading-none">
                        {resolveCityName(dest.slug, t)}
                      </h3>
                      <p className="font-sans text-[14px] text-teal-medium/80 leading-relaxed mt-2">
                        {rText(dest.intro)}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-sans font-bold text-teal-deep/50 uppercase tracking-widest">
                        <span>{t("destSpotsCount")}</span>
                        <span className="bg-teal-deep text-cream px-2 py-0.5 rounded-full text-[10px]">
                          {dest.listings.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Listings Cards Grid */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left rtl:text-right">
                    {dest.listings.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(7, 42, 48, 0.05)" }}
                        className="bg-white border border-sand-dark/20 p-6 rounded-2xl flex flex-col justify-between shadow-sm transition-all duration-300 relative overflow-hidden group"
                      >
                        
                        {/* Upper Section */}
                        <div>
                          
                          {/* Badges bar */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            {getCategoryBadge(item.category)}
                            {item.isEditorsPick && (
                              <span className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/25 text-amber-600 font-sans text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                <Sparkles className="w-2.5 h-2.5 fill-amber-500" /> {t("editorsPick")}
                              </span>
                            )}
                          </div>

                          {/* Listing Title */}
                          <h4 className="font-serif text-[20px] font-bold text-teal-deep leading-snug group-hover:text-terracotta transition-colors duration-300">
                            {item.name}
                          </h4>

                          {/* "Why we like it" block */}
                          <div className="mt-3.5 flex flex-col gap-1 text-[13px] leading-relaxed">
                            <span className="font-sans text-[10px] font-bold text-teal-deep/50 uppercase tracking-widest">
                              {t("whyWeLikeIt")}
                            </span>
                            <p className="font-sans italic text-teal-medium/80 bg-sand-light/45 p-3 rounded-lg border border-sand-dark/10">
                              &ldquo;{rText(item.whyWeLikeIt)}&rdquo;
                            </p>
                          </div>

                          {/* Highlights (if any) */}
                          {item.highlights && (
                            <div className="mt-4 flex flex-col gap-1.5">
                              <span className="font-sans text-[10px] font-bold text-teal-deep/50 uppercase tracking-widest">
                                {t("highlightsLabel")}
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {rList(item.highlights)?.map((high) => (
                                  <span
                                    key={high}
                                    className="bg-sand-light text-teal-deep text-[11px] font-sans px-2.5 py-1 rounded-md border border-sand-dark/15"
                                  >
                                    {high}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Coverage area (if supply) */}
                          {item.coverage && (
                            <div className="mt-4 flex flex-col gap-1 text-[12px]">
                              <span className="font-sans text-[10px] font-bold text-teal-deep/50 uppercase tracking-widest">
                                {t("coverageLabel")}
                              </span>
                              <p className="font-sans text-teal-medium/80 font-medium">
                                {rText(item.coverage)}
                              </p>
                            </div>
                          )}

                          {/* Critical Warnings / Notes */}
                          {item.notes && (
                            <div className="mt-4 bg-amber-500/[0.04] border border-amber-500/20 p-3 rounded-xl flex items-start gap-2.5">
                              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                              <p className="font-sans text-[11.5px] text-amber-800 leading-relaxed font-medium">
                                {rText(item.notes)}
                              </p>
                            </div>
                          )}

                        </div>

                        {/* Bottom Action Area (Contact info, etc) */}
                        {item.contact && (
                          <div className="mt-6 pt-4 border-t border-sand-light flex flex-col gap-2 text-left rtl:text-right">
                            {item.contact.phone && (
                              <a
                                href={`tel:${item.contact.phone.replace(/\s+/g, "")}`}
                                className="flex items-center gap-2 text-teal-medium hover:text-terracotta font-sans text-[12.5px] transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5 text-terracotta" />
                                <span className="font-semibold">{item.contact.phone}</span>
                              </a>
                            )}
                            {item.contact.email && (
                              <a
                                href={`mailto:${item.contact.email}`}
                                className="flex items-center gap-2 text-teal-medium hover:text-terracotta font-sans text-[12.5px] transition-colors break-all"
                              >
                                <Mail className="w-3.5 h-3.5 text-terracotta" />
                                <span className="font-semibold">{item.contact.email}</span>
                              </a>
                            )}
                          </div>
                        )}

                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white border border-sand-dark/20 p-12 rounded-3xl text-center max-w-md mx-auto"
              >
                <AlertTriangle className="w-12 h-12 text-terracotta mx-auto mb-4" />
                <h3 className="font-serif text-[20px] font-bold text-teal-deep mb-2">{t("destNoSpots")}</h3>
                <p className="font-sans text-[14px] text-teal-medium/70 leading-relaxed mb-6">
                  {t("destNoSpotsDesc")}
                </p>
                <button
                  onClick={() => {
                    setSearchFilter("");
                    setActiveTab("all");
                  }}
                  className="bg-teal-deep hover:bg-terracotta text-cream font-sans text-[13px] font-bold px-5 py-2.5 rounded-full transition-luxury cursor-pointer"
                >
                  {t("destBtnReset")}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// Simple resolver for city headers using existing translations
function resolveCityName(slug: string, t: (key: keyof TranslationModel) => string): string {
  if (slug === "cancun") return t("heroOptCancun");
  if (slug === "playa") return t("heroOptPlaya");
  if (slug === "tulum") return t("heroOptTulum");
  return slug;
}
