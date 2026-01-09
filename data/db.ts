// Simulation d'une base de données locale pour Benin-Travel
// "Neo-Benin 229" Style

export const regions = [
  { id: 'cotonou', name: 'Cotonou', description: 'La métropole vibrante, entre océan et lagune.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Sofitel_benin.jpg' },
  { id: 'abomey', name: 'Abomey', description: 'Cité royale, terre des Amazones et du patrimoine.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Palais_royaux_d%27Abomey.jpg' },
  { id: 'pendjari', name: 'Pendjari', description: 'Sauvagerie pure, le royaume des grands fauves.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lion_de_l%27atlas_au_parc_zoologique_de_paris.jpg/1280px-Lion_de_l%27atlas_au_parc_zoologique_de_paris.jpg' },
  { id: 'ouidah', name: 'Ouidah', description: 'Berceau du Vodoun et porte du non-retour.', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Porte_du_non-retour_au_Benin.jpg' },
];

export const HOTELS = [
  {
    id: 'h1',
    name: 'Ecolodge Pendjari',
    price: 85000,
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lion_de_l%27atlas_au_parc_zoologique_de_paris.jpg/1280px-Lion_de_l%27atlas_au_parc_zoologique_de_paris.jpg',
    description: 'Une nuit sous les étoiles, bercé par le rugissement des lions.',
    location: 'pendjari'
  },
  {
    id: 'h2',
    name: 'Tata Somba Luxury',
    price: 120000,
    rating: 5.0,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Tata_tamberma.jpg',
    description: 'Architecture traditionnelle Tata, confort ultra-moderne.',
    location: 'abomey'
  },
  {
    id: 'h3',
    name: 'Ganvié Water Resort',
    price: 95000,
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Ganvi%C3%A9-Bateaux_de_tourisme_%281%29.jpg',
    description: 'Bungalows sur pilotis avec fond de verre pour voir la lagune.',
    location: 'cotonou'
  },
  {
    id: 'h4',
    name: 'Ouidah Python Suites',
    price: 65000,
    rating: 4.5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Porte_du_non-retour_au_Benin.jpg',
    description: 'Le luxe mystique au milieu de la forêt sacrée.',
    location: 'ouidah'
  },
  {
    id: 'h5',
    name: 'Nocibé Atlantic Hotel',
    price: 150000,
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cotonou_Plage.jpg/1024px-Cotonou_Plage.jpg',
    description: 'Vue imprenable sur l\'océan Atlantique, service 5 étoiles.',
    location: 'cotonou'
  }
];

export const RESTAURANTS = [
  {
    id: 'r1',
    name: 'Maquis 2.0',
    type: 'Maquis Cyberpunk',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    location: 'cotonou'
  },
  {
    id: 'r2',
    name: 'Saveurs du Palais',
    type: 'Gastronomie Royale',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    location: 'abomey'
  },
  {
    id: 'r3',
    name: 'L\'Igname Solaire',
    type: 'Fusion',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
    location: 'pendjari'
  },
  {
    id: 'r4',
    name: 'La Pirogue Céleste',
    type: 'Fruits de mer',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1626804475297-411dbcc76bc2?auto=format&fit=crop&w=800&q=80',
    location: 'ouidah'
  },
    {
    id: 'r5',
    name: 'Buvette Code Zéro',
    type: 'Street Food',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    location: 'cotonou'
  }
];

export const ACTIVITIES = [
  {
    id: 'a1',
    name: 'Safari Nuit',
    category: 'Nature',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=800&q=80',
    location: 'pendjari'
  },
  {
    id: 'a2',
    name: 'Initiation Fa',
    category: 'Vodoun',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1620065668631-0f4886ccdc1e?auto=format&fit=crop&w=800&q=80',
    location: 'abomey'
  },
  {
    id: 'a3',
    name: 'Route des Esclaves VR',
    category: 'Histoire',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1549400262-e64ebad2d698?auto=format&fit=crop&w=800&q=80',
    location: 'ouidah'
  },
  {
    id: 'a4',
    name: 'Dantokpa Cyber-Market',
    category: 'Urbain',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80',
    location: 'cotonou'
  },
   {
    id: 'a5',
    name: 'Chasse aux Lions (observation)',
    category: 'Nature',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1615963244664-5b845b2025ee?auto=format&fit=crop&w=800&q=80',
    location: 'pendjari'
  }
];

export const GUIDES = [
  {
    id: 'g1',
    name: 'Koffi l\'Historien',
    specialty: 'Rois d\'Abomey & Guerres',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80',
    phone: '22997000001'
  },
  {
    id: 'g2',
    name: 'Awa la Gardienne',
    specialty: 'Plantes médicinales & Vodoun',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
    phone: '22997000002'
  },
  {
    id: 'g3',
    name: 'Jean-Marc le Tech',
    specialty: 'Cotonou by Night & Startups',
    image: 'https://images.unsplash.com/photo-1522502660143-6c84c1f44e88?auto=format&fit=crop&w=800&q=80',
    phone: '22997000003'
  },
  {
    id: 'g4',
    name: 'Dossou des Animaux',
    specialty: 'Tracking Faune Pendjari',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=800&q=80',
    phone: '22997000004'
  }
];
