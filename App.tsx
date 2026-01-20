import React, { useState, useEffect } from 'react';
import { supabase } from './supabase.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { Showcase } from './components/Showcase.tsx';
import { Consultation } from './components/Consultation.tsx';
import { ContactForm } from './components/ContactForm.tsx';
import { Footer } from './components/Footer.tsx';
import { Stats } from './components/Stats.tsx';
import { Testimonials } from './components/Testimonials.tsx';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-500/20 selection:text-white bg-[#08070b]">
      {/* 1. Grain Texture */}
      <div className="bg-grain" />

      {/* 2. Background Elements with Masking to prevent edge flickering */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-mask-container overflow-hidden">
        {/* Grid Pattern Base */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Deep Atmospheric Blobs */}
        <div className="morph-blob" style={{ top: '15%', left: '15%' }} />
        <div className="morph-blob" style={{ bottom: '15%', right: '15%', animationDuration: '25s', animationDelay: '-5s' }} />

        {/* Floating Tech Orbs */}
        <div className="floating-orb" style={{ top: '20%', left: '80%', animation: 'float-orb 15s ease-in-out infinite' }} />
        <div className="floating-orb" style={{ top: '70%', left: '10%', animation: 'float-orb 18s ease-in-out infinite -4s' }} />
        <div className="floating-orb" style={{ top: '40%', left: '45%', width: '100px', height: '100px', animation: 'float-orb 12s ease-in-out infinite -2s' }} />

        {/* Pulsing Data Nodes */}
        {[
          { t: '160px', l: '160px', d: '0s' },
          { t: '160px', l: '800px', d: '1s' },
          { t: '480px', l: '320px', d: '2.5s' },
          { t: '720px', l: '1040px', d: '1.5s' },
          { t: '840px', l: '120px', d: '0.5s' }
        ].map((node, i) => (
          <div 
            key={i}
            className="data-node"
            style={{ 
              top: node.t, 
              left: node.l, 
              animation: `pulse-node 4s ease-in-out infinite ${node.d}` 
            }} 
          />
        ))}

        {/* Scanning Lazer Beams - Positioned relative to top 0 to avoid coordinate jumps */}
        <div className="lazer-beam-h" style={{ animation: 'lazer-h 16s linear infinite', top: '0' }} />
        <div className="lazer-beam-h" style={{ animation: 'lazer-h 22s linear infinite 5s', top: '0', opacity: 0.15 }} />
        <div className="lazer-beam-v" style={{ animation: 'lazer-v 20s linear infinite 8s', left: '0', opacity: 0.2 }} />
      </div>

      {/* Main Content Layout */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <Showcase />
        <Testimonials />
        <div id="consultation">
          <Consultation />
        </div>
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;