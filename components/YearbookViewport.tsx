import { useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";
import StudentCard, { StudentInfo } from "./StudentCard";
import { getAssetPath } from "./utils";

interface YearbookViewportProps {
  onClose: () => void;
}

const YOUNG_NOBLES: StudentInfo[] = [
  { id: "yn1", firstName: "Mel Joseph", lastName: "Cunanan", role: "Developer" },
  { id: "yn2", firstName: "John", lastName: "Doe", role: "Designer" },
  { id: "yn3", firstName: "Jane", lastName: "Smith", role: "Artist" },
  { id: "yn4", firstName: "Alex", lastName: "Johnson", role: "Animator" },
  { id: "yn5", firstName: "Sam", lastName: "Williams", role: "Writer" },
  { id: "yn6", firstName: "Chris", lastName: "Brown", role: "Producer" },
];

const OG_UNC: StudentInfo[] = [
  { id: "og1", firstName: "Mark", lastName: "Zuckerberg", role: "Alumni" },
  { id: "og2", firstName: "Elon", lastName: "Musk", role: "Alumni" },
  { id: "og3", firstName: "Steve", lastName: "Jobs", role: "Alumni" },
  { id: "og4", firstName: "Bill", lastName: "Gates", role: "Alumni" },
];

export default function YearbookViewport({ onClose }: YearbookViewportProps) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] bg-[#05000A] overflow-y-auto w-full h-[100dvh] hide-scrollbar">
      
      {/* ── Background Image (If it matches hero, we use a dark base or image) ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(120deg, rgba(66,0,153,0.3) 0%, rgba(110,0,255,0.05) 50%, #05000A 100%)",
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ── Dark vignette edges ── */}
      <div
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(5,0,10,0.9) 100%)",
        }}
      />


      {/* Header Controls */}
      <div className="sticky top-0 z-20 w-full px-6 py-6 flex items-center justify-between pointer-events-none">
        <button 
          onClick={onClose}
          className="pointer-events-auto group flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-[#05000A]/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          aria-label="Return to previous section"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-formula uppercase text-xs tracking-widest hidden sm:block mt-0.5">Return</span>
        </button>

        <button 
          onClick={onClose}
          className="pointer-events-auto group flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-[#05000A]/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          aria-label="Close viewport"
        >
          <span className="font-formula uppercase text-xs tracking-widest hidden sm:block mt-0.5">Close</span>
          <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-6 py-4 md:py-12 flex flex-col items-center">
        
        {/* Title Header with Logo */}
        <div className="text-center mb-24 flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={getAssetPath("/Logo/WHITE LOGO MARK.png")} 
              alt="Lykaions Logo" 
              className="w-16 h-16 object-contain opacity-80"
              style={{ filter: "drop-shadow(0 0 10px rgba(110,0,255,0.8))" }}
            />
          </div>
          <p className="font-trap text-xs md:text-sm font-semibold uppercase tracking-[0.45em] text-white/60">
            Relentless Pantheras · BSEMC
          </p>
          <h1 
            className="font-formula uppercase leading-[0.88] text-white"
            style={{ 
              fontSize: "clamp(3rem, 6vw, 6rem)",
              textShadow: "0 0 40px rgba(110,0,255,0.4)" 
            }}
          >
            TEAM <br className="md:hidden" />
            <span className="text-[#6E00FF]">LYKAIONS</span>
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#6E00FF] to-transparent mt-4" />
        </div>

        {/* Section: Young Nobles (3 Column Grid) */}
        <div className="w-full max-w-6xl mb-32">
          <div className="flex flex-col items-center gap-4 mb-16">
            <h2 className="font-formula text-3xl md:text-4xl uppercase tracking-widest text-[#6E00FF] text-center"
                style={{ textShadow: "0 0 20px rgba(110,0,255,0.5)" }}>
              Young Nobles
            </h2>
            <p className="font-trap text-sm uppercase tracking-[0.3em] text-white/50">
              of BSEMC 2026
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {YOUNG_NOBLES.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>

        {/* Section: OG & UNC (2 Column Grid) */}
        <div className="w-full max-w-4xl mb-24">
           <div className="flex flex-col items-center gap-4 mb-16">
            <h2 className="font-formula text-3xl md:text-4xl uppercase tracking-widest text-[#6E00FF] text-center"
                style={{ textShadow: "0 0 20px rgba(110,0,255,0.5)" }}>
              OG and UNC
            </h2>
            <p className="font-trap text-sm uppercase tracking-[0.3em] text-white/50">
              of BSEMC 2026
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 max-w-3xl mx-auto">
            {OG_UNC.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>

      </div>

      {/* Footer Branding Area */}
      <div className="relative z-10 w-full py-12 bg-gradient-to-t from-[#6E00FF]/10 to-transparent flex flex-col items-center justify-center gap-4">
         <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6E00FF]/30 to-transparent absolute top-0" />
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img 
            src={getAssetPath("/Logo/WHITE LOGO MARK.png")} 
            alt="Lykaions Logo Mini" 
            className="w-8 h-8 object-contain opacity-40 mb-2"
          />
         <p className="font-formula text-[10px] uppercase tracking-[0.4em] text-white/40">
            Batch 2026 · The Final Chapter
         </p>
      </div>

    </div>
  );
}
