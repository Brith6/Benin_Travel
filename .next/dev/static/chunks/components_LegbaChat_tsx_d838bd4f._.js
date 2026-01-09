(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/LegbaChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LegbaChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/db_master.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LegbaChat() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            type: 'bot',
            text: 'Kouabo ! Je suis Legba, l\'esprit numérique du 229. Je peux vous ouvrir toutes les portes. Que cherchez-vous ? (Sport, Chill, Luxe, Hotel, Manger...)'
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegbaChat.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["LegbaChat.useEffect"], [
        messages
    ]);
    const handleSend = ()=>{
        if (!input.trim()) return;
        const userMsg = {
            id: Date.now(),
            type: 'user',
            text: input
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInput('');
        // Simulated AI Logic
        setTimeout(()=>{
            let responseText = "Hmmm, la connexion avec les esprits est trouble. Essayez d'être plus précis.";
            const lowerInput = userMsg.text.toLowerCase();
            // Greetings
            if (lowerInput.match(/\b(bonjour|salut|hello|hi|coucou)\b/)) {
                responseText = "Alafia ! Prêt à explorer le Bénin ?";
            } else if (lowerInput.match(/\b(sport|tennis|padel|bouger|activit)\b/)) {
                const spots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].filter((i)=>i.category === 'SPORT').slice(0, 3).map((i)=>i.name).join(', ');
                responseText = `Pour garder la forme, je recommande : ${spots}. Le Padel Club à Cotonou est le spot du moment.`;
            } else if (lowerInput.match(/\b(hotel|dormir|logement|nuit|repos)\b/)) {
                if (lowerInput.includes('ouidah')) {
                    const spots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].filter((i)=>i.category === 'HOTEL' && i.city === 'UIDAH').map((i)=>i.name).join(', ');
                    responseText = `À Ouidah, le repos est sacré. Regardez du côté de : ${spots}.`;
                } else if (lowerInput.includes('cotonou')) {
                    const spots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].filter((i)=>i.category === 'HOTEL' && i.city === 'COTONOU').map((i)=>i.name).join(', ');
                    responseText = `Cotonou offre du luxe et du confort : ${spots}.`;
                } else {
                    responseText = "Dans quelle ville souhaitez-vous résider ? J'ai des adresses à Cotonou, Ouidah, Porto-Novo et dans le Nord (Pendjari).";
                }
            } else if (lowerInput.match(/\b(manger|faim|resto|diner|dejeuner|food)\b/)) {
                const roots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].filter((i)=>i.category === 'RESTAURANT' && i.vibe.includes('ROOTS')).slice(0, 2).map((i)=>i.name).join(', ');
                const luxe = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].filter((i)=>i.category === 'RESTAURANT' && i.vibe.includes('LUXE')).slice(0, 2).map((i)=>i.name).join(', ');
                responseText = `Pour manger local ? Essayez ${roots}. Pour plus de standing ? ${luxe} sont excellents.`;
            } else if (lowerInput.match(/\b(sortir|boire|fête|party|night|club)\b/)) {
                const spots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].filter((i)=>i.category === 'EVENT' || i.vibe.includes('FESTIVE')).slice(0, 3).map((i)=>i.name).join(', ');
                responseText = `La nuit appartient aux initiés au Bénin. Allez voir : ${spots}.`;
            } else if (lowerInput.match(/\b(culture|musée|histoire|art|tradition)\b/)) {
                const spots = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$db_master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_MASTER"].filter((i)=>i.category === 'CULTURE').slice(0, 3).map((i)=>i.name).join(', ');
                responseText = `Plongez dans l'histoire avec : ${spots}. Ne ratez pas la Fondation Zinsou.`;
            } else if (lowerInput.includes('merci')) {
                responseText = "C'est un plaisir. N'hésitez pas si vous avez d'autres questions !";
            }
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now() + 1,
                        type: 'bot',
                        text: responseText
                    }
                ]);
        }, 600);
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') handleSend();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.9
                },
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#00FF94] rounded-full flex items-center justify-center shadow-[0_0_20px_#00FF94] text-black border-2 border-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                    className: "w-8 h-8"
                }, void 0, false, {
                    fileName: "[project]/components/LegbaChat.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LegbaChat.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 50,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 50,
                        scale: 0.9
                    },
                    className: "fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#0a0a0a]/95 border border-[#00FF94]/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans",
                    style: {
                        height: '500px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#00FF94]/10 p-4 border-b border-[#00FF94]/20 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-[#00FF94] animate-pulse absolute top-0 right-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LegbaChat.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "w-6 h-6 text-[#00FF94]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LegbaChat.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LegbaChat.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[#00FF94] tracking-widest text-sm block",
                                                    children: "LEGBA AI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LegbaChat.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-400",
                                                    children: "Assistant Virtuel 2.0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LegbaChat.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LegbaChat.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LegbaChat.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LegbaChat.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/LegbaChat.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LegbaChat.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            className: "flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent",
                            children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${msg.type === 'user' ? 'bg-[#00FF94] text-black font-medium rounded-br-none' : 'bg-[#1a1a1a] text-gray-200 rounded-bl-none border border-white/5'}`,
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/LegbaChat.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this)
                                }, msg.id, false, {
                                    fileName: "[project]/components/LegbaChat.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/LegbaChat.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-t border-white/10 bg-black/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        onKeyDown: handleKeyPress,
                                        placeholder: "Posez votre question...",
                                        className: "flex-1 bg-zinc-900/80 text-white rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#00FF94]/50 border border-white/5 text-sm placeholder:text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LegbaChat.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSend,
                                        disabled: !input.trim(),
                                        className: "p-3 bg-[#00FF94] rounded-xl text-black hover:bg-[#00cc76] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LegbaChat.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/LegbaChat.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LegbaChat.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/LegbaChat.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LegbaChat.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LegbaChat.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LegbaChat, "cEm2G89fhrXOyv5VnO26kxfHPFU=");
_c = LegbaChat;
var _c;
__turbopack_context__.k.register(_c, "LegbaChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_LegbaChat_tsx_d838bd4f._.js.map