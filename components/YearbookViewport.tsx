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
    <div className="fixed inset-0 z-[60] bg-[#090909] overflow-y-auto w-full h-[100dvh]">
      
      {/* Header Controls */}
      <div className="sticky top-0 z-50 w-full px-8 py-5 flex items-center justify-between bg-[#090909]/90 backdrop-blur-lg border-b border-[#6E00FF]/30">
        <button 
          onClick={onClose}
          className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
          aria-label="Return to previous section"
        >
          <ArrowLeft size={22} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
          <span className="font-trap uppercase text-sm tracking-[0.2em] hidden sm:block font-bold">Return</span>
        </button>

        <button 
          onClick={onClose}
          className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
          aria-label="Close viewport"
        >
          <span className="font-trap uppercase text-sm tracking-[0.2em] hidden sm:block font-bold">Close</span>
          <X size={26} className="group-hover:rotate-90 transition-transform duration-500" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-20 flex flex-col items-center">
        
        {/* Title Header */}
        <div className="text-center mb-28 flex flex-col items-center gap-6">
          <p className="font-trap text-sm font-bold uppercase tracking-[0.5em] text-white">
            Relentless Pantheras · BSEMC
          </p>
          <h1 
            className="font-formula uppercase leading-[0.85] text-white text-6xl md:text-8xl lg:text-9xl tracking-tighter"
            style={{ textShadow: "0 0 60px rgba(110,0,255,0.4)" }}
          >
            TEAM <br className="md:hidden" />
            <span className="text-[#6E00FF]">LYKAIONS</span>
          </h1>
        </div>

        {/* Section: Young Nobles */}
        <div className="w-full mb-32">
          <div className="flex items-center gap-6 mb-16 w-full">
            <h2 className="font-formula text-3xl md:text-4xl uppercase tracking-widest text-[#6E00FF] whitespace-nowrap">
              Young Nobles <span className="text-white/30 text-2xl md:text-3xl">OF BSEMC 2026</span>
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-[#6E00FF] to-transparent flex-1 opacity-50" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {YOUNG_NOBLES.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>

        {/* Section: OG & UNC */}
        <div className="w-full mb-20">
           <div className="flex items-center gap-6 mb-16 w-full">
            <h2 className="font-formula text-3xl md:text-4xl uppercase tracking-widest text-[#6E00FF] whitespace-nowrap">
              OG and UNC <span className="text-white/30 text-2xl md:text-3xl">OF BSEMC 2026</span>
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-[#6E00FF] to-transparent flex-1 opacity-50" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl">
            {OG_UNC.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>

      </div>

      {/* Footer Branding Area */}
      <div className="w-full py-10 bg-[#6E00FF]/10 flex flex-col items-center justify-center border-t-2 border-[#6E00FF]/30 mt-auto">
         <h3 className="font-formula text-2xl text-white uppercase tracking-[0.3em] opacity-80 mb-2">Team Lykaions</h3>
         <p className="font-trap text-xs uppercase tracking-[0.4em] text-[#6E00FF]">
            Batch 2026 · The Final Chapter
         </p>
      </div>

    </div>
  );
}
