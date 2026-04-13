import { forwardRef, useImperativeHandle, useRef } from "react";
import { gsap } from "gsap";
import { getAssetPath } from './utils';

export interface StingerRef {
  playTransition: (onMidpoint: () => void) => void;
}

const StingerTransition = forwardRef<StingerRef>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    playTransition: (onMidpoint: () => void) => {
      // Show container
      if (containerRef.current) {
        containerRef.current.style.pointerEvents = "all";
      }

      const tl = gsap.timeline({
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
        },
      });

      // Animate columns IN
      tl.to(columnsRef.current, {
        scaleY: 1,
        transformOrigin: "top",
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.inOut",
      })
      .to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      })
      .add(() => {
        // Execute the midpoint callback (this is where state changes, e.g., opening the modal)
        onMidpoint();
      })
      .to(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.4, // Keep logo visible for a moment
      })
      // Animate columns OUT
      .to(columnsRef.current, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.inOut",
      }, "<0.1"); // Start columns pulling back slightly after logo starts fading
    },
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex pointer-events-none"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
             columnsRef.current[i] = el;
          }}
          className="flex-1 h-full bg-[#111111] border-r border-[#6E00FF]/20"
          style={{ transform: "scaleY(0)" }}
        />
      ))}
      
      {/* Absolute overlay for logo */}
      <div 
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        style={{ opacity: 0, transform: "scale(0.8)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={getAssetPath("/Logo/WHITE LOGO MARK.png")} 
          alt="Team Lykaions Logo" 
          className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_20px_rgba(110,0,255,0.8)]"
        />
      </div>
    </div>
  );
});

StingerTransition.displayName = "StingerTransition";

export default StingerTransition;
