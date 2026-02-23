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
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'abomey',
        name: 'Abomey',
        description: 'Cité royale, terre des Amazones et du patrimoine.',
        image: 'https://images.unsplash.com/photo-1580828369619-142c1106e57d?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'pendjari',
        name: 'Pendjari',
        description: 'Sauvagerie pure, le royaume des grands fauves.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'ouidah',
        name: 'Ouidah',
        description: 'Berceau du Vodoun et porte du non-retour.',
        image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80'
    }
];
const HOTELS = [
    {
        id: 'h1',
        name: 'Ecolodge Pendjari',
        price: 85000,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: 'Une nuit sous les étoiles, bercé par le rugissement des lions.',
        location: 'pendjari'
    },
    {
        id: 'h2',
        name: 'Tata Somba Luxury',
        price: 120000,
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        description: 'Architecture traditionnelle Tata, confort ultra-moderne.',
        location: 'abomey'
    },
    {
        id: 'h3',
        name: 'Ganvié Water Resort',
        price: 95000,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        description: 'Bungalows sur pilotis avec fond de verre pour voir la lagune.',
        location: 'cotonou'
    },
    {
        id: 'h4',
        name: 'Ouidah Python Suites',
        price: 65000,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
        description: 'Le luxe mystique au milieu de la forêt sacrée.',
        location: 'ouidah'
    },
    {
        id: 'h5',
        name: 'Nocibé Atlantic Hotel',
        price: 150000,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1590426573887-2abe8da17ba4?auto=format&fit=crop&w=800&q=80',
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
"[project]/app/pros/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
function ProsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold tracking-tighter",
                            children: [
                                "NOS ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00FF94]",
                                    children: "ÉCLAIREURS"
                                }, void 0, false, {
                                    fileName: "[project]/app/pros/page.tsx",
                                    lineNumber: 11,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pros/page.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 max-w-xl mx-auto",
                            children: "Ils ne sont pas de simples guides. Ce sont les gardiens des secrets du 229. Connectez-vous directement à l'âme du Bénin."
                        }, void 0, false, {
                            fileName: "[project]/app/pros/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pros/page.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GUIDES"].map((guide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00FF94]/50 transition-all duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-96 w-full grayscale group-hover:grayscale-0 transition-all duration-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: guide.image,
                                            alt: guide.name,
                                            fill: true,
                                            unoptimized: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pros/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pros/page.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pros/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "w-4 h-4 text-[#00FF94]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pros/page.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold tracking-widest text-[#00FF94] uppercase",
                                                    children: "Vérifié"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pros/page.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pros/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-1",
                                            children: guide.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/pros/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 mb-6",
                                            children: guide.specialty
                                        }, void 0, false, {
                                            fileName: "[project]/app/pros/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://wa.me/${guide.phone}?text=Je veux visiter le Benin`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1faa53] text-black font-bold rounded transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pros/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                " Transmission WhatsApp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pros/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pros/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, guide.id, true, {
                            fileName: "[project]/app/pros/page.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/pros/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pros/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/pros/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/pros/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/pros/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b13b9da._.js.map