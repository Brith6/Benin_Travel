import { REAL_DATA_OSM } from './real_osm_data';

export type Category = 'HOTEL' | 'RESTAURANT' | 'SPORT' | 'CULTURE' | 'EVENT' | 'AGENCY';
export type Vibe = 'LUXE' | 'ROOTS' | 'FAMILY' | 'ADRENALINE' | 'BUSINESS' | 'OUTFIT' | 'RELAX' | 'FESTIVE' | 'HISTORY';
export type City = 'COTONOU' | 'UIDAH' | 'PORTO-NOVO' | 'NORD' | 'FIDJROSSE' | 'PARAKOU' | 'ABOMEY';

export interface Place {
  id: string;
  name: string;
  category: Category;
  vibe: Vibe[];
  city: City;
  image: string;
  description: string;
  priceLevel: 1 | 2 | 3 | 4 | 5;
}

export const DB_MASTER: Place[] = [
  // --- A. HÔTELLERIE ---
  {
    id: 'h-sofitel',
    name: 'Sofitel Cotonou Marina & Spa',
    category: 'HOTEL',
    vibe: ['LUXE', 'BUSINESS', 'RELAX'],
    city: 'COTONOU',
    // Modern luxury hotel pool at night
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    description: 'Luxe 5*, Spa, Piscine lagon. Le nouveau joyau de Cotonou.',
    priceLevel: 5
  },
  {
    id: 'h-dhawa',
    name: 'Dhawa Ouidah',
    category: 'HOTEL',
    vibe: ['RELAX', 'FAMILY', 'HISTORY'],
    city: 'UIDAH',
    // Eco-resort on a beach, tropical vibes
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    description: 'Ressort éco-chic niché entre lagune et océan, à deux pas de la Porte du Non-Retour.',
    priceLevel: 4
  },
  {
    id: 'h-guesthouse',
    name: 'Maison Rouge Cotonou',
    category: 'HOTEL',
    vibe: ['ROOTS', 'RELAX'],
    city: 'COTONOU',
    // Boutique tropical garden hotel
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    description: 'Boutique hôtel intime avec jardin tropical et ambiance artistique.',
    priceLevel: 3
  },
  {
    id: 'h-nord',
    name: 'Pendjari Lodge',
    category: 'HOTEL',
    vibe: ['ADRENALINE', 'ROOTS'],
    city: 'NORD',
    // Safari lodge in the bush, tent or wooden bungalow
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
    description: 'Au cœur de la réserve de biosphère, dormez au son des éléphants.',
    priceLevel: 4
  },
  {
    id: 'h-ganvie',
    name: 'Chez M',
    category: 'HOTEL',
    vibe: ['ROOTS', 'HISTORY'],
    city: 'COTONOU',
    // Stilt houses on a lake, water village
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Expérience immersive au cœur de la cité lacustre.',
    priceLevel: 2
  },

  // --- B. RESTAURANTS ---
  {
    id: 'r-vivo',
    name: 'Le Vivo',
    category: 'RESTAURANT',
    vibe: ['LUXE', 'BUSINESS', 'OUTFIT'],
    city: 'COTONOU',
    // Modern upscale restaurant, city lights
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Gastronomie fusion dans un cadre ultra-moderne. Le spot pour voir et être vu.',
    priceLevel: 4
  },
  {
    id: 'r-maquis',
    name: 'Maquis du Port',
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'FAMILY', 'FESTIVE'],
    city: 'COTONOU',
    // Grilled fish on the beach, street food market
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Le vrai goût du poisson braisé face aux bateaux de pêche. Authentique et vibrant.',
    priceLevel: 2
  },
  {
    id: 'r-saveurs',
    name: 'Saveurs du Bénin',
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'FAMILY'],
    city: 'COTONOU',
    // African local food, colorful dishes
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
    description: 'Pour déguster un Amiwo ou une Sauce Graine comme à la maison.',
    priceLevel: 2
  },

  // --- C. SPORTS & ACTIVITES ---
  {
    id: 's-padel',
    name: 'Padel Club Cotonou',
    category: 'SPORT',
    vibe: ['ADRENALINE', 'BUSINESS', 'OUTFIT'],
    city: 'COTONOU',
    // Padel or tennis court indoor
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    description: 'Le sport tendance. Terrains couverts, ambiance premium et réseautage.',
    priceLevel: 3
  },
  {
    id: 's-kite',
    name: 'Kitesurf Paradise',
    category: 'SPORT',
    vibe: ['ADRENALINE', 'RELAX'],
    city: 'FIDJROSSE',
    // Kitesurfer on blue ocean
    image: 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?auto=format&fit=crop&w=800&q=80',
    description: "L'école de glisse sur la Route des Pêches. Sensations fortes garanties.",
    priceLevel: 3
  },
  {
    id: 's-babs',
    name: "Bab's Dock",
    category: 'SPORT',
    vibe: ['RELAX', 'FAMILY', 'ROOTS'],
    city: 'COTONOU',
    // Mangrove canoe boat trip, calm water
    image: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?auto=format&fit=crop&w=800&q=80',
    description: "Traversée en barque dans la mangrove pour atteindre une île secrète.",
    priceLevel: 3
  },

  // --- D. CULTURE ---
  {
    id: 'c-zinsou',
    name: 'Fondation Zinsou',
    category: 'CULTURE',
    vibe: ['HISTORY', 'RELAX', 'FAMILY'],
    city: 'UIDAH',
    // Contemporary art gallery, white walls with colorful art
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=800&q=80',
    description: 'Art contemporain africain dans un bâtiment historique magnifique.',
    priceLevel: 2
  },
  {
    id: 'c-ouidah',
    name: 'Route des Esclaves',
    category: 'CULTURE',
    vibe: ['HISTORY', 'ROOTS'],
    city: 'UIDAH',
    // Memorial arch gate to the sea
    image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=800&q=80',
    description: "Marche mémorielle jusqu'à la Porte du Non-Retour. Émouvant et nécessaire.",
    priceLevel: 1
  },
  {
    id: 'c-abomey',
    name: 'Palais Royaux',
    category: 'CULTURE',
    vibe: ['HISTORY'],
    city: 'ABOMEY',
    // Ancient royal palace, historical ruins
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    description: "Plongée dans l'histoire du Royaume de Dahomey.",
    priceLevel: 2
  },

  // --- E. EVENTS & NIGHTLIFE ---
  {
    id: 'e-festive',
    name: 'Code Bar',
    category: 'EVENT',
    vibe: ['FESTIVE', 'OUTFIT'],
    city: 'COTONOU',
    // Rooftop bar at night, cocktails, DJ set
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    description: 'Le QG de la jeunesse dorée. Cocktails, DJ sets et bonne ambiance.',
    priceLevel: 3
  },

  // --- F. LOGISTIQUE ---
  {
    id: 'a-driver',
    name: 'Chauffeur Privé VIP',
    category: 'AGENCY',
    vibe: ['BUSINESS', 'LUXE'],
    city: 'COTONOU',
    // Black luxury SUV on city road
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    description: 'SUV climatisé avec chauffeur bilingue à votre disposition 24/7.',
    priceLevel: 4
  },
  {
    id: 'a-zem',
    name: 'GoZem Premium',
    category: 'AGENCY',
    vibe: ['ROOTS', 'ADRENALINE'],
    city: 'COTONOU',
    // Motorbike taxi in busy African street
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    description: "L'expérience locale sécurisée pour se faufiler dans le trafic.",
    priceLevel: 1
  },

  // --- RESTAURATION DE CONTENU (FROM DB.TS) ---
  {
    id: 'h1',
    name: 'Ecolodge Pendjari',
    category: 'HOTEL',
    vibe: ['ADRENALINE', 'ROOTS'],
    city: 'NORD',
    // Lion in safari or wildlife bush landscape
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    description: 'Une nuit sous les étoiles, bercé par le rugissement des lions.',
    priceLevel: 4
  },
  {
    id: 'h2',
    name: 'Tata Somba Luxury',
    category: 'HOTEL',
    vibe: ['HISTORY', 'LUXE'],
    city: 'ABOMEY',
    // Earthen fortress, traditional African architecture
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
    description: 'Architecture traditionnelle Tata, confort ultra-moderne.',
    priceLevel: 5
  },
  {
    id: 'h3',
    name: 'Ganvié Water Resort',
    category: 'HOTEL',
    vibe: ['RELAX', 'ROOTS'],
    city: 'COTONOU',
    // Overwater bungalow on a calm lake
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80',
    description: 'Bungalows sur pilotis avec fond de verre pour voir la lagune.',
    priceLevel: 4
  },
  {
    id: 'h4',
    name: 'Ouidah Python Suites',
    category: 'HOTEL',
    vibe: ['HISTORY', 'LUXE'],
    city: 'UIDAH',
    // Mystical sacred forest, lush jungle
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
    description: 'Le luxe mystique au milieu de la forêt sacrée.',
    priceLevel: 3
  },
  {
    id: 'h5',
    name: 'Nocibé Atlantic Hotel',
    category: 'HOTEL',
    vibe: ['LUXE', 'RELAX'],
    city: 'COTONOU',
    // Infinity pool overlooking the ocean
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    description: "Vue imprenable sur l'océan Atlantique, service 5 étoiles.",
    priceLevel: 5
  },
  {
    id: 'r1',
    name: 'Maquis 2.0',
    category: 'RESTAURANT',
    vibe: ['ADRENALINE', 'OUTFIT'],
    city: 'COTONOU',
    // Futuristic restaurant interior, neon lights
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    description: 'Maquis Cyberpunk. Ambiance futuriste et cuisine locale.',
    priceLevel: 3
  },
  {
    id: 'r2',
    name: 'Saveurs du Palais',
    category: 'RESTAURANT',
    vibe: ['HISTORY', 'FAMILY'],
    city: 'ABOMEY',
    // Traditional meal table, artisanal plates
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    description: "Gastronomie Royale au cœur d'Abomey.",
    priceLevel: 4
  },
  {
    id: 'r3',
    name: "L'Igname Solaire",
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'RELAX'],
    city: 'NORD',
    // African village outdoor restaurant, nature
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    description: 'Fusion culinaire solaire dans le Nord.',
    priceLevel: 2
  },
  {
    id: 'r4',
    name: 'La Pirogue Céleste',
    category: 'RESTAURANT',
    vibe: ['RELAX', 'FAMILY'],
    city: 'UIDAH',
    // Seafood restaurant on the beach, ocean view
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    description: 'Fruits de mer frais servis les pieds dans le sable.',
    priceLevel: 3
  },
  {
    id: 'r5',
    name: 'Buvette Code Zéro',
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'FESTIVE'],
    city: 'COTONOU',
    // African street food market, cooked skewers
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80',
    description: 'Street Food authentique et ambiance locale.',
    priceLevel: 1
  },
  ...REAL_DATA_OSM
];

export interface Package {
  id: string;
  title: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  includes: string[];
}

export const PACKAGES: Package[] = [
  {
    id: 'pkg-royal',
    title: 'Immersion Royale',
    duration: '3 Jours',
    price: 150000,
    // Royal palace ruins, ancient heritage
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    description: "Une plongée historique au cœur du Royaume du Dahomey. Visite des palais, rencontre avec les gardiens du temple et nuits en éco-lodge traditionnel.",
    includes: ['Transport VIP', 'Entrées Palais & Musées', 'Hébergement Tata Somba', 'Guide Historien']
  },
  {
    id: 'pkg-voodoo',
    title: 'Esprits du Sud',
    duration: '2 Jours',
    price: 85000,
    // Voodoo / spiritual ceremony, colorful masks
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80',
    description: "Découvrez Ouidah et ses mystères. Route des esclaves, Temple des Pythons et cérémonie Zangbeto privée.",
    includes: ['Cérémonie Privée', 'Déjeuner Local', 'Nuit à Ouidah', 'Transport']
  },
  {
    id: 'pkg-safari',
    title: 'Pendjari Sauvage',
    duration: '4 Jours',
    price: 250000,
    // Safari jeep in Africa savannah
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    description: "Aventure 4x4 au nord. Lions, éléphants et cascades. Le Bénin comme vous ne l'avez jamais vu.",
    includes: ['Vol Interne', '4x4 Safari', 'Lodge de Luxe', 'Pension Complète']
  }
];
