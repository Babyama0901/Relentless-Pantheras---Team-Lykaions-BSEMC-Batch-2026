"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const TARGET_DATE = new Date("2026-06-13T00:00:00").getTime();

export default function CountdownLock({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    let timer: NodeJS.Timeout;

    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        setIsUnlocked(true);
        if (timer) clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    const runAuthAndTimer = async () => {
      let isAuthorized = false;
      const VALID_HASH = "8d6cf8a58990d522cc899f54e9f0adeee84f4ea9c7fabb2aad2953e4ad11a777"; // Hash of 'pantheras_dev'
      
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const secretKey = searchParams.get("key");
        
        if (secretKey) {
          const encoder = new TextEncoder();
          const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(secretKey));
          const hashHex = Array.from(new Uint8Array(hashBuffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
            
          if (hashHex === VALID_HASH) {
            localStorage.setItem("secure_unlock_hash", hashHex);
            isAuthorized = true;
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        } else if (localStorage.getItem("secure_unlock_hash") === VALID_HASH) {
          isAuthorized = true;
        }
      } catch (e) {
        // Fallback silently on old browsers
      }

      if (isAuthorized) {
        setIsUnlocked(true);
      } else {
        calculateTime();
        timer = setInterval(calculateTime, 1000);
      }
    };

    runAuthAndTimer();

    return () => {
      if (timer) clearInterval(timer);
    }
  }, []);

  // Entrance Animation for Countdown UI
  useEffect(() => {
    if (isMounted && !isUnlocked && containerRef.current) {
      gsap.fromTo(
        ".countdown-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
      );
    }
  }, [isMounted, isUnlocked]);

  // To prevent hydration mismatch on SSG, render nothing/loading screen initially
  if (!isMounted) {
    return <div className="min-h-screen bg-black" />;
  }

  // If graduation has passed or developer unlocked, show actual website
  if (isUnlocked) {
    return <>{children}</>;
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F0014] text-white overflow-hidden p-6"
    >
      {/* ── Ambient Glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(110,0,255,0.12) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* ── Header ── */}
      <div className="countdown-element text-center mb-12 relative z-10">
        <p className="font-trap text-[10px] md:text-xs font-semibold uppercase tracking-[0.5em] text-[#9B4DFF] mb-4">
          Team Lykaions · BSEMC
        </p>
        <h1 
          className="font-formula uppercase leading-none text-white drop-shadow-[0_0_40px_rgba(110,0,255,0.4)]"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
        >
          UNTIL LAUNCH
        </h1>
      </div>

      {/* ── Timer Grid ── */}
      <div className="countdown-element relative z-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
        <TimeUnit value={formatNumber(timeLeft.days)} label="Days" />
        <TimeSeparator />
        <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
        <TimeSeparator />
        <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
        <TimeSeparator className="hidden sm:block" />
        <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" className="w-full sm:w-auto mt-4 sm:mt-0" />
      </div>

      {/* ── Footer ── */}
      <div className="countdown-element absolute bottom-12 left-0 right-0 text-center z-10 hidden md:block">
        <p className="font-trap text-[10px] uppercase tracking-[0.4em] text-white/30">
          Graduation Day — June 13, 2026
        </p>
      </div>
    </div>
  );
}

// ── UI Components ── 
function TimeUnit({ value, label, className = "" }: { value: string, label: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="glass-panel w-20 h-24 md:w-28 md:h-32 flex items-center justify-center relative overflow-hidden group border border-[#6E00FF]/20 shadow-[0_0_30px_rgba(110,0,255,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6E00FF]/10 to-transparent opacity-50" />
        <span className="font-arame text-4xl md:text-6xl tracking-tighter text-white relative z-10">
          {value}
        </span>
      </div>
      <span className="font-trap text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 mt-4 block">
        {label}
      </span>
    </div>
  );
}

function TimeSeparator({ className = "" }: { className?: string }) {
  return (
    <div className={`font-arame text-3xl md:text-4xl text-[#6E00FF] ${className} pb-8 opacity-60`}>
      :
    </div>
  );
}
