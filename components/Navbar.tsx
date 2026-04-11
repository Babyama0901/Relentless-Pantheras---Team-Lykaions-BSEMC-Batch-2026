"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "YEARBOOK", href: "#yearbook" },
  { label: "MEMORIES", href: "#memories" },
  { label: "ABOUT", href: "#about" },
  { label: "PILLARS", href: "#pillars" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      });
    }, navRef);

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActive(label);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(110,0,255,0.15)" : "none",
      }}
    >
      <nav className="flex items-center justify-between w-full" aria-label="Main navigation">

        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, "#home", "HOME")}
          className="flex items-center gap-1 group"
          aria-label="Legacy 26 Home"
        >
          <span className="font-formula text-[#6E00FF] uppercase text-sm tracking-widest">
            LEGACY
          </span>
          <span className="font-formula text-white uppercase text-sm tracking-widest">
            &nbsp;'26
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#6E00FF] ml-1 group-hover:scale-150 transition-transform duration-300" />
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNav(e, href, label)}
                className={`font-trap text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-200 relative group ${
                  active === label ? "text-[#6E00FF]" : "text-white/50 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#6E00FF] transition-all duration-300 ${
                    active === label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Mobile Menu ── */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className="w-5 h-px bg-white/60" />
          <span className="w-3 h-px bg-[#6E00FF]" />
          <span className="w-5 h-px bg-white/60" />
        </button>
      </nav>
    </header>
  );
}
