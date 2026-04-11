"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const METADATA = [
  { label: "Full Class Name", value: "Team Lykaions Batch '26" },
  { label: "Base", value: "BSU Campus" },
  { label: "Class Adviser", value: "Prof. Elena Santos" },
  { label: "President", value: "Alex Rivera" },
  { label: "Program", value: "BSEMC" },
  { label: "First Entry", value: "2022" },
];

export default function ClassProfile() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveals
      gsap.from(headerRef.current, {
        y: 30, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });

      // Metadata grid stagger
      gsap.from(gridRef.current?.children ?? [], {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.05, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
      });

      // Left poster and right text
      gsap.from(leftCardRef.current, {
        x: -40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: leftCardRef.current, start: "top 85%", once: true },
      });
      gsap.from(rightTextRef.current?.children ?? [], {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: rightTextRef.current, start: "top 85%", once: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="class-profile"
      aria-label="Class Profile Section"
      className="relative w-full bg-[#050008] py-28 overflow-hidden text-white" // keeping the premium dark bg
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* ── Title ── */}
        <div ref={headerRef} className="mb-10 border-b border-white/10 pb-6">
          <h2 className="font-formula uppercase text-white leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            CLASS PROFILE
          </h2>
        </div>

        {/* ── Metadata Grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 mb-16">
          {METADATA.map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-trap text-[10px] text-white/50 uppercase tracking-widest">{item.label}</span>
              <span className="font-formula text-lg lg:text-xl uppercase tracking-wide">{item.value}</span>
            </div>
          ))}
        </div>

        {/* ── Statistics Grid ── */}
        <div ref={leftCardRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full mt-20 pt-16 border-t border-white/5">
          {/* Stat 1 */}
          <div className="flex flex-col gap-2">
            <span className="font-arame text-[#6E00FF] leading-none" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>450<span className="text-white">+</span></span>
            <span className="font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1">Active Students</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-2">
            <span className="font-arame text-[#6E00FF] leading-none" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>115</span>
            <span className="font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1">Capstone Projects</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-2">
            <span className="font-arame text-[#6E00FF] leading-none" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>32</span>
            <span className="font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1">Excellence Awards</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-2">
            <span className="font-arame text-[#6E00FF] leading-none" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>1.2<span className="text-white">M</span></span>
            <span className="font-trap text-[10px] text-white/50 uppercase tracking-widest border-l-2 border-[#6E00FF] pl-3 py-1">Lines of Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}
