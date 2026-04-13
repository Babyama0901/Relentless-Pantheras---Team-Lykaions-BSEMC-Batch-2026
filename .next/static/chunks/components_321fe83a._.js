(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAssetPath",
    ()=>getAssetPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getAssetPath(path) {
    // Check if it's already an absolute URL or data URI
    if (path.startsWith('http') || path.startsWith('data:')) {
        return path;
    }
    // Ensure path starts with a slash
    const normalizedPath = path.startsWith('/') ? path : "/".concat(path);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return normalizedPath;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection() {
    _s();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftColRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightColRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eyebrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const h1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollIndicatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "HeroSection.useEffect.ctx": ()=>{
                    var _h1Ref_current, _rightColRef_current, _scrollIndicatorRef_current;
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        defaults: {
                            ease: "power4.out"
                        }
                    });
                    var _h1Ref_current_children, _rightColRef_current_children;
                    // Staggered entrance
                    tl.from(eyebrowRef.current, {
                        y: 20,
                        opacity: 0,
                        duration: 1
                    }, 0.3).from((_h1Ref_current_children = (_h1Ref_current = h1Ref.current) === null || _h1Ref_current === void 0 ? void 0 : _h1Ref_current.children) !== null && _h1Ref_current_children !== void 0 ? _h1Ref_current_children : [], {
                        y: 80,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.12
                    }, 0.5).from(subtextRef.current, {
                        y: 20,
                        opacity: 0,
                        duration: 1
                    }, 0.9).from((_rightColRef_current_children = (_rightColRef_current = rightColRef.current) === null || _rightColRef_current === void 0 ? void 0 : _rightColRef_current.children) !== null && _rightColRef_current_children !== void 0 ? _rightColRef_current_children : [], {
                        y: 40,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.15
                    }, 0.7).from(scrollIndicatorRef.current, {
                        opacity: 0,
                        y: 10,
                        duration: 1
                    }, 1.4);
                    // Scroll indicator loop
                    const scrollLine = (_scrollIndicatorRef_current = scrollIndicatorRef.current) === null || _scrollIndicatorRef_current === void 0 ? void 0 : _scrollIndicatorRef_current.querySelector('.scroll-line');
                    if (scrollLine) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scrollLine, {
                            scaleY: 0.5,
                            transformOrigin: "top center",
                            repeat: -1,
                            yoyo: true,
                            duration: 1.2,
                            ease: "sine.inOut"
                        });
                    }
                }
            }["HeroSection.useEffect.ctx"], heroRef);
            return ({
                "HeroSection.useEffect": ()=>ctx.revert()
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    /* ─── Slideshow Images State ─── */ const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSection.useMemo[slides]": ()=>[
                "/Memories/20220930_140639.jpg",
                "/Memories/IMG_20251117_184535.jpg",
                "/Memories/IMG_20251119_084221.jpg",
                "/Memories/IMG_20251119_084242.jpg",
                "/Memories/IMG_20251119_103130.jpg",
                "/Memories/IMG_20251119_142059.jpg",
                "/Memories/IMG_20251119_215459.jpg",
                "/Memories/IMG_20251119_222559.jpg",
                "/Memories/IMG_20251120_100834.jpg",
                "/Memories/IMG_20251120_121117.jpg",
                "/Memories/IMG_20251120_230420.jpg",
                "/Memories/IMG_20251121_103356.jpg",
                "/Memories/IMG_20260120_162300.jpg"
            ]
    }["HeroSection.useMemo[slides]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const interval = setInterval({
                "HeroSection.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "HeroSection.useEffect.interval": (prev)=>(prev + 1) % slides.length
                    }["HeroSection.useEffect.interval"]);
                }
            }["HeroSection.useEffect.interval"], 5000); // Change slide every 5 seconds
            return ({
                "HeroSection.useEffect": ()=>clearInterval(interval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        slides.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: heroRef,
        id: "home",
        "aria-label": "Hero Section",
        className: "relative min-h-screen w-full overflow-hidden bg-black flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 bg-black",
                children: slides.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ".concat(currentSlide === index ? "opacity-60 z-10" : "opacity-0 z-0"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])(url),
                            alt: "Slide ".concat(index + 1),
                            className: "w-full h-full object-cover transition-transform duration-[8000ms] ease-out origin-center ".concat(currentSlide === index ? "scale-110" : "scale-100")
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, url, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 z-[1] pointer-events-none",
                style: {
                    background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, black 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full pointer-events-none z-[1]",
                style: {
                    background: 'radial-gradient(circle, rgba(110,0,255,0.14) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex-1 flex flex-col items-start justify-center w-full px-6 md:px-12 lg:px-24 pt-32 pb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: leftColRef,
                            className: "flex-1 w-full max-w-3xl flex flex-col justify-center lg:items-start text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    ref: eyebrowRef,
                                    className: "font-trap mb-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-[#9B4DFF]",
                                    children: "Class of 2026 — Relentless Pantheras BSEMC"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    ref: h1Ref,
                                    className: "font-formula uppercase overflow-hidden leading-[0.88] w-full text-left",
                                    style: {
                                        fontSize: 'clamp(3rem, 7vw, 10rem)',
                                        letterSpacing: '-0.04em'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-white leading-[0.88]",
                                            children: "DIGITAL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[#6E00FF] leading-[0.88]",
                                            children: "YEARBOOK"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-white/20 leading-[0.88]",
                                            children: "BATCH '26"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    ref: subtextRef,
                                    className: "font-trap mt-8 text-[10px] uppercase tracking-[0.2em] text-white/40 max-w-sm leading-loose",
                                    children: "A testament to resilience, friendship, and the pursuit of excellence. Documenting the moments that defined our journey."
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: rightColRef,
                            className: "w-full lg:w-[40%] min-w-[300px] grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 glass-panel group cursor-pointer overflow-hidden relative min-h-[200px] flex items-end justify-start p-6",
                                    role: "button",
                                    "aria-label": "View AI-tagged highlights",
                                    tabIndex: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/Memories/20220930_140639.jpg"),
                                            alt: "Campus highlights",
                                            className: "absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-[hsl(270,70%,50%)] group-hover:border-transparent transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3 h-3 text-white ml-0.5",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 3l14 9-14 9V3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-formula text-sm uppercase tracking-widest text-[#9B4DFF] mb-1",
                                                    children: "Live Memories"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-trap text-[10px] text-white/50",
                                                    children: "AI-tagged highlights · Hover to preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-panel p-5 flex flex-col justify-between relative overflow-hidden group min-h-[140px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-[hsl(270,70%,50%)]/15 blur-2xl group-hover:bg-[hsl(270,70%,50%)]/30 transition-all duration-700 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-trap text-[9px] uppercase tracking-widest text-emerald-400/80",
                                                    children: "Live Network"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-trap text-[10px] uppercase tracking-widest text-white/30 mb-1",
                                                    children: "Verified Alumni"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-arame text-5xl text-white tracking-tighter",
                                                    children: "1,204"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-panel p-5 flex flex-col justify-between cursor-pointer group min-h-[140px] hover:border-[hsl(270,70%,50%)]/40 transition-all duration-300",
                                    role: "button",
                                    tabIndex: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[hsl(270,70%,50%)] group-hover:border-transparent transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-formula block text-xs uppercase tracking-widest text-[#9B4DFF] group-hover:text-white transition-colors",
                                                    children: "Enter Network"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-trap block text-[9px] text-white/30 mt-1 uppercase tracking-widest",
                                                    children: "SSO · Alumni Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 glass-panel p-4 flex items-center justify-between group cursor-pointer hover:border-[hsl(270,70%,50%)]/30 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 rounded-lg bg-[hsl(270,70%,50%)]/20 flex items-center justify-center group-hover:bg-[hsl(270,70%,50%)]/40 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3 h-3 text-[hsl(270,70%,65%)]",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroSection.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-trap text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors",
                                                    children: "AI Smart Discovery — Personalized by College & Dept."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-trap text-[9px] text-[#9B4DFF] uppercase tracking-widest",
                                            children: "Beta"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollIndicatorRef,
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-trap text-[9px] uppercase tracking-[0.4em] text-white/30",
                        children: "Scroll to Explore"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-line w-px h-10 bg-gradient-to-b from-[#6E00FF] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroSection.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "2QZR2vtfzSCkrpg/J81R5QuB4qc=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/YearbookViewport.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YearbookViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */ /** Placeholder silhouette paths – swap for real photo URLs later */ const SILHOUETTE_SVG = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    viewBox: "0 0 80 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "40",
            cy: "28",
            r: "18",
            fill: "rgba(255,255,255,0.15)"
        }, void 0, false, {
            fileName: "[project]/components/YearbookViewport.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 98c0-18.8 15.2-34 34-34s34 15.2 34 34",
            stroke: "rgba(255,255,255,0.12)",
            strokeWidth: "2",
            fill: "rgba(255,255,255,0.08)"
        }, void 0, false, {
            fileName: "[project]/components/YearbookViewport.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/components/YearbookViewport.tsx",
    lineNumber: 13,
    columnNumber: 3
}, ("TURBOPACK compile-time value", void 0));
const YOUNG_NOBLES = [
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    }
];
const OG_AND_UNC = [
    {
        firstName: "First Name",
        lastName: "Last Name"
    },
    {
        firstName: "First Name",
        lastName: "Last Name"
    }
];
/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: Student Card
───────────────────────────────────────────────────────────── */ function StudentCard(param) {
    let { student, delay } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "yearbook-card",
        style: {
            animationDelay: "".concat(delay, "ms")
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "yearbook-card__photo",
            children: [
                student.photo ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: student.photo,
                    alt: "".concat(student.firstName, " ").concat(student.lastName)
                }, void 0, false, {
                    fileName: "[project]/components/YearbookViewport.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "yearbook-card__silhouette",
                    children: SILHOUETTE_SVG
                }, void 0, false, {
                    fileName: "[project]/components/YearbookViewport.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "yearbook-card__badge",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "yearbook-card__badge-first",
                            children: student.firstName
                        }, void 0, false, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "yearbook-card__badge-last",
                            children: student.lastName
                        }, void 0, false, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/YearbookViewport.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/YearbookViewport.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/YearbookViewport.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = StudentCard;
function YearbookViewport(param) {
    let { onClose } = param;
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ── Mount animation: slide-up panel ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YearbookViewport.useEffect": ()=>{
            const overlay = overlayRef.current;
            const panel = panelRef.current;
            if (!overlay || !panel) return;
            // Start hidden below viewport
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(panel, {
                y: "100%",
                opacity: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(overlay, {
                opacity: 0
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
            tl.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            }).to(panel, {
                y: "0%",
                opacity: 1,
                duration: 0.65,
                ease: "power4.out"
            }, "-=0.1");
            // Lock body scroll
            document.body.style.overflow = "hidden";
            return ({
                "YearbookViewport.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["YearbookViewport.useEffect"];
        }
    }["YearbookViewport.useEffect"], []);
    /* ── Close handler: animate out then call onClose ── */ const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "YearbookViewport.useCallback[handleClose]": ()=>{
            const overlay = overlayRef.current;
            const panel = panelRef.current;
            if (!overlay || !panel) {
                onClose();
                return;
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                onComplete: onClose
            });
            tl.to(panel, {
                y: "100%",
                opacity: 0,
                duration: 0.5,
                ease: "power4.in"
            }).to(overlay, {
                opacity: 0,
                duration: 0.25,
                ease: "power2.in"
            }, "-=0.2");
        }
    }["YearbookViewport.useCallback[handleClose]"], [
        onClose
    ]);
    /* ── Return to top of viewport content ── */ const handleReturn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "YearbookViewport.useCallback[handleReturn]": ()=>{
            var _contentRef_current;
            (_contentRef_current = contentRef.current) === null || _contentRef_current === void 0 ? void 0 : _contentRef_current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }["YearbookViewport.useCallback[handleReturn]"], []);
    /* ── Keyboard: Escape closes ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YearbookViewport.useEffect": ()=>{
            const onKey = {
                "YearbookViewport.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") handleClose();
                }
            }["YearbookViewport.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "YearbookViewport.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["YearbookViewport.useEffect"];
        }
    }["YearbookViewport.useEffect"], [
        handleClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "yearbook-viewport-overlay",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Yearbook Full View",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: panelRef,
            className: "yearbook-viewport-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "yearbook-viewport-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "yearbook-viewport-brand",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "yearbook-logo-panther",
                                    viewBox: "0 0 64 64",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "32",
                                            cy: "32",
                                            r: "30",
                                            fill: "#1a003a",
                                            stroke: "#6E00FF",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M20 46 C18 38 16 30 22 24 C26 20 30 18 32 18 C34 18 38 20 42 24 C48 30 46 38 44 46",
                                            stroke: "#6E00FF",
                                            strokeWidth: "2",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "26",
                                            cy: "27",
                                            r: "2.5",
                                            fill: "#6E00FF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "38",
                                            cy: "27",
                                            r: "2.5",
                                            fill: "#6E00FF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M28 34 Q32 37 36 34",
                                            stroke: "#6E00FF",
                                            strokeWidth: "1.5",
                                            fill: "none",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18 22 L24 26 M46 22 L40 26",
                                            stroke: "#6E00FF",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "yearbook-logo-wolf",
                                    viewBox: "0 0 64 64",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "32",
                                            cy: "32",
                                            r: "30",
                                            fill: "#0d001f",
                                            stroke: "#9B4DFF",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 20 L20 30 L16 36 L24 32 L32 42 L40 32 L48 36 L44 30 L48 20 L40 24 L32 18 L24 24 Z",
                                            fill: "none",
                                            stroke: "#9B4DFF",
                                            strokeWidth: "1.5",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "26",
                                            cy: "28",
                                            r: "2",
                                            fill: "#9B4DFF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "38",
                                            cy: "28",
                                            r: "2",
                                            fill: "#9B4DFF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "yearbook-viewport-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "yearbook-viewport-subtitle",
                                            children: "Relentless Pantheras · BSEMC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "yearbook-viewport-main-title",
                                            children: "Team Lykaions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "yearbook-viewport-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "yearbook-return-btn",
                                    className: "yearbook-btn yearbook-btn--return",
                                    onClick: handleReturn,
                                    title: "Return to top",
                                    "aria-label": "Return to top of yearbook",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 19V5M5 12l7-7 7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/YearbookViewport.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Return"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "yearbook-close-btn",
                                    className: "yearbook-btn yearbook-btn--close",
                                    onClick: handleClose,
                                    title: "Close yearbook",
                                    "aria-label": "Close yearbook viewer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18 6L6 18M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/YearbookViewport.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/YearbookViewport.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    className: "yearbook-viewport-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "yearbook-hero-banner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/Memories/IMG_20251121_103356.jpg"),
                                    alt: "Team Lykaions hero",
                                    style: {
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                        filter: "brightness(0.25) saturate(0.5)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "yearbook-hero-banner__overlay"
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "yearbook-hero-banner__dots"
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "yearbook-hero-banner__text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "yearbook-hero-banner__sub",
                                            children: "Relentless Pantheras · BSEMC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "yearbook-hero-banner__title",
                                            children: [
                                                "TEAM",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/YearbookViewport.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#6E00FF"
                                                    },
                                                    children: "LYKAIONS"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/YearbookViewport.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "yearbook-section-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "yearbook-section-heading",
                                    children: "Young Nobles of BSEMC 2026"
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "yearbook-grid yearbook-grid--nobles",
                                    children: YOUNG_NOBLES.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentCard, {
                                            student: s,
                                            delay: i * 40
                                        }, i, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "yearbook-section-block yearbook-section-block--secondary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "yearbook-section-heading",
                                    children: "OG and UNC of BSEMC 2026"
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "yearbook-grid yearbook-grid--og",
                                    children: OG_AND_UNC.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentCard, {
                                            student: s,
                                            delay: i * 60
                                        }, i, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/YearbookViewport.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "yearbook-viewport-footer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "yearbook-btn yearbook-btn--return yearbook-btn--large",
                                onClick: handleClose,
                                "aria-label": "Close yearbook and return to site",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18 6L6 18M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookViewport.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/YearbookViewport.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    "Close Yearbook"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/YearbookViewport.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/YearbookViewport.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/YearbookViewport.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/YearbookViewport.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/YearbookViewport.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(YearbookViewport, "U1ITUR88yVrf/AqXeWlShCbaR3M=");
_c1 = YearbookViewport;
var _c, _c1;
__turbopack_context__.k.register(_c, "StudentCard");
__turbopack_context__.k.register(_c1, "YearbookViewport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/YearbookSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YearbookSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$YearbookViewport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/YearbookViewport.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
/* ─────────────────────────────────────────────────────────────
   Stinger wipe bars
───────────────────────────────────────────────────────────── */ function StingerBars(param) {
    let { stingerRef1, stingerRef2, stingerRef3 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stingerRef1,
                className: "yearbook-stinger yearbook-stinger--1",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/YearbookSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stingerRef2,
                className: "yearbook-stinger yearbook-stinger--2",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/YearbookSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stingerRef3,
                className: "yearbook-stinger yearbook-stinger--3",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/YearbookSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = StingerBars;
function YearbookSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stinger bars
    const stinger1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stinger2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stinger3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [viewportOpen, setViewportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stingerDone, setStingerDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ── Scroll-triggered entrance animations ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YearbookSection.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "YearbookSection.useEffect.ctx": ()=>{
                    var _textRef_current;
                    var _textRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_textRef_current_children = (_textRef_current = textRef.current) === null || _textRef_current === void 0 ? void 0 : _textRef_current.children) !== null && _textRef_current_children !== void 0 ? _textRef_current_children : [], {
                        y: 60,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            once: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(ctaRef.current, {
                        x: 40,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 65%",
                            once: true
                        }
                    });
                    // CTA button pulse-glow idle animation
                    if (btnRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btnRef.current, {
                            boxShadow: "0 0 30px rgba(110,0,255,0.55), 0 0 60px rgba(110,0,255,0.25)",
                            duration: 1.6,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut"
                        });
                    }
                }
            }["YearbookSection.useEffect.ctx"]);
            return ({
                "YearbookSection.useEffect": ()=>ctx.revert()
            })["YearbookSection.useEffect"];
        }
    }["YearbookSection.useEffect"], []);
    /* ── Stinger animation → open viewport ── */ const openViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "YearbookSection.useCallback[openViewport]": ()=>{
            const bars = [
                stinger1.current,
                stinger2.current,
                stinger3.current
            ];
            if (!bars[0]) return;
            // Reset
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bars, {
                scaleY: 0,
                transformOrigin: "bottom center"
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                onComplete: {
                    "YearbookSection.useCallback[openViewport].tl": ()=>{
                        setStingerDone(true);
                        setViewportOpen(true);
                    }
                }["YearbookSection.useCallback[openViewport].tl"]
            });
            // Bars wipe UP (staggered)
            tl.to(bars, {
                scaleY: 1,
                duration: 0.38,
                stagger: 0.08,
                ease: "power4.in"
            })// Hold for one frame at full wipe, then collapse from top
            .to(bars, {
                scaleY: 0,
                transformOrigin: "top center",
                duration: 0.32,
                stagger: 0.06,
                ease: "power4.out",
                delay: 0.05
            });
        }
    }["YearbookSection.useCallback[openViewport]"], []);
    /* ── Stinger out-wipe → close viewport ── */ const closeViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "YearbookSection.useCallback[closeViewport]": ()=>{
            const bars = [
                stinger1.current,
                stinger2.current,
                stinger3.current
            ];
            if (!bars[0]) {
                setViewportOpen(false);
                setStingerDone(false);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bars, {
                scaleY: 0,
                transformOrigin: "top center"
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                onComplete: {
                    "YearbookSection.useCallback[closeViewport].tl": ()=>{
                        setViewportOpen(false);
                        setStingerDone(false);
                    }
                }["YearbookSection.useCallback[closeViewport].tl"]
            });
            tl.to(bars, {
                scaleY: 1,
                duration: 0.32,
                stagger: 0.06,
                ease: "power4.in"
            }).to(bars, {
                scaleY: 0,
                transformOrigin: "bottom center",
                duration: 0.38,
                stagger: 0.08,
                ease: "power4.out",
                delay: 0.04
            });
        }
    }["YearbookSection.useCallback[closeViewport]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StingerBars, {
                stingerRef1: stinger1,
                stingerRef2: stinger2,
                stingerRef3: stinger3
            }, void 0, false, {
                fileName: "[project]/components/YearbookSection.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            viewportOpen && stingerDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$YearbookViewport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeViewport
            }, void 0, false, {
                fileName: "[project]/components/YearbookSection.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                id: "yearbook",
                "aria-label": "Yearbook Section",
                className: "relative w-full overflow-hidden",
                style: {
                    minHeight: "70vh"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/Memories/IMG_20251121_103356.jpg"),
                        alt: "Team Lykaions Batch 2026",
                        className: "absolute inset-0 w-full h-full object-cover",
                        style: {
                            filter: "brightness(0.40) saturate(0.6)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/YearbookSection.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[1] pointer-events-none",
                        style: {
                            background: "linear-gradient(120deg, rgba(66,0,153,0.60) 0%, rgba(110,0,255,0.20) 50%, transparent 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/YearbookSection.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[2] pointer-events-none",
                        style: {
                            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.20) 1px, transparent 1px)",
                            backgroundSize: "22px 22px",
                            opacity: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/YearbookSection.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[3] pointer-events-none",
                        style: {
                            background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/YearbookSection.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col lg:flex-row items-end justify-between h-full w-full px-6 md:px-12 lg:px-20 py-20 gap-8",
                        style: {
                            minHeight: "70vh"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: textRef,
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-trap text-[10px] font-semibold uppercase tracking-[0.45em] text-white/60 mb-2",
                                        children: "Relentless Pantheras · BSEMC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/YearbookSection.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-formula uppercase leading-[0.88] text-white",
                                        style: {
                                            fontSize: "clamp(3rem, 8vw, 8rem)",
                                            textShadow: "0 0 60px rgba(110,0,255,0.45)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block",
                                                children: "TEAM"
                                            }, void 0, false, {
                                                fileName: "[project]/components/YearbookSection.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[#6E00FF]",
                                                children: "LYKAIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/YearbookSection.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block",
                                                children: "BATCH 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/components/YearbookSection.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/YearbookSection.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/YearbookSection.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: ctaRef,
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: btnRef,
                                    id: "open-yearbook-btn",
                                    onClick: openViewport,
                                    className: "group flex items-center gap-4 px-8 py-4 rounded text-white transition-all duration-300 cursor-pointer",
                                    "aria-label": "Open full yearbook viewer",
                                    style: {
                                        background: "linear-gradient(135deg, rgba(110,0,255,0.85) 0%, rgba(66,0,153,0.9) 100%)",
                                        border: "1px solid rgba(110,0,255,0.5)",
                                        letterSpacing: "0.25em"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "flex-shrink-0 group-hover:scale-110 transition-transform duration-300",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/YearbookSection.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/YearbookSection.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/YearbookSection.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-formula text-sm uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-300",
                                            children: "VIEW YEARBOOK"
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookSection.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12h14M12 5l7 7-7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/YearbookSection.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/YearbookSection.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/YearbookSection.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/YearbookSection.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/YearbookSection.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/YearbookSection.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(YearbookSection, "W7Xs2SZ+vZH3rfcXpj81JV6aubU=");
_c1 = YearbookSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "StingerBars");
__turbopack_context__.k.register(_c1, "YearbookSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MemoriesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const MEMORY_CARDS = [
    {
        id: "graduation-rehearsal",
        label: "Graduation Rehearsal",
        seed: "graduation_ceremony_2026"
    },
    {
        id: "foundation-day",
        label: "Foundation Day",
        seed: "foundation_day_celebration"
    },
    {
        id: "campus-life",
        label: "Campus Life",
        seed: "campus_university_life"
    },
    {
        id: "acquaintance-party",
        label: "Acquaintance Party",
        seed: "party_friends_gathering"
    },
    {
        id: "sports-fest",
        label: "Sports Festival",
        seed: "sports_festival_athletics"
    },
    {
        id: "yearend-party",
        label: "Year-End Celebration",
        seed: "celebration_fireworks_event"
    }
];
const CARD_GAP = 20; // px — must match gap in JSX
function MemoriesSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [canPrev, setCanPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canNext, setCanNext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    /* ── Sync indicator with scroll position ── */ const syncIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemoriesSection.useCallback[syncIndicator]": ()=>{
            const track = trackRef.current;
            if (!track) return;
            const cardEl = track.children[0];
            if (!cardEl) return;
            const cardW = cardEl.getBoundingClientRect().width + CARD_GAP;
            const idx = Math.round(track.scrollLeft / cardW);
            setActiveIndex(idx);
            setCanPrev(track.scrollLeft > 4);
            setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
        }
    }["MemoriesSection.useCallback[syncIndicator]"], []);
    /* ── Scroll to a specific card index ── */ const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MemoriesSection.useCallback[scrollTo]": (index)=>{
            const track = trackRef.current;
            if (!track) return;
            const cardEl = track.children[0];
            if (!cardEl) return;
            const cardW = cardEl.getBoundingClientRect().width + CARD_GAP;
            track.scrollTo({
                left: cardW * index,
                behavior: "smooth"
            });
        }
    }["MemoriesSection.useCallback[scrollTo]"], []);
    const handlePrev = ()=>scrollTo(Math.max(0, activeIndex - 1));
    const handleNext = ()=>scrollTo(Math.min(MEMORY_CARDS.length - 1, activeIndex + 1));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemoriesSection.useEffect": ()=>{
            const track = trackRef.current;
            if (!track) return;
            track.addEventListener("scroll", syncIndicator, {
                passive: true
            });
            syncIndicator();
            return ({
                "MemoriesSection.useEffect": ()=>track.removeEventListener("scroll", syncIndicator)
            })["MemoriesSection.useEffect"];
        }
    }["MemoriesSection.useEffect"], [
        syncIndicator
    ]);
    /* ── GSAP entrance animations ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemoriesSection.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "MemoriesSection.useEffect.ctx": ()=>{
                    var _headingRef_current, _trackRef_current;
                    var _headingRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_headingRef_current_children = (_headingRef_current = headingRef.current) === null || _headingRef_current === void 0 ? void 0 : _headingRef_current.children) !== null && _headingRef_current_children !== void 0 ? _headingRef_current_children : [], {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.12,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            once: true
                        }
                    });
                    var _trackRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_trackRef_current_children = (_trackRef_current = trackRef.current) === null || _trackRef_current === void 0 ? void 0 : _trackRef_current.children) !== null && _trackRef_current_children !== void 0 ? _trackRef_current_children : [], {
                        x: 60,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.09,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: trackRef.current,
                            start: "top 85%",
                            once: true
                        }
                    });
                }
            }["MemoriesSection.useEffect.ctx"]);
            return ({
                "MemoriesSection.useEffect": ()=>ctx.revert()
            })["MemoriesSection.useEffect"];
        }
    }["MemoriesSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "memories",
        "aria-label": "Memories Section",
        className: "w-full bg-black py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 md:px-12 lg:px-20 mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headingRef,
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[9px] font-trap font-semibold uppercase tracking-[0.5em] text-white/40 mb-3",
                                    children: "The Moments"
                                }, void 0, false, {
                                    fileName: "[project]/components/MemoriesSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-formula uppercase leading-none text-white relative inline-block",
                                    style: {
                                        fontSize: "clamp(3rem, 7vw, 6rem)",
                                        letterSpacing: "-0.02em"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "absolute inset-0 text-[#6E00FF] opacity-20 pointer-events-none select-none",
                                            style: {
                                                clipPath: "polygon(0 38%, 100% 40%, 100% 47%, 0 45%)",
                                                transform: "translateX(4px)"
                                            },
                                            children: "MEMORIES"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MemoriesSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        "MEMORIES"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MemoriesSection.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MemoriesSection.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "memories-prev",
                                    onClick: handlePrev,
                                    disabled: !canPrev,
                                    "aria-label": "Previous memory",
                                    className: "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300\n                ".concat(canPrev ? "border-[#6E00FF] bg-[#6E00FF]/10 text-white hover:bg-[#6E00FF] hover:border-[#6E00FF]" : "border-white/10 bg-white/5 text-white/20 cursor-not-allowed"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 19l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MemoriesSection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/MemoriesSection.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "memories-next",
                                    onClick: handleNext,
                                    disabled: !canNext,
                                    "aria-label": "Next memory",
                                    className: "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300\n                ".concat(canNext ? "border-[#6E00FF] bg-[#6E00FF]/10 text-white hover:bg-[#6E00FF] hover:border-[#6E00FF]" : "border-white/10 bg-white/5 text-white/20 cursor-not-allowed"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MemoriesSection.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/MemoriesSection.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MemoriesSection.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MemoriesSection.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MemoriesSection.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: trackRef,
                        className: "flex px-6 md:px-12 lg:px-20 pb-4 overflow-x-auto",
                        style: {
                            gap: "".concat(CARD_GAP, "px"),
                            scrollSnapType: "x mandatory",
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        },
                        "aria-label": "Scrollable memory cards",
                        children: MEMORY_CARDS.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                id: "memory-".concat(card.id),
                                onClick: ()=>scrollTo(i),
                                className: "relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-[6px_6px_0px_#6E00FF] transition-shadow duration-300",
                                style: {
                                    width: "clamp(230px, 28vw, 310px)",
                                    height: "clamp(260px, 32vw, 360px)",
                                    scrollSnapAlign: "start"
                                },
                                tabIndex: 0,
                                "aria-label": "Memory: ".concat(card.label),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://picsum.photos/seed/".concat(card.seed, "/640/720"),
                                        alt: card.label,
                                        className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#6E00FF]/0 group-hover:bg-[#6E00FF]/12 transition-colors duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    activeIndex === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-2xl ring-2 ring-[#6E00FF] pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-5 z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-formula text-white uppercase leading-tight",
                                                style: {
                                                    fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
                                                    letterSpacing: "-0.01em"
                                                },
                                                children: card.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/MemoriesSection.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-trap text-[10px] text-white/40 mt-1 uppercase tracking-widest",
                                                children: "Batch 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MemoriesSection.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2.5,
                                                d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MemoriesSection.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/MemoriesSection.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/MemoriesSection.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, card.id, true, {
                                fileName: "[project]/components/MemoriesSection.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/MemoriesSection.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"
                    }, void 0, false, {
                        fileName: "[project]/components/MemoriesSection.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 bottom-4 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"
                    }, void 0, false, {
                        fileName: "[project]/components/MemoriesSection.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MemoriesSection.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2 mt-8 px-6",
                "aria-label": "Memory slide indicators",
                children: MEMORY_CARDS.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "memory-dot-".concat(card.id),
                        onClick: ()=>scrollTo(i),
                        "aria-label": "Go to ".concat(card.label),
                        "aria-current": activeIndex === i ? "true" : undefined,
                        className: "transition-all duration-300 rounded-full",
                        style: {
                            width: activeIndex === i ? "24px" : "6px",
                            height: "6px",
                            backgroundColor: activeIndex === i ? "#6E00FF" : "rgba(255,255,255,0.2)"
                        }
                    }, card.id, false, {
                        fileName: "[project]/components/MemoriesSection.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/MemoriesSection.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 md:px-12 lg:px-20 mt-5 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-6 h-px bg-white/15"
                    }, void 0, false, {
                        fileName: "[project]/components/MemoriesSection.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-trap text-[9px] uppercase tracking-[0.3em] text-white/25",
                        children: "Swipe or use arrows to explore"
                    }, void 0, false, {
                        fileName: "[project]/components/MemoriesSection.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MemoriesSection.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MemoriesSection.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(MemoriesSection, "HFt4U/4ir4+DzhM7b99cPtv1a28=");
_c = MemoriesSection;
var _c;
__turbopack_context__.k.register(_c, "MemoriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ClassProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClassProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const METADATA = [
    {
        label: "Full Class Name",
        value: "Team Lykaions Batch '26"
    },
    {
        label: "Base",
        value: "BSU Campus"
    },
    {
        label: "Class Adviser",
        value: "Prof. Elena Santos"
    },
    {
        label: "President",
        value: "Alex Rivera"
    },
    {
        label: "Program",
        value: "BSEMC"
    },
    {
        label: "First Entry",
        value: "2022"
    }
];
function ClassProfile() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassProfile.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "ClassProfile.useEffect.ctx": ()=>{
                    var _gridRef_current, _rightTextRef_current;
                    // Heading reveals
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(headerRef.current, {
                        y: 30,
                        opacity: 0,
                        duration: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            once: true
                        }
                    });
                    var _gridRef_current_children;
                    // Metadata grid stagger
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_gridRef_current_children = (_gridRef_current = gridRef.current) === null || _gridRef_current === void 0 ? void 0 : _gridRef_current.children) !== null && _gridRef_current_children !== void 0 ? _gridRef_current_children : [], {
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 85%",
                            once: true
                        }
                    });
                    // Left poster and right text
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(leftCardRef.current, {
                        x: -40,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: leftCardRef.current,
                            start: "top 85%",
                            once: true
                        }
                    });
                    var _rightTextRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_rightTextRef_current_children = (_rightTextRef_current = rightTextRef.current) === null || _rightTextRef_current === void 0 ? void 0 : _rightTextRef_current.children) !== null && _rightTextRef_current_children !== void 0 ? _rightTextRef_current_children : [], {
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: rightTextRef.current,
                            start: "top 85%",
                            once: true
                        }
                    });
                }
            }["ClassProfile.useEffect.ctx"]);
            return ({
                "ClassProfile.useEffect": ()=>ctx.revert()
            })["ClassProfile.useEffect"];
        }
    }["ClassProfile.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "class-profile",
        "aria-label": "Class Profile Section",
        className: "relative w-full bg-[#050008] py-28 overflow-hidden text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headerRef,
                    className: "mb-10 border-b border-white/10 pb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-formula uppercase text-white leading-none",
                        style: {
                            fontSize: "clamp(2rem, 5vw, 4rem)"
                        },
                        children: "CLASS PROFILE"
                    }, void 0, false, {
                        fileName: "[project]/components/ClassProfile.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ClassProfile.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: gridRef,
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 mb-16",
                    children: METADATA.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-trap text-[10px] text-white/50 uppercase tracking-widest",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-formula text-lg lg:text-xl uppercase tracking-wide",
                                    children: item.value
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/ClassProfile.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ClassProfile.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: leftCardRef,
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full mt-20 pt-16 border-t border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-arame text-[#6E00FF] leading-none",
                                    style: {
                                        fontSize: "clamp(3rem, 6vw, 5rem)"
                                    },
                                    children: [
                                        "450",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ClassProfile.tsx",
                                            lineNumber: 82,
                                            columnNumber: 120
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1",
                                    children: "Active Students"
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ClassProfile.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-arame text-[#6E00FF] leading-none",
                                    style: {
                                        fontSize: "clamp(3rem, 6vw, 5rem)"
                                    },
                                    children: "115"
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1",
                                    children: "Capstone Projects"
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ClassProfile.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-arame text-[#6E00FF] leading-none",
                                    style: {
                                        fontSize: "clamp(3rem, 6vw, 5rem)"
                                    },
                                    children: "32"
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1",
                                    children: "Excellence Awards"
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ClassProfile.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-arame text-[#6E00FF] leading-none",
                                    style: {
                                        fontSize: "clamp(3rem, 6vw, 5rem)"
                                    },
                                    children: [
                                        "1.2",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "M"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ClassProfile.tsx",
                                            lineNumber: 100,
                                            columnNumber: 120
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1",
                                    children: "Lines of Code"
                                }, void 0, false, {
                                    fileName: "[project]/components/ClassProfile.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ClassProfile.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ClassProfile.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ClassProfile.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ClassProfile.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ClassProfile, "NVnKT44tcq0hugjM+GC/pSBrmzk=");
_c = ClassProfile;
var _c;
__turbopack_context__.k.register(_c, "ClassProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ClassStory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClassStory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function useCountUp(target) {
    let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1.8, start = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    _s();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!start) return;
            const obj = {
                n: 0
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(obj, {
                n: target,
                duration,
                ease: "power2.out",
                onUpdate: {
                    "useCountUp.useEffect": ()=>setVal(Math.round(obj.n))
                }["useCountUp.useEffect"]
            });
        }
    }["useCountUp.useEffect"], [
        start,
        target,
        duration
    ]);
    return val;
}
_s(useCountUp, "J9W7PNt/cWQtiNkcKYTpkMkMUx4=");
const STATS = [
    {
        value: 2026,
        suffix: "",
        label: "Batch Year"
    },
    {
        value: 450,
        suffix: "+",
        label: "Graduates"
    },
    {
        value: 12,
        suffix: "",
        label: "Departments"
    }
];
function StatItem(param) {
    let { stat, visible } = param;
    _s1();
    const count = useCountUp(stat.value, 2, visible);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-arame text-[#6E00FF] leading-none",
                style: {
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    letterSpacing: "-0.04em"
                },
                children: [
                    count,
                    stat.suffix
                ]
            }, void 0, true, {
                fileName: "[project]/components/ClassStory.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-trap text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/components/ClassStory.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ClassStory.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s1(StatItem, "Aew1CSxoe3aC1Zreul8rQJ1thuU=", false, function() {
    return [
        useCountUp
    ];
});
_c = StatItem;
function ClassStory() {
    _s2();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [statsVisible, setStatsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassStory.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "ClassStory.useEffect.ctx": ()=>{
                    var _headingRef_current, _bodyRef_current;
                    var _headingRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_headingRef_current_children = (_headingRef_current = headingRef.current) === null || _headingRef_current === void 0 ? void 0 : _headingRef_current.children) !== null && _headingRef_current_children !== void 0 ? _headingRef_current_children : [], {
                        y: 70,
                        opacity: 0,
                        duration: 1.3,
                        stagger: 0.1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            once: true
                        }
                    });
                    var _bodyRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_bodyRef_current_children = (_bodyRef_current = bodyRef.current) === null || _bodyRef_current === void 0 ? void 0 : _bodyRef_current.children) !== null && _bodyRef_current_children !== void 0 ? _bodyRef_current_children : [], {
                        y: 30,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: bodyRef.current,
                            start: "top 80%",
                            once: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: statsRef.current,
                        start: "top 80%",
                        once: true,
                        onEnter: {
                            "ClassStory.useEffect.ctx": ()=>setStatsVisible(true)
                        }["ClassStory.useEffect.ctx"]
                    });
                }
            }["ClassStory.useEffect.ctx"]);
            return ({
                "ClassStory.useEffect": ()=>ctx.revert()
            })["ClassStory.useEffect"];
        }
    }["ClassStory.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "about",
        "aria-label": "Class Story Section",
        className: "relative w-full bg-black py-28 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at center, rgba(110,0,255,0.10) 0%, transparent 70%)",
                    filter: "blur(60px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/ClassStory.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full px-6 md:px-12 lg:px-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-trap text-[9px] font-semibold uppercase tracking-[0.5em] text-white/40 mb-10 text-center",
                        children: "Our Story"
                    }, void 0, false, {
                        fileName: "[project]/components/ClassStory.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        ref: headingRef,
                        className: "font-formula uppercase text-center leading-[0.9] mb-16 overflow-hidden",
                        style: {
                            fontSize: "clamp(2.2rem, 6vw, 6.5rem)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-white",
                                children: "WE BEGAN AS"
                            }, void 0, false, {
                                fileName: "[project]/components/ClassStory.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-white",
                                children: "STRANGERS,"
                            }, void 0, false, {
                                fileName: "[project]/components/ClassStory.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "WE LEAVE AS A "
                                    }, void 0, false, {
                                        fileName: "[project]/components/ClassStory.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#6E00FF]",
                                        children: "LEGACY."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ClassStory.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ClassStory.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ClassStory.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bodyRef,
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-trap text-sm text-white/50 leading-relaxed",
                                children: "Four years ago, we walked through these halls with nothing but dreams and a lot of uncertainty. Today, we stand as a testament to resilience, friendship, and the pursuit of excellence."
                            }, void 0, false, {
                                fileName: "[project]/components/ClassStory.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-trap text-sm text-white/50 leading-relaxed",
                                children: "This digital yearbook is more than just a record; it's a living memory of the nights we spent studying, the laughter we shared in the quad, and the bonds that will never be broken."
                            }, void 0, false, {
                                fileName: "[project]/components/ClassStory.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ClassStory.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: statsRef,
                        className: "grid grid-cols-3 gap-8 max-w-2xl mx-auto",
                        children: STATS.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                stat: stat,
                                visible: statsVisible
                            }, stat.label, false, {
                                fileName: "[project]/components/ClassStory.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ClassStory.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ClassStory.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ClassStory.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s2(ClassStory, "rNTW7Ht0DN7VsCASpVZqVOE91Yk=");
_c1 = ClassStory;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatItem");
__turbopack_context__.k.register(_c1, "ClassStory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PillarsOfDreams.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PillarsOfDreams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const FACULTY = [
    {
        id: "elena-santos",
        name: "Prof. Elena Santos",
        role: "Pillar Head",
        dept: "Office of the Dean",
        seed: "woman_professional_portrait_1"
    },
    {
        id: "ricardo-flores",
        name: "Dr. Ricardo Flores",
        role: "Professor",
        dept: "Dept. of Sciences",
        seed: "man_professional_portrait_2"
    },
    {
        id: "luz-miranda",
        name: "Prof. Luz Miranda",
        role: "Department Head",
        dept: "Dept. of Arts",
        seed: "woman_professional_portrait_3"
    },
    {
        id: "felix-ramos",
        name: "Dr. Felix Ramos",
        role: "Professor",
        dept: "Dept. of Engineering",
        seed: "man_professional_portrait_4"
    },
    {
        id: "cora-villanueva",
        name: "Mrs. Cora Villanueva",
        role: "Instructor",
        dept: "Academic Affairs",
        seed: "woman_professional_portrait_5"
    },
    {
        id: "danica-alcala",
        name: "Mr. Danica Alcala",
        role: "Academic Counselor",
        dept: "Student Affairs",
        seed: "man_professional_portrait_6"
    }
];
function PillarsOfDreams() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PillarsOfDreams.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "PillarsOfDreams.useEffect.ctx": ()=>{
                    var _headingRef_current, _gridRef_current;
                    var _headingRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from((_headingRef_current_children = (_headingRef_current = headingRef.current) === null || _headingRef_current === void 0 ? void 0 : _headingRef_current.children) !== null && _headingRef_current_children !== void 0 ? _headingRef_current_children : [], {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.12,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 78%",
                            once: true
                        }
                    });
                    var _gridRef_current_children;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo((_gridRef_current_children = (_gridRef_current = gridRef.current) === null || _gridRef_current === void 0 ? void 0 : _gridRef_current.children) !== null && _gridRef_current_children !== void 0 ? _gridRef_current_children : [], {
                        y: 40,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 82%",
                            once: true
                        }
                    });
                }
            }["PillarsOfDreams.useEffect.ctx"]);
            return ({
                "PillarsOfDreams.useEffect": ()=>ctx.revert()
            })["PillarsOfDreams.useEffect"];
        }
    }["PillarsOfDreams.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "pillars",
        "aria-label": "Pillars of Dreams — Faculty and Staff",
        className: "relative w-full bg-black py-28 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E00FF]/30 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/PillarsOfDreams.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headingRef,
                className: "text-center mb-16 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-trap text-[9px] font-semibold uppercase tracking-[0.5em] text-white/40 mb-5",
                        children: "Faculty & Staff"
                    }, void 0, false, {
                        fileName: "[project]/components/PillarsOfDreams.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-formula uppercase leading-none text-white",
                        style: {
                            fontSize: "clamp(2.5rem, 7vw, 7rem)"
                        },
                        children: "PILLARS OF DREAMS"
                    }, void 0, false, {
                        fileName: "[project]/components/PillarsOfDreams.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-1 bg-[#6E00FF] mx-auto mt-6 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/PillarsOfDreams.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PillarsOfDreams.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gridRef,
                className: "grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto px-6 md:px-12",
                children: FACULTY.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        id: "faculty-".concat(person.id),
                        className: "glass-panel p-5 flex flex-row items-center gap-5 group cursor-default hover:border-[#6E00FF]/30 transition-all duration-300",
                        "aria-label": "".concat(person.name, ", ").concat(person.role),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-[#6E00FF]/50 transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://picsum.photos/seed/".concat(person.seed, "/120/120"),
                                            alt: person.name,
                                            className: "w-full h-full object-cover",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PillarsOfDreams.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PillarsOfDreams.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#6E00FF] ring-2 ring-black"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PillarsOfDreams.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PillarsOfDreams.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-formula text-sm uppercase text-white leading-tight truncate",
                                        children: person.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PillarsOfDreams.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-trap inline-block text-[9px] font-semibold uppercase tracking-widest text-[#6E00FF] bg-[#6E00FF]/10 px-2 py-0.5 rounded-sm w-fit",
                                        children: person.role
                                    }, void 0, false, {
                                        fileName: "[project]/components/PillarsOfDreams.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-white/5 group-hover:bg-[#6E00FF]/20 transition-colors my-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PillarsOfDreams.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-trap text-[10px] text-white/40 uppercase tracking-widest truncate",
                                        children: person.dept
                                    }, void 0, false, {
                                        fileName: "[project]/components/PillarsOfDreams.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PillarsOfDreams.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, person.id, true, {
                        fileName: "[project]/components/PillarsOfDreams.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PillarsOfDreams.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PillarsOfDreams.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(PillarsOfDreams, "bc8rzMq8MHD5iawWsRh70vy4QE4=");
_c = PillarsOfDreams;
var _c;
__turbopack_context__.k.register(_c, "PillarsOfDreams");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/OurPartners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurPartners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// ── Official Brand Assets ─────────────────────────────────────────────
// Sourced locally from /public/Icons
const PARTNERS = [
    {
        id: "adobe",
        name: "Adobe",
        category: "Creative Suite",
        logo: "/Icons/adobe.svg"
    },
    {
        id: "amd",
        name: "AMD",
        category: "Hardware",
        logo: "/Icons/amd.svg"
    },
    {
        id: "android",
        name: "Android",
        category: "Mobile OS",
        logo: "/Icons/android.svg"
    },
    {
        id: "apple",
        name: "Apple",
        category: "Ecosystem",
        logo: "/Icons/apple.svg"
    },
    {
        id: "behance",
        name: "Behance",
        category: "Design Portfolio",
        logo: "/Icons/behance.svg"
    },
    {
        id: "css3-alt",
        name: "CSS3",
        category: "Web Styling",
        logo: "/Icons/css3-alt.svg"
    },
    {
        id: "discord",
        name: "Discord",
        category: "Communication",
        logo: "/Icons/discord.svg"
    },
    {
        id: "facebook",
        name: "Facebook",
        category: "Social Network",
        logo: "/Icons/facebook.svg"
    },
    {
        id: "facebook-messenger",
        name: "Messenger",
        category: "Messaging",
        logo: "/Icons/facebook-messenger.svg"
    },
    {
        id: "figma",
        name: "Figma",
        category: "UI/UX Design",
        logo: "/Icons/figma.svg"
    },
    {
        id: "github",
        name: "GitHub",
        category: "Version Control",
        logo: "/Icons/github.svg"
    },
    {
        id: "google",
        name: "Google",
        category: "Search & Cloud",
        logo: "/Icons/google.svg"
    },
    {
        id: "php",
        name: "PHP",
        category: "Web Backend",
        logo: "/Icons/php.svg"
    },
    {
        id: "pinterest",
        name: "Pinterest",
        category: "Inspiration",
        logo: "/Icons/pinterest.svg"
    },
    {
        id: "python",
        name: "Python",
        category: "Programming",
        logo: "/Icons/python.svg"
    },
    {
        id: "spotify",
        name: "Spotify",
        category: "Audio & Music",
        logo: "/Icons/spotify.svg"
    },
    {
        id: "windows",
        name: "Windows",
        category: "Operating System",
        logo: "/Icons/windows.svg"
    },
    {
        id: "wordpress",
        name: "WordPress",
        category: "CMS",
        logo: "/Icons/wordpress.svg"
    },
    {
        id: "youtube",
        name: "YouTube",
        category: "Video Media",
        logo: "/Icons/youtube.svg"
    }
];
function OurPartners() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurPartners.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "OurPartners.useEffect.ctx": ()=>{
                    var _headingRef_current, _gridRef_current;
                    var _headingRef_current_children;
                    // Heading entrance animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo((_headingRef_current_children = (_headingRef_current = headingRef.current) === null || _headingRef_current === void 0 ? void 0 : _headingRef_current.children) !== null && _headingRef_current_children !== void 0 ? _headingRef_current_children : [], {
                        y: 40,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.12,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            once: true
                        }
                    });
                    var _gridRef_current_children;
                    // Icons popping in simultaneously via stagger
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo((_gridRef_current_children = (_gridRef_current = gridRef.current) === null || _gridRef_current === void 0 ? void 0 : _gridRef_current.children) !== null && _gridRef_current_children !== void 0 ? _gridRef_current_children : [], {
                        y: 30,
                        opacity: 0,
                        scale: 0.8
                    }, {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 85%",
                            once: true
                        }
                    });
                }
            }["OurPartners.useEffect.ctx"], sectionRef);
            return ({
                "OurPartners.useEffect": ()=>ctx.revert()
            })["OurPartners.useEffect"];
        }
    }["OurPartners.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "partners",
        "aria-label": "Our Partners — Software & Tools",
        className: "relative w-full bg-black py-28 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E00FF]/30 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/OurPartners.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(110,0,255,0.08) 0%, transparent 70%)",
                    filter: "blur(60px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/OurPartners.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headingRef,
                className: "text-center mb-16 px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-trap text-[9px] font-semibold uppercase tracking-[0.5em] text-white/40 mb-5",
                        children: "Tools & Platforms"
                    }, void 0, false, {
                        fileName: "[project]/components/OurPartners.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-formula uppercase leading-none text-white",
                        style: {
                            fontSize: "clamp(2.5rem, 7vw, 7rem)"
                        },
                        children: "OUR PARTNERS"
                    }, void 0, false, {
                        fileName: "[project]/components/OurPartners.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-1 bg-[#6E00FF] mx-auto mt-6 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/OurPartners.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-trap text-[10px] uppercase tracking-[0.3em] text-white/30 mt-4 max-w-md mx-auto leading-loose",
                        children: "The software and platforms that power our craft as BSEMC students."
                    }, void 0, false, {
                        fileName: "[project]/components/OurPartners.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/OurPartners.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gridRef,
                className: "relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-12 md:gap-x-14 md:gap-y-14",
                children: PARTNERS.map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group cursor-default relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500 hover:scale-110",
                        "aria-label": partner.name,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])(partner.logo),
                            alt: partner.name,
                            className: "max-w-full max-h-full object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(110,0,255,0.8)] transition-all duration-500",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/components/OurPartners.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    }, partner.id, false, {
                        fileName: "[project]/components/OurPartners.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/OurPartners.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E00FF]/30 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/OurPartners.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/OurPartners.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(OurPartners, "bc8rzMq8MHD5iawWsRh70vy4QE4=");
_c = OurPartners;
var _c;
__turbopack_context__.k.register(_c, "OurPartners");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SiteFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const FOOTER_LINKS = [
    "HOME",
    "YEARBOOK",
    "MEMORIES",
    "ABOUT",
    "PILLARS"
];
const SECTION_MAP = {
    HOME: "#home",
    YEARBOOK: "#yearbook",
    MEMORIES: "#memories",
    ABOUT: "#about",
    PILLARS: "#pillars"
};
function SiteFooter() {
    const handleNav = (e, href)=>{
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        "aria-label": "Site footer",
        className: "relative w-full bg-black border-t border-[#6E00FF]/15 py-16 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-40 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at bottom, rgba(110,0,255,0.18) 0%, transparent 70%)",
                    filter: "blur(40px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/SiteFooter.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center gap-8 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-formula text-[#6E00FF] uppercase tracking-widest text-xl",
                                children: "LEGACY"
                            }, void 0, false, {
                                fileName: "[project]/components/SiteFooter.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-formula text-white uppercase tracking-widest text-xl",
                                children: " '26"
                            }, void 0, false, {
                                fileName: "[project]/components/SiteFooter.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SiteFooter.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Footer navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-wrap justify-center gap-6 list-none m-0 p-0",
                            children: FOOTER_LINKS.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: SECTION_MAP[label],
                                        onClick: (e)=>handleNav(e, SECTION_MAP[label]),
                                        className: "font-trap text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors duration-200",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/components/SiteFooter.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                }, label, false, {
                                    fileName: "[project]/components/SiteFooter.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/SiteFooter.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SiteFooter.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm h-px bg-gradient-to-r from-transparent via-[#6E00FF]/25 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/SiteFooter.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-trap text-[8px] text-white/25 uppercase tracking-[0.4em] text-center",
                        children: "© 2026 Digital Yearbook · Team Lykaions · BSEMC Batch 2026"
                    }, void 0, false, {
                        fileName: "[project]/components/SiteFooter.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SiteFooter.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SiteFooter.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = SiteFooter;
var _c;
__turbopack_context__.k.register(_c, "SiteFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AnimatedDivider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function AnimatedDivider() {
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedDivider.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "AnimatedDivider.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: wrapRef.current,
                            start: "top 88%",
                            once: true
                        },
                        defaults: {
                            ease: "power3.out"
                        }
                    });
                    // Lines draw outward from center
                    tl.fromTo(lineLeftRef.current, {
                        scaleX: 0,
                        transformOrigin: "right center"
                    }, {
                        scaleX: 1,
                        duration: 1.1
                    }).fromTo(lineRightRef.current, {
                        scaleX: 0,
                        transformOrigin: "left center"
                    }, {
                        scaleX: 1,
                        duration: 1.1
                    }, "<" // same time as left line
                    )// Center icon pops in
                    .fromTo(centerRef.current, {
                        scale: 0,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5
                    }, "-=0.5");
                    // Pronounced continuous glowing animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(centerRef.current, {
                        boxShadow: "0 0 24px 6px rgba(110,0,255,0.7), 0 0 10px 2px rgba(110,0,255,0.5)",
                        repeat: -1,
                        yoyo: true,
                        duration: 1.5,
                        ease: "sine.inOut",
                        delay: 1
                    });
                }
            }["AnimatedDivider.useEffect.ctx"]);
            return ({
                "AnimatedDivider.useEffect": ()=>ctx.revert()
            })["AnimatedDivider.useEffect"];
        }
    }["AnimatedDivider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "relative w-full flex items-center gap-4 py-10 px-6 md:px-12 lg:px-24",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: lineLeftRef,
                className: "flex-1 h-px",
                style: {
                    background: "linear-gradient(to left, rgba(110,0,255,0.8), rgba(110,0,255,0.05))"
                }
            }, void 0, false, {
                fileName: "[project]/components/AnimatedDivider.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: centerRef,
                    className: "w-2 h-2 rounded-full bg-[#9B4DFF]",
                    style: {
                        boxShadow: "0 0 8px 2px rgba(110,0,255,0.4)"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/AnimatedDivider.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AnimatedDivider.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: lineRightRef,
                className: "flex-1 h-px",
                style: {
                    background: "linear-gradient(to right, rgba(110,0,255,0.8), rgba(110,0,255,0.05))"
                }
            }, void 0, false, {
                fileName: "[project]/components/AnimatedDivider.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AnimatedDivider.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(AnimatedDivider, "AmZlBBr6hwzSI/yh0/XSkNbKcMk=");
_c = AnimatedDivider;
var _c;
__turbopack_context__.k.register(_c, "AnimatedDivider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CountdownLock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountdownLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TARGET_DATE = new Date("2026-06-13T00:00:00").getTime();
function CountdownLock(param) {
    let { children } = param;
    _s();
    const [isUnlocked, setIsUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [devPassword, setDevPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isPasswordError, setIsPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleDeveloperSubmit = async (e)=>{
        e.preventDefault();
        if (!devPassword) return;
        try {
            const encoder = new TextEncoder();
            const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(devPassword));
            const hashHex = Array.from(new Uint8Array(hashBuffer)).map((b)=>b.toString(16).padStart(2, '0')).join('');
            const VALID_HASH = "8d6cf8a58990d522cc899f54e9f0adeee84f4ea9c7fabb2aad2953e4ad11a777";
            if (hashHex === VALID_HASH) {
                localStorage.setItem("secure_unlock_hash", hashHex);
                setIsUnlocked(true);
            } else {
                setIsPasswordError(true);
                setTimeout(()=>setIsPasswordError(false), 800);
            }
        } catch (err) {
            console.error(err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountdownLock.useEffect": ()=>{
            setIsMounted(true);
            let timer;
            const calculateTime = {
                "CountdownLock.useEffect.calculateTime": ()=>{
                    const now = new Date().getTime();
                    const distance = TARGET_DATE - now;
                    if (distance < 0) {
                        setIsUnlocked(true);
                        if (timer) clearInterval(timer);
                    } else {
                        setTimeLeft({
                            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                            hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                            minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
                            seconds: Math.floor(distance % (1000 * 60) / 1000)
                        });
                    }
                }
            }["CountdownLock.useEffect.calculateTime"];
            const runAuthAndTimer = {
                "CountdownLock.useEffect.runAuthAndTimer": async ()=>{
                    let isAuthorized = false;
                    const VALID_HASH = "8d6cf8a58990d522cc899f54e9f0adeee84f4ea9c7fabb2aad2953e4ad11a777"; // Hash of 'pantheras_dev'
                    try {
                        const searchParams = new URLSearchParams(window.location.search);
                        const secretKey = searchParams.get("key");
                        if (secretKey === "lock") {
                            localStorage.removeItem("secure_unlock_hash");
                            isAuthorized = false;
                            window.history.replaceState({}, document.title, window.location.pathname);
                        } else if (secretKey) {
                            const encoder = new TextEncoder();
                            const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(secretKey));
                            const hashHex = Array.from(new Uint8Array(hashBuffer)).map({
                                "CountdownLock.useEffect.runAuthAndTimer.hashHex": (b)=>b.toString(16).padStart(2, '0')
                            }["CountdownLock.useEffect.runAuthAndTimer.hashHex"]).join('');
                            if (hashHex === VALID_HASH) {
                                localStorage.setItem("secure_unlock_hash", hashHex);
                                isAuthorized = true;
                                window.history.replaceState({}, document.title, window.location.pathname);
                            }
                        } else if (localStorage.getItem("secure_unlock_hash") === VALID_HASH) {
                            isAuthorized = true;
                        }
                    } catch (e) {
                    // Fallback silently on old browsers
                    }
                    if (isAuthorized) {
                        setIsUnlocked(true);
                    } else {
                        calculateTime();
                        timer = setInterval(calculateTime, 1000);
                    }
                }
            }["CountdownLock.useEffect.runAuthAndTimer"];
            runAuthAndTimer();
            return ({
                "CountdownLock.useEffect": ()=>{
                    if (timer) clearInterval(timer);
                }
            })["CountdownLock.useEffect"];
        }
    }["CountdownLock.useEffect"], []);
    // Entrance Animation for Countdown UI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountdownLock.useEffect": ()=>{
            if (isMounted && !isUnlocked && containerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".countdown-element", {
                    y: 30,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power4.out"
                });
            }
        }
    }["CountdownLock.useEffect"], [
        isMounted,
        isUnlocked
    ]);
    // To prevent hydration mismatch on SSG, render nothing/loading screen initially
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black"
        }, void 0, false, {
            fileName: "[project]/components/CountdownLock.tsx",
            lineNumber: 122,
            columnNumber: 12
        }, this);
    }
    // If graduation has passed or developer unlocked, show actual website
    if (isUnlocked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const formatNumber = (num)=>num.toString().padStart(2, '0');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F0014] text-white overflow-hidden p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(110,0,255,0.12) 0%, transparent 60%)",
                    filter: "blur(60px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/CountdownLock.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "countdown-element text-center mb-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-trap text-[10px] md:text-xs font-semibold uppercase tracking-[0.5em] text-[#9B4DFF] mb-4",
                        children: "Team Lykaions · BSEMC"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-formula uppercase leading-none text-white drop-shadow-[0_0_40px_rgba(110,0,255,0.4)]",
                        style: {
                            fontSize: "clamp(2rem, 6vw, 4.5rem)",
                            letterSpacing: "-0.02em"
                        },
                        children: "UNTIL LAUNCH"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CountdownLock.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "countdown-element relative z-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeUnit, {
                        value: formatNumber(timeLeft.days),
                        label: "Days"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeSeparator, {}, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeUnit, {
                        value: formatNumber(timeLeft.hours),
                        label: "Hours"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeSeparator, {}, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeUnit, {
                        value: formatNumber(timeLeft.minutes),
                        label: "Minutes"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeSeparator, {
                        className: "hidden sm:block"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeUnit, {
                        value: formatNumber(timeLeft.seconds),
                        label: "Seconds",
                        className: "w-full sm:w-auto mt-4 sm:mt-0"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CountdownLock.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "countdown-element absolute bottom-8 left-0 right-0 text-center z-10 flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-trap text-[10px] uppercase tracking-[0.4em] text-white/30 hidden md:block",
                        children: "Graduation Day — June 13, 2026"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleDeveloperSubmit,
                        className: "relative flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-3 text-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3 h-3",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CountdownLock.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CountdownLock.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CountdownLock.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: devPassword,
                                onChange: (e)=>setDevPassword(e.target.value),
                                placeholder: "DEV OVERRIDE",
                                className: "bg-white/[0.02] border backdrop-blur-md rounded-full py-2 pl-8 pr-4 text-[9px] font-trap tracking-[0.2em] text-white/80 placeholder:text-white/20 focus:outline-none transition-all w-48 focus:w-56 \n              ".concat(isPasswordError ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 focus:border-[#6E00FF]/50 focus:bg-[#6E00FF]/10')
                            }, void 0, false, {
                                fileName: "[project]/components/CountdownLock.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CountdownLock.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CountdownLock.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(CountdownLock, "ZlbwYxOnEwVU45JPMbRw0AsZucw=");
_c = CountdownLock;
// ── UI Components ── 
function TimeUnit(param) {
    let { value, label, className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-panel w-20 h-24 md:w-28 md:h-32 flex items-center justify-center relative overflow-hidden group border border-[#6E00FF]/20 shadow-[0_0_30px_rgba(110,0,255,0.05)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-[#6E00FF]/10 to-transparent opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-arame text-4xl md:text-6xl tracking-tighter text-white relative z-10",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/CountdownLock.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CountdownLock.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-trap text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 mt-4 block",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/CountdownLock.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CountdownLock.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_c1 = TimeUnit;
function TimeSeparator(param) {
    let { className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-arame text-3xl md:text-4xl text-[#6E00FF] ".concat(className, " pb-8 opacity-60"),
        children: ":"
    }, void 0, false, {
        fileName: "[project]/components/CountdownLock.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c2 = TimeSeparator;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CountdownLock");
__turbopack_context__.k.register(_c1, "TimeUnit");
__turbopack_context__.k.register(_c2, "TimeSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_321fe83a._.js.map