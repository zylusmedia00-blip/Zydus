
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 bg-[#08070b] relative overflow-hidden">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="flex flex-col items-center leading-none mb-4">
            <span className="text-4xl font-black tracking-tighter text-white uppercase">ZYDUS</span>
            <span className="text-[11px] font-medium text-white/60 tracking-[0.5em] mt-1 uppercase">MEDIA</span>
          </div>
        </div>

        {/* Contact Actions - Email only */}
        <div className="mb-12">
          <a 
            href="mailto:contact@zydusmedia.com" 
            className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/5 bg-[#0d0c12] hover:border-blue-500/50 transition-all group"
          >
            <svg className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-[11px] font-black tracking-widest text-slate-300">contact@zydusmedia.com</span>
          </a>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#" className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/5 bg-white/5 hover:border-white/20 transition-all text-[10px] font-black uppercase tracking-widest text-slate-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            Privacy Policy
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/5 bg-white/5 hover:border-white/20 transition-all text-[10px] font-black uppercase tracking-widest text-slate-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
            Refund Policy
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/5 bg-white/5 hover:border-white/20 transition-all text-[10px] font-black uppercase tracking-widest text-slate-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Terms and Conditions
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/5 w-full">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            Copyright © 2024 Zydus Media
          </p>
        </div>
      </div>
    </footer>
  );
};
