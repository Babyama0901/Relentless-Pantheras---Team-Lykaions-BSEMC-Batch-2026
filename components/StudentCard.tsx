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
    <div className="relative w-full aspect-[3/4] rounded-[25px] overflow-hidden border border-[#6E00FF] bg-gradient-to-b from-[#3C434B] to-[#4A555B] group transition-all duration-300 shadow-[0_0_15px_rgba(110,0,255,0.2)] hover:shadow-[0_0_30px_rgba(110,0,255,0.5)]">
      
      {/* Background logo watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={getAssetPath("/Logo/WHITE LOGO MARK.png")} 
          alt="Watermark" 
          className="w-3/5 h-3/5 object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))" }}
        />
      </div>

      {/* Dotted pattern overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Main Picture */}
      <div className="absolute inset-0 bottom-[60px] z-10 flex items-end justify-center overflow-hidden">
        {student.image ? (
           // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={getAssetPath(student.image)} 
            alt={student.firstName}
            className="w-full h-full object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-30 pb-10">
            <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Bottom Name Plate */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#6F01FF] border-t border-[#6E00FF] flex flex-col items-center justify-center z-20">
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Last Name (Block font) */}
            <span className="font-formula font-black text-xl md:text-2xl text-white uppercase tracking-widest relative z-10 mt-1">
              {student.lastName}
            </span>
            
            {/* First Name (Script font overlay) */}
            <span 
              className="font-script absolute text-4xl md:text-5xl text-[#0F0014] opacity-50 whitespace-nowrap z-0 -translate-y-2 lg:-translate-y-3 pointer-events-none select-none tracking-normal"
            >
              {student.firstName}
            </span>
        </div>
      </div>
    </div>
  );
}
