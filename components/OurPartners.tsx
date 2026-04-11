"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Official Brand Assets ─────────────────────────────────────────────
// Sourced locally from /public/Icons
const PARTNERS = [
  { id: "adobe", name: "Adobe", category: "Creative Suite", logo: "/Icons/adobe.svg" },
  { id: "amd", name: "AMD", category: "Hardware", logo: "/Icons/amd.svg" },
  { id: "android", name: "Android", category: "Mobile OS", logo: "/Icons/android.svg" },
  { id: "apple", name: "Apple", category: "Ecosystem", logo: "/Icons/apple.svg" },
  { id: "behance", name: "Behance", category: "Design Portfolio", logo: "/Icons/behance.svg" },
  { id: "css3-alt", name: "CSS3", category: "Web Styling", logo: "/Icons/css3-alt.svg" },
  { id: "discord", name: "Discord", category: "Communication", logo: "/Icons/discord.svg" },
  { id: "facebook", name: "Facebook", category: "Social Network", logo: "/Icons/facebook.svg" },
  { id: "facebook-messenger", name: "Messenger", category: "Messaging", logo: "/Icons/facebook-messenger.svg" },
  { id: "figma", name: "Figma", category: "UI/UX Design", logo: "/Icons/figma.svg" },
  { id: "github", name: "GitHub", category: "Version Control", logo: "/Icons/github.svg" },
  { id: "google", name: "Google", category: "Search & Cloud", logo: "/Icons/google.svg" },
  { id: "php", name: "PHP", category: "Web Backend", logo: "/Icons/php.svg" },
  { id: "pinterest", name: "Pinterest", category: "Inspiration", logo: "/Icons/pinterest.svg" },
  { id: "python", name: "Python", category: "Programming", logo: "/Icons/python.svg" },
  { id: "spotify", name: "Spotify", category: "Audio & Music", logo: "/Icons/spotify.svg" },
  { id: "windows", name: "Windows", category: "Operating System", logo: "/Icons/windows.svg" },
  { id: "wordpress", name: "WordPress", category: "CMS", logo: "/Icons/wordpress.svg" },
  { id: "youtube", name: "YouTube", category: "Video Media", logo: "/Icons/youtube.svg" },
];

export default function OurPartners() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance animation
      gsap.fromTo(headingRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      // Icons popping in simultaneously via stagger
      gsap.fromTo(gridRef.current?.children ?? [],
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.05, ease: "back.out(1.5)",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partners"
      aria-label="Our Partners — Software & Tools"
      className="relative w-full bg-black py-28 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E00FF]/30 to-transparent" />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(110,0,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Section Header ── */}
      <div ref={headingRef} className="text-center mb-16 px-6 relative z-10">
        <p className="font-trap text-[9px] font-semibold uppercase tracking-[0.5em] text-white/40 mb-5">
          Tools &amp; Platforms
        </p>
        <h2
          className="font-formula uppercase leading-none text-white"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          OUR PARTNERS
        </h2>
        <div className="w-12 h-1 bg-[#6E00FF] mx-auto mt-6 rounded-full" />
        <p className="font-trap text-[10px] uppercase tracking-[0.3em] text-white/30 mt-4 max-w-md mx-auto leading-loose">
          The software and platforms that power our craft as BSEMC students.
        </p>
      </div>

      {/* ── Minimalist Flex Logo Farm ── */}
      <div 
        ref={gridRef}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-12 md:gap-x-14 md:gap-y-14"
      >
        {PARTNERS.map((partner) => (
          <div
            key={partner.id}
            className="group cursor-default relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500 hover:scale-110"
            aria-label={partner.name}
          >
            {/* 
              By dropping typography and glass enclosures, we just bind the glowing effects 
              via drop-shadow tightly to the SVG shapes themselves.
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-w-full max-h-full object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(110,0,255,0.8)] transition-all duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6E00FF]/30 to-transparent" />
    </section>
  );
}
