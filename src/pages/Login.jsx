import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import GoogleLoginButton from '../components/GoogleLoginButton';
import Logo from '../components/Logo';
import config from '../config';

const Login = () => {
  const navigate = useNavigate();
  const { login, loginWithUser, loginWithEmail } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await loginWithEmail(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#EF4444] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3B82F6] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#1a1a1a] border border-[#2D2D2D] rounded-2xl p-8 shadow-2xl shadow-black/50 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            <Logo size={40} className="group-hover:scale-105 transition-transform" />
            <span className="text-xl font-black tracking-tight">
              learn<span className="text-[#EF4444]">Code</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-[#9CA3AF]">Sign in to continue your progress</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0" />
            <p className="text-sm text-[#EF4444]">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-[#9CA3AF]">Password</label>
              <Link to="/forgot-password" className="text-sm text-[#EF4444] hover:text-[#DC2626] transition-colors font-medium">
                Forgot password?
              </Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] group-focus-within:text-[#EF4444] transition-colors" />
              <input 
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3.5 pl-12 pr-12 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all placeholder-[#4B5563]"
                placeholder="••••••••"
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

          {/* Primary Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-[#EF4444]/25 hover:shadow-[#EF4444]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Logging In...
              </>
            ) : (
              <>
                Log In
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        {config.GOOGLE_CLIENT_ID && (
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#2D2D2D]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1a1a1a] text-[#6B7280]">Or continue with</span>
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
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#EF4444] hover:text-[#DC2626] font-bold transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
