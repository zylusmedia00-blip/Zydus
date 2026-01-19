
import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:gap-4">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
            <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">3x</div>
            <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">Revenue Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};
