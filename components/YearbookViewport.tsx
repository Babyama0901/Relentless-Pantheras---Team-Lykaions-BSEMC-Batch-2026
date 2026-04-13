import { useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";
import StudentCard, { StudentInfo } from "./StudentCard";

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
    <div className="fixed inset-0 z-[60] bg-[#0A0A0A] overflow-y-auto w-full h-[100dvh]">
      {/* Background Dots */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Header Controls */}
      <div className="sticky top-0 z-20 w-full px-6 py-4 flex items-center justify-between bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#6E00FF]/20">
        <button 
          onClick={onClose}
          className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Return to previous section"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-formula uppercase text-xs tracking-widest hidden sm:block">Return</span>
        </button>

        <button 
          onClick={onClose}
          className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Close viewport"
        >
          <span className="font-formula uppercase text-xs tracking-widest hidden sm:block">Close</span>
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col items-center">
        
        {/* Title Header */}
        <div className="text-center mb-20 flex flex-col items-center gap-4">
          <p className="font-trap text-xs font-semibold uppercase tracking-[0.45em] text-[#6E00FF]">
            Relentless Pantheras · BSEMC
          </p>
          <h1 
            className="font-formula uppercase leading-[0.9] text-white text-5xl md:text-7xl lg:text-8xl"
            style={{ textShadow: "0 0 40px rgba(110,0,255,0.3)" }}
          >
            TEAM <br className="md:hidden" />
            <span className="text-[#6E00FF]">LYKAIONS</span>
          </h1>
          <div className="w-24 h-1 bg-[#6E00FF] mt-6" />
        </div>

        {/* Section: Young Nobles */}
        <div className="w-full mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-formula text-2xl md:text-3xl uppercase tracking-wider text-white">
              Young Nobles <span className="text-white/40">of BSEMC 2026</span>
            </h2>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {YOUNG_NOBLES.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>

        {/* Section: OG & UNC */}
        <div className="w-full mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-formula text-2xl md:text-3xl uppercase tracking-wider text-white">
              OG and UNC <span className="text-white/40">of BSEMC 2026</span>
            </h2>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {OG_UNC.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>

      </div>

      {/* Footer Branding Area */}
      <div className="w-full py-8 border-t border-[#6E00FF]/20 bg-[#6E00FF]/5 flex items-center justify-center">
         <p className="font-formula text-sm uppercase tracking-widest text-[#6E00FF]/50">
            Batch 2026 · The Final Chapter
         </p>
      </div>

    </div>
  );
}
