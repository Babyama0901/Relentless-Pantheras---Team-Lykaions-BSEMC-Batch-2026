"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MEMORY_CARDS = [
  {
    id: "graduation-rehearsal",
    label: "Graduation Rehearsal",
    seed: "graduation_ceremony_2026",
  },
  {
    id: "foundation-day",
    label: "Foundation Day",
    seed: "foundation_day_celebration",
  },
  {
    id: "campus-life",
    label: "Campus Life",
    seed: "campus_university_life",
  },
  {
    id: "acquaintance-party",
    label: "Acquaintance Party",
    seed: "party_friends_gathering",
  },
  {
    id: "sports-fest",
    label: "Sports Festival",
    seed: "sports_festival_athletics",
  },
  {
    id: "yearend-party",
    label: "Year-End Celebration",
    seed: "celebration_fireworks_event",
  },
];

const CARD_GAP = 20; // px — must match gap in JSX

export default function MemoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  /* ── Sync indicator with scroll position ── */
  const syncIndicator = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardEl = track.children[0] as HTMLElement;
    if (!cardEl) return;
    const cardW = cardEl.getBoundingClientRect().width + CARD_GAP;
    const idx = Math.round(track.scrollLeft / cardW);
    setActiveIndex(idx);
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  /* ── Scroll to a specific card index ── */
  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardEl = track.children[0] as HTMLElement;
    if (!cardEl) return;
    const cardW = cardEl.getBoundingClientRect().width + CARD_GAP;
    track.scrollTo({ left: cardW * index, behavior: "smooth" });
  }, []);

  const handlePrev = () => scrollTo(Math.max(0, activeIndex - 1));
  const handleNext = () => scrollTo(Math.min(MEMORY_CARDS.length - 1, activeIndex + 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", syncIndicator, { passive: true });
    syncIndicator();
    return () => track.removeEventListener("scroll", syncIndicator);
  }, [syncIndicator]);

  /* ── GSAP entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children ?? [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(trackRef.current?.children ?? [], {
        x: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="memories"
      aria-label="Memories Section"
      className="w-full bg-black py-20 overflow-hidden"
    >
      {/* ── Section Header ── */}
      <div className="px-6 md:px-12 lg:px-20 mb-10">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-[9px] font-trap font-semibold uppercase tracking-[0.5em] text-white/40 mb-3">
              The Moments
            </p>
            <h2
              className="font-formula uppercase leading-none text-white relative inline-block"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {/* Glitch offset clone */}
              <span aria-hidden="true" className="absolute inset-0 text-[#6E00FF] opacity-20 pointer-events-none select-none"
                style={{ clipPath: "polygon(0 38%, 100% 40%, 100% 47%, 0 45%)", transform: "translateX(4px)" }}>
                MEMORIES
              </span>
              MEMORIES
            </h2>
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              id="memories-prev"
              onClick={handlePrev}
              disabled={!canPrev}
              aria-label="Previous memory"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                ${canPrev
                  ? "border-[#6E00FF] bg-[#6E00FF]/10 text-white hover:bg-[#6E00FF] hover:border-[#6E00FF]"
                  : "border-white/10 bg-white/5 text-white/20 cursor-not-allowed"}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              id="memories-next"
              onClick={handleNext}
              disabled={!canNext}
              aria-label="Next memory"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                ${canNext
                  ? "border-[#6E00FF] bg-[#6E00FF]/10 text-white hover:bg-[#6E00FF] hover:border-[#6E00FF]"
                  : "border-white/10 bg-white/5 text-white/20 cursor-not-allowed"}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Scrollable Card Track ── */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex px-6 md:px-12 lg:px-20 pb-4 overflow-x-auto"
          style={{
            gap: `${CARD_GAP}px`,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          aria-label="Scrollable memory cards"
        >
          {MEMORY_CARDS.map((card, i) => (
            <article
              key={card.id}
              id={`memory-${card.id}`}
              onClick={() => scrollTo(i)}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-[6px_6px_0px_#6E00FF] transition-shadow duration-300"
              style={{
                width: "clamp(230px, 28vw, 310px)",
                height: "clamp(260px, 32vw, 360px)",
                scrollSnapAlign: "start",
              }}
              tabIndex={0}
              aria-label={`Memory: ${card.label}`}
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${card.seed}/640/720`}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[#6E00FF]/0 group-hover:bg-[#6E00FF]/12 transition-colors duration-500" />

              {/* Active indicator ring */}
              {activeIndex === i && (
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#6E00FF] pointer-events-none" />
              )}

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3
                  className="font-formula text-white uppercase leading-tight"
                  style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)", letterSpacing: "-0.01em" }}
                >
                  {card.label}
                </h3>
                <p className="font-trap text-[10px] text-white/40 mt-1 uppercase tracking-widest">
                  Batch 2026
                </p>
              </div>

              {/* Arrow icon overlay on hover */}
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* ── Left edge fade ── */}
        <div className="absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        {/* ── Right edge fade ── */}
        <div className="absolute top-0 right-0 bottom-4 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* ── Page Indicator Dots ── */}
      <div className="flex items-center justify-center gap-2 mt-8 px-6" aria-label="Memory slide indicators">
        {MEMORY_CARDS.map((card, i) => (
          <button
            key={card.id}
            id={`memory-dot-${card.id}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${card.label}`}
            aria-current={activeIndex === i ? "true" : undefined}
            className="transition-all duration-300 rounded-full"
            style={{
              width: activeIndex === i ? "24px" : "6px",
              height: "6px",
              backgroundColor: activeIndex === i ? "#6E00FF" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>

      {/* ── Swipe hint ── */}
      <div className="px-6 md:px-12 lg:px-20 mt-5 flex items-center gap-3">
        <span className="w-6 h-px bg-white/15" />
        <span className="font-trap text-[9px] uppercase tracking-[0.3em] text-white/25">
          Swipe or use arrows to explore
        </span>
      </div>
    </section>
  );
}
