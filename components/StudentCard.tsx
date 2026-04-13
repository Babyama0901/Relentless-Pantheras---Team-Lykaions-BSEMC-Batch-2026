import { getAssetPath } from './utils';

export interface StudentInfo {
  id: string;
  firstName: string;
  lastName: string;
  role?: string;
  image?: string;
}

interface StudentCardProps {
  student: StudentInfo;
}

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-[#6E00FF]/50 bg-[#1A1A1A] group hover:border-[#6E00FF] transition-colors duration-300">
      
      {/* Background logo watermark */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center grayscale"
        style={{
          background: 'radial-gradient(circle at center, rgba(110,0,255,0.2) 0%, transparent 70%)'
        }}
      >
        <span className="font-formula text-9xl">L</span>
      </div>

      {/* Main Picture */}
      <div className="absolute inset-[4px] bottom-16 rounded-t-[8px] overflow-hidden bg-[#222]">
        {student.image ? (
           // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={getAssetPath(student.image)} 
            alt={student.firstName}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-30">
            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Bottom Name Plate */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#6E00FF] to-[#6E00FF]/80 flex flex-col items-center justify-center px-4 overflow-hidden">
        {student.role && (
          <span className="absolute top-1 text-[8px] uppercase font-formula tracking-widest text-white/50">
            {student.role}
          </span>
        )}
        <div className="relative w-full flex items-center justify-center mt-2 text-center">
            <span className="font-formula font-bold text-lg md:text-xl text-white uppercase tracking-wider relative z-10">
              {student.lastName}
            </span>
            <span 
              className="absolute text-5xl opacity-40 italic text-black font-semibold whitespace-nowrap z-0 -translate-y-2 pointer-events-none select-none"
              style={{ fontFamily: "'Brush Script MT', cursive, sans-serif" }}
            >
              {student.firstName}
            </span>
        </div>
      </div>
    </div>
  );
}
