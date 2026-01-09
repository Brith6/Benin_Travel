(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/db_master.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/TripContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripProvider",
    ()=>TripProvider,
    "useTrip",
    ()=>useTrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/db_master.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const TripContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TripProvider({ children }) {
    _s();
    const [trip, setTrip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hotel: null,
        morningActivity: null,
        eveningActivity: null,
        transport: null
    });
    const addToTrip = (type, placeId)=>{
        const place = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].find((p)=>p.id === placeId) || null;
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
    const totalEstimatedPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TripProvider.useMemo[totalEstimatedPrice]": ()=>{
            let score = 0;
            if (trip.hotel) score += trip.hotel.priceLevel * 20000;
            if (trip.morningActivity) score += trip.morningActivity.priceLevel * 5000;
            if (trip.eveningActivity) score += trip.eveningActivity.priceLevel * 10000;
            if (trip.transport) score += trip.transport.priceLevel * 15000;
            return score;
        }
    }["TripProvider.useMemo[totalEstimatedPrice]"], [
        trip
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TripContext.Provider, {
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
_s(TripProvider, "QOJDaQXwUkiNRGWuLtdNUdglYnM=");
_c = TripProvider;
function useTrip() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TripContext);
    if (context === undefined) {
        throw new Error('useTrip must be used within a TripProvider');
    }
    return context;
}
_s1(useTrip, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "TripProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_fa84ab92._.js.map