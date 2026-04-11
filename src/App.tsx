/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const GOLD = "#C9A84C";

const NAV_LINKS = ["Home", "Yearbook", "Memories", "About", "Pillars"];

const CLASSMATES = [
  { 
    firstName: "Andrea", 
    lastName: "Reyes", 
    course: "BS Computer Science", 
    quote: "Code is poetry written in logic.", 
    image: "https://picsum.photos/seed/andrea/800/1000",
    color: "#2a1f3d" 
  },
  { 
    firstName: "Miguel", 
    lastName: "Santos", 
    course: "BS Nursing", 
    quote: "Healing hands, caring heart.", 
    image: "https://picsum.photos/seed/miguel/800/1000",
    color: "#1f2d3d" 
  },
  { 
    firstName: "Carla", 
    lastName: "Vega", 
    course: "BS Architecture", 
    quote: "Design is thinking made visual.", 
    image: "https://picsum.photos/seed/carla/800/1000",
    color: "#1f3d2a" 
  },
  { 
    firstName: "Jose", 
    lastName: "Mendoza", 
    course: "BS Education", 
    quote: "Teaching is the art of awakening curiosity.", 
    image: "https://picsum.photos/seed/jose/800/1000",
    color: "#3d2a1f" 
  },
  { 
    firstName: "Sofia", 
    lastName: "Lim", 
    course: "BS Accountancy", 
    quote: "Balance is not just numbers—it's life.", 
    image: "https://picsum.photos/seed/sofia/800/1000",
    color: "#3d1f2a" 
  },
  { 
    firstName: "Daniel", 
    lastName: "Cruz", 
    course: "BS Engineering", 
    quote: "Build bridges, not walls.", 
    image: "https://picsum.photos/seed/daniel/800/1000",
    color: "#1f3d3d" 
  },
  { 
    firstName: "Maria", 
    lastName: "Garcia", 
    course: "BS Psychology", 
    quote: "Every mind is a universe waiting to be understood.", 
    image: "https://picsum.photos/seed/maria/800/1000",
    color: "#2d3d1f" 
  },
  { 
    firstName: "Ramon", 
    lastName: "Torres", 
    course: "BS Business Admin", 
    quote: "Dream big, execute bigger.", 
    image: "https://picsum.photos/seed/ramon/800/1000",
    color: "#3d2d1f" 
  },
];

const FACULTY = [
  { name: "Prof. Elena Santos", role: "College Dean", dept: "Office of the Dean", initials: "ES", color: "#1a1a2e", image: "https://picsum.photos/seed/dean/400/400" },
  { name: "Dr. Ricardo Flores", role: "Professor", dept: "Dept. of Sciences", initials: "RF", color: "#16213e", image: "https://picsum.photos/seed/prof1/400/400" },
  { name: "Prof. Luz Miranda", role: "Department Head", dept: "Dept. of Arts", initials: "LM", color: "#1a2a1a", image: "https://picsum.photos/seed/head/400/400" },
  { name: "Dr. Felix Ramos", role: "Professor", dept: "Dept. of Engineering", initials: "FR", color: "#2a1a1a", image: "https://picsum.photos/seed/prof2/400/400" },
  { name: "Ms. Cora Villanueva", role: "Registrar", dept: "Academic Affairs", initials: "CV", color: "#1a2a2a", image: "https://picsum.photos/seed/registrar/400/400" },
  { name: "Mr. Dante Alcala", role: "Guidance Counselor", dept: "Student Affairs", initials: "DA", color: "#2a2a1a", image: "https://picsum.photos/seed/counselor/400/400" },
];

const MEMORIES = [
  { title: "Graduation Rehearsal", caption: "One last walk before the real thing.", height: 192, color: "#1a1a2e" },
  { title: "Foundation Day", caption: "Dancing like nobody's watching.", height: 256, color: "#2a1a1a" },
  { title: "Campus Life", caption: "Late nights, early mornings.", height: 224, color: "#1a2a1a" },
  { title: "Batch Outing", caption: "The beach trip we'll never forget.", height: 192, color: "#1a2a2a" },
  { title: "Acquaintance Party", caption: "Where friendships began.", height: 288, color: "#2a2a1a" },
  { title: "Thesis Defense", caption: "Stressed but blessed.", height: 192, color: "#1a1a1a" },
];

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('button') || 
        target.closest('a') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.magnetic-wrap')
      ) {
        ring.classList.add('hovering');
      } else {
        ring.classList.remove('hovering');
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
}

function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const shapes = containerRef.current.querySelectorAll('.shape-element');
    
    shapes.forEach((shape) => {
      gsap.to(shape, {
        y: `random(-100, 100)`,
        x: `random(-100, 100)`,
        rotation: `random(-180, 180)`,
        duration: `random(10, 20)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="shape-element top-[20%] left-[10%] w-24 h-24 text-[#C9A84C]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <svg className="shape-element top-[60%] left-[80%] w-32 h-32 text-[#C9A84C]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
      </svg>
      <svg className="shape-element top-[80%] left-[20%] w-16 h-16 text-[#C9A84C]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M50 10 L90 90 L10 90 Z" />
      </svg>
      <svg className="shape-element top-[30%] left-[70%] w-20 h-20 text-[#C9A84C]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="50" cy="50" r="40" strokeDasharray="10 10" />
      </svg>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(201, 168, 76, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
    </div>
  );
}

function AnimatedCounter({ value, label }: { value: number | string, label: string }) {
  const numRef = useRef<HTMLDivElement>(null);
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) : value;
  const suffix = typeof value === 'string' ? value.replace(/[0-9]/g, '') : '';

  useEffect(() => {
    if (!numRef.current) return;
    
    const obj = { val: 0 };
    gsap.to(obj, {
      val: numericValue,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: numRef.current,
        start: "top 85%",
      },
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.innerText = Math.floor(obj.val) + suffix;
        }
      }
    });
  }, [numericValue, suffix]);

  return (
    <div className="text-center group cursor-pointer">
      <div ref={numRef} className="text-4xl font-bold text-[#C9A84C] mb-2 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">0{suffix}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-[#C9A84C] transition-colors duration-500">{label}</div>
    </div>
  );
}

function MagneticElement({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    
    gsap.to(ref.current, { x, y, duration: 0.5, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`magnetic-wrap inline-block ${className}`}>
      {children}
    </div>
  );
}

function MemoryCard({ m, i }: { m: any; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !parallaxRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(parallaxRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !imgRef.current || !glareRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    // Parallax effect on image
    gsap.to(imgRef.current, {
      x: x * 30,
      y: y * 30,
      scale: 1.15,
      duration: 0.6,
      ease: "power2.out",
    });

    // 3D Tilt effect on card
    gsap.to(cardRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.6,
      ease: "power2.out",
    });

    // Glare effect
    gsap.to(glareRef.current, {
      opacity: 0.2,
      x: x * width * 0.5,
      y: y * height * 0.5,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    if (!cardRef.current || !imgRef.current || !glareRef.current) return;
    gsap.to([cardRef.current, imgRef.current], {
      x: 0,
      y: 0,
      scale: 1.1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(glareRef.current, {
      opacity: 0,
      duration: 0.8,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative overflow-hidden bg-[#111] border border-white/5 aspect-[4/5] cursor-pointer perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div ref={parallaxRef} className="absolute top-[-15%] left-0 w-full h-[130%] pointer-events-none">
        <img
          ref={imgRef}
          src={`https://picsum.photos/seed/mem-${i}/800/1000`}
          alt={m.title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-100 scale-110 transition-opacity duration-700 pointer-events-none"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
      {/* Glare Overlay */}
      <div 
        ref={glareRef}
        className="absolute inset-0 bg-white opacity-0 pointer-events-none blur-3xl"
        style={{ mixBlendMode: 'soft-light' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"
        style={{ transform: "translateZ(30px)" }}
      >
        <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
        <p className="text-xs text-white/60 uppercase tracking-widest">{m.caption}</p>
      </div>
    </div>
  );
}

function SectionDivider() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dividerRef.current || !lineRef.current || !iconRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(lineRef.current, 
        { scaleX: 0, opacity: 0 }, 
        { scaleX: 1, opacity: 1, duration: 1.5, ease: "power3.inOut" }
      )
      .fromTo(iconRef.current,
        { scale: 0, rotation: -90, opacity: 0 },
        { scale: 1, rotation: 45, opacity: 1, duration: 1, ease: "back.out(1.7)" },
        "-=1"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={dividerRef} className="w-full py-12 md:py-16 flex items-center justify-center relative overflow-hidden z-10">
      <div ref={lineRef} className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent origin-center" />
      <div ref={iconRef} className="relative z-10 w-3 h-3 md:w-4 md:h-4 border border-[#C9A84C]/60 bg-[#0a0a0a] transform rotate-45" />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBg, setActiveBg] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rosterRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      const heroChars = gsap.utils.toArray(".hero-text-char");
      gsap.to(heroChars, {
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.2
      });

      // Hero line and button fade in
      gsap.from(".hero-fade-in", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.5
      });

      // About text reveal
      gsap.from(".about-text-reveal", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      const items = gsap.utils.toArray(".student-item") as HTMLElement[];

      
      items.forEach((item) => {
        const first = item.querySelector(".student-first");
        const last = item.querySelector(".student-last");
        const imgContainer = item.querySelector(".student-image-container");
        const img = item.querySelector(".student-image-container img");
        const info = item.querySelector(".student-info");
        const studentId = item.getAttribute("data-id");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onEnter: () => setActiveBg(studentId),
            onEnterBack: () => setActiveBg(studentId),
          }
        });

        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
          tl.to(first, { xPercent: -100, duration: 1 }, 0)
            .to(last, { xPercent: 100, duration: 1 }, 0)
            .to(imgContainer, { width: "clamp(200px, 25vw, 400px)", opacity: 1, duration: 1 }, 0)
            .from(img, { scale: 1.5, duration: 1 }, 0)
            .from(info, { y: 50, opacity: 0, duration: 0.5 }, 0.5);
        } else {
          // Mobile vertical stack
          tl.from(imgContainer, { height: 0, opacity: 0, duration: 1 }, 0)
            .from(img, { scale: 1.2, duration: 1 }, 0)
            .from(info, { y: 20, opacity: 0, duration: 0.5 }, 0.5);
        }
      });

      // Faculty cards stagger
      gsap.from(".faculty-card", {
        scrollTrigger: {
          trigger: "#pillars",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] font-serif selection:bg-[#C9A84C] selection:text-black">
      <CustomCursor />
      
      {/* Background Reveal Layers */}
      {CLASSMATES.map((student, idx) => (
        <div 
          key={idx}
          className={`bg-reveal ${activeBg === `student-${idx}` ? 'active' : ''}`}
          style={{ backgroundImage: `url(${student.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 md:py-8 mix-blend-difference">
        <MagneticElement>
          <div className="text-xl font-bold tracking-tighter uppercase text-white cursor-pointer hover:text-[#C9A84C] transition-colors" onClick={() => scrollTo("home")}>Legacy '25</div>
        </MagneticElement>
        
        <div className="hidden md:flex gap-12">
          {NAV_LINKS.map(link => (
            <MagneticElement key={link}>
              <button 
                onClick={() => scrollTo(link.toLowerCase().replace(/ /g, "-"))}
                className="nav-link-hover text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
              >
                {link}
              </button>
            </MagneticElement>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map(link => (
            <button 
              key={link} 
              onClick={() => scrollTo(link.toLowerCase().replace(/ /g, "-"))}
              className="text-2xl uppercase tracking-widest text-white hover:text-[#C9A84C] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <FloatingShapes />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-white/5 pointer-events-none" />
        
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full">
          <p className="hero-fade-in text-[10px] uppercase tracking-[0.5em] text-[#C9A84C] mb-8 md:mb-12">Class of 2025</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.85] mb-12 flex flex-col overflow-hidden text-center">
            <span className="flex justify-center">
              {"Digital".split('').map((char, i) => <span key={i} className="hero-text-char">{char}</span>)}
            </span>
            <span className="flex justify-center text-[#C9A84C]">
              {"Yearbook".split('').map((char, i) => <span key={i} className="hero-text-char">{char}</span>)}
            </span>
          </h1>
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-6 hero-fade-in mt-auto">
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-[#C9A84C] to-transparent" />
          <MagneticElement>
            <button 
              onClick={() => scrollTo("yearbook")}
              className="group flex flex-col items-center gap-3 relative"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-[#C9A84C] transition-colors">Scroll to explore</span>
              <ChevronDown size={16} className="text-[#C9A84C] group-hover:translate-y-2 transition-transform duration-300" />
            </button>
          </MagneticElement>
        </div>
      </section>

      {/* GSAP Scrolling Roster */}
      <section id="yearbook" ref={rosterRef} className="roster-container">
        {CLASSMATES.map((student, idx) => (
          <div key={idx} className="student-item" data-id={`student-${idx}`}>
            <div className="student-name-wrapper">
              <span className="student-first">{student.firstName}</span>
              <div className="student-image-container">
                <img src={student.image} alt={`${student.firstName} ${student.lastName}`} referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <span className="student-last">{student.lastName}</span>
            </div>
            
            <div className="student-info absolute bottom-20 left-1/2 -translate-x-1/2 text-center max-w-md px-6">
              <p className="text-[#C9A84C] uppercase tracking-[0.2em] text-[10px] mb-2">{student.course}</p>
              <p className="text-white/60 italic text-sm">"{student.quote}"</p>
            </div>
          </div>
        ))}
      </section>

      <SectionDivider />

      {/* Memories Section */}
      <section id="memories" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-[#050505] relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-16">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A84C] mb-6">The Moments</p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-none">Memories</h2>
            </div>
            <p className="max-w-sm text-white/40 text-sm md:text-base leading-relaxed text-left md:text-right">
              A collection of the small moments that defined our four-year journey together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {MEMORIES.map((m, i) => (
              <MemoryCard key={i} m={m} i={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
          <div className="w-full flex flex-col items-center text-center mb-16 md:mb-24">
            <p className="about-text-reveal text-[10px] uppercase tracking-[0.5em] text-[#C9A84C] mb-8 md:mb-12">Our Story</p>
            <h2 className="about-text-reveal text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-tight max-w-4xl">
              We began as strangers,<br />we leave as a legacy.
            </h2>
          </div>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left text-white/60 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
            <p className="about-text-reveal">
              Four years ago, we walked through these halls with nothing but dreams and a bit of uncertainty. Today, we stand as a testament to resilience, friendship, and the pursuit of excellence.
            </p>
            <p className="about-text-reveal">
              This digital yearbook is more than just a record; it's a living memory of the nights we spent studying, the laughter we shared in the quad, and the bonds that will never be broken.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto mt-24 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0">
            <AnimatedCounter value={2025} label="Batch Year" />
            <AnimatedCounter value="450+" label="Graduates" />
            <AnimatedCounter value={12} label="Departments" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Pillars Section */}
      <section id="pillars" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A84C] mb-6">Faculty & Staff</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-none">Pillars of Dreams</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {FACULTY.map((f, i) => (
              <div key={i} className="faculty-card bg-[#0a0a0a] p-10 md:p-14 lg:p-16 hover:bg-[#111] transition-colors group flex flex-col justify-between h-full">
                <div>
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#C9A84C]/30 overflow-hidden mb-8 md:mb-10 group-hover:scale-110 group-hover:border-[#C9A84C] transition-all duration-500">
                    <img 
                      src={f.image} 
                      alt={f.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{f.name}</h3>
                  <p className="text-[#C9A84C] text-[10px] md:text-xs uppercase tracking-widest mb-6">{f.role}</p>
                </div>
                <p className="text-white/40 text-xs md:text-sm mt-auto pt-6 border-t border-white/10">{f.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-6 md:px-12 lg:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <MagneticElement>
          <div className="text-xl md:text-2xl font-bold tracking-tighter uppercase cursor-pointer hover:text-[#C9A84C] transition-colors" onClick={() => scrollTo("home")}>Legacy '25</div>
        </MagneticElement>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {NAV_LINKS.map(link => (
            <MagneticElement key={link}>
              <button onClick={() => scrollTo(link.toLowerCase().replace(/ /g, "-"))} className="nav-link-hover text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                {link}
              </button>
            </MagneticElement>
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 text-center md:text-right">
          © 2025 Digital Yearbook<br className="hidden md:block" /> Built for the Class of 2025
        </p>
      </footer>
    </div>
  );
}
