module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Initialize from LocalStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedUser = localStorage.getItem('benin_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error("Failed to parse user from storage", e);
                localStorage.removeItem('benin_user');
            }
        }
        setLoading(false);
    }, []);
    const login = async (email, password)=>{
        setLoading(true);
        // Simulation: accept any login for MVP
        await new Promise((resolve)=>setTimeout(resolve, 800)); // Fake network delay
        const fakeUser = {
            id: 'tourist-' + Date.now(),
            name: email.split('@')[0],
            email: email,
            role: 'tourist',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}` // Auto-generated avatar
        };
        setUser(fakeUser);
        localStorage.setItem('benin_user', JSON.stringify(fakeUser));
        setLoading(false);
    };
    const signup = async (name, email, password)=>{
        setLoading(true);
        await new Promise((resolve)=>setTimeout(resolve, 800));
        const fakeUser = {
            id: 'tourist-' + Date.now(),
            name: name,
            email: email,
            role: 'tourist',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
        };
        setUser(fakeUser);
        localStorage.setItem('benin_user', JSON.stringify(fakeUser));
        setLoading(false);
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('benin_user');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated: !!user,
            login,
            signup,
            logout,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/AuthContext.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const navLinks = [
        {
            name: 'Accueil',
            href: '/',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            name: 'Explorer',
            href: '/explore',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        },
        {
            name: 'Planner',
            href: '/planner',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
        },
        {
            name: 'Experts',
            href: '/pros',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-8 h-8 text-[#00FF94] group-hover:rotate-12 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[#00FF94] blur-lg opacity-40 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-bold tracking-tighter text-white",
                            children: [
                                "BENIN",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00FF94]",
                                    children: "-TRAVEL"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 43,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: navLinks.map((link)=>{
                        const isActive = pathname === link.href;
                        const Icon = link.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: `relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#00FF94] ${isActive ? 'text-[#00FF94]' : 'text-gray-400'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this),
                                link.name,
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layoutId: "navbar-indicator",
                                    className: "absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00FF94] shadow-[0_0_10px_#00FF94]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, link.name, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/profile",
                    className: "hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold text-[#00FF94] group-hover:text-white transition-colors",
                            children: user.name ? user.name.split(' ')[0] : 'Voyageur'
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: user.avatar,
                            alt: "Profile",
                            className: "w-8 h-8 rounded-full border border-[#00FF94]/50"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full bg-[#00FF94] flex items-center justify-center text-black font-bold",
                            children: (user.name || 'V').charAt(0)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "hidden md:block px-4 py-2 text-xs font-bold text-black bg-[#FFD700] hover:bg-[#ffe44d] transition-colors rounded-sm shadow-[0_0_15px_rgba(255,215,0,0.3)]",
                    children: "CONNEXION"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/db_master.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DB_MASTER",
    ()=>DB_MASTER,
    "PACKAGES",
    ()=>PACKAGES
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
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80',
        description: 'Luxe 5*, Spa, Piscine lagon. Le nouveau joyau de Cotonou.',
        priceLevel: 5
    },
    {
        id: 'h-dhawa',
        name: 'Dhawa Ouidah',
        category: 'HOTEL',
        vibe: [
            'RELAX',
            'FAMILY',
            'HISTORY'
        ],
        city: 'UIDAH',
        image: 'https://images.unsplash.com/photo-1580828369619-142c1106e57d?auto=format&fit=crop&w=800&q=80',
        description: 'Ressort éco-chic niché entre lagune et océan, à deux pas de la Porte du Non-Retour.',
        priceLevel: 4
    },
    {
        id: 'h-guesthouse',
        name: 'Maison Rouge Cotonou',
        category: 'HOTEL',
        vibe: [
            'ROOTS',
            'RELAX'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        description: 'Boutique hôtel intime avec jardin tropical et ambiance artistique.',
        priceLevel: 3
    },
    {
        id: 'h-nord',
        name: 'Pendjari Lodge',
        category: 'HOTEL',
        vibe: [
            'ADRENALINE',
            'ROOTS'
        ],
        city: 'NORD',
        image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80',
        description: 'Au cœur de la réserve de biosphère, dormez au son des éléphants.',
        priceLevel: 4
    },
    {
        id: 'h-ganvie',
        name: 'Chez M',
        category: 'HOTEL',
        vibe: [
            'ROOTS',
            'HISTORY'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: 'Expérience immersive au cœur de la cité lacustre.',
        priceLevel: 2
    },
    // --- B. RESTAURANTS ---
    {
        id: 'r-vivo',
        name: 'Le Vivo',
        category: 'RESTAURANT',
        vibe: [
            'LUXE',
            'BUSINESS',
            'OUTFIT'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        description: 'Gastronomie fusion dans un cadre ultra-moderne. Le spot pour voir et être vu.',
        priceLevel: 4
    },
    {
        id: 'r-maquis',
        name: 'Maquis du Port',
        category: 'RESTAURANT',
        vibe: [
            'ROOTS',
            'FAMILY',
            'FESTIVE'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        description: 'Le vrai goût du poisson braisé face aux bateaux de pêche. Authentique et vibrant.',
        priceLevel: 2
    },
    {
        id: 'r-saveurs',
        name: 'Saveurs du Bénin',
        category: 'RESTAURANT',
        vibe: [
            'ROOTS',
            'FAMILY'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
        description: 'Pour déguster un Amiwo ou une Sauce Graine comme à la maison.',
        priceLevel: 2
    },
    // --- C. SPORTS & ACTIVITES ---
    {
        id: 's-padel',
        name: 'Padel Club Cotonou',
        category: 'SPORT',
        vibe: [
            'ADRENALINE',
            'BUSINESS',
            'OUTFIT'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1590426573887-2abe8da17ba4?auto=format&fit=crop&w=800&q=80',
        description: 'Le sport tendance. Terrains couverts, ambiance premium et réseautage.',
        priceLevel: 3
    },
    {
        id: 's-kite',
        name: 'Kitesurf Paradise',
        category: 'SPORT',
        vibe: [
            'ADRENALINE',
            'RELAX'
        ],
        city: 'FIDJROSSE',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80',
        description: 'L\'école de glisse sur la Route des Pêches. Sensations fortes garanties.',
        priceLevel: 3
    },
    {
        id: 's-babs',
        name: 'Bab\'s Dock',
        category: 'SPORT',
        vibe: [
            'RELAX',
            'FAMILY',
            'ROOTS'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1580828369619-142c1106e57d?auto=format&fit=crop&w=800&q=80',
        description: 'Traversée en barque dans la mangrove pour atteindre une île secrète.',
        priceLevel: 3
    },
    // --- D. CULTURE ---
    {
        id: 'c-zinsou',
        name: 'Fondation Zinsou',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'RELAX',
            'FAMILY'
        ],
        city: 'UIDAH',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        description: 'Art contemporain africain dans un bâtiment historique magnifique.',
        priceLevel: 2
    },
    {
        id: 'c-ouidah',
        name: 'Route des Esclaves',
        category: 'CULTURE',
        vibe: [
            'HISTORY',
            'ROOTS'
        ],
        city: 'UIDAH',
        image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80',
        description: 'Marche mémorielle jusqu\'à la Porte du Non-Retour. Émouvant et nécessaire.',
        priceLevel: 1
    },
    {
        id: 'c-abomey',
        name: 'Palais Royaux',
        category: 'CULTURE',
        vibe: [
            'HISTORY'
        ],
        city: 'ABOMEY',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: 'Plongée dans l\'histoire du Royaume de Dahomey.',
        priceLevel: 2
    },
    // --- E. EVENTS & NIGHTLIFE ---
    {
        id: 'e-festive',
        name: 'Code Bar',
        category: 'EVENT',
        vibe: [
            'FESTIVE',
            'OUTFIT'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        description: 'Le QG de la jeunesse dorée. Cocktails, DJ sets et bonne ambiance.',
        priceLevel: 3
    },
    // --- F. LOGISTIQUE ---
    {
        id: 'a-driver',
        name: 'Chauffeur Privé VIP',
        category: 'AGENCY',
        vibe: [
            'BUSINESS',
            'LUXE'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        description: 'SUV climatisé avec chauffeur bilingue à votre disposition 24/7.',
        priceLevel: 4
    },
    {
        id: 'a-zem',
        name: 'GoZem Premium',
        category: 'AGENCY',
        vibe: [
            'ROOTS',
            'ADRENALINE'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
        description: 'L\'expérience locale sécurisée pour se faufiler dans le trafic.',
        priceLevel: 1
    },
    // --- RESTAURATION DE CONTENU (FROM DB.TS) ---
    {
        id: 'h1',
        name: 'Ecolodge Pendjari',
        category: 'HOTEL',
        vibe: [
            'ADRENALINE',
            'ROOTS'
        ],
        city: 'NORD',
        image: 'https://images.unsplash.com/photo-1590426573887-2abe8da17ba4?auto=format&fit=crop&w=800&q=80',
        description: 'Une nuit sous les étoiles, bercé par le rugissement des lions.',
        priceLevel: 4
    },
    {
        id: 'h2',
        name: 'Tata Somba Luxury',
        category: 'HOTEL',
        vibe: [
            'HISTORY',
            'LUXE'
        ],
        city: 'ABOMEY',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80',
        description: 'Architecture traditionnelle Tata, confort ultra-moderne.',
        priceLevel: 5
    },
    {
        id: 'h3',
        name: 'Ganvié Water Resort',
        category: 'HOTEL',
        vibe: [
            'RELAX',
            'ROOTS'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1580828369619-142c1106e57d?auto=format&fit=crop&w=800&q=80',
        description: 'Bungalows sur pilotis avec fond de verre pour voir la lagune.',
        priceLevel: 4
    },
    {
        id: 'h4',
        name: 'Ouidah Python Suites',
        category: 'HOTEL',
        vibe: [
            'HISTORY',
            'LUXE'
        ],
        city: 'UIDAH',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        description: 'Le luxe mystique au milieu de la forêt sacrée.',
        priceLevel: 3
    },
    {
        id: 'h5',
        name: 'Nocibé Atlantic Hotel',
        category: 'HOTEL',
        vibe: [
            'LUXE',
            'RELAX'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80',
        description: 'Vue imprenable sur l\'océan Atlantique, service 5 étoiles.',
        priceLevel: 5
    },
    {
        id: 'r1',
        name: 'Maquis 2.0',
        category: 'RESTAURANT',
        vibe: [
            'ADRENALINE',
            'OUTFIT'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
        description: 'Maquis Cyberpunk. Ambiance futuriste et cuisine locale.',
        priceLevel: 3
    },
    {
        id: 'r2',
        name: 'Saveurs du Palais',
        category: 'RESTAURANT',
        vibe: [
            'HISTORY',
            'FAMILY'
        ],
        city: 'ABOMEY',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        description: 'Gastronomie Royale au cœur d\'Abomey.',
        priceLevel: 4
    },
    {
        id: 'r3',
        name: 'L\'Igname Solaire',
        category: 'RESTAURANT',
        vibe: [
            'ROOTS',
            'RELAX'
        ],
        city: 'NORD',
        image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
        description: 'Fusion culinaire solaire dans le Nord.',
        priceLevel: 2
    },
    {
        id: 'r4',
        name: 'La Pirogue Céleste',
        category: 'RESTAURANT',
        vibe: [
            'RELAX',
            'FAMILY'
        ],
        city: 'UIDAH',
        image: 'https://images.unsplash.com/photo-1626804475297-411dbcc76bc2?auto=format&fit=crop&w=800&q=80',
        description: 'Fruits de mer frais servis les pieds dans le sable.',
        priceLevel: 3
    },
    {
        id: 'r5',
        name: 'Buvette Code Zéro',
        category: 'RESTAURANT',
        vibe: [
            'ROOTS',
            'FESTIVE'
        ],
        city: 'COTONOU',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
        description: 'Street Food authentique et ambiance locale.',
        priceLevel: 1
    }
];
const PACKAGES = [
    {
        id: 'pkg-royal',
        title: 'Immersion Royale',
        duration: '3 Jours',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: 'Une plongée historique au cœur du Royaume du Dahomey. Visite des palais, rencontre avec les gardiens du temple et nuits en éco-lodge traditionnel.',
        includes: [
            'Transport VIP',
            'Entrées Palais & Musées',
            'Hébergement Tata Somba',
            'Guide Historien'
        ]
    },
    {
        id: 'pkg-voodoo',
        title: 'Esprits du Sud',
        duration: '2 Jours',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        description: 'Découvrez Ouidah et ses mystères. Route des esclaves, Temple des Pythons et cérémonie Zangbeto privée.',
        includes: [
            'Cérémonie Privée',
            'Déjeuner Local',
            'Nuit à Ouidah',
            'Transport'
        ]
    },
    {
        id: 'pkg-safari',
        title: 'Pendjari Sauvage',
        duration: '4 Jours',
        price: 250000,
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        description: 'Aventure 4x4 au nord. Lions, éléphants et cascades. Le Bénin comme vous ne l\'avez jamais vu.',
        includes: [
            'Vol Interne',
            '4x4 Safari',
            'Lodge de Luxe',
            'Pension Complète'
        ]
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0cb1f2f7._.js.map