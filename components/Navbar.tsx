import React from 'react';

export const Logo: React.FC<{ light?: boolean }> = ({ light = true }) => (
  <div className="flex items-center gap-4 cursor-pointer select-none">
    {/* Visual "ZS" Brand Mark - Animations removed */}
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Outer frame - now static */}
      <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
      
      {/* Background and neutral border */}
      <div className="absolute inset-1.5 bg-[#0d0c12] border border-white/10 rounded-lg shadow-2xl"></div>
      
      {/* The Letters ZS - Now static */}
      <div className="relative z-10 flex items-baseline translate-y-[1px]">
        <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-black'}`}>
          Z
        </span>
        <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-black'}`}>
          S
        </span>
      </div>
    </div>
    
    <div className="flex flex-col items-start leading-none">
      <span className={`text-2xl font-logo-main tracking-tighter ${light ? 'text-white' : 'text-black'}`}>ZYDUS</span>
      <span className={`font-logo-sub ${light ? 'text-white/80' : 'text-black/80'} pl-0.5`}>MEDIA</span>
    </div>
  </div>
);

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-10 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="#consultation"
            className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 inline-block"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};