"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { getAssetPath } from "./utils";

/* ─────────────────────────────────────────────
   Data – Young Nobles + OG & UNC cards
───────────────────────────────────────────── */
const YOUNG_NOBLES: { firstName: string; lastName: string; image?: string }[] = [
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
];

const OG_UNC: { firstName: string; lastName: string; image?: string }[] = [
  { firstName: "First Name", lastName: "LAST NAME" },
  { firstName: "First Name", lastName: "LAST NAME" },
];

/* ─────────────────────────────────────────────
   StudentCard sub-component
───────────────────────────────────────────── */
function StudentCard({
  firstName,
  lastName,
  image,
  index,
}: {
  firstName: string;
  lastName: string;
  image?: string;
  index: number;
}) {
  return (
    <div
      className="yearbook-card"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      {/* Photo area */}
      <div className="yearbook-card__photo">
        {image ? (
          <img src={image} alt={`${firstName} ${lastName}`} loading="lazy" />
        ) : (
          /* Silhouette placeholder matching the design */
          <div className="yearbook-card__silhouette">
            <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Flame / claw background motif */}
              <ellipse cx="80" cy="170" rx="55" ry="30" fill="rgba(110,0,255,0.08)" />
              {/* Body silhouette */}
              <ellipse cx="80" cy="80" rx="28" ry="32" fill="rgba(255,255,255,0.18)" />
              <path
                d="M30 200 Q35 145 80 138 Q125 145 130 200"
                fill="rgba(255,255,255,0.18)"
              />
              {/* Subtle claw lines */}
              <path d="M55 95 Q50 110 48 130" stroke="rgba(110,0,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M62 98 Q58 114 57 135" stroke="rgba(110,0,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M105 95 Q110 110 112 130" stroke="rgba(110,0,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M98 98 Q102 114 103 135" stroke="rgba(110,0,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        )}
        {/* Violet bottom badge */}
        <div className="yearbook-card__badge">
          <span className="yearbook-card__badge-first">{firstName}</span>
          <span className="yearbook-card__badge-last">{lastName}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main YearbookViewport component
───────────────────────────────────────────── */
interface YearbookViewportProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function YearbookViewport({ isOpen, onClose }: YearbookViewportProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const stinger1Ref = useRef<HTMLDivElement>(null);
  const stinger2Ref = useRef<HTMLDivElement>(null);
  const stinger3Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  /* ── Open animation (stinger wipe) ── */
  const runOpenAnimation = useCallback(() => {
    if (!overlayRef.current || !panelRef.current) return;

    // Reset stale state
    gsap.set(overlayRef.current, { display: "flex", opacity: 1 });
    gsap.set(panelRef.current, { y: "100%", opacity: 0 });
    gsap.set([stinger1Ref.current, stinger2Ref.current, stinger3Ref.current], {
      scaleY: 0,
      transformOrigin: "bottom center",
    });
    gsap.set(contentRef.current, { opacity: 0, y: 40 });

    const tl = gsap.timeline();
    tlRef.current = tl;

    // Stinger bars sweep in from bottom
    tl.to(stinger1Ref.current, { scaleY: 1, duration: 0.35, ease: "power4.in" })
      .to(stinger2Ref.current, { scaleY: 1, duration: 0.35, ease: "power4.in" }, "-=0.22")
      .to(stinger3Ref.current, { scaleY: 1, duration: 0.35, ease: "power4.in" }, "-=0.22")
      // Slide panel in from full height
      .to(panelRef.current, { y: "0%", opacity: 1, duration: 0.55, ease: "power3.out" }, "-=0.3")
      // Stinger bars sweep out upward
      .to(
        [stinger3Ref.current, stinger2Ref.current, stinger1Ref.current],
        {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 0.3,
          ease: "power4.out",
          stagger: 0.06,
        },
        "-=0.2"
      )
      // Fade in the actual content
      .to(contentRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");
  }, []);

  /* ── Close animation ── */
  const runCloseAnimation = useCallback(() => {
    if (!overlayRef.current || !panelRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (overlayRef.current) gsap.set(overlayRef.current, { display: "none" });
        onClose();
      },
    });

    // Stinger wipe OUT
    gsap.set([stinger1Ref.current, stinger2Ref.current, stinger3Ref.current], {
      scaleY: 0,
      transformOrigin: "bottom center",
    });

    tl.to(contentRef.current, { opacity: 0, y: -30, duration: 0.3, ease: "power3.in" })
      .to(stinger1Ref.current, { scaleY: 1, duration: 0.3, ease: "power4.in" }, "-=0.1")
      .to(stinger2Ref.current, { scaleY: 1, duration: 0.3, ease: "power4.in" }, "-=0.2")
      .to(stinger3Ref.current, { scaleY: 1, duration: 0.3, ease: "power4.in" }, "-=0.2")
      .to(panelRef.current, { y: "100%", duration: 0.45, ease: "power4.in" }, "-=0.15")
      .to(overlayRef.current, { opacity: 0, duration: 0.2 });
  }, [onClose]);

  /* ── Toggle based on isOpen prop ── */
  useEffect(() => {
    if (isOpen) {
      runOpenAnimation();
      document.body.style.overflow = "hidden";
    } else {
      if (overlayRef.current?.style.display !== "none") {
        document.body.style.overflow = "";
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, runOpenAnimation]);

  /* ── Keyboard ESC to close ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) runCloseAnimation();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, runCloseAnimation]);

  return (
    <>
      {/* ─── Stinger overlay bars (fixed, above everything) ─── */}
      <div ref={stinger1Ref} className="yearbook-stinger yearbook-stinger--1" />
      <div ref={stinger2Ref} className="yearbook-stinger yearbook-stinger--2" />
      <div ref={stinger3Ref} className="yearbook-stinger yearbook-stinger--3" />

      {/* ─── Full-screen overlay ─── */}
      <div
        ref={overlayRef}
        className="yearbook-viewport-overlay"
        style={{ display: "none" }}
        role="dialog"
        aria-modal="true"
        aria-label="Yearbook Viewport"
      >
        {/* ─── Slide panel ─── */}
        <div ref={panelRef} className="yearbook-viewport-panel">

          {/* ─── Sticky header ─── */}
          <div className="yearbook-viewport-header">
            {/* Logos + title */}
            <div className="yearbook-viewport-brand">
              <img
                src={getAssetPath("/Icons/adobe.svg")}
                alt=""
                className="yearbook-logo-icon"
                aria-hidden="true"
                style={{ opacity: 0 }}
              />
              {/* Panther head SVG placeholder (inline) */}
              <svg
                className="yearbook-logo-panther"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="28" stroke="#6E00FF" strokeWidth="2" />
                <path
                  d="M20 38 Q22 28 30 24 Q38 28 40 38"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Eyes */}
                <circle cx="25" cy="26" r="2.5" fill="#6E00FF" />
                <circle cx="35" cy="26" r="2.5" fill="#6E00FF" />
                {/* Ears */}
                <path d="M20 20 L17 13 L24 18 Z" fill="white" opacity="0.8" />
                <path d="M40 20 L43 13 L36 18 Z" fill="white" opacity="0.8" />
              </svg>
              {/* Wolf head SVG placeholder */}
              <svg
                className="yearbook-logo-wolf"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 8 L38 18 L50 14 L44 26 L50 38 L38 34 L30 48 L22 34 L10 38 L16 26 L10 14 L22 18 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="30" cy="28" r="6" stroke="#6E00FF" strokeWidth="1.5" />
              </svg>
              <div className="yearbook-viewport-title">
                <span className="yearbook-viewport-subtitle">RELENTLESS PANTHERAS · BSEMC</span>
                <span className="yearbook-viewport-main-title">TEAM LYKAIONS</span>
              </div>
            </div>

            {/* Close & Return buttons */}
            <div className="yearbook-viewport-actions">
              <button
                id="yearbook-return-btn"
                className="yearbook-btn yearbook-btn--return"
                onClick={runCloseAnimation}
                aria-label="Return to main page"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Return</span>
              </button>
              <button
                id="yearbook-close-btn"
                className="yearbook-btn yearbook-btn--close"
                onClick={runCloseAnimation}
                aria-label="Close yearbook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* ─── Scrollable content ─── */}
          <div ref={contentRef} className="yearbook-viewport-content">

            {/* Hero banner (matching PNG header) */}
            <div className="yearbook-hero-banner">
              <div className="yearbook-hero-banner__bg" />
              <div className="yearbook-hero-banner__overlay" />
              <div className="yearbook-hero-banner__dots" />
              <div className="yearbook-hero-banner__text">
                <p className="yearbook-hero-banner__sub">RELENTLESS PANTHERAS · BSEMC</p>
                <h1 className="yearbook-hero-banner__title">TEAM LYKAIONS</h1>
              </div>
            </div>

            {/* Young Nobles section */}
            <div className="yearbook-section-block">
              <h2 className="yearbook-section-heading">YOUNG NOBLES OF BSEMC 2026</h2>
              <div className="yearbook-grid yearbook-grid--nobles">
                {YOUNG_NOBLES.map((s, i) => (
                  <StudentCard key={i} index={i} firstName={s.firstName} lastName={s.lastName} image={s.image} />
                ))}
              </div>
            </div>

            {/* OG and UNC section */}
            <div className="yearbook-section-block yearbook-section-block--secondary">
              <h2 className="yearbook-section-heading">OG AND UNC OF BSEMC 2026</h2>
              <div className="yearbook-grid yearbook-grid--og">
                {OG_UNC.map((s, i) => (
                  <StudentCard key={i} index={i} firstName={s.firstName} lastName={s.lastName} image={s.image} />
                ))}
              </div>
            </div>

            {/* Bottom return button */}
            <div className="yearbook-viewport-footer">
              <button
                className="yearbook-btn yearbook-btn--return yearbook-btn--large"
                onClick={runCloseAnimation}
                aria-label="Return to main page"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Return to Main Page</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
