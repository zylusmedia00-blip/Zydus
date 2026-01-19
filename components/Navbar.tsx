
import React, { useState, useEffect } from 'react';

export const Logo: React.FC<{ light?: boolean }> = ({ light = true }) => (
  <div className="flex flex-col items-start leading-none group cursor-pointer select-none">
    <span className={`text-2xl font-logo-main tracking-tighter ${light ? 'text-white' : 'text-black'} group-hover:translate-x-0.5 transition-transform duration-300`}>ZYDUS</span>
    <span className={`font-logo-sub ${light ? 'text-white/80' : 'text-black/80'} pl-0.5`}>MEDIA</span>
  </div>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4 backdrop-blur-xl bg-[#08070b]/95 border-b border-white/10' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
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
