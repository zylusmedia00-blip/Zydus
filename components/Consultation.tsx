
import React from 'react';

export const Consultation: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#08070b]">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-8 text-white uppercase">
          Get Your Free <span className="text-blue-500">Strategy</span> <br className="hidden md:block" /> Consultation
        </h2>
        <p className="text-slate-400 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed mb-12">
          Book a free 30-minute session to discuss your brand's digital transition. We'll map out a bespoke plan for your website and social media presence to turn your offline legacy into an online powerhouse.
        </p>

        {/* Clickable Call-to-Action Section */}
        <div className="flex flex-col items-center">
          <a 
            href="https://calendly.com/zydusmedia/30min?back=1&month=2026-01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex flex-col items-center transition-all duration-500"
          >
            {/* Pulsing background effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-75 group-hover:scale-125 transition-transform duration-700 opacity-50" />
            
            <div className="relative px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-blue-500/25 group-active:scale-95">
              Schedule My Free Call
              <div className="mt-1 w-full h-px bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </a>
        </div>
        
        {/* Subtle indicator */}
        <div className="mt-24 w-16 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto rounded-full" />
      </div>
    </section>
  );
};
