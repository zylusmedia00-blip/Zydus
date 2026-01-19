
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative px-6 pt-32 md:pt-52 pb-20 md:pb-32 overflow-hidden">
      {/* Hero Backdrop Decoration */}
      <div className="hero-backdrop-glow pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05] uppercase">
            Legacy Brands <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600">
              Go Digital.
            </span>
          </h1>
        </div>
        
        <div className="opacity-0 animate-fade-in-up delay-200">
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            We transform traditional offline businesses into digital powerhouses. 
            Expert web design and strategic social content for brands that value quality.
          </p>
        </div>

        {/* Subtle decorative line */}
        <div className="opacity-0 animate-fade-in-up delay-400 mt-16 w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto" />
      </div>
    </section>
  );
};
