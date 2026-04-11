"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useCountUp(target: number, duration = 1.8, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const obj = { n: 0 };
    gsap.to(obj, {
      n: target,
      duration,
      ease: "power2.out",
      onUpdate: () => setVal(Math.round(obj.n)),
    });
  }, [start, target, duration]);
  return val;
}

const STATS = [
  { value: 2026, suffix: "", label: "Batch Year" },
  { value: 450,  suffix: "+", label: "Graduates" },
  { value: 12,   suffix: "", label: "Departments" },
];

function StatItem({ stat, visible }: { stat: (typeof STATS)[number]; visible: boolean }) {
  const count = useCountUp(stat.value, 2, visible);
  return (
    <div className="flex flex-col gap-1">
      <span
        className="font-arame text-[#6E00FF] leading-none"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
      >
        {count}{stat.suffix}
      </span>
      <span className="font-trap text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">
        {stat.label}
      </span>
    </div>
  );
}

export default function ClassStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children ?? [], {
        y: 70,
        opacity: 0,
        duration: 1.3,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(bodyRef.current?.children ?? [], {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bodyRef.current,
          start: "top 80%",
          once: true,
        },
      });

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => setStatsVisible(true),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="Class Story Section"
      className="relative w-full bg-black py-28 overflow-hidden"
    >
      {/* ── Ambient glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(110,0,255,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        {/* ── Eyebrow ── */}
        <p className="font-trap text-[9px] font-semibold uppercase tracking-[0.5em] text-white/40 mb-10 text-center">
          Our Story
        </p>

        {/* ── Hero Heading ── */}
        <h2
          ref={headingRef}
          className="font-formula uppercase text-center leading-[0.9] mb-16 overflow-hidden"
          style={{ fontSize: "clamp(2.2rem, 6vw, 6.5rem)" }}
        >
          <span className="block text-white">WE BEGAN AS</span>
          <span className="block text-white">STRANGERS,</span>
          <span className="block">
            <span className="text-white">WE LEAVE AS A </span>
            <span className="text-[#6E00FF]">LEGACY.</span>
          </span>
        </h2>

        {/* ── Two-column body ── */}
        <div ref={bodyRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <p className="font-trap text-sm text-white/50 leading-relaxed">
            Four years ago, we walked through these halls with nothing but dreams
            and a lot of uncertainty. Today, we stand as a testament to resilience,
            friendship, and the pursuit of excellence.
          </p>
          <p className="font-trap text-sm text-white/50 leading-relaxed">
            This digital yearbook is more than just a record; it&apos;s a living memory
            of the nights we spent studying, the laughter we shared in the quad,
            and the bonds that will never be broken.
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div ref={statsRef} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} visible={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
