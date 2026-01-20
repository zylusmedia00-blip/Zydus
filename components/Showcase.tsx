import React from 'react';

const CASE_STUDIES = [
  {
    brand: "Aura Interiors",
    sector: "Interior Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  },
  {
    brand: "NexaFlow Systems",
    sector: "Technology & SaaS",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    brand: "Vanguard Realty",
    sector: "Real Estate",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
  },
  {
    brand: "Apex Motors",
    sector: "Automotive & EV",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    brand: "Paws & Pour",
    sector: "Hospitality & Pet Friendly",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
  }
];

export const Showcase: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-[#0a090f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Results that speak <span className="text-white/40">louder.</span></h2>
          <p className="text-slate-400 text-base md:text-lg font-medium">Transforming legacy brands and scaling modern industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/5 bg-[#08070b]">
              <img 
                src={study.image} 
                alt={study.brand} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 opacity-40 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08070b] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {study.sector}
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {study.brand}
                </h4>
                
                <button className="mt-6 w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-[9px] rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};