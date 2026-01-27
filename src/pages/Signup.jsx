import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import config from '../config';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import GoogleLoginButton from '../components/GoogleLoginButton';
import Logo from '../components/Logo';

const Signup = () => {
  const navigate = useNavigate();
  const { login, loginWithUser, registerWithEmail } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms of Service');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      await registerWithEmail(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#A855F7] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#EF4444] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#1a1a1a] border border-[#2D2D2D] rounded-2xl p-8 shadow-2xl shadow-black/50 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            <Logo size={40} className="group-hover:scale-105 transition-transform" />
            <span className="text-xl font-black tracking-tight">
              learn<span className="text-[#EF4444]">Code</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-[#9CA3AF]">Start your coding journey today</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0" />
            <p className="text-sm text-[#EF4444]">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] group-focus-within:text-[#EF4444] transition-colors" />
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all placeholder-[#4B5563]"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] group-focus-within:text-[#EF4444] transition-colors" />
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all placeholder-[#4B5563]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] group-focus-within:text-[#EF4444] transition-colors" />
              <input 
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3.5 pl-12 pr-12 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all placeholder-[#4B5563]"
                placeholder="Create a password (min 6 chars)"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 py-1">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                className="w-4 h-4 rounded border-[#2D2D2D] bg-[#0d0d0d] text-[#EF4444] focus:ring-[#EF4444] focus:ring-offset-0 focus:ring-offset-[#1a1a1a]"
              />
            </div>
            <label htmlFor="terms" className="text-sm text-[#9CA3AF]">
              I agree to the <Link to="/terms" className="text-[#EF4444] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#EF4444] hover:underline">Privacy Policy</Link>
            </label>
          </div>

          {/* Primary Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-[#EF4444]/25 hover:shadow-[#EF4444]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                Sign Up
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        {config.GOOGLE_CLIENT_ID && (
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#2D2D2D]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1a1a1a] text-[#6B7280]">Or join with</span>
            </div>
          </div>
        )}

        {/* Social Buttons */}
        {config.GOOGLE_CLIENT_ID && (
          <div className="space-y-3">
            <GoogleLoginButton onError={setError} isLoading={isLoading} />
          </div>
        )}

        {/* Footer */}
        <p className="mt-8 text-center text-[#9CA3AF] text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-[#EF4444] hover:text-[#DC2626] font-bold transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
