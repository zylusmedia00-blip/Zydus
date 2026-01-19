
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Vikram Singh",
    company: "Royal Heritage Textiles",
    text: "Our family business had zero online presence for decades. Zydus Media didn't just build a website; they captured the soul of our craft. Their social content strategy has brought a new generation of customers through our doors. A total game changer for heritage brands.",
    rating: 5
  },
  {
    name: "Ananya Sharma",
    company: "Elite Marble & Granite",
    text: "Transitioning to digital felt overwhelming until we met the Zydus team. They handled everything from our premium web portal to our daily digital engagement. We've seen a 40% increase in high-intent inquiries since launching. They truly understand the offline business mindset.",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
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
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-20 tracking-tight uppercase">
          What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e91e63] to-[#9c27b0]">Clients</span> Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="relative bg-white rounded-2xl p-10 flex flex-col md:flex-row gap-8 shadow-2xl overflow-hidden"
            >
              {/* Pink accent bar on left */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#e91e63]" />
              
              <div className="flex-shrink-0 min-w-[140px]">
                <h4 className="text-slate-900 font-bold text-lg mb-1">{testimonial.name}</h4>
                <p className="text-slate-400 text-sm font-medium">{testimonial.company}</p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-slate-600 italic text-lg leading-relaxed mb-6 font-medium">
                  "{testimonial.text}"
                </p>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
