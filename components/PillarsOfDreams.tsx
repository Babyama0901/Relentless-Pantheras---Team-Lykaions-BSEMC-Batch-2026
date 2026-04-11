"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FACULTY = [
  { id: "elena-santos",   name: "Prof. Elena Santos",    role: "Pillar Head",       dept: "Office of the Dean",  seed: "woman_professional_portrait_1" },
  { id: "ricardo-flores", name: "Dr. Ricardo Flores",    role: "Professor",         dept: "Dept. of Sciences",   seed: "man_professional_portrait_2" },
  { id: "luz-miranda",    name: "Prof. Luz Miranda",     role: "Department Head",   dept: "Dept. of Arts",       seed: "woman_professional_portrait_3" },
  { id: "felix-ramos",    name: "Dr. Felix Ramos",       role: "Professor",         dept: "Dept. of Engineering",seed: "man_professional_portrait_4" },
  { id: "cora-villanueva",name: "Mrs. Cora Villanueva",  role: "Instructor",        dept: "Academic Affairs",    seed: "woman_professional_portrait_5" },
  { id: "danica-alcala",  name: "Mr. Danica Alcala",     role: "Academic Counselor",dept: "Student Affairs",     seed: "man_professional_portrait_6" },
];

export default function PillarsOfDreams() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children ?? [], {
        y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      gsap.fromTo(gridRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pillars"
      aria-label="Pillars of Dreams — Faculty and Staff"
      className="relative w-full bg-black py-28 overflow-hidden"
    >
      {/* ── Top border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E00FF]/30 to-transparent" />

      {/* ── Section Header ── */}
      <div ref={headingRef} className="text-center mb-16 px-6">
        <p className="font-trap text-[9px] font-semibold uppercase tracking-[0.5em] text-white/40 mb-5">
          Faculty &amp; Staff
        </p>
        <h2
          className="font-formula uppercase leading-none text-white"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          PILLARS OF DREAMS
        </h2>
        {/* Brand violet underline */}
        <div className="w-12 h-1 bg-[#6E00FF] mx-auto mt-6 rounded-full" />
      </div>

      {/* ── Faculty Grid ── */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto px-6 md:px-12"
      >
        {FACULTY.map((person) => (
          <article
            key={person.id}
            id={`faculty-${person.id}`}
            className="glass-panel p-5 flex flex-row items-center gap-5 group cursor-default hover:border-[#6E00FF]/30 transition-all duration-300"
            aria-label={`${person.name}, ${person.role}`}
          >
            {/* Left: Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-[#6E00FF]/50 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${person.seed}/120/120`}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#6E00FF] ring-2 ring-black" />
            </div>

            {/* Right: Info */}
            <div className="flex flex-col gap-1 min-w-0">
              <h3 className="font-formula text-sm uppercase text-white leading-tight truncate">
                {person.name}
              </h3>
              <span className="font-trap inline-block text-[9px] font-semibold uppercase tracking-widest text-[#6E00FF] bg-[#6E00FF]/10 px-2 py-0.5 rounded-sm w-fit">
                {person.role}
              </span>
              <div className="h-px bg-white/5 group-hover:bg-[#6E00FF]/20 transition-colors my-1" />
              <p className="font-trap text-[10px] text-white/40 uppercase tracking-widest truncate">
                {person.dept}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
