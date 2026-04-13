"use client";

import { getAssetPath } from './utils';
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StingerTransition, { StingerRef } from "./StingerTransition";
import YearbookViewport from "./YearbookViewport";

gsap.registerPlugin(ScrollTrigger);

export default function YearbookSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const stingerRef = useRef<StingerRef>(null);
  const [isViewportOpen, setIsViewportOpen] = useState(false);

  const handleOpenViewport = (e: React.MouseEvent) => {
    e.preventDefault();
    if (stingerRef.current) {
      stingerRef.current.playTransition(() => {
        setIsViewportOpen(true);
      });
    } else {
      setIsViewportOpen(true);
    }
  };

  const handleCloseViewport = () => {
    if (stingerRef.current) {
      stingerRef.current.playTransition(() => {
        setIsViewportOpen(false);
      });
    } else {
      setIsViewportOpen(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.children ?? [], {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(ctaRef.current, {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="yearbook"
      aria-label="Yearbook Section"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "70vh" }}
    >
      {/* ── Background photo ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getAssetPath("/Memories/IMG_20251121_103356.jpg")}
        alt="Team Lykaions Batch 2026"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.40) saturate(0.6)" }}
      />

      {/* ── Violet tint overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(120deg, rgba(66,0,153,0.60) 0%, rgba(110,0,255,0.20) 50%, transparent 100%)",
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.20) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.5,
        }}
      />

      {/* ── Dark vignette edges ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* ── Main Content ── */}
      <div
        className="relative z-10 flex flex-col lg:flex-row items-end justify-between h-full w-full px-6 md:px-12 lg:px-20 py-20 gap-8"
        style={{ minHeight: "70vh" }}
      >
        {/* Left: Typography */}
        <div ref={textRef} className="flex flex-col gap-1">
          <p className="font-trap text-[10px] font-semibold uppercase tracking-[0.45em] text-white/60 mb-2">
            Relentless Pantheras · BSEMC
          </p>
          <h2
            className="font-formula uppercase leading-[0.88] text-white"
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              textShadow: "0 0 60px rgba(110,0,255,0.45)",
            }}
          >
            <span className="block">TEAM</span>
            <span className="block text-[#6E00FF]">LYKAIONS</span>
            <span className="block">BATCH 2026</span>
          </h2>
        </div>

        {/* Right: CTA */}
        <div ref={ctaRef} className="flex-shrink-0">
          <button
            onClick={handleOpenViewport}
            className="group flex items-center gap-3 text-white hover:text-[#6E00FF] transition-colors duration-300"
            aria-label="View full yearbook"
          >
            <span className="font-formula text-sm uppercase tracking-[0.35em]">
              VIEW YEARBOOK
            </span>
            <span className="w-8 h-px bg-white/50 group-hover:w-14 group-hover:bg-[#6E00FF] transition-all duration-400" />
          </button>
        </div>
      </div>

      <StingerTransition ref={stingerRef} />
      {isViewportOpen && <YearbookViewport onClose={handleCloseViewport} />}
    </section>
  );
}
