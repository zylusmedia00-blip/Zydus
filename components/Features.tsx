
import React from 'react';

const FEATURE_ITEMS = [
  {
    title: "Website Design",
    description: "Lightning-fast, high-converting websites that represent your brand's heritage in a modern digital frame.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: "Social Media Marketing",
    description: "Tailored content production that tells your story where your customers are already hanging out.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    )
  }
];

export const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl text-left">
            <h2 className="text-white/40 font-black tracking-widest uppercase text-[10px] mb-6">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Everything your brand needs <br/><span className="text-slate-500">to dominate online.</span></h3>
          </div>
          <p className="text-slate-400 max-w-sm text-base md:text-lg font-medium">
            We handle the tech and the marketing, so you can focus on running your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURE_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 rounded-[2rem] linear-gradient-border backdrop-blur-sm hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h4>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">{item.description}</p>
              </div>
              
              <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
