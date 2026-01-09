(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            name: 'Accueil',
            href: '/',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            name: 'Créer mon Trip',
            href: '/planner',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
        },
        {
            name: 'Packages',
            href: '/packages',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
        },
        {
            name: 'Nos Éclaireurs',
            href: '/pros',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/60 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-8 h-8 text-[#00FF94] group-hover:rotate-12 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[#00FF94] blur-lg opacity-40 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-bold tracking-tighter text-white",
                            children: [
                                "BENIN",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00FF94]",
                                    children: "-TRAVEL"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: navLinks.map((link)=>{
                        const isActive = pathname === link.href;
                        const Icon = link.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: `relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#00FF94] ${isActive ? 'text-[#00FF94]' : 'text-gray-400'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this),
                                link.name,
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layoutId: "navbar-indicator",
                                    className: "absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00FF94] shadow-[0_0_10px_#00FF94]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, link.name, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "hidden md:block px-4 py-2 text-xs font-bold text-black bg-[#FFD700] hover:bg-[#ffe44d] transition-colors rounded-sm shadow-[0_0_15px_rgba(255,215,0,0.3)]",
                    children: "CONNEXION"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Navbar, "ssb79YWDx1VBiiqNblDF+lWmOCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/db.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const TripContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TripProvider({ children }) {
    _s();
    const [tripData, setTripData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        region: null,
        hotel: null,
        activities: [],
        restaurants: []
    });
    const setRegion = (regionId)=>{
        const region = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regions"].find((r)=>r.id === regionId) || null;
        // Reset selections if region changes
        if (region?.id !== tripData.region?.id) {
            setTripData({
                region,
                hotel: null,
                activities: [],
                restaurants: []
            });
        } else {
            setTripData((prev)=>({
                    ...prev,
                    region
                }));
        }
    };
    const setHotel = (hotelId)=>{
        const hotel = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOTELS"].find((h)=>h.id === hotelId) || null;
        setTripData((prev)=>({
                ...prev,
                hotel
            }));
    };
    const addActivity = (activityId)=>{
        const activity = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTIVITIES"].find((a)=>a.id === activityId);
        if (activity && !tripData.activities.find((a)=>a.id === activityId)) {
            setTripData((prev)=>({
                    ...prev,
                    activities: [
                        ...prev.activities,
                        activity
                    ]
                }));
        }
    };
    const removeActivity = (activityId)=>{
        setTripData((prev)=>({
                ...prev,
                activities: prev.activities.filter((a)=>a.id !== activityId)
            }));
    };
    const addRestaurant = (restaurantId)=>{
        const restaurant = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESTAURANTS"].find((r)=>r.id === restaurantId);
        if (restaurant && !tripData.restaurants.find((r)=>r.id === restaurantId)) {
            setTripData((prev)=>({
                    ...prev,
                    restaurants: [
                        ...prev.restaurants,
                        restaurant
                    ]
                }));
        }
    };
    const removeRestaurant = (restaurantId)=>{
        setTripData((prev)=>({
                ...prev,
                restaurants: prev.restaurants.filter((r)=>r.id !== restaurantId)
            }));
    };
    const resetTrip = ()=>{
        setTripData({
            region: null,
            hotel: null,
            activities: [],
            restaurants: []
        });
    };
    const totalPrice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "TripProvider.useMemo[totalPrice]": ()=>{
            let total = 0;
            if (tripData.hotel) total += tripData.hotel.price;
            tripData.activities.forEach({
                "TripProvider.useMemo[totalPrice]": (a)=>total += a.price
            }["TripProvider.useMemo[totalPrice]"]);
            tripData.restaurants.forEach({
                "TripProvider.useMemo[totalPrice]": (r)=>total += r.price
            }["TripProvider.useMemo[totalPrice]"]);
            return total;
        }
    }["TripProvider.useMemo[totalPrice]"], [
        tripData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TripContext.Provider, {
        value: {
            tripData,
            setRegion,
            setHotel,
            addActivity,
            removeActivity,
            addRestaurant,
            removeRestaurant,
            totalPrice,
            resetTrip
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/TripContext.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(TripProvider, "Uw1onJSTnpj3gaquL46DO3JZ/sg=");
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
]);

//# sourceMappingURL=_7a14214f._.js.map