module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simulation d'une base de données locale pour Benin-Travel
// "Neo-Benin 229" Style
__turbopack_context__.s([
    "ACTIVITIES",
    ()=>ACTIVITIES,
    "GUIDES",
    ()=>GUIDES,
    "HOTELS",
    ()=>HOTELS,
    "RESTAURANTS",
    ()=>RESTAURANTS,
    "regions",
    ()=>regions
]);
const regions = [
    {
        id: 'cotonou',
        name: 'Cotonou',
        description: 'La métropole vibrante, entre océan et lagune.',
        image: 'https://images.unsplash.com/photo-1572455044397-759868770702?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'abomey',
        name: 'Abomey',
        description: 'Cité royale, terre des Amazones et du patrimoine.',
        image: 'https://images.unsplash.com/photo-1590426573887-2abe8da17ba4?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'pendjari',
        name: 'Pendjari',
        description: 'Sauvagerie pure, le royaume des grands fauves.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'ouidah',
        name: 'Ouidah',
        description: 'Berceau du Vodoun et porte du non-retour.',
        image: 'https://images.unsplash.com/photo-1598335624131-29e2eb426d01?auto=format&fit=crop&w=800&q=80'
    }
];
const HOTELS = [
    {
        id: 'h1',
        name: 'Ecolodge Pendjari',
        price: 85000,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1499363536502-87642509e31b?auto=format&fit=crop&w=800&q=80',
        description: 'Une nuit sous les étoiles, bercé par le rugissement des lions.',
        location: 'pendjari'
    },
    {
        id: 'h2',
        name: 'Tata Somba Luxury',
        price: 120000,
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        description: 'Architecture traditionnelle Tata, confort ultra-moderne.',
        location: 'abomey' // Prêt de Natitingou, mais pour le flow on simplifie ou on l'associe au nord
    },
    {
        id: 'h3',
        name: 'Ganvié Water Resort',
        price: 95000,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1554659422-5264bbc2b528?auto=format&fit=crop&w=800&q=80',
        description: 'Bungalows sur pilotis avec fond de verre pour voir la lagune.',
        location: 'cotonou' // Proche Cotonou
    },
    {
        id: 'h4',
        name: 'Ouidah Python Suites',
        price: 65000,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
        description: 'Le luxe mystique au milieu de la forêt sacrée.',
        location: 'ouidah'
    },
    {
        id: 'h5',
        name: 'Nocibé Atlantic Hotel',
        price: 150000,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        description: 'Vue imprenable sur l\'océan Atlantique, service 5 étoiles.',
        location: 'cotonou'
    }
];
const RESTAURANTS = [
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
const ACTIVITIES = [
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
const GUIDES = [
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
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/page.tsx', file not found");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4eb2bdb0._.js.map