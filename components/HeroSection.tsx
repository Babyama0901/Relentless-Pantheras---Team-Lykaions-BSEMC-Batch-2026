"use client";

import { getAssetPath } from './utils';
import { useRef, useMemo, useEffect, useState } from 'react';
import { gsap } from 'gsap';
// ─── Hero Section ──────────────────────────────────────────────────────────
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Staggered entrance
      tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 1 }, 0.3)
        .from(h1Ref.current?.children ?? [], { y: 80, opacity: 0, duration: 1.2, stagger: 0.12 }, 0.5)
        .from(subtextRef.current, { y: 20, opacity: 0, duration: 1 }, 0.9)
        .from(rightColRef.current?.children ?? [], {
          y: 40, opacity: 0, duration: 1, stagger: 0.15,
        }, 0.7)
        .from(scrollIndicatorRef.current, { opacity: 0, y: 10, duration: 1 }, 1.4);

      // Scroll indicator loop
      const scrollLine = scrollIndicatorRef.current?.querySelector('.scroll-line');
      if (scrollLine) {
        gsap.to(scrollLine, {
          scaleY: 0.5,
          transformOrigin: "top center",
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* ─── Slideshow Images State ─── */
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => [
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
    "/Memories/IMG_20260120_162300.jpg",
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-label="Hero Section"
      className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col"
    >
      {/* ── Slideshow Background ── */}
      <div className="absolute inset-0 z-0 bg-black">
        {slides.map((url, index) => (
          <div
            key={url}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              currentSlide === index ? "opacity-60 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath(url)}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out origin-center ${
                currentSlide === index ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* ── Radial vignette overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, black 100%)',
        }}
      />

      {/* ── Violet ambient glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle, rgba(110,0,255,0.14) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center w-full px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16">

          {/* Left Column: Monumental Typography */}
          <div ref={leftColRef} className="flex-1 w-full max-w-3xl flex flex-col justify-center lg:items-start text-left">
            <p
              ref={eyebrowRef}
              className="font-trap mb-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-[#9B4DFF]"
            >
              Class of 2026 — Relentless Pantheras BSEMC
            </p>

            <h1
              ref={h1Ref}
              className="font-formula uppercase overflow-hidden leading-[0.88] w-full text-left"
              style={{ fontSize: 'clamp(3rem, 7vw, 10rem)', letterSpacing: '-0.04em' }}
            >
              <span className="block text-white leading-[0.88]">DIGITAL</span>
              <span className="block text-[#6E00FF] leading-[0.88]">YEARBOOK</span>
              <span className="block text-white/20 leading-[0.88]">BATCH '26</span>
            </h1>

            <p
              ref={subtextRef}
              className="font-trap mt-8 text-[10px] uppercase tracking-[0.2em] text-white/40 max-w-sm leading-loose"
            >
              A testament to resilience, friendship, and the pursuit of excellence. Documenting the moments that defined our journey.
            </p>
          </div>

          {/* Right Column: Bento Grid */}
          <div ref={rightColRef} className="w-full lg:w-[40%] min-w-[300px] grid grid-cols-2 gap-3">

            {/* Card A: Live Memory — spans full width */}
            <div
              className="col-span-2 glass-panel group cursor-pointer overflow-hidden relative min-h-[200px] flex items-end justify-start p-6"
              role="button"
              aria-label="View AI-tagged highlights"
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/Memories/20220930_140639.jpg")}
                alt="Campus highlights"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              {/* Play button */}
              <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-[hsl(270,70%,50%)] group-hover:border-transparent transition-all duration-300">
                <svg className="w-3 h-3 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
              </div>
              <div className="relative z-20">
                <h3 className="font-formula text-sm uppercase tracking-widest text-[#9B4DFF] mb-1">Live Memories</h3>
                <p className="font-trap text-[10px] text-white/50">AI-tagged highlights · Hover to preview</p>
              </div>
            </div>

            {/* Card B: Real-time Alumni Count */}
            <div className="glass-panel p-5 flex flex-col justify-between relative overflow-hidden group min-h-[140px]">
              <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-[hsl(270,70%,50%)]/15 blur-2xl group-hover:bg-[hsl(270,70%,50%)]/30 transition-all duration-700 pointer-events-none" />
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-trap text-[9px] uppercase tracking-widest text-emerald-400/80">Live Network</span>
              </div>
              <div>
                <p className="font-trap text-[10px] uppercase tracking-widest text-white/30 mb-1">Verified Alumni</p>
                <span className="font-arame text-5xl text-white tracking-tighter">1,204</span>
              </div>
            </div>

            {/* Card C: CTA */}
            <div
              className="glass-panel p-5 flex flex-col justify-between cursor-pointer group min-h-[140px] hover:border-[hsl(270,70%,50%)]/40 transition-all duration-300"
              role="button"
              tabIndex={0}
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[hsl(270,70%,50%)] group-hover:border-transparent transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div>
                <span className="font-formula block text-xs uppercase tracking-widest text-[#9B4DFF] group-hover:text-white transition-colors">
                  Enter Network
                </span>
                <span className="font-trap block text-[9px] text-white/30 mt-1 uppercase tracking-widest">SSO · Alumni Link</span>
              </div>
            </div>

            {/* Card D: Department Tag */}
            <div className="col-span-2 glass-panel p-4 flex items-center justify-between group cursor-pointer hover:border-[hsl(270,70%,50%)]/30 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[hsl(270,70%,50%)]/20 flex items-center justify-center group-hover:bg-[hsl(270,70%,50%)]/40 transition-colors">
                  <svg className="w-3 h-3 text-[hsl(270,70%,65%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-trap text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">AI Smart Discovery — Personalized by College &amp; Dept.</span>
              </div>
              <span className="font-trap text-[9px] text-[#9B4DFF] uppercase tracking-widest">Beta</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="font-trap text-[9px] uppercase tracking-[0.4em] text-white/30">Scroll to Explore</span>
        <div className="scroll-line w-px h-10 bg-gradient-to-b from-[#6E00FF] to-transparent" />
      </div>
    </section>
  );
}
