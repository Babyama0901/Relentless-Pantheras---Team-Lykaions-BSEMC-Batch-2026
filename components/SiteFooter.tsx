"use client";

const FOOTER_LINKS = ["HOME", "YEARBOOK", "MEMORIES", "ABOUT", "PILLARS"];

const SECTION_MAP: Record<string, string> = {
  HOME: "#home",
  YEARBOOK: "#yearbook",
  MEMORIES: "#memories",
  ABOUT: "#about",
  PILLARS: "#pillars",
};

export default function SiteFooter() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site footer"
      className="relative w-full bg-black border-t border-[#6E00FF]/15 py-16 overflow-hidden"
    >
      {/* ── Ambient gradient ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(110,0,255,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* ── Logo ── */}
        <div className="flex items-center gap-1">
          <span className="font-formula text-[#6E00FF] uppercase tracking-widest text-xl">
            LEGACY
          </span>
          <span className="font-formula text-white uppercase tracking-widest text-xl">
            &nbsp;'26
          </span>
        </div>

        {/* ── Nav Links ── */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 list-none m-0 p-0">
            {FOOTER_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={SECTION_MAP[label]}
                  onClick={(e) => handleNav(e, SECTION_MAP[label])}
                  className="font-trap text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Divider ── */}
        <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-[#6E00FF]/25 to-transparent" />

        {/* ── Copyright ── */}
        <p className="font-trap text-[8px] text-white/25 uppercase tracking-[0.4em] text-center">
          © 2026 Digital Yearbook · Team Lykaions · BSEMC Batch 2026
        </p>
      </div>
    </footer>
  );
}
