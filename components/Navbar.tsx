import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-10 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Text-only Branding with Spaced Out ZYDUS and MEDIA */}
          <div className="flex flex-col items-center leading-none cursor-pointer select-none group w-fit">
            <span className="text-2xl font-logo-main text-white group-hover:text-blue-500 transition-colors duration-300">ZYDUS</span>
            <span className="font-logo-sub text-white/80 -mt-1">MEDIA</span>
          </div>
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