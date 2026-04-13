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
    <div className="relative w-full aspect-[2/3] rounded-[25px] overflow-hidden border border-[#6E00FF] bg-[#1F2225] group hover:shadow-[0_0_20px_rgba(110,0,255,0.4)] transition-all duration-300 flex flex-col">
      
      {/* Background logo watermark */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={getAssetPath("/Logo/WHITE LOGO MARK.png")} 
          alt="Watermark" 
          className="w-3/4 object-contain grayscale"
        />
      </div>

      {/* Main Picture Area */}
      <div className="relative z-10 flex-1 overflow-hidden">
        {student.image ? (
           // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={getAssetPath(student.image)} 
            alt={student.firstName}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity">
            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Bottom Name Plate */}
      <div className="relative z-20 h-28 border-t border-[#6E00FF] bg-[#1F2225] flex flex-col items-center justify-center px-4 overflow-hidden">
        {student.role && (
          <span className="absolute top-2 text-[10px] uppercase font-trap tracking-widest text-[#6E00FF]">
            {student.role}
          </span>
        )}
        
        <div className="relative w-full flex items-center justify-center mt-3 text-center">
            {/* Bold Last Name */}
            <span className="font-formula font-black text-2xl md:text-3xl text-white uppercase tracking-wider relative z-10">
              {student.lastName}
            </span>
            
            {/* Cursive First Name Overlay */}
            <span className="font-script absolute text-[50px] leading-none text-white opacity-40 z-20 pointer-events-none select-none drop-shadow-sm transform -translate-y-2 origin-center">
              {student.firstName}
            </span>
        </div>
      </div>
    </div>
  );
}
