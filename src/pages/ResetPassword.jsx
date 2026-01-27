import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import config from '../config';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${config.API_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError(data.message || 'Reset link may be invalid or expired');
      }
    } catch (err) {
      setError('Could not connect to the server');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#EF4444]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-[100px]"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#1a1a1a] border border-[#2D2D2D] rounded-3xl p-8 shadow-2xl">
          <div className="w-16 h-16 bg-[#EF4444]/10 rounded-2xl flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-[#EF4444]" />
          </div>

          <h1 className="text-3xl font-black mb-2 uppercase italic tracking-tight">Set New <span className="text-[#EF4444]">Password</span></h1>
          <p className="text-[#9CA3AF] mb-8 leading-relaxed">Choose a strong password to secure your account and continue your journey.</p>

          {isSuccess ? (
            <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl p-6 text-center animate-in zoom-in-95 duration-300">
              <CheckCircle className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">Success!</h3>
              <p className="text-sm text-[#10B981] mb-6">Your password has been reset successfully. You can now log in with your new password.</p>
              <button 
                onClick={() => navigate('/login')}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#10B981]/20 flex items-center justify-center gap-2"
              >
                Go to Login
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl p-4 flex items-center gap-3 animate-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5 text-[#EF4444]" />
                  <p className="text-sm text-[#EF4444] font-medium">{error}</p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-2 ml-1">New Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#444] group-focus-within:text-[#EF4444] transition-colors" />
                    <input 
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-4 pl-12 pr-12 focus:outline-none focus:border-[#EF4444] transition-all font-medium"
                      placeholder="At least 6 characters"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#444] hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-2 ml-1">Confirm Password</label>
                  <div className="relative group">
                    <CheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#444] group-focus-within:text-[#EF4444] transition-colors" />
                    <input 
                      type={showPassword ? "text" : "password"}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#EF4444] transition-all font-medium"
                      placeholder="Repeat your password"
                    />
                  </div>
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
                    Reset Password
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
