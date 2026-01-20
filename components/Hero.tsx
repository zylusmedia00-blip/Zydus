
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Digital Space Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        {/* Deep gradient overlay to blend into the dark theme and provide readability for left-aligned text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08070b] via-[#08070b]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08070b] via-transparent to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-32 md:pt-40">
        <div className="max-w-3xl text-left">
          {/* Brand-colored Tagline - increased mb-4 to mb-10 */}
          <div className="opacity-0 animate-fade-in-up">
            <span className="text-blue-500 font-bold text-lg md:text-xl tracking-tight mb-10 block uppercase">
              Zydus Media: Digital Transformation Agency
            </span>
          </div>

          {/* Main Headline - increased mb-8 to mb-14 */}
          <div className="opacity-0 animate-fade-in-up delay-100">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-14 leading-[1] text-white">
              Legacy Brands <br />
              Go Digital.
            </h1>
          </div>
          
          {/* Description Text */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium mb-12">
              We transform traditional offline businesses into digital powerhouses. 
              Expert web design and strategic social content for brands that value quality.
            </p>
          </div>

          {/* Call to Action Button - Pill shape with arrow as per reference */}
          <div className="opacity-0 animate-fade-in-up delay-300">
            <a 
              href="#consultation"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 hover:border-blue-500 text-white rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-bold uppercase tracking-widest">Schedule a Free Call</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative line at the bottom to match the tech aesthetic */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};
