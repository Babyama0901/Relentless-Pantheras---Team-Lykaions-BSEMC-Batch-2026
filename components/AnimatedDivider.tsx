"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedDivider() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 88%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Lines draw outward from center
      tl.fromTo(
        lineLeftRef.current,
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 1.1 }
      )
        .fromTo(
          lineRightRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.1 },
          "<" // same time as left line
        )
        // Center icon pops in
        .fromTo(
          centerRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 },
          "-=0.5"
        );

      // Pronounced continuous glowing animation
      gsap.to(centerRef.current, {
        boxShadow: "0 0 24px 6px rgba(110,0,255,0.7), 0 0 10px 2px rgba(110,0,255,0.5)",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full flex items-center gap-4 py-10 px-6 md:px-12 lg:px-24"
      aria-hidden="true"
    >
      {/* Left line */}
      <div
        ref={lineLeftRef}
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(to left, rgba(110,0,255,0.8), rgba(110,0,255,0.05))",
        }}
      />

      {/* Center dot container */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <div
          ref={centerRef}
          className="w-2 h-2 rounded-full bg-[#9B4DFF]"
          style={{ boxShadow: "0 0 8px 2px rgba(110,0,255,0.4)" }}
        />
      </div>

      {/* Right line */}
      <div
        ref={lineRightRef}
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(110,0,255,0.8), rgba(110,0,255,0.05))",
        }}
      />
    </div>
  );
}
