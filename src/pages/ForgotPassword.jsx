import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import config from '../config';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${config.API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Check your email (and console) for the reset link!');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Could not connect to the server');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#EF4444]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-[100px]"></div>

      <div className="w-full max-w-md relative z-10">
        <Link to="/login" className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Back to Login</span>
        </Link>

        <div className="bg-[#1a1a1a] border border-[#2D2D2D] rounded-3xl p-8 shadow-2xl">
          <div className="w-16 h-16 bg-[#EF4444]/10 rounded-2xl flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-[#EF4444]" />
          </div>

          <h1 className="text-3xl font-black mb-2 uppercase italic tracking-tight">Forgot <span className="text-[#EF4444]">Password?</span></h1>
          <p className="text-[#9CA3AF] mb-8 leading-relaxed">Enter your email address and we'll send you a link to reset your password.</p>

          {message ? (
            <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl p-6 text-center animate-in zoom-in-95 duration-300">
              <CheckCircle className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">Email Sent!</h3>
              <p className="text-sm text-[#10B981] mb-6">{message}</p>
              <Link 
                to="/login"
                className="inline-block w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#10B981]/20"
              >
                Return to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl p-4 flex items-center gap-3 animate-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5 text-[#EF4444]" />
                  <p className="text-sm text-[#EF4444] font-medium">{error}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#444] group-focus-within:text-[#EF4444] transition-colors" />
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#EF4444] transition-all font-medium"
                    placeholder="Enter your registered email"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-black py-4 rounded-xl shadow-xl shadow-[#EF4444]/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Send Reset Link
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-[#444] font-bold uppercase tracking-widest">
          Remembered your password? <Link to="/login" className="text-[#EF4444] hover:underline ml-1">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
