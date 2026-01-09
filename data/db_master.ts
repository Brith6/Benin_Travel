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
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Sofitel_benin.jpg',
    description: 'Luxe 5*, Spa, Piscine lagon. Le nouveau joyau de Cotonou.',
    priceLevel: 5
  },
  {
    id: 'h-dhawa',
    name: 'Dhawa Ouidah',
    category: 'HOTEL',
    vibe: ['RELAX', 'FAMILY', 'HISTORY'],
    city: 'UIDAH',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Plage_de_Ouidah.jpg',
    description: 'Ressort éco-chic niché entre lagune et océan, à deux pas de la Porte du Non-Retour.',
    priceLevel: 4
  },
  {
    id: 'h-guesthouse',
    name: 'Maison Rouge Cotonou',
    category: 'HOTEL',
    vibe: ['ROOTS', 'RELAX'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cotonou_Plage.jpg/1024px-Cotonou_Plage.jpg',
    description: 'Boutique hôtel intime avec jardin tropical et ambiance artistique.',
    priceLevel: 3
  },
  {
    id: 'h-nord',
    name: 'Pendjari Lodge',
    category: 'HOTEL',
    vibe: ['ADRENALINE', 'ROOTS'],
    city: 'NORD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Bus_dans_le_Parc_national_de_la_Pendjari.jpg',
    description: 'Au cœur de la réserve de biosphère, dormez au son des éléphants.',
    priceLevel: 4
  },
    {
    id: 'h-ganvie',
    name: 'Chez M',
    category: 'HOTEL',
    vibe: ['ROOTS', 'HISTORY'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Ganvi%C3%A9-Bateaux_de_tourisme_%281%29.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Brochettes_de_viande_au_B%C3%A9nin.jpg',
    description: 'Gastronomie fusion dans un cadre ultra-moderne. Le spot pour voir et être vu.',
    priceLevel: 4
  },
  {
    id: 'r-maquis',
    name: 'Maquis du Port',
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'FAMILY', 'FESTIVE'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Poisson_brais%C3%A9_au_B%C3%A9nin.jpg',
    description: 'Le vrai goût du poisson braisé face aux bateaux de pêche. Authentique et vibrant.',
    priceLevel: 2
  },
  {
    id: 'r-saveurs',
    name: 'Saveurs du Bénin',
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'FAMILY'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Amiwo_au_poulet.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Stade_de_l%27Amiti%C3%A9_Cotonou.jpg',
    description: 'Le sport tendance. Terrains couverts, ambiance premium et réseautage.',
    priceLevel: 3
  },
  {
    id: 's-kite',
    name: 'Kitesurf Paradise',
    category: 'SPORT',
    vibe: ['ADRENALINE', 'RELAX'],
    city: 'FIDJROSSE',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Plage_de_Fidjross%C3%A8.jpg',
    description: 'L\'école de glisse sur la Route des Pêches. Sensations fortes garanties.',
    priceLevel: 3
  },
  {
    id: 's-babs',
    name: 'Bab\'s Dock',
    category: 'SPORT',
    vibe: ['RELAX', 'FAMILY', 'ROOTS'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Mangrove_B%C3%A9nin.jpg',
    description: 'Traversée en barque dans la mangrove pour atteindre une île secrète.',
    priceLevel: 3
  },

  // --- D. CULTURE ---
  {
    id: 'c-zinsou',
    name: 'Fondation Zinsou',
    category: 'CULTURE',
    vibe: ['HISTORY', 'RELAX', 'FAMILY'],
    city: 'UIDAH',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Mus%C3%A9e_Fondation_Zinsou_ouidah.jpg',
    description: 'Art contemporain africain dans un bâtiment historique magnifique.',
    priceLevel: 2
  },
  {
    id: 'c-ouidah',
    name: 'Route des Esclaves',
    category: 'CULTURE',
    vibe: ['HISTORY', 'ROOTS'],
    city: 'UIDAH',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Porte_du_non-retour_au_Benin.jpg',
    description: 'Marche mémorielle jusqu\'à la Porte du Non-Retour. Émouvant et nécessaire.',
    priceLevel: 1
  },
  {
    id: 'c-abomey',
    name: 'Palais Royaux',
    category: 'CULTURE',
    vibe: ['HISTORY'],
    city: 'ABOMEY',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Palais_royaux_d%27Abomey.jpg',
    description: 'Plongée dans l\'histoire du Royaume de Dahomey.',
    priceLevel: 2
  },

  // --- E. EVENTS & NIGHTLIFE ---
  {
    id: 'e-festive',
    name: 'Code Bar',
    category: 'EVENT',
    vibe: ['FESTIVE', 'OUTFIT'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cotonou_street_scene.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Place_de_Etoile_rouge.jpg',
    description: 'SUV climatisé avec chauffeur bilingue à votre disposition 24/7.',
    priceLevel: 4
  },
    {
    id: 'a-zem',
    name: 'GoZem Premium',
    category: 'AGENCY',
    vibe: ['ROOTS', 'ADRENALINE'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cotonou_centre_ville.jpg/1024px-Cotonou_centre_ville.jpg',
    description: 'L\'expérience locale sécurisée pour se faufiler dans le trafic.',
    priceLevel: 1
  },

  // --- RESTAURATION DE CONTENU (FROM DB.TS) ---
  {
    id: 'h1',
    name: 'Ecolodge Pendjari',
    category: 'HOTEL',
    vibe: ['ADRENALINE', 'ROOTS'],
    city: 'NORD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lion_de_l%27atlas_au_parc_zoologique_de_paris.jpg/1280px-Lion_de_l%27atlas_au_parc_zoologique_de_paris.jpg',
    description: 'Une nuit sous les étoiles, bercé par le rugissement des lions.',
    priceLevel: 4
  },
  {
    id: 'h2',
    name: 'Tata Somba Luxury',
    category: 'HOTEL',
    vibe: ['HISTORY', 'LUXE'],
    city: 'ABOMEY',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Tata_tamberma.jpg',
    description: 'Architecture traditionnelle Tata, confort ultra-moderne.',
    priceLevel: 5
  },
  {
    id: 'h3',
    name: 'Ganvié Water Resort',
    category: 'HOTEL',
    vibe: ['RELAX', 'ROOTS'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Ganvi%C3%A9-Bateaux_de_tourisme_%281%29.jpg',
    description: 'Bungalows sur pilotis avec fond de verre pour voir la lagune.',
    priceLevel: 4
  },
  {
    id: 'h4',
    name: 'Ouidah Python Suites',
    category: 'HOTEL',
    vibe: ['HISTORY', 'LUXE'],
    city: 'UIDAH',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Porte_du_non-retour_au_Benin.jpg',
    description: 'Le luxe mystique au milieu de la forêt sacrée.',
    priceLevel: 3
  },
  {
    id: 'h5',
    name: 'Nocibé Atlantic Hotel',
    category: 'HOTEL',
    vibe: ['LUXE', 'RELAX'],
    city: 'COTONOU',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cotonou_Plage.jpg/1024px-Cotonou_Plage.jpg',
    description: 'Vue imprenable sur l\'océan Atlantique, service 5 étoiles.',
    priceLevel: 5
  },
  {
    id: 'r1',
    name: 'Maquis 2.0',
    category: 'RESTAURANT',
    vibe: ['ADRENALINE', 'OUTFIT'],
    city: 'COTONOU',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Maquis Cyberpunk. Ambiance futuriste et cuisine locale.',
    priceLevel: 3
  },
  {
    id: 'r2',
    name: 'Saveurs du Palais',
    category: 'RESTAURANT',
    vibe: ['HISTORY', 'FAMILY'],
    city: 'ABOMEY',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Gastronomie Royale au cœur d\'Abomey.',
    priceLevel: 4
  },
  {
    id: 'r3',
    name: 'L\'Igname Solaire',
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'RELAX'],
    city: 'NORD',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
    description: 'Fusion culinaire solaire dans le Nord.',
    priceLevel: 2
  },
  {
    id: 'r4',
    name: 'La Pirogue Céleste',
    category: 'RESTAURANT',
    vibe: ['RELAX', 'FAMILY'],
    city: 'UIDAH',
    image: 'https://images.unsplash.com/photo-1626804475297-411dbcc76bc2?auto=format&fit=crop&w=800&q=80',
    description: 'Fruits de mer frais servis les pieds dans le sable.',
    priceLevel: 3
  },
  {
    id: 'r5',
    name: 'Buvette Code Zéro',
    category: 'RESTAURANT',
    vibe: ['ROOTS', 'FESTIVE'],
    city: 'COTONOU',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'Street Food authentique et ambiance locale.',
    priceLevel: 1
  }
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Palais_royaux_d%27Abomey.jpg',
    description: 'Une plongée historique au cœur du Royaume du Dahomey. Visite des palais, rencontre avec les gardiens du temple et nuits en éco-lodge traditionnel.',
    includes: ['Transport VIP', 'Entrées Palais & Musées', 'Hébergement Tata Somba', 'Guide Historien']
  },
  {
    id: 'pkg-voodoo',
    title: 'Esprits du Sud',
    duration: '2 Jours',
    price: 85000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Zangbeto.jpg',
    description: 'Découvrez Ouidah et ses mystères. Route des esclaves, Temple des Pythons et cérémonie Zangbeto privée.',
    includes: ['Cérémonie Privée', 'Déjeuner Local', 'Nuit à Ouidah', 'Transport']
  },
  {
    id: 'pkg-safari',
    title: 'Pendjari Sauvage',
    duration: '4 Jours',
    price: 250000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Bus_dans_le_Parc_national_de_la_Pendjari.jpg',
    description: 'Aventure 4x4 au nord. Lions, éléphants et cascades. Le Bénin comme vous ne l\'avez jamais vu.',
    includes: ['Vol Interne', '4x4 Safari', 'Lodge de Luxe', 'Pension Complète']
  }
];
