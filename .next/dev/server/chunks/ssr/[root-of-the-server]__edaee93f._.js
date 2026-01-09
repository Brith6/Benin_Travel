module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/db_master.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DB_MASTER",
    ()=>DB_MASTER
]);
const DB_MASTER = [
    // --- A. HÔTELLERIE ---
    {
        id: 'h-sofitel',
        name: 'Sofitel Cotonou Marina & Spa',
        category: 'HOTEL',
        vibe: [
            'LUXE',
            'BUSINESS',
            'RELAX'
        ],
        city: 'COTONOU',
        imageKeyword: 'luxury,hotel,resort,pool,modern',
        description: 'Luxe 5*, Spa, Piscine lagon. Le nouveau joyau de Cotonou.',
        priceLevel: 5
    },
    {
        id: 'h-dhawa',
        name: 'Dhawa Ouidah',
        category: 'HOTEL',
        vibe: [
            'LUXE',
            'RELAX',
            'ROOTS'
        ],
        city: 'UIDAH',
        imageKeyword: 'resort,tropical,eco,luxury',
        description: 'Le resort de luxe éco-chic à la Marina. Entre lagune et océan.',
        priceLevel: 5
    },
    {
        id: 'h-goldentulip',
        name: 'Golden Tulip Le Diplomate',
        category: 'HOTEL',
        vibe: [
            'BUSINESS',
            'LUXE'
        ],
        city: 'COTONOU',
        imageKeyword: 'business,hotel,conference',
        description: 'Standing international & Business. Au cœur de la ville.',
        priceLevel: 4
    },
    {
        id: 'h-novotel',
        name: 'Novotel Cotonou Orisha',
        category: 'HOTEL',
        vibe: [
            'BUSINESS',
            'RELAX',
            'FAMILY'
        ],
        city: 'COTONOU',
        imageKeyword: 'hotel,tropical,pool',
        description: 'Tropical & Business, bord de lagune.',
        priceLevel: 4
    },
    {
        id: 'h-beninmarina',
        name: 'Benin Marina Hotel',
        category: 'HOTEL',
        vibe: [
            'HISTORY',
            'RELAX',
            'FAMILY'
        ],
        city: 'COTONOU',
        imageKeyword: 'hotel,garden,beach',
        description: 'Historique, immense jardin et accès plage.',
        priceLevel: 4
    },
    {
        id: 'h-maisonrouge',
        name: 'Maison Rouge',
        category: 'HOTEL',
        vibe: [
            'LUXE',
            'RELAX',
            'OUTFIT'
        ],
        city: 'COTONOU',
        imageKeyword: 'boutique hotel,art,interior',
        description: 'Boutique-hôtel, art & intimité. Pour les esthètes.',
        priceLevel: 4
    },
    {
        id: 'h-azalai',
        name: 'Azalaï Hôtel',
        category: 'HOTEL',
        vibe: [
            'BUSINESS',
            'LUXE'
        ],
        city: 'COTONOU',
        imageKeyword: 'ocean view hotel,luxury',
        description: 'Vue océan, référence panafricaine.',
        priceLevel: 4
    },
    {
        id: 'h-dulac',
        name: 'Hôtel du Lac',
        category: 'HOTEL',
        vibe: [
            'RELAX',
            'BUSINESS'
        ],
        city: 'COTONOU',
        imageKeyword: 'lake view hotel,bridge',
        description: 'Vue panoramique sur le pont et la lagune.',
        priceLevel: 3
    },
    {
        id: 'h-tamarin',
        name: 'Hôtel Tamarin',
        category: 'HOTEL',
        vibe: [
            'RELAX',
            'ROOTS',
            'OUTFIT'
        ],
        city: 'FIDJROSSE',
        imageKeyword: 'artistic hotel,lifestyle,beach',
        description: 'Vibe artistique, détente, lifestyle à Fidjrossè.',
        priceLevel: 3
    },
    {
        id: 'h-ibis',
        name: 'Ibis Cotonou',
        category: 'HOTEL',
        vibe: [
            'BUSINESS',
            'FAMILY'
        ],
        city: 'COTONOU',
        imageKeyword: 'modern hotel room',
        description: 'Efficacité et confort moderne.',
        priceLevel: 3
    },
    {
        id: 'h-casadelpapa',
        name: 'La Casa del Papa',
        category: 'HOTEL',
        vibe: [
            'RELAX',
            'FAMILY',
            'ROOTS'
        ],
        city: 'UIDAH',
        imageKeyword: 'beach bungalows,ocean,resort',
        description: 'Bungalows entre mer et lagune. La déconnexion totale.',
        priceLevel: 4
    },
    {
        id: 'h-pendjari',
        name: 'Pendjari Lodge',
        category: 'HOTEL',
        vibe: [
            'ADRENALINE',
            'LUXE',
            'ROOTS'
        ],
        city: 'NORD',
        imageKeyword: 'safari lodge,africa,nature',
        description: 'Safari haut de gamme au cœur du parc.',
        priceLevel: 4
    },
    {
        id: 'h-tata',
        name: 'Tata Somba Lodge',
        category: 'HOTEL',
        vibe: [
            'HISTORY',
            'ROOTS'
        ],
        city: 'NORD',
        imageKeyword: 'traditional african architecture',
        description: 'Architecture traditionnelle immersive.',
        priceLevel: 3
    },
    {
        id: 'h-songhai',
        name: 'Centre Songhaï',
        category: 'HOTEL',
        vibe: [
            'ROOTS',
            'FAMILY',
            'HISTORY'
        ],
        city: 'PORTO-NOVO',
        imageKeyword: 'farm,sustainable,agriculture',
        description: 'Ferme écotouristique modèle. Dormir au cœur de la nature.',
        priceLevel: 2
    },
    // --- B. RESTAURANTS & NIGHTLIFE ---
    {
        id: 'r-vivo',
        name: 'Le Vivo (Sofitel)',
        category: 'RESTAURANT',
        vibe: [
            'LUXE',
            'FESTIVE'
        ],
        city: 'COTONOU',
        imageKeyword: 'fine dining,luxury restaurant,plate',
        description: 'Fine dining, fusion afro-internationale.',
        priceLevel: 5
    },
    {
        id: 'r-livingstone',
        name: 'Le Livingstone',
        category: 'RESTAURANT',
        vibe: [
            'FESTIVE',
            'OUTFIT',
            'RELAX'
        ],
        city: 'COTONOU',
        imageKeyword: 'bar,pizza,nightlife',
        description: 'L\'incontournable QG (Pizza, Lounge, Live Music).',
        priceLevel: 3
    },
    {
        id: 'r-pilipili',
        name: 'Pili Pili',
        category: 'RESTAURANT',
        vibe: [
            'ROOTS',
            'FESTIVE',
            'FAMILY'
        ],
        city: 'COTONOU',
        imageKeyword: 'grilled chicken,african food,bbq',
        description: 'La référence des grillades béninoises (Brochettes, Poulet).',
        priceLevel: 2
    },
    {
        id: 'r-dreambeach',
        name: 'Dream Beach',
        category: 'RESTAURANT',
        vibe: [
            'FESTIVE',
            'RELAX',
            'LUXE'
        ],
        city: 'COTONOU',
        imageKeyword: 'beach club,cocktail,sushi',
        description: 'Sushis, Cocktails, Piscine face à la mer, DJ sets.',
        priceLevel: 4
    },
    {
        id: 'r-latelier',
        name: 'L\'Atelier',
        category: 'RESTAURANT',
        vibe: [
            'RELAX',
            'LUXE'
        ],
        city: 'COTONOU',
        imageKeyword: 'wine bar,bistronomy,cozy',
        description: 'Vin, Bistronomie, ambiance feutrée.',
        priceLevel: 4
    },
    {
        id: 'r-saveurs',
        name: 'Saveurs du Bénin',
        category: 'RESTAURANT',
        vibe: [
            'ROOTS',
            'HISTORY',
            'FAMILY'
        ],
        city: 'PORTO-NOVO',
        imageKeyword: 'african traditional food,feast',
        description: 'Le temple de la gastronomie locale.',
        priceLevel: 3
    },
    {
        id: 'r-clarisse',
        name: 'Chez Clarisse',
        category: 'RESTAURANT',
        vibe: [
            'ROOTS',
            'HISTORY'
        ],
        city: 'UIDAH',
        imageKeyword: 'authentic african food,spicy',
        description: 'Maquis authentique (Purée de piment, Amiwo).',
        priceLevel: 1
    },
    {
        id: 'r-codebar',
        name: 'Code Bar',
        category: 'RESTAURANT',
        vibe: [
            'FESTIVE',
            'OUTFIT'
        ],
        city: 'COTONOU',
        imageKeyword: 'cocktails,tapas,bar',
        description: 'Tapas et mixologie créative.',
        priceLevel: 3
    },
    {
        id: 'r-berlin',
        name: 'Le Berlin',
        category: 'RESTAURANT',
        vibe: [
            'FESTIVE',
            'RELAX'
        ],
        city: 'COTONOU',
        imageKeyword: 'beer garden,nightlife,friends',
        description: 'Ambiance festive et décontractée.',
        priceLevel: 2
    },
    // --- C. SPORTS & LOISIRS URBAINS ---
    {
        id: 's-padel',
        name: 'Padel Club Cotonou',
        category: 'SPORT',
        vibe: [
            'ADRENALINE',
            'OUTFIT',
            'BUSINESS'
        ],
        city: 'COTONOU',
        imageKeyword: 'padel,tennis court,sport',
        description: 'Le sport tendance (Zone Aéroport/Haie Vive).',
        priceLevel: 3
    },
    {
        id: 's-karting',
        name: 'Karting de Cotonou',
        category: 'SPORT',
        vibe: [
            'ADRENALINE',
            'FAMILY',
            'FESTIVE'
        ],
        city: 'FIDJROSSE',
        imageKeyword: 'karting,race,speed',
        description: 'Adrénaline sur piste pour groupes et familles.',
        priceLevel: 3
    },
    {
        id: 's-golf',
        name: 'Cotonou Golf Club',
        category: 'SPORT',
        vibe: [
            'RELAX',
            'BUSINESS',
            'LUXE'
        ],
        city: 'COTONOU',
        imageKeyword: 'golf course,green',
        description: 'Parcours pour les amateurs de green.',
        priceLevel: 4
    },
    {
        id: 's-surf',
        name: 'Surf à Fidjrossè',
        category: 'SPORT',
        vibe: [
            'ADRENALINE',
            'ROOTS',
            'RELAX'
        ],
        city: 'FIDJROSSE',
        imageKeyword: 'surfing,beach,waves',
        description: 'Cours et location de planches sur la plage.',
        priceLevel: 2
    },
    {
        id: 's-eya',
        name: 'Eya Centre Communautaire',
        category: 'SPORT',
        vibe: [
            'FAMILY',
            'ROOTS',
            'OUTFIT'
        ],
        city: 'COTONOU',
        imageKeyword: 'basketball court,community center',
        description: 'Terrains de Basket, Espace culturel.',
        priceLevel: 2
    },
    // --- D. CULTURE & TOURISME ---
    {
        id: 'c-bateau',
        name: 'Le Bateau du Départ',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS'
        ],
        city: 'UIDAH',
        imageKeyword: 'museum ship,history,ocean',
        description: 'Navire-Musée immersif. La nouvelle attraction majeure.',
        priceLevel: 3
    },
    {
        id: 'c-amazone',
        name: 'Place de l\'Amazone',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'OUTFIT',
            'FAMILY'
        ],
        city: 'COTONOU',
        imageKeyword: 'statue,monument,benin amazon',
        description: 'La statue monumentale, nouveau symbole du pays.',
        priceLevel: 1
    },
    {
        id: 'c-zinsou',
        name: 'Fondation Zinsou',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'OUTFIT',
            'LUXE'
        ],
        city: 'COTONOU',
        imageKeyword: 'art gallery,contemporary art,museum',
        description: 'Art Contemporain. Gratuit et Prestigieux.',
        priceLevel: 1
    },
    {
        id: 'c-porte',
        name: 'Porte du Non-Retour',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS'
        ],
        city: 'UIDAH',
        imageKeyword: 'monument,history,gate',
        description: 'Monument mémoriel rénové, face à l\'océan.',
        priceLevel: 1
    },
    {
        id: 'c-route',
        name: 'Route des Esclaves',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS'
        ],
        city: 'UIDAH',
        imageKeyword: 'path,history,unesco',
        description: 'Parcours historique classé UNESCO.',
        priceLevel: 1
    },
    {
        id: 'c-honme',
        name: 'Musée Honmé',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS'
        ],
        city: 'PORTO-NOVO',
        imageKeyword: 'palace,museum,african history',
        description: 'Palais des Rois. Une plongée dans l\'histoire royale.',
        priceLevel: 2
    },
    {
        id: 'c-ethno',
        name: 'Musée Ethnographique',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS'
        ],
        city: 'PORTO-NOVO',
        imageKeyword: 'masks,museum,history',
        description: 'Découvrez la richesse ethnographique du Bénin.',
        priceLevel: 2
    },
    {
        id: 'c-ganvie',
        name: 'Village Lacustre de Ganvié',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS',
            'ADRENALINE'
        ],
        city: 'COTONOU',
        imageKeyword: 'village on water,canoe,lake',
        description: '"Venise de l\'Afrique". Une cité sur l\'eau unique.',
        priceLevel: 3
    },
    {
        id: 'c-python',
        name: 'Temple des Pythons',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS',
            'ADRENALINE'
        ],
        city: 'UIDAH',
        imageKeyword: 'snake,temple,vodun',
        description: 'Culte Vodoun. Oserez-vous porter un python ?',
        priceLevel: 2
    },
    // --- E. ÉVÉNEMENTS & FESTIVALS ---
    {
        id: 'e-weloveeya',
        name: 'We Love Eya',
        category: 'EVENT',
        vibe: [
            'FESTIVE',
            'OUTFIT',
            'ADRENALINE',
            'FAMILY'
        ],
        city: 'COTONOU',
        imageKeyword: 'concert,festival,crowd,music',
        description: 'Le plus grand festival de musique urbaine et pop-culture.',
        priceLevel: 3
    },
    {
        id: 'e-vodoundays',
        name: 'Vodoun Days',
        category: 'EVENT',
        vibe: [
            'HISTORY',
            'ROOTS',
            'FESTIVE'
        ],
        city: 'UIDAH',
        imageKeyword: 'festival,tradition,dance,vodun',
        description: '10 Janvier. Célébration mondiale de la culture Vodoun.',
        priceLevel: 2
    },
    {
        id: 'e-portonovo',
        name: 'Festival International de Porto-Novo',
        category: 'EVENT',
        vibe: [
            'HISTORY',
            'ROOTS',
            'FESTIVE'
        ],
        city: 'PORTO-NOVO',
        imageKeyword: 'masks,parade,festival',
        description: 'Janvier. Masques Zangbeto, Egungun et traditions.',
        priceLevel: 2
    },
    {
        id: 'e-glouglou',
        name: 'Glouglou',
        category: 'EVENT',
        vibe: [
            'FESTIVE',
            'RELAX',
            'OUTFIT'
        ],
        city: 'COTONOU',
        imageKeyword: 'wine tasting,food festival,glass',
        description: 'Festival du vin et de la gastronomie.',
        priceLevel: 3
    },
    // --- F. AGENCES ---
    {
        id: 'a-miwakpon',
        name: 'Miwakpon-Benin',
        category: 'AGENCY',
        vibe: [
            'ROOTS',
            'FAMILY'
        ],
        city: 'COTONOU',
        imageKeyword: 'guide,tourist,smile',
        description: 'Tourisme solidaire et immersion locale.',
        priceLevel: 3
    },
    {
        id: 'a-ecobenin',
        name: 'Eco-Benin',
        category: 'AGENCY',
        vibe: [
            'ROOTS',
            'RELAX'
        ],
        city: 'COTONOU',
        imageKeyword: 'nature,eco tourism,mangrove',
        description: 'Spécialistes de l\'écotourisme.',
        priceLevel: 3
    },
    {
        id: 'a-destination',
        name: 'Benin Destination',
        category: 'AGENCY',
        vibe: [
            'LUXE',
            'BUSINESS'
        ],
        city: 'COTONOU',
        imageKeyword: 'luxury car,vip service,concierge',
        description: 'Logistique VIP et services sur mesure.',
        priceLevel: 5
    }
];
}),
"[project]/context/TripContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripProvider",
    ()=>TripProvider,
    "useTrip",
    ()=>useTrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/db_master.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const TripContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TripProvider({ children }) {
    const [trip, setTrip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        hotel: null,
        morningActivity: null,
        eveningActivity: null,
        transport: null
    });
    const addToTrip = (type, placeId)=>{
        const place = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DB_MASTER"].find((p)=>p.id === placeId) || null;
        setTrip((prev)=>({
                ...prev,
                [type]: place
            }));
    };
    const removeFromTrip = (type)=>{
        setTrip((prev)=>({
                ...prev,
                [type]: null
            }));
    };
    const resetTrip = ()=>{
        setTrip({
            hotel: null,
            morningActivity: null,
            eveningActivity: null,
            transport: null
        });
    };
    const totalEstimatedPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let score = 0;
        if (trip.hotel) score += trip.hotel.priceLevel * 20000;
        if (trip.morningActivity) score += trip.morningActivity.priceLevel * 5000;
        if (trip.eveningActivity) score += trip.eveningActivity.priceLevel * 10000;
        if (trip.transport) score += trip.transport.priceLevel * 15000;
        return score;
    }, [
        trip
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TripContext.Provider, {
        value: {
            trip,
            addToTrip,
            removeFromTrip,
            resetTrip,
            totalEstimatedPrice
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/TripContext.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function useTrip() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TripContext);
    if (context === undefined) {
        throw new Error('useTrip must be used within a TripProvider');
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__edaee93f._.js.map