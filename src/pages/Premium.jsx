import React, { useState } from 'react';
import { CheckCircle, Zap, Crown, Sparkles, Lock, Star, Rocket, Gift, Clock, ArrowRight, Loader2, Check, X, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import config from '../config';
import { useNavigate, Link } from 'react-router-dom';

const Premium = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [isActivating, setIsActivating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleStartTrial = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (user.isPremium) {
      return; // Already premium
    }

    setIsActivating(true);

    try {
      const response = await fetch(`${config.API_URL}/api/user/${user.email}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ 
          isPremium: true,
          premiumStartDate: new Date().toISOString(),
          premiumType: 'trial'
        })
      });

      if (response.ok) {
        await updateUser({ 
          isPremium: true, 
          premiumStartDate: new Date().toISOString(),
          premiumType: 'trial'
        });
        setShowSuccess(true);
      }
    } catch (error) {
      console.error('Failed to activate premium:', error);
    }

    setIsActivating(false);
  };

  const features = [
    { icon: Lock, title: 'Unlock All Courses', desc: 'Access every paid course in our catalog' },
    { icon: Star, title: 'Exclusive Content', desc: 'Premium-only tutorials and projects' },
    { icon: Gift, title: 'Downloadable Resources', desc: 'Coming Soon' },
    { icon: CheckCircle, title: 'Certificates', desc: 'Coming Soon' },
    { icon: Zap, title: '2x XP Boost', desc: 'Coming Soon' },
    { icon: MessageSquare, title: 'AI Support', desc: 'Coming Soon' },
    { icon: Clock, title: 'Early Access', desc: 'Be first to try new courses' },
    { icon: Sparkles, title: 'Ad-Free Experience', desc: 'Focus on learning without distractions' },
  ];

  const comparisonFeatures = [
    { name: 'Access to free courses', free: true, premium: true },
    { name: 'Basic quizzes', free: true, premium: true },
    { name: 'Learning path tracking', free: true, premium: true },
    { name: 'Premium courses', free: false, premium: true },
    { name: 'AI Support', free: false, premium: 'COMING SOON' },
    { name: 'Downloadable resources', free: false, premium: 'COMING SOON' },
    { name: 'Certificates', free: false, premium: 'COMING SOON' },
    { name: '2x XP boost', free: false, premium: 'COMING SOON' },
  ];

  // Success state
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12 flex items-center justify-center">
        <div className="max-w-lg w-full bg-[#1a1a1a] border border-[#EF4444] rounded-2xl p-10 text-center shadow-2xl shadow-[#EF4444]/20">
          <div className="w-24 h-24 bg-gradient-to-br from-[#EF4444] to-[#F97316] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#EF4444]/40">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-black mb-2">Welcome to Premium!</h2>
          <p className="text-[#9CA3AF] mb-2">Your free access has started.</p>
          <p className="text-sm text-[#6B7280] mb-8">Enjoy unlimited access to all courses till next update.</p>
          
          <div className="space-y-3">
            <Link 
              to="/courses"
              className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#EF4444]/25"
            >
              Explore Premium Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => setShowSuccess(false)} 
              className="w-full text-[#9CA3AF] font-semibold py-3 hover:text-white transition-colors"
            >
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleDeactivate = async () => {
    if (!window.confirm("Are you sure you want to deactivate your premium access? You will immediately lose access to all PRO courses.")) return;

    setIsActivating(true);
    try {
      const response = await fetch(`${config.API_URL}/api/user/${user.email}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ 
          isPremium: false,
          premiumStartDate: null,
          premiumType: null
        })
      });

      if (response.ok) {
        await updateUser({ 
          isPremium: false, 
          premiumStartDate: null,
          premiumType: null
        });
        alert("Premium access deactivated.");
      }
    } catch (error) {
      console.error('Failed to deactivate premium:', error);
    }
    setIsActivating(false);
  };

  // Already premium
  if (user?.isPremium) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
              <Crown className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">Premium Active</span>
            </div>
            <h1 className="text-5xl font-black mb-4 uppercase italic tracking-tighter">You're a <span className="text-blue-500">PRO</span> Member!</h1>
            <p className="text-xl text-[#9CA3AF]">Enjoy unlimited access to all learnCode features and courses.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Status Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl border border-blue-500/30 p-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight">Active Benefits</h3>
                  <p className="text-[#9CA3AF] text-sm font-medium">Your subscription is currently active.</p>
                </div>
                <div className="flex items-center gap-2 bg-[#10B981]/10 px-6 py-2.5 rounded-xl border border-[#10B981]/20">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></div>
                  <span className="font-black text-[#10B981] uppercase tracking-widest text-xs">Verified</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{feature.title}</p>
                        <p className="text-[10px] text-[#6B7280] uppercase font-bold">{feature.desc.split(' ').slice(0, 3).join(' ')}...</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions / Management */}
            <div className="space-y-6">
              <div className="bg-[#111] border border-[#222] rounded-3xl p-8 flex flex-col items-center text-center">
                 <h4 className="text-sm font-black text-[#444] uppercase tracking-widest mb-6">Management</h4>
                 <button 
                  onClick={handleDeactivate}
                  disabled={isActivating}
                  className="w-full bg-[#1a1a1a] border border-[#2D2D2D] hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 text-[#6B7280] font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group mb-4 disabled:opacity-50"
                 >
                   {isActivating ? <Loader2 className="w-5 h-5 animate-spin" /> : <><X className="w-5 h-5" /> Deactivate Pro</>}
                 </button>
                 <p className="text-[10px] text-[#444] uppercase font-bold leading-relaxed px-4">Warning: Deactivating will immediately revoke access to all premium content.</p>
              </div>

              <Link to="/courses" className="block p-8 bg-blue-600 hover:bg-blue-700 rounded-3xl text-white transition-all hover:scale-[1.02] shadow-xl shadow-blue-600/20 group">
                 <div className="flex items-center justify-between mb-4">
                    <Zap className="w-8 h-8 fill-white" />
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </div>
                 <h3 className="text-xl font-black uppercase italic tracking-tighter">Start Learning</h3>
                 <p className="text-blue-100 text-sm font-medium">All courses are now unlocked.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: Not premium
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EF4444]/10 px-4 py-2 rounded-full border border-[#EF4444]/20 mb-6">
            <Crown className="w-5 h-5 text-[#EF4444]" />
            <span className="text-sm font-bold text-[#EF4444] uppercase tracking-wider">Premium</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-4">
            Unlock Your <span className="text-[#EF4444]">Full Potential</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Get unlimited access to all courses, exclusive content, and accelerate your learning journey
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl border-2 border-[#EF4444] p-8 shadow-2xl shadow-[#EF4444]/20">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-[#EF4444] px-6 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                FREE TILL NEXT UPDATE
              </div>
            </div>

            <div className="text-center pt-4">
              <div className="text-4xl font-black mb-1">
                FREE <span className="text-xl text-[#9CA3AF]">till next update</span>
              </div>
              <p className="text-[#9CA3AF] mb-2">Full access to PRO features</p>
              <p className="text-sm text-[#6B7280] mb-8">Limited time introductory offer</p>
              
              <button 
                onClick={handleStartTrial}
                disabled={isActivating}
                className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#EF4444]/25 shadow-lg shadow-[#EF4444]/40 hover:shadow-xl hover:shadow-[#EF4444]/60 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isActivating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Activating...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Join Free Till Next Update
                  </>
                )}
              </button>

              <p className="text-xs text-[#6B7280] mt-4">No credit card required for trial</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-[#1a1a1a] border border-[#2D2D2D] rounded-xl p-6 hover:border-[#EF4444]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EF4444]/20 to-[#F97316]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#EF4444]" />
                  </div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-[#9CA3AF]">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#1a1a1a] rounded-2xl border border-[#2D2D2D] overflow-hidden">
          <div className="p-6 border-b border-[#2D2D2D]">
            <h2 className="text-2xl font-bold">Free vs Premium</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2D2D2D]">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold">Free</th>
                  <th className="p-4 font-semibold text-[#EF4444]">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-[#2D2D2D] last:border-0">
                    <td className="p-4 text-[#9CA3AF]">{item.name}</td>
                    <td className="p-4 text-center">
                      {item.free ? (
                        <Check className="w-5 h-5 text-[#10B981] mx-auto" />
                      ) : (
                        <span className="text-[#6B7280]">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {item.premium === 'COMING SOON' ? (
                        <span className="text-[10px] font-black text-[#666] bg-[#222] px-2 py-1 rounded">COMING SOON</span>
                      ) : item.premium ? (
                        <Check className="w-5 h-5 text-[#EF4444] mx-auto" />
                      ) : (
                        <span className="text-[#6B7280]">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={handleStartTrial}
            disabled={isActivating}
            className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-12 py-4 rounded-xl transition-all shadow-lg shadow-[#EF4444]/40 text-lg disabled:opacity-50"
          >
            Start Your Free Access Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
