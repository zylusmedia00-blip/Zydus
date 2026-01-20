import React from 'react';

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    company: "Mehta Analytics (SaaS)",
    text: "Scaling a B2B SaaS platform requires more than just code; it requires a digital identity that commands authority. Zydus Media completely overhauled our user acquisition funnel and brand narrative. Since launching our new platform, our trial-to-paid conversion rate has jumped. They are the architects of modern tech growth.",
    rating: 5
  },
  {
    name: "Saira Khan",
    company: "Khan Heritage Carpets",
    text: "Moving our physical gallery to a digital platform was daunting. Zydus handled everything—from the high-resolution asset management to the social strategy that now drives our new leads. They bridge the gap between traditional craftsmanship and modern marketing like nobody else.",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-blue-500 fill-current' : 'text-slate-800'}`} 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#08070b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-white/40 font-black tracking-widest uppercase text-[10px] mb-6">Client Feedback</h2>
          <h3 className="text-4xl md:text-6xl font-black text-center text-white tracking-tighter uppercase leading-[0.9]">
            What Our <span className="text-blue-500">Clients</span> Say
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="relative group linear-gradient-border rounded-[2rem] p-10 flex flex-col md:flex-row gap-8 backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Blue accent bar on left to replace the pink one */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500/30 group-hover:bg-blue-500 transition-colors duration-500" />
              
              <div className="flex-shrink-0 min-w-[160px]">
                <h4 className="text-white font-black text-xl mb-1 tracking-tight">{testimonial.name}</h4>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{testimonial.company}</p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-slate-400 italic text-lg leading-relaxed mb-6 font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <StarRating rating={testimonial.rating} />
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C9.12154 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12154 23 8.01697 23H5.01697C3.9124 23 3.01697 22.1046 3.01697 21ZM11.017 2H21.017V14H11.017V2ZM0 2H10V14H0V2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};