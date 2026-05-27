"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LocalizedItem {
  question: {
    en: string;
    es: string;
    fr: string;
    ar: string;
  };
  answer: {
    en: string;
    es: string;
    fr: string;
    ar: string;
  };
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language, t } = useLanguage();

  const faqData: LocalizedItem[] = [
    {
      question: {
        en: "Are there halal restaurants in the Riviera Maya?",
        es: "¿Hay restaurantes halal en la Riviera Maya?",
        fr: "Y a-t-il des restaurants halal dans la Riviera Maya?",
        ar: "هل توجد مطاعم حلال في ريفييرا مايا؟",
      },
      answer: {
        en: "Yes. Playa del Carmen currently has the strongest, most concentrated halal food scene in the Riviera Maya region. It features fully halal-verified Middle Eastern, Mediterranean, and French street-food spots. In Cancún and Tulum, you can find several Muslim-friendly restaurants that provide halal preparation or meat upon request, alongside our reliable local raw halal meat delivery service.",
        es: "Sí. Playa del Carmen tiene actualmente la escena de comida halal más fuerte y concentrada en la región de la Riviera Maya. Cuenta con lugares de comida callejera de Medio Oriente, del Mediterráneo y francesa totalmente verificados como halal. En Cancún y Tulum, puedes encontrar varios restaurantes amigables con el islam que ofrecen preparación o carne halal bajo solicitud, además de nuestro confiable servicio local de entrega de carne halal cruda.",
        fr: "Oui. Playa del Carmen possède actuellement la scène culinaire halal la plus forte et la plus concentrée de la Riviera Maya. Elle propose des adresses de street-food du Moyen-Orient, de la Méditerranée et françaises entièrement vérifiées halal. À Cancún et Tulum, vous trouverez plusieurs restaurants adaptés aux musulmans proposant une préparation ou de la viande halal sur demande, en plus de notre service de livraison de viande halal crue.",
        ar: "نعم. تمتلك بلايا ديل كارمن حالياً أقوى تجمع للمطاعم الحلال في منطقة ريفييرا مايا، وتتميز بوجود مطاعم شرق أوسطية، متوسطية، وفرنسية موثقة كحلال بالكامل. وفي كانكون وتولوم، يمكنك العثور على العديد من المطاعم الصديقة للمسلمين التي توفر لحوماً حلالاً أو تحضيراً خاصاً عند الطلب، إلى جانب خدمة توصيل اللحوم الحلال الطازجة الموثوقة.",
      },
    },
    {
      question: {
        en: "What does 'Muslim-Friendly' mean?",
        es: "¿Qué significa 'Muslim-Friendly' o Amigable con el Musulmán?",
        fr: "Que signifie 'Muslim-Friendly' (accueillant pour les musulmans)?",
        ar: "ماذا يعني تصنيف 'صديق للمسلمين'؟",
      },
      answer: {
        en: "A 'Muslim-Friendly' listing indicates that the venue is not fully halal (for example, they might serve alcohol on-site, or serve non-halal meat in their mainstream dishes), but they go out of their way to accommodate Muslim travelers. This includes offering dedicated halal preparation methods, certified vegetarian/vegan menus, extensive fresh seafood selections, and establishing respectful, family-oriented environments.",
        es: "Un listado 'Muslim-Friendly' indica que el lugar no es totalmente halal (por ejemplo, pueden servir alcohol en el establecimiento o carne no halal en sus platos principales), pero hacen todo lo posible por adaptar a los viajeros musulmanes. Esto incluye ofrecer métodos dedicados de preparación halal, menús certificados vegetarianos/veganos, selecciones extensas de mariscos frescos y establecer entornos respetuosos y familiares.",
        fr: "Une fiche 'Muslim-Friendly' indique que l'établissement n'est pas entièrement halal (par exemple, de l'alcool peut y être servi, ou de la viande non halal peut être proposée dans leurs plats classiques), mais qu'il fait tout pour accueillir les voyageurs musulmans. Cela inclut des méthodes de préparation halal dédiées, des menus végétariens/végétaliens certifiés, un large choix de poissons frais, et un cadre familial et respectueux.",
        ar: "يشير تصنيف 'صديق للمسلمين' إلى أن المكان ليس حلالاً بالكامل (على سبيل المثال، قد يقدمون مشروبات كحولية في الموقع، أو لحوماً غير حلال في أطباقهم العادية)، لكنهم يبذلون جهداً خاصاً لتلبية متطلبات المسافرين المسلمين. يشمل ذلك توفير طرق تحضير حلال منفصلة، وقوائم طعام نباتية معتمدة، وخيارات واسعة من المأكولات البحرية الطازجة، وتوفير أجواء عائلية محترمة وملائمة.",
      },
    },
    {
      question: {
        en: "Are there mosques in Cancún, Playa del Carmen, and Tulum?",
        es: "¿Hay mezquitas en Cancún, Playa del Carmen y Tulum?",
        fr: "Y a-t-il des mosquées à Cancún, Playa del Carmen et Tulum?",
        ar: "هل توجد مساجد في كانكون، بلايا ديل كارمن، وتولوم؟",
      },
      answer: {
        en: "Yes! All three major cities in the Mexican Caribbean have active, established prayer spaces. Masjid Al-Rahim is in downtown Cancún, Masjid Al-Rahman is in Playa del Carmen, and Masjid Al-Malik is in Tulum. They accommodate daily prayers, and Friday (Jummah) prayers are regularly held at Al-Rahim and Al-Rahman.",
        es: "¡Sí! Las tres ciudades principales del Caribe Mexicano tienen espacios de oración activos y establecidos. Masjid Al-Rahim está en el centro de Cancún, Masjid Al-Rahman en Playa del Carmen y Masjid Al-Malik en Tulum. Albergan los rezos diarios, y las oraciones de los viernes (Jummah) se realizan regularmente en Al-Rahim y Al-Rahman.",
        fr: "Oui ! Les trois grandes villes des Caraïbes mexicaines disposent de espaces de prière actifs. La Masjid Al-Rahim se trouve au centre-ville de Cancún, la Masjid Al-Rahman à Playa del Carmen et la Masjid Al-Malik à Tulum. Elles accueillent les prières quotidiennes, et les prières du vendredi (Jummah) ont lieu régulièrement à Al-Rahim et Al-Rahman.",
        ar: "نعم! تحتوي المدن الثلاث الكبرى في الكاريبي المكسيكي على أماكن صلاة نشطة وقائمة. مسجد الرحيم يقع في وسط مدينة كانكون، ومسجد الرحمن في بلايا ديل كارمن، ومسجد الملك في تولوم. تقام فيها الصلوات الخمس اليومية، كما تقام صلاة الجمعة بانتظام في مسجدي الرحيم والرحمن.",
      },
    },
    {
      question: {
        en: "Can I wear a burkini on the beaches in Mexico?",
        es: "¿Puedo usar un burkini en las playas de México?",
        fr: "Puis-je porter un burkini sur les plages au Mexique?",
        ar: "هل يمكنني ارتداء البوركيني (ملابس السباحة المحتشمة) على الشواطئ في المكسيك؟",
      },
      answer: {
        en: "Absolutely. Riviera Maya beaches are highly welcoming, diverse, and universally open to modest swimwear. Whether you're swimming in hotel pools, public beaches, or freshwater cenotes, burkinis and modest clothing are fully respected. We recommend wearing whatever swimwear makes you feel most comfortable and secure.",
        es: "Absolutamente. Las playas de la Riviera Maya son muy acogedoras, diversas y universalmente abiertas a trajes de baño modestos. Ya sea que estés nadando en albercas de hoteles, playas públicas o cenotes de agua dulce, los burkinis y la ropa modesta son totalmente respetados. Recomendamos usar el traje de baño que te haga sentir más cómoda y segura.",
        fr: "Absolument. Les plages de la Riviera Maya sont très accueillantes, cosmopolites et ouvertes aux maillots de bain couvrants. Que vous nagiez dans les piscines d'hôtels, sur les plages publiques ou dans les cenotes, les burkinis et les vêtements modestes sont pleinement respectés. Nous vous recommandons de porter le maillot de bain dans lequel vous vous sentez le plus à l'aise.",
        ar: "بكل تأكيد. شواطئ ريفييرا مايا مضيافة للغاية، ومتنوعة، ومفتوحة لملابس السباحة المحتشمة. سواء كنت تسبح في مسابح الفنادق، الشواطئ العامة، أو السينوتات (الكهوف المائية العذبة)، فإن البوركيني والملابس المحتشمة تحظى باحترام كامل. ننصحك بارتداء ملابس السباحة التي تجعلك تشعر بالراحة والأمان.",
      },
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getQ = (item: LocalizedItem): string => {
    return item.question[language] || item.question["en"];
  };

  const getA = (item: LocalizedItem): string => {
    return item.answer[language] || item.answer["en"];
  };

  return (
    <section id="faq" className="relative py-24 bg-[#FCF9F2] scroll-mt-20 overflow-hidden">
      
      {/* Decorative Subtle Geometric Islamic Line Art */}
      <div className="absolute right-[-150px] bottom-10 w-[400px] h-[400px] opacity-[0.03] pointer-events-none text-teal-deep">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <polygon points="50,5 95,50 50,95 5,50" />
          <polygon points="50,5 95,50 50,95 5,50" className="rotate-30 origin-center" />
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 text-terracotta mb-4"
          >
            <span className="w-6 h-px bg-terracotta" />
            <span className="font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase">
              {t("faqPill")}
            </span>
            <span className="w-6 h-px bg-terracotta" />
          </motion.div>

          <h2 className="font-serif text-[38px] sm:text-[46px] font-extrabold text-teal-deep leading-tight">
            {t("faqTitle")}
          </h2>
          
          <p className="font-sans text-[14px] sm:text-[15px] text-teal-medium/70 mt-2">
            {t("faqSub")}
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-sand-dark/25 rounded-2xl shadow-sm overflow-hidden"
              >
                
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left rtl:text-right cursor-pointer transition-colors duration-300 hover:bg-sand/10 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-terracotta flex-shrink-0" />
                    <span className="font-serif text-[17px] sm:text-[19px] font-bold text-teal-deep">
                      {getQ(item)}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-teal-deep/40 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Content Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-left rtl:text-right border-t border-sand-light/50 mt-1 font-sans text-[14.5px] text-teal-medium/80 leading-relaxed">
                        {getA(item)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
