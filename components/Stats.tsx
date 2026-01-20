import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#0a090f]/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background flare for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center">
          {/* Stat 1 */}
          <div className="text-center group md:border-r border-white/5 last:border-0 px-4">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
              98%
            </div>
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] mb-1">
              Client Satisfaction
            </div>
            <div className="w-8 h-0.5 bg-blue-500/20 mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
          </div>

          {/* Stat 2 */}
          <div className="text-center group md:border-r border-white/5 last:border-0 px-4">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
              3x
            </div>
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] mb-1">
              Revenue Growth
            </div>
            <div className="w-8 h-0.5 bg-blue-500/20 mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
          </div>

          {/* Stat 3 */}
          <div className="text-center group px-4">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
              500K+
            </div>
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] mb-1">
              Organic Reach
            </div>
            <div className="w-8 h-0.5 bg-blue-500/20 mx-auto rounded-full group-hover:w-16 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};