import React from 'react';
import { Banana } from 'lucide-react';

const LogoTicker: React.FC = () => {
  const logos = [
    {
      name: "Cursor",
      isComponent: true,
      component: (
        <div className="flex items-center gap-3">
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="black" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M10.5 7.5L14.5 16.5L11.5 13.5L8.5 16.5L10.5 7.5Z" fill="white" transform="translate(0.5, 0)"/>
           </svg>
           <span className="font-bold text-2xl tracking-widest text-black uppercase" style={{ fontFamily: 'sans-serif' }}>CURSOR</span>
        </div>
      )
    },
    {
      name: "Anti-gravity",
      isComponent: true,
      component: (
        <div className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -translate-y-1">
             <path d="M4 28C4 28 12 4 16 4C20 4 28 28 28 28" stroke="url(#antigravity_gradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
             <defs>
               <linearGradient id="antigravity_gradient" x1="4" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#4285F4"/>
                 <stop offset="0.33" stopColor="#EA4335"/>
                 <stop offset="0.66" stopColor="#FBBC05"/>
                 <stop offset="1" stopColor="#34A853"/>
               </linearGradient>
             </defs>
          </svg>
          <span className="font-bold text-2xl tracking-tight text-black">Anti-gravity</span>
        </div>
      )
    },
    {
      name: "Nano Banana",
      isComponent: true,
      component: <div className="flex items-center gap-3"><Banana className="w-8 h-8 text-[#FFE135]" /><span className="font-bold text-2xl tracking-tight text-black">Nano Banana</span></div>
    },
    { 
      name: "n8n", 
      icon: "https://cdn.simpleicons.org/n8n/FF6584", 
      isImg: true,
      withText: true
    },
    { 
      name: "DeepSeek", 
      icon: "https://avatars.githubusercontent.com/u/148330874?s=200&v=4", 
      isImg: true,
      withText: true
    },
    {
      name: "HighLevel",
      isComponent: true,
      component: (
        <div className="flex items-center gap-2">
           <div className="flex items-end gap-[1px]">
               {/* Yellow Arrow */}
               <svg width="12" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L14 7H9.5V24H4.5V7H0L7 0Z" fill="#FCC006"/>
               </svg>
               {/* Blue Arrow (Higher) */}
               <svg width="12" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                  <path d="M7 0L14 7H9.5V24H4.5V7H0L7 0Z" fill="#157EFB"/>
               </svg>
               {/* Green Arrow */}
               <svg width="12" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L14 7H9.5V24H4.5V7H0L7 0Z" fill="#27C25E"/>
               </svg>
           </div>
           <span className="font-bold text-2xl tracking-tight text-[#182C4C]">HighLevel</span>
        </div>
      )
    },
    { 
      name: "Claude AI", 
      icon: "https://cdn.simpleicons.org/anthropic/D97757", 
      isImg: true,
      withText: true
    },
    { 
      name: "OpenAI", 
      isImg: true,
      // Official logo includes text, so we don't need to add it separately
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
    },
    { 
      name: "Supabase", 
      icon: "https://cdn.simpleicons.org/supabase/3ECF8E", 
      isImg: true,
      withText: true
    },
    { 
      name: "Python", 
      icon: "https://cdn.simpleicons.org/python/3776AB", 
      isImg: true,
      withText: true
    },
    { 
      name: "Google AI Studio", 
      isComponent: true,
      component: (
         <div className="flex items-center gap-3">
             <div className="relative w-7 h-7 flex items-center justify-center">
                 <div className="absolute inset-1 border-[2.5px] border-black rounded-[4px]"></div>
                 <div className="absolute -top-1 -right-1 bg-white p-0.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                         <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
                      </svg>
                 </div>
             </div>
             <span className="font-bold text-2xl tracking-tight text-black">Google AI Studio</span>
         </div>
      )
    }
  ];

  return (
    <div className="w-full py-12 bg-white border-y border-gray-100 overflow-hidden relative">
      {/* Side Fade Masks */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap overflow-hidden mask-image-linear-gradient">
        {/* First Loop */}
        <div 
            className="flex flex-shrink-0 animate-marquee gap-24 pr-24 items-center min-w-full justify-around"
            style={{ willChange: 'transform' }}
        >
            {logos.map((logo, index) => (
                <LogoItem key={index} {...logo} />
            ))}
        </div>

        {/* Second Loop (Duplicate for seamless scroll) */}
        <div 
            className="flex flex-shrink-0 animate-marquee gap-24 pr-24 items-center min-w-full justify-around"
            style={{ willChange: 'transform' }}
        >
             {logos.map((logo, index) => (
                <LogoItem key={`dup-${index}`} {...logo} />
            ))}
        </div>
      </div>
    </div>
  );
};

interface LogoItemProps {
  name: string;
  icon?: string;
  isImg?: boolean;
  withText?: boolean;
  isComponent?: boolean;
  component?: React.ReactNode;
}

const LogoItem: React.FC<LogoItemProps> = ({ name, icon, isImg, withText, isComponent, component }) => {
  if (isComponent && component) {
    return (
      <div className="flex items-center gap-4 opacity-100 hover:opacity-80 transition-all duration-300 cursor-pointer select-none hover:scale-105 transform">
        {component}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 opacity-100 hover:opacity-80 transition-all duration-300 cursor-pointer group select-none hover:scale-105 transform">
        {isImg && icon && (
             <div className="flex items-center justify-center">
                 <img 
                    src={icon} 
                    alt={name} 
                    className="h-8 w-auto object-contain" 
                 />
             </div>
        )}
      {/* Render text if it's NOT an image-only logo OR if withText is explicitly true */}
      {(!isImg || withText) && (
        <span className="font-bold text-2xl tracking-tight text-black">{name}</span>
      )}
    </div>
  );
};

export default LogoTicker;