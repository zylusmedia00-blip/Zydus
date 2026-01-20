import React, { useState } from 'react';
import { supabase } from '../supabase.ts';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    service: 'What service are you interested in?'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('contact_inquiries')
        .insert([
          { 
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service === 'What service are you interested in?' ? 'General' : formData.service,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        company: '',
        service: 'What service are you interested in?'
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 bg-[#08070b]">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-white">Message Received!</h2>
          <p className="text-slate-400 text-lg mb-10">We've received your inquiry and will reach out to you shortly.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-[#08070b]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-white leading-[1.1]">
            Get in touch with <br /> <span className="text-blue-500">us!</span>
          </h2>
        </div>

        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Full Name *</label>
              <input 
                required
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700" 
                placeholder="Enter your name"
              />
            </div>
            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Email Address *</label>
              <input 
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700" 
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Contact Number *</label>
              <input 
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700" 
                placeholder="Enter your phone"
              />
            </div>
            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Company / Brand Name *</label>
              <input 
                required
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700" 
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Select Service *</label>
            <div className="relative">
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#0d0c12] border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
              >
                <option disabled>What service are you interested in?</option>
                <option value="Website Design">Website Design</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Full Digital Transformation">Full Digital Transformation</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest text-center md:text-left">{error}</p>
          )}

          <div className="flex justify-center md:justify-start">
            <button 
              disabled={loading}
              className={`px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full transition-all transform hover:scale-105 active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};