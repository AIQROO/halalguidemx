export type Language = "en" | "es" | "fr" | "ar";

export interface TranslationModel {
  // Navigation
  navDiscover: string;
  navCategories: string;
  navDestinations: string;
  navMosques: string;
  navServices: string;
  navFaq: string;
  exploreGuide: string;

  // Hero Section
  heroPill: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroTitleEnd: string;
  heroSubtitle: string;
  heroBtnExplore: string;
  heroBtnHow: string;
  heroSearchTitle: string;
  heroSearchSub: string;
  heroLabelDest: string;
  heroLabelSearch: string;
  heroOptAll: string;
  heroOptCancun: string;
  heroOptPlaya: string;
  heroOptTulum: string;
  heroPlaceholder: string;
  heroBtnSearch: string;
  statPlaces: string;
  statMosques: string;
  statVetted: string;

  // Mission Section
  missionPill: string;
  missionTitle: string;
  missionDesc1: string;
  missionDesc2: string;
  missionDesc3: string;
  missionQuote: string;
  missionQuoteAuthor: string;
  badge1Title: string;
  badge1Desc: string;
  badge2Title: string;
  badge2Desc: string;
  badge3Title: string;
  badge3Desc: string;
  badge4Title: string;
  badge4Desc: string;

  // Categories Section
  catPill: string;
  catTitle: string;
  catSub: string;
  catHalalBadge: string;
  catFriendlyBadge: string;
  catSupplyBadge: string;
  catHalalDesc: string;
  catFriendlyDesc: string;
  catSupplyDesc: string;
  catExpectLabel: string;
  catVettedStd: string;
  catViewListings: string;

  // Destinations Section
  destPill: string;
  destTitle: string;
  destSub: string;
  destActiveSearch: string;
  destClear: string;
  destTabAll: string;
  destTabCancun: string;
  destTabPlaya: string;
  destTabTulum: string;
  destCityLabel: string;
  destSpotsCount: string;
  destNoSpots: string;
  destNoSpotsDesc: string;
  destBtnReset: string;

  // Specific Listings Translations
  whyWeLikeIt: string;
  highlightsLabel: string;
  coverageLabel: string;
  editorsPick: string;
  noteAlcoholAlert: string;
  noteGeneralAlert: string;

  // Mosque Section
  mosquePill: string;
  mosqueTitle: string;
  mosqueSub: string;
  mosqueFriday: string;
  mosqueWudu: string;
  mosqueCentral: string;
  mosqueDaily: string;
  mosqueSpacious: string;
  mosqueActive: string;
  mosquePristine: string;
  mosqueQuiet: string;
  mosqueKey: string;
  mosqueFootnote: string;
  mosqueCoastLabel: string;

  // Services Section
  srvPill: string;
  srvTitle: string;
  srvSub: string;
  srvWeddingTitle: string;
  srvWeddingSub: string;
  srvWeddingDesc: string;
  srvWeddingCta: string;
  srvTransfersTitle: string;
  srvTransfersSub: string;
  srvTransfersDesc: string;
  srvTransfersCta: string;

  // FAQ Section
  faqPill: string;
  faqTitle: string;
  faqSub: string;

  // About Section
  aboutPill: string;
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  aboutDesc3: string;

  // Footer Section
  footerDesc: string;
  footerRights: string;
  footerSlogan: string;
}

export const translations: Record<Language, TranslationModel> = {
  en: {
    navDiscover: "Discover",
    navCategories: "Categories",
    navDestinations: "Destinations",
    navMosques: "Mosques",
    navServices: "Services",
    navFaq: "FAQ",
    exploreGuide: "Explore Guide",

    heroPill: "Quintana Roo's Premier Halal Travel Resource",
    heroTitle: "The honest guide for",
    heroTitleAccent: "Muslim travelers",
    heroTitleEnd: "in the Riviera Maya.",
    heroSubtitle: "Halal restaurants, Muslim-Friendly places, mosques, services, and travel tips for discovering Cancún, Playa del Carmen, Tulum, and beyond. Curated with direct local knowledge.",
    heroBtnExplore: "Explore the Guide",
    heroBtnHow: "How We Work",
    heroSearchTitle: "Discover the Riviera Maya",
    heroSearchSub: "Find local certified options, verified mosques, and halal-meat delivery services near you.",
    heroLabelDest: "Select Destination",
    heroLabelSearch: "What are you looking for?",
    heroOptAll: "All Destinations (Cancún, Playa, Tulum)",
    heroOptCancun: "Cancún",
    heroOptPlaya: "Playa del Carmen",
    heroOptTulum: "Tulum",
    heroPlaceholder: "e.g. Halal Meat, Kebab, Pasha...",
    heroBtnSearch: "Search Halal Places",
    statPlaces: "Places",
    statMosques: "Verified Mosques",
    statVetted: "Locally Vetted",

    missionPill: "Our Mission & Purpose",
    missionTitle: "Travel with absolute peace of mind.",
    missionDesc1: "Halal Guide MX was created to make traveling in Mexico easier, safer, and infinitely more memorable for Muslim travelers.",
    missionDesc2: "Our goal is to provide honest, useful, and locally informed recommendations for halal restaurants, Muslim-friendly places, mosques, services, and travel experiences in Mexico.",
    missionDesc3: "The Riviera Maya is a stunning meeting of ancient Mayan history and pristine Caribbean shorelines. We believe dietary or prayer requirements should never restrict you from experiencing its breathtaking beauty. We do the heavy lifting of vetting so you can enjoy your vacation.",
    missionQuote: "Not a sterile directory. We are a locally informed, boutique culinary and spiritual map to the Mexican Caribbean.",
    missionQuoteAuthor: "Halal Guide MX Editors",
    badge1Title: "Direct Operational Vetting",
    badge1Desc: "We consult directly with kitchen staffs regarding ingredients, fryers, cross-contamination, and alcohol storage.",
    badge2Title: "Community Confirmed",
    badge2Desc: "Recommendations are backed by local Muslim residents and seasoned travelers to ensure absolute reliability.",
    badge3Title: "Respectful Environments",
    badge3Desc: "We highlight family-friendly atmospheres, modesty comfort levels, and alcohol awareness for every listing.",
    badge4Title: "Authentic Local Discovery",
    badge4Desc: "No generic listicling. We provide hand-curated experiences that support local Mexican and halal business owners.",

    catPill: "Understanding Our Standards",
    catTitle: "How we categorize listings",
    catSub: "We use clear, strictly defined levels of halal accommodation so you can choose dining and grocery options that align perfectly with your personal standards.",
    catHalalBadge: "Fully Verified",
    catFriendlyBadge: "Accommodating",
    catSupplyBadge: "For Residents / Long Stays",
    catHalalDesc: "The establishment is fully halal and its halal offering has been identified through direct operational knowledge, local Muslim community confirmation, or reliable information.",
    catFriendlyDesc: "The place is not fully halal but accommodates Muslim travelers through halal menu options, vegetarian alternatives, seafood options, respectful atmosphere, or family-friendly environments.",
    catSupplyDesc: "Halal meat suppliers, private villa catering, or customized delivery services for travelers staying in villas, apartments, or enjoying long stays in the Caribbean.",
    catExpectLabel: "Vetted Standard",
    catVettedStd: "Vetted Standard",
    catViewListings: "View Listings",

    destPill: "Curated Travel Directory",
    destTitle: "Explore Destinations",
    destSub: "Browse our local guide to the best verified halal options and accommodations across the Mexican Caribbean.",
    destActiveSearch: "Active search",
    destClear: "Clear",
    destTabAll: "All Riviera Maya",
    destTabCancun: "Cancún",
    destTabPlaya: "Playa del Carmen",
    destTabTulum: "Tulum",
    destCityLabel: "Destination Guide",
    destSpotsCount: "Verified spots",
    destNoSpots: "No listings found",
    destNoSpotsDesc: "We couldn't find any listings matching your search. Try broadening your keywords.",
    destBtnReset: "Reset Search",

    whyWeLikeIt: "Why we like it",
    highlightsLabel: "Highlights",
    coverageLabel: "Delivery Coverage",
    editorsPick: "Editor's Pick",
    noteAlcoholAlert: "Alcohol may be served on-site. Always confirm halal menu availability before ordering.",
    noteGeneralAlert: "Not fully halal. Always confirm ingredients and preparation methods.",

    mosquePill: "Prayer Spaces",
    mosqueTitle: "Active Mosques",
    mosqueSub: "Quintana Roo is home to a welcoming, growing local Muslim community. Here are the active, established prayer spaces for daily and Friday prayers.",
    mosqueFriday: "Friday Prayer (Jummah)",
    mosqueWudu: "Wudu Facilities Available",
    mosqueCentral: "Central Location",
    mosqueDaily: "Daily Prayers",
    mosqueSpacious: "Spacious Prayer Area",
    mosqueActive: "Active Community",
    mosquePristine: "Pristine Modern Musalla",
    mosqueQuiet: "Quiet Residential Area",
    mosqueKey: "Key Access Available",
    mosqueFootnote: "Note: These prayer spaces are managed and preserved with the dedicated support of the Islamic Association of Quintana Roo. Visitors are always welcome to connect with local community members.",
    mosqueCoastLabel: "Coastal Vector Map",

    srvPill: "Specialist Offerings",
    srvTitle: "Exclusive Halal Services",
    srvSub: "Go beyond standard logistics. Enhance your Mexican Caribbean getaway with customized, faith-conscious services tailored to your exact needs.",
    srvWeddingTitle: "Cancún Islamic Wedding",
    srvWeddingSub: "Nikah Coordination & Ceremony Planning",
    srvWeddingDesc: "Islamic wedding and nikah coordination for Muslim couples celebrating in the Riviera Maya. We manage every detail to align your celebration with beautiful Sunnah traditions amidst a breathtaking tropical backdrop.",
    srvWeddingCta: "Visit Official Site",
    srvTransfersTitle: "Salam Transfers",
    srvTransfersSub: "Private Muslim-Friendly Transportation",
    srvTransfersDesc: "Private transportation service designed specifically for Muslim travelers arriving at Cancún International Airport (CUN) and traveling across the Riviera Maya. Relax with complete comfort, modesty respect, and peace of mind.",
    srvTransfersCta: "Visit Official Site",

    faqPill: "Frequently Asked Questions",
    faqTitle: "Common Travel Inquiries",
    faqSub: "Get practical advice on culinary standards, prayer spaces, and cultural comfort levels across the region.",

    aboutPill: "Behind the Brand",
    aboutTitle: "ABOUT US",
    aboutDesc1: "Halal Guide MX was created to make traveling in Mexico easier for Muslim travelers.",
    aboutDesc2: "Our goal is to provide honest, useful, and locally informed recommendations for halal restaurants, Muslim-friendly places, mosques, services, and travel experiences in Mexico.",
    aboutDesc3: "We begin in the Riviera Maya because it is one of Mexico’s most important tourism regions and one of the fastest-growing halal travel ecosystems in the country.",

    footerDesc: "Halal Guide MX is the definitive, boutique travel companion for the modern Muslim explorer in the Mexican Caribbean. Our team hand-picks, local-verifies, and details every recommendation so you can travel with complete peace of mind.",
    footerRights: "All rights reserved. Not an affiliate of official tourism boards.",
    footerSlogan: "Built for Muslim travelers discovering Mexico.",
  },
  es: {
    navDiscover: "Descubrir",
    navCategories: "Categorías",
    navDestinations: "Destinos",
    navMosques: "Mezquitas",
    navServices: "Servicios",
    navFaq: "FAQ",
    exploreGuide: "Explorar Guía",

    heroPill: "El Principal Recurso de Viajes Halal en Quintana Roo",
    heroTitle: "La guía honesta para",
    heroTitleAccent: "viajeros musulmanes",
    heroTitleEnd: "en la Riviera Maya.",
    heroSubtitle: "Restaurantes halal, lugares amigables con los musulmanes, mezquitas, servicios y consejos de viaje para descubrir Cancún, Playa del Carmen, Tulum y más allá. Curado con conocimiento local directo.",
    heroBtnExplore: "Explorar la Guía",
    heroBtnHow: "Cómo Trabajamos",
    heroSearchTitle: "Descubre la Riviera Maya",
    heroSearchSub: "Encuentra opciones certificadas locales, mezquitas verificadas y servicios de entrega de carne halal cerca de ti.",
    heroLabelDest: "Seleccionar Destino",
    heroLabelSearch: "¿Qué estás buscando?",
    heroOptAll: "Todos los Destinos (Cancún, Playa, Tulum)",
    heroOptCancun: "Cancún",
    heroOptPlaya: "Playa del Carmen",
    heroOptTulum: "Tulum",
    heroPlaceholder: "ej. Carne Halal, Kebab, Pasha...",
    heroBtnSearch: "Buscar Lugares Halal",
    statPlaces: "Lugares",
    statMosques: "Mezquitas Verificadas",
    statVetted: "Vigilado Localmente",

    missionPill: "Nuestra Misión y Propósito",
    missionTitle: "Viaja con absoluta tranquilidad.",
    missionDesc1: "Halal Guide MX fue creado para hacer que viajar en México sea más fácil, seguro e infinitamente más memorable para los viajeros musulmanes.",
    missionDesc2: "Nuestro objetivo es proporcionar recomendaciones honestas, útiles y localmente informadas para restaurantes halal, lugares amigables con los musulmanes, mezquitas, servicios y experiencias de viaje en México.",
    missionDesc3: "La Riviera Maya es un encuentro impresionante de la antigua historia maya y las playas vírgenes del Caribe. Creemos que los requisitos dietéticos o de oración nunca deberían restringirte de experimentar su impresionante belleza. Nosotros hacemos el trabajo pesado de verificación para que disfrutes tus vacaciones.",
    missionQuote: "No es un directorio estéril. Somos un mapa culinario y espiritual boutique de la Riviera Maya informado localmente.",
    missionQuoteAuthor: "Editores de Halal Guide MX",
    badge1Title: "Veto Operativo Directo",
    badge1Desc: "Consultamos directamente con el personal de cocina sobre ingredientes, freidoras, contaminación cruzada y almacenamiento de alcohol.",
    badge2Title: "Confirmado por la Comunidad",
    badge2Desc: "Las recomendaciones están respaldadas por residentes musulmanes locales y viajeros experimentados para garantizar fiabilidad.",
    badge3Title: "Ambientes Respetuosos",
    badge3Desc: "Destacamos las atmósferas familiares, los niveles de comodidad para la modestia y la concientización sobre el alcohol para cada listado.",
    badge4Title: "Descubrimiento Local Auténtico",
    badge4Desc: "Sin listados genéricos. Ofrecemos experiencias seleccionadas a mano que apoyan a los propietarios locales mexicanos y de negocios halal.",

    catPill: "Entendiendo Nuestros Estándares",
    catTitle: "Cómo categorizamos los lugares",
    catSub: "Utilizamos niveles claros y estrictamente definidos de adaptación halal para que puedas elegir opciones de comida que se alineen perfectamente con tus estándares personales.",
    catHalalBadge: "Totalmente Verificado",
    catFriendlyBadge: "Amigable / Adaptado",
    catSupplyBadge: "Para Residentes / Estancias Largas",
    catHalalDesc: "El establecimiento es completamente halal y su oferta halal ha sido identificada a través de conocimiento operativo directo, confirmación de la comunidad musulmana local o información confiable.",
    catFriendlyDesc: "El lugar no es completamente halal pero se adapta a los viajeros musulmanes a través de opciones de menú halal, alternativas vegetarianas, opciones de mariscos, atmósfera respetuosa o ambientes familiares.",
    catSupplyDesc: "Proveedores de carne halal, catering para villas privadas o servicios de entrega personalizados para viajeros que se alojan en villas, departamentos o disfrutan de largas estancias en el Caribe.",
    catExpectLabel: "Estándar Votado",
    catVettedStd: "Estándar Votado",
    catViewListings: "Ver Lugares",

    destPill: "Directorio de Viajes Curado",
    destTitle: "Explorar Destinos",
    destSub: "Navega por nuestra guía local de las mejores opciones halal verificadas y alojamientos en todo el Caribe Mexicano.",
    destActiveSearch: "Búsqueda activa",
    destClear: "Limpiar",
    destTabAll: "Toda la Riviera Maya",
    destTabCancun: "Cancún",
    destTabPlaya: "Playa del Carmen",
    destTabTulum: "Tulum",
    destCityLabel: "Guía del Destino",
    destSpotsCount: "Puntos verificados",
    destNoSpots: "No se encontraron lugares",
    destNoSpotsDesc: "No pudimos encontrar listados que coincidan con tu búsqueda. Intenta ampliar tus palabras clave.",
    destBtnReset: "Restablecer Búsqueda",

    whyWeLikeIt: "Por qué nos gusta",
    highlightsLabel: "Destacado",
    coverageLabel: "Cobertura de Entrega",
    editorsPick: "Selección del Editor",
    noteAlcoholAlert: "Se puede servir alcohol en el lugar. Confirma siempre la disponibilidad del menú halal antes de ordenar.",
    noteGeneralAlert: "No es totalmente halal. Confirma siempre los ingredientes y métodos de preparación.",

    mosquePill: "Espacios de Oración",
    mosqueTitle: "Mezquitas Activas",
    mosqueSub: "Quintana Roo es el hogar de una comunidad musulmana local acogedora y en crecimiento. Aquí están los espacios de oración establecidos para rezos diarios y del viernes.",
    mosqueFriday: "Oración del Viernes (Jummah)",
    mosqueWudu: "Instalaciones de Wudu Disponibles",
    mosqueCentral: "Ubicación Central",
    mosqueDaily: "Oraciones Diarias",
    mosqueSpacious: "Área de Oración Amplia",
    mosqueActive: "Comunidad Activa",
    mosquePristine: "Musalla Moderna y Limpia",
    mosqueQuiet: "Zona Residencial Tranquila",
    mosqueKey: "Acceso con Llave Disponible",
    mosqueFootnote: "Nota: Estos espacios de oración son gestionados y conservados con el apoyo dedicado de la Asociación Islámica de Quintana Roo. Los visitantes siempre son bienvenidos a conectarse con los miembros de la comunidad local.",
    mosqueCoastLabel: "Mapa Vectorial Costero",

    srvPill: "Ofertas Especializadas",
    srvTitle: "Servicios Halal Exclusivos",
    srvSub: "Ve más allá de la logística estándar. Mejora tu escapada al Caribe Mexicano con servicios adaptados y conscientes de la fe según tus necesidades exactas.",
    srvWeddingTitle: "Boda Islámica en Cancún",
    srvWeddingSub: "Coordinación de Nikah y Planificación de Ceremonia",
    srvWeddingDesc: "Coordinación de bodas islámicas y nikah para parejas musulmanas que celebran en la Riviera Maya. Gestionamos cada detalle para alinear tu celebración con las hermosas tradiciones de la Sunnah en un entorno caribeño impresionante.",
    srvWeddingCta: "Visitar sitio oficial",
    srvTransfersTitle: "Traslados Salam",
    srvTransfersSub: "Transporte Privado Amigable con los Musulmanes",
    srvTransfersDesc: "Servicio de transporte privado diseñado específicamente para viajeros musulmanes que llegan al Aeropuerto Internacional de Cancún (CUN) y viajan por la Riviera Maya. Relájate con total comodidad, respeto a la modestia y tranquilidad.",
    srvTransfersCta: "Visitar sitio oficial",

    faqPill: "Preguntas Frecuentes",
    faqTitle: "Preguntas Comunes de Viaje",
    faqSub: "Obtén consejos prácticos sobre estándares culinarios, espacios de oración y niveles de comodidad cultural en toda la región.",

    aboutPill: "Detrás de la Marca",
    aboutTitle: "SOBRE NOSOTROS",
    aboutDesc1: "Halal Guide MX fue creado para hacer que viajar en México sea más fácil para los viajeros musulmanes.",
    aboutDesc2: "Nuestro objetivo es proporcionar recomendaciones honestas, útiles y localmente informadas para restaurantes halal, lugares amigables con los musulmanes, mezquitas, servicios y experiencias de viaje en México.",
    aboutDesc3: "Comenzamos en la Riviera Maya porque es una de las regiones turísticas más importantes de México y uno de los ecosistemas de viajes halal de más rápido crecimiento en el país.",

    footerDesc: "Halal Guide MX es el compañero de viaje definitivo y boutique para el explorador musulmán moderno en el Caribe Mexicano. Nuestro equipo selecciona, verifica localmente y detalla cada recomendación para que viajes con total tranquilidad.",
    footerRights: "Todos los derechos reservados. No somos afiliados de juntas oficiales de turismo.",
    footerSlogan: "Creado para viajeros musulmanes que descubren México.",
  },
  fr: {
    navDiscover: "Découvrir",
    navCategories: "Catégories",
    navDestinations: "Destinations",
    navMosques: "Mosquées",
    navServices: "Services",
    navFaq: "FAQ",
    exploreGuide: "Explorer le Guide",

    heroPill: "La Principale Ressource de Voyage Halal à Quintana Roo",
    heroTitle: "Le guide honnête pour",
    heroTitleAccent: "voyageurs musulmans",
    heroTitleEnd: "dans la Riviera Maya.",
    heroSubtitle: "Restaurants halal, lieux accueillants pour les musulmans, mosquées, services et conseils de voyage pour découvrir Cancún, Playa del Carmen, Tulum et au-delà. Sélectionné avec des connaissances locales directes.",
    heroBtnExplore: "Explorer le Guide",
    heroBtnHow: "Comment ça Marche",
    heroSearchTitle: "Découvrez la Riviera Maya",
    heroSearchSub: "Trouvez des options certifiées locales, des mosquées vérifiées et des services de livraison de viande halal près de chez vous.",
    heroLabelDest: "Sélectionner la Destination",
    heroLabelSearch: "Que recherchez-vous?",
    heroOptAll: "Toutes les Destinations (Cancún, Playa, Tulum)",
    heroOptCancun: "Cancún",
    heroOptPlaya: "Playa del Carmen",
    heroOptTulum: "Tulum",
    heroPlaceholder: "ex: Viande Halal, Kebab, Pasha...",
    heroBtnSearch: "Rechercher des Lieux Halal",
    statPlaces: "Lieux",
    statMosques: "Mosquées Vérifiées",
    statVetted: "Vérifié Localement",

    missionPill: "Notre Mission & Objectif",
    missionTitle: "Voyagez en toute sérénité.",
    missionDesc1: "Halal Guide MX a été créé pour rendre les voyages au Mexique plus faciles, plus sûrs et infiniment plus mémorables pour les voyageurs musulmans.",
    missionDesc2: "Notre objectif est de fournir des recommandations honnêtes, utiles et localement informées pour les restaurants halal, les lieux accueillants pour les musulmans, les mosquées, les services et les expériences de voyage au Mexique.",
    missionDesc3: "La Riviera Maya est une rencontre impressionnante entre l'ancienne histoire maya et les plages immaculées des Caraïbes. Nous pensons que les exigences diététiques ou de prière ne devraient jamais vous empêcher de découvrir sa beauté époustouflante. Nous faisons le travail d'évaluation pour que vous profitiez de vos vacances.",
    missionQuote: "Ce n'est pas un annuaire stérile. Nous sommes une carte culinaire et spirituelle boutique de la Riviera Maya informée localement.",
    missionQuoteAuthor: "Les Éditeurs de Halal Guide MX",
    badge1Title: "Évaluation Opérationnelle Directe",
    badge1Desc: "Nous consultons directement les équipes de cuisine sur les ingrédients, les friteuses, la contamination croisée et le stockage de l'alcool.",
    badge2Title: "Confirmé par la Communauté",
    badge2Desc: "Les recommandations sont soutenues par des résidents musulmans locaux et des voyageurs chevronnés pour garantir une fiabilité absolue.",
    badge3Title: "Environnements Respectueux",
    badge3Desc: "Nous mettons en évidence les atmosphères familiales, les niveaux de confort pour la pudeur et la sensibilisation à l'alcool pour chaque fiche.",
    badge4Title: "Découverte Locale Authentique",
    badge4Desc: "Pas de listes génériques. Nous proposons des expériences sélectionnées à la main qui soutiennent les propriétaires mexicains locaux et de commerces halal.",

    catPill: "Comprendre Nos Standards",
    catTitle: "Comment nous classons les établissements",
    catSub: "Nous utilisons des niveaux clairs et strictement définis d'adaptation halal afin que vous puissiez choisir des options de restauration en parfait accord avec vos standards personnels.",
    catHalalBadge: "Entièrement Vérifié",
    catFriendlyBadge: "Accueillant / Adapté",
    catSupplyBadge: "Pour Résidents / Longs Séjours",
    catHalalDesc: "L'établissement est entièrement halal et son offre halal a été identifiée grâce à des connaissances opérationnelles directes, à la confirmation de la communauté musulmane locale ou à des informations fiables.",
    catFriendlyDesc: "Le lieu n'est pas entièrement halal mais accueille les voyageurs musulmans grâce à des options de menu halal, des alternatives végétariennes, des fruits de mer, une atmosphère respectueuse ou des environnements familiaux.",
    catSupplyDesc: "Fournisseurs de viande halal, restauration dans des villas privées ou services de livraison personnalisés pour les voyageurs séjournant dans des villas, des appartements ou effectuant de longs séjours dans les Caraïbes.",
    catExpectLabel: "Norme Évaluée",
    catVettedStd: "Norme Évaluée",
    catViewListings: "Voir les Établissements",

    destPill: "Annuaire de Voyage Sélectionné",
    destTitle: "Explorer les Destinations",
    destSub: "Parcourez notre guide local des meilleures options halal vérifiées et des hébergements dans les Caraïbes mexicaines.",
    destActiveSearch: "Recherche active",
    destClear: "Effacer",
    destTabAll: "Toute la Riviera Maya",
    destTabCancun: "Cancún",
    destTabPlaya: "Playa del Carmen",
    destTabTulum: "Tulum",
    destCityLabel: "Guide de la Destination",
    destSpotsCount: "Lieux vérifiés",
    destNoSpots: "Aucun résultat trouvé",
    destNoSpotsDesc: "Nous n'avons trouvé aucun établissement correspondant à votre recherche. Essayez d'élargir vos mots-clés.",
    destBtnReset: "Réinitialiser la Recherche",

    whyWeLikeIt: "Pourquoi on l'aime",
    highlightsLabel: "Points Forts",
    coverageLabel: "Zone de Livraison",
    editorsPick: "Choix de l'Éditeur",
    noteAlcoholAlert: "De l'alcool peut être servi sur place. Confirmez toujours la disponibilité du menu halal avant de commander.",
    noteGeneralAlert: "Pas entièrement halal. Confirmez toujours les ingrédients et les méthodes de préparation.",

    mosquePill: "Lieux de Prière",
    mosqueTitle: "Mosquées Actives",
    mosqueSub: "Le Quintana Roo abrite une communauté musulmane locale accueillante et en pleine croissance. Voici les lieux de prière établis pour les prières quotidiennes et du vendredi.",
    mosqueFriday: "Prière du Vendredi (Jummah)",
    mosqueWudu: "Installations de Woudou Disponibles",
    mosqueCentral: "Emplacement Central",
    mosqueDaily: "Prières Quotidiennes",
    mosqueSpacious: "Espace de Prière Spacieux",
    mosqueActive: "Communauté Active",
    mosquePristine: "Musalla Moderne et Propre",
    mosqueQuiet: "Quartier Résidentiel Calme",
    mosqueKey: "Accès par Clé Disponible",
    mosqueFootnote: "Note: Ces lieux de prière sont gérés et préservés grâce au soutien dévoué de l'Association Islamique du Quintana Roo. Les visiteurs sont toujours les bienvenus pour échanger avec les membres de la communauté locale.",
    mosqueCoastLabel: "Carte Vectorielle Côtière",

    srvPill: "Offres Spécialisées",
    srvTitle: "Services Halal Exclusifs",
    srvSub: "Allez au-delà de la logistique standard. Améliorez votre séjour dans les Caraïbes mexicaines avec des services sur mesure adaptés à votre foi.",
    srvWeddingTitle: "Mariage Islamique à Cancún",
    srvWeddingSub: "Coordination du Nikah & Organisation de Cérémonie",
    srvWeddingDesc: "Coordination de mariages islamiques et de nikah pour les couples musulmans célébrant dans la Riviera Maya. Nous gérons chaque détail pour aligner votre célébration sur les belles traditions de la Sunnah dans un décor caribéen idyllique.",
    srvWeddingCta: "Visiter le site officiel",
    srvTransfersTitle: "Transferts Salam",
    srvTransfersSub: "Transport Privé Respectueux des Musulmans",
    srvTransfersDesc: "Service de transport privé conçu spécifiquement pour les voyageurs musulmans arrivant à l'aéroport international de Cancún (CUN) et voyageant à travers la Riviera Maya. Détendez-vous dans un confort total, avec respect et tranquillité d'esprit.",
    srvTransfersCta: "Visiter le site officiel",

    faqPill: "Questions Fréquentes",
    faqTitle: "Questions de Voyage Courantes",
    faqSub: "Obtenez des conseils pratiques sur les normes culinaires, les lieux de prière et le confort culturel dans toute la région.",

    aboutPill: "À Propos de la Marque",
    aboutTitle: "À PROPOS DE NOUS",
    aboutDesc1: "Halal Guide MX a été créé pour rendre les voyages au Mexique plus faciles pour les voyageurs musulmans.",
    aboutDesc2: "Notre objectif est de fournir des recommandations honnêtes, utiles et localement informées pour les restaurants halal, les lieux accueillants pour les musulmans, les mosquées, les services et les expériences de voyage au Mexique.",
    aboutDesc3: "Nous commençons par la Riviera Maya car c'est l'une des régions touristiques les plus importantes du Mexique et l'un des écosystèmes de voyage halal qui se développe le plus rapidement dans le pays.",

    footerDesc: "Halal Guide MX est le compagnon de voyage boutique idéal pour l'explorateur musulman moderne dans les Caraïbes mexicaines. Notre équipe sélectionne, vérifie localement et détaille chaque recommandation pour que vous voyagiez en toute sérénité.",
    footerRights: "Tous droits réservés. Non affilié aux offices officiels du tourisme.",
    footerSlogan: "Créé pour les voyageurs musulmans découvrant le Mexique.",
  },
  ar: {
    navDiscover: "اكتشف",
    navCategories: "الفئات",
    navDestinations: "الوجهات",
    navMosques: "المساجد",
    navServices: "الخدمات",
    navFaq: "الأسئلة الشائعة",
    exploreGuide: "استكشف الدليل",

    heroPill: "المورد الأول للسفر الحلال في كوينتانا رو",
    heroTitle: "الدليل الصادق لـ",
    heroTitleAccent: "المسافرين المسلمين",
    heroTitleEnd: "في ريفييرا مايا.",
    heroSubtitle: "مطاعم حلال، أماكن صديقة للمسلمين، مساجد، خدمات، ونصائح سفر لاكتشاف كانكون، بلايا ديل كارمن، تولوم، وما بعدها. تم تقييمه بناءً على معرفة محلية مباشرة.",
    heroBtnExplore: "استكشف الدليل",
    heroBtnHow: "كيف نعمل",
    heroSearchTitle: "اكتشف ريفييرا مايا",
    heroSearchSub: "اعثر على خيارات محلية معتمدة، مساجد موثقة، وخدمات توصيل لحوم حلال بالقرب منك.",
    heroLabelDest: "اختر الوجهة",
    heroLabelSearch: "عما تبحث؟",
    heroOptAll: "جميع الوجهات (كانكون، بلايا، تولوم)",
    heroOptCancun: "كانكون",
    heroOptPlaya: "بلايا ديل كارمن",
    heroOptTulum: "تولوم",
    heroPlaceholder: "مثال: لحم حلال، كباب، باشا...",
    heroBtnSearch: "ابحث عن أماكن حلال",
    statPlaces: "أماكن",
    statMosques: "مساجد موثقة",
    statVetted: "تم تقييمه محلياً",

    missionPill: "مهمتنا وهدفنا",
    missionTitle: "سافر براحة بال مطلقة.",
    missionDesc1: "تم إنشاء Halal Guide MX لتسهيل السفر في المكسيك، وجعله أكثر أماناً وإثارة للمسافرين المسلمين.",
    missionDesc2: "هدفنا هو تقديم توصيات صادقة، مفيدة، ومعلومات محلية عن المطاعم الحلال، والأماكن الصديقة للمسلمين، والمساجد، والخدمات، وتجارب السفر في المكسيك.",
    missionDesc3: "تعتبر ريفييرا مايا ملتقى رائعاً لتاريخ المايا القديم وشواطئ الكاريبي البكر. نحن نؤمن بأن المتطلبات الغذائية أو متطلبات الصلاة لا ينبغي أبداً أن تمنعك من تجربة هذا الجمال الأخاذ. نحن نقوم بالتدقيق والبحث والتحقق نيابة عنك لتستمتع بإجازتك.",
    missionQuote: "ليس دليلاً عادياً. نحن خريطة طهي وروحية مصممة محلياً وموثقة للوجهة الكاريبية المكسيكية.",
    missionQuoteAuthor: "محررو Halal Guide MX",
    badge1Title: "تدقيق تشغيلي مباشر",
    badge1Desc: "نتشاور مباشرة مع طاقم المطبخ حول المكونات، المقالي، التلوث التبادلي، وتخزين المشروبات الكحولية.",
    badge2Title: "مؤكد من المجتمع المحلي",
    badge2Desc: "التوصيات مدعومة من السكان المسلمين المحليين والمسافرين ذوي الخبرة لضمان الموثوقية المطلقة.",
    badge3Title: "بيئات محترمة وملائمة",
    badge3Desc: "نسلط الضوء على الأجواء العائلية، مستويات الراحة فيما يتعلق بالاحتشام، ومستوى تقديم الكحول لكل مكان.",
    badge4Title: "اكتشاف محلي أصيل",
    badge4Desc: "لا توجد قوائم عشوائية. نحن نقدم تجارب منسقة وموثقة تدعم أصحاب الأعمال المكسيكيين وموردي المنتجات الحلال المحليين.",

    catPill: "فهم معاييرنا",
    catTitle: "كيف نصنف الأماكن",
    catSub: "نحن نستخدم مستويات واضحة ومحددة بدقة لملاءمة السفر الحلال حتى تتمكن من اختيار خيارات الطعام التي تتماشى تماماً مع معاييرك الشخصية.",
    catHalalBadge: "موثق بالكامل",
    catFriendlyBadge: "ملائم وصديق",
    catSupplyBadge: "للمقيمين والإقامات الطويلة",
    catHalalDesc: "المؤسسة حلال بالكامل وتم تحديد عرضها الحلال من خلال المعرفة التشغيلية المباشرة، أو تأكيد المجتمع الإسلامي المحلي، أو معلومات موثوقة.",
    catFriendlyDesc: "المكان ليس حلالاً بالكامل ولكنه يلبي متطلبات المسافرين المسلمين من خلال خيارات قائمة حلال، أو بدائل نباتية، أو مأكولات بحرية، أو بيئة عائلية محترمة وملائمة.",
    catSupplyDesc: "موردو اللحوم الحلال، أو تقديم خدمات الطعام للفيلا الخاصة، أو خدمات التوصيل المخصصة للمسافرين المقيمين في الفلل أو الشقق أو الإقامات الطويلة في الكاريبي.",
    catExpectLabel: "المعايير الموثقة",
    catVettedStd: "المعايير الموثقة",
    catViewListings: "عرض الأماكن",

    destPill: "دليل السفر المنسق",
    destTitle: "استكشف الوجهات",
    destSub: "تصفح دليلنا المحلي لأفضل الخيارات الحلال المعتمدة وأماكن الإقامة عبر الكاريبي المكسيكي.",
    destActiveSearch: "البحث النشط",
    destClear: "مسح",
    destTabAll: "كل ريفييرا مايا",
    destTabCancun: "كانكون",
    destTabPlaya: "بلايا ديل كارمن",
    destTabTulum: "تولوم",
    destCityLabel: "دليل الوجهة",
    destSpotsCount: "أماكن موثقة",
    destNoSpots: "لم يتم العثور على نتائج",
    destNoSpotsDesc: "لم نتمكن من العثور على أي خيارات تطابق بحثك. حاول توسيع كلمات البحث الخاصة بك.",
    destBtnReset: "إعادة ضبط البحث",

    whyWeLikeIt: "لماذا نوصي به",
    highlightsLabel: "أهم الميزات",
    coverageLabel: "نطاق التوصيل",
    editorsPick: "اختيار المحرر",
    noteAlcoholAlert: "قد يتم تقديم المشروبات الكحولية في الموقع. يرجى دائماً تأكيد توفر القائمة الحلال قبل الطلب.",
    noteGeneralAlert: "ليس حلالاً بالكامل. يرجى دائماً التأكد من المكونات وطرق التحضير قبل الطلب.",

    mosquePill: "أماكن الصلاة",
    mosqueTitle: "المساجد النشطة",
    mosqueSub: "ولاية كوينتانا رو هي موطن لمجتمع مسلم محلي مضياف ومتنامٍ. إليك أماكن الصلاة والصلوات اليومية والجمعة القائمة.",
    mosqueFriday: "صلاة الجمعة",
    mosqueWudu: "تتوفر أماكن وضوء",
    mosqueCentral: "موقع مركزي",
    mosqueDaily: "الصلوات الخمس",
    mosqueSpacious: "مكان صلاة واسع",
    mosqueActive: "مجتمع نشط",
    mosquePristine: "مصلى حديث ونظيف",
    mosqueQuiet: "منطقة سكنية هادئة",
    mosqueKey: "يتوفر دخول بمفتاح مخصص",
    mosqueFootnote: "ملاحظة: تتم إدارة أماكن الصلاة هذه والحفاظ عليها بالدعم المخصص من الجمعية الإسلامية في كوينتانا رو. نرحب دائماً بالزوار للتواصل مع أفراد المجتمع المحلي.",
    mosqueCoastLabel: "الخريطة الساحلية",

    srvPill: "عروض متخصصة",
    srvTitle: "خدمات حلال حصرية",
    srvSub: "تجاوز الخدمات اللوجستية القياسية. ارتقِ برحلتك الكاريبية المكسيكية بخدمات مخصصة ومراعية للقيم الدينية تلبي احتياجاتك الخاصة بدقة.",
    srvWeddingTitle: "حفل زفاف إسلامي في كانكون",
    srvWeddingSub: "تنسيق عقد النكاح وتخطيط الحفل",
    srvWeddingDesc: "تنسيق حفلات الزفاف الإسلامية وعقد النكاح للأزواج المسلمين في ريفييرا مايا. نحن ندير كل التفاصيل لتتماشى احتفالاتك مع تقاليد السنة المطهرة في خلفية كاريبية استوائية خلابة.",
    srvWeddingCta: "زيارة الموقع الرسمي",
    srvTransfersTitle: "انتقالات سلام",
    srvTransfersSub: "وسائل نقل خاصة صديقة للمسلمين",
    srvTransfersDesc: "خدمة نقل خاصة مصممة خصيصاً للمسافرين المسلمين القادمين إلى مطار كانكون الدولي (CUN) والمسافرين عبر ريفييرا مايا. استرخِ براحة تامة، احترام للخصوصية، وراحة بال مطلقة.",
    srvTransfersCta: "زيارة الموقع الرسمي",

    faqPill: "الأسئلة الشائعة",
    faqTitle: "استفسارات السفر الشائعة",
    faqSub: "احصل على نصائح عملية حول معايير الطعام، أماكن الصلاة، ومستويات الراحة الثقافية في جميع أنحاء المنطقة.",

    aboutPill: "خلف العلامة التجارية",
    aboutTitle: "معلومات عنا",
    aboutDesc1: "تم إنشاء Halal Guide MX لتسهيل السفر في المكسيك للمسافرين المسلمين.",
    aboutDesc2: "هدفنا هو تقديم توصيات صادقة، مفيدة، ومعلومات محلية عن المطاعم الحلال، والأماكن الصديقة للمسلمين، والمساجد، والخدمات، وتجارب السفر في المكسيك.",
    aboutDesc3: "نبدأ في ريفييرا مايا لأنها واحدة من أهم المناطق السياحية في المكسيك ومن أسرع النظم البيئية لرحلات الحلال نمواً في البلاد.",

    footerDesc: "Halal Guide MX هو رفيق السفر المتميز والموثق للمستكشف المسلم الحديث في الكاريبي المكسيكي. يختار فريقنا، ويدقق، ويوثق كل توصية لتسافر براحة بال مطلقة.",
    footerRights: "جميع الحقوق محفوظة. لسنا تابعين لهيئات السياحة الرسمية.",
    footerSlogan: "صُنع للمسافرين المسلمين الذين يكتشفون المكسيك.",
  },
};
