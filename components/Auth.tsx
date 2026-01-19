
import React, { useState } from 'react';
import { supabase } from '../supabase';

interface AuthProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onClose, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signUpError) throw signUpError;
        alert('Check your email for the confirmation link!');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40 animate-fade-in">
      <div className="relative w-full max-w-md bg-[#08070b] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
        {/* Subtle glow effect inside modal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10">
          <h2 className="text-3xl font-black tracking-tighter uppercase mb-2 text-white">
            {isSignUp ? 'Join Zydus' : 'Welcome Back'}
          </h2>
          <p className="text-slate-400 text-sm mb-8 font-medium">
            {isSignUp ? 'Create an account to manage your digital presence.' : 'Enter your credentials to access your dashboard.'}
          </p>

          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Email Address</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" 
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Password</label>
              <input 
                required
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" 
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                {error}
              </p>
            )}

            <button 
              disabled={loading}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
