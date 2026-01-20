import React from 'react';

export const Logo: React.FC<{ light?: boolean }> = ({ light = true }) => (
  <div className="flex items-center gap-3 group cursor-pointer select-none">
    {/* Visual Brand Mark */}
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-blue-500 rounded-lg rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-500"></div>
      <svg className="w-6 h-6 text-blue-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    
    <div className="flex flex-col items-start leading-none">
      <span className={`text-2xl font-logo-main tracking-tighter ${light ? 'text-white' : 'text-black'} group-hover:translate-x-0.5 transition-transform duration-300`}>ZYDUS</span>
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