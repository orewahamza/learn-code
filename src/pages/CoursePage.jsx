import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Map, Clock, Users, BookOpen, Check, Star, Zap, Rocket, Target, Award, ShieldCheck, Loader2, AlertTriangle, RefreshCcw, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import config from '../config';
import { ROADMAP_DATA_RAW } from '../data/roadmapData';
import { ErrorAlert, handleApiError } from '../components/ErrorHandling';
import useOnlineStatus from '../hooks/useOnlineStatus';
import CourseReviews from '../components/CourseReviews';

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, updateUser, updateUserLocally } = useAuth();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [error, setError] = useState(null);
  const isOnline = useOnlineStatus();

  // Get data for this course
  const roadmapInfo = useMemo(() => {
    return ROADMAP_DATA_RAW[courseId] || {
      title: courseId,
      purpose: 'Course curriculum',
      outcome: 'Expert',
      whyTakeIt: 'Master this technology and accelerate your career.',
      projects: ['Capstone Project'],
      color: 'from-gray-500 to-gray-700',
      items: ['Introduction', 'Intermediate', 'Advanced']
    };
  }, [courseId]);

  // Check if user is already enrolled
  const enrolledCourse = useMemo(() => {
    return user?.enrolledCourses?.find(c => c.courseId === courseId);
  }, [user, courseId]);

  const isEnrolled = !!enrolledCourse;

  const handleAction = async (target) => {
    // 1. If not logged in, go to login
    if (!user) {
      navigate('/login');
      return;
    }

    // 2. Check Premium access for Paid courses
    if (roadmapInfo.type === 'Paid' && !user.isPremium) {
      navigate('/premium');
      return;
    }

    // 3. If already enrolled, just navigate
    if (isEnrolled) {
      if (target === 'content') {
        navigate(`/learn-video/1?course=${courseId}`);
      } else {
        navigate(`/learn/${courseId}`);
      }
      return;
    }

    // 4. Not enrolled, try to enroll first
    setIsEnrolling(true);
    setError(null);
    
    try {
      // Check if offline first
      if (!isOnline) {
        setError('You appear to be offline. Please check your internet connection and try again.');
        setIsEnrolling(false);
        return;
      }
      
      if (!user?.email) {
        setError('User session invalid. Please log in again.');
        setIsEnrolling(false);
        return;
      }
      
      console.log(`Enrolling user ${user.email} in ${courseId}...`);
      const response = await fetch(`${config.API_URL}/api/user/${encodeURIComponent(user.email)}/enroll`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ courseId: courseId })
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log('Enrollment successful:', updatedUser);
        await updateUserLocally(updatedUser);
        
        // Navigate after local state sync
        if (target === 'content') {
            navigate(`/learn-video/1?course=${courseId}`);
        } else {
            navigate(`/learn/${courseId}`);
        }
      } else {
        const errData = await response.json();
        console.warn('Enrollment issue:', errData);
        
        // Check if already enrolled (not a real error)
        if (errData.message?.includes('Already enrolled')) {
          // Just navigate - user is already enrolled
          if (target === 'content') {
              navigate(`/learn-video/1?course=${courseId}`);
          } else {
              navigate(`/learn/${courseId}`);
          }
        } else {
          setError(errData.message || 'Failed to enroll. Please try again.');
        }
      }
    } catch (err) {
      console.error('Network error during enrollment:', err);
      handleApiError(err, setError);
    } finally {
        setIsEnrolling(false);
    }
  };

  // Retry handler for error alerts
  const handleRetry = () => {
    setError(null);
    handleAction('learn');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Error Alert */}
      {error && (
        <div className="fixed top-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50">
          <ErrorAlert 
            message={error} 
            onRetry={handleRetry}
            onDismiss={() => setError(null)}
            type="error"
          />
        </div>
      )}
      
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2D2D2D] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/courses" className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold uppercase text-[10px] tracking-widest">Back to Courses</span>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="flex-1">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${roadmapInfo.color} flex items-center justify-center text-4xl mb-6 shadow-2xl`}>
               <Target className="w-8 h-8 text-white" />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              {roadmapInfo.type === 'Paid' ? (
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                  user?.isPremium 
                    ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' 
                    : 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20'
                }`}>
                  {user?.isPremium ? 'PRO PATHWAY' : 'PRO CONTENT'}
                </span>
              ) : (
                <span className="bg-[#10B981]/10 text-[#10B981] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#10B981]/20">
                  FREE COURSE
                </span>
              )}
              {isEnrolled && (
                <span className="bg-white/10 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
                  ENROLLED
                </span>
              )}
              {roadmapInfo.type === 'Paid' && user?.isPremium && (
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
                  ACTIVE ACCESS
                </span>
              )}
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase italic tracking-tighter leading-none">
              {roadmapInfo.title}
            </h1>
            <p className="text-xl text-[#9CA3AF] mb-8 leading-relaxed max-w-2xl font-medium">
              {roadmapInfo.whyTakeIt}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="bg-[#111] border border-[#222] p-4 rounded-2xl">
                  <p className="text-[10px] font-black text-[#444] uppercase mb-1">Timeline</p>
                  <p className="font-bold">~12 Weeks</p>
               </div>
               <div className="bg-[#111] border border-[#222] p-4 rounded-2xl">
                  <p className="text-[10px] font-black text-[#444] uppercase mb-1">Confidence</p>
                  <p className="font-bold">98% Score</p>
               </div>
               <div className="bg-[#111] border border-[#222] p-4 rounded-2xl">
                  <p className="text-[10px] font-black text-[#444] uppercase mb-1">Level</p>
                  <p className="font-bold">Beginner+</p>
               </div>
               <div className="bg-[#111] border border-[#222] p-4 rounded-2xl">
                  <p className="text-[10px] font-black text-[#444] uppercase mb-1">XP Points</p>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-[#EF4444] fill-[#EF4444]" />
                    <span className="font-bold">1.5K</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="lg:w-96">
            <div className="bg-[#0d0d0d] rounded-[32px] border border-[#2D2D2D] p-8 shadow-2xl relative overflow-hidden">
               <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${roadmapInfo.color} opacity-10 blur-3xl`}></div>
               
               {isEnrolled ? (
                  <div className="mb-10">
                     <p className="text-xs font-black text-[#6B7280] uppercase tracking-widest mb-2 text-center italic">Progression</p>
                     <div className="text-center mb-6">
                        <span className="text-6xl font-black italic tracking-tighter">{enrolledCourse?.progress || 0}%</span>
                     </div>
                     <div className="h-2 w-full bg-[#111] rounded-full overflow-hidden border border-[#222]">
                        <div 
                          className="h-full bg-[#3B82F6] transition-all duration-1000"
                          style={{ width: `${enrolledCourse?.progress || 0}%` }}
                        ></div>
                     </div>
                  </div>
               ) : (
                  <div className="text-center mb-10">
                     <p className="text-xs font-black text-[#6B7280] uppercase tracking-widest mb-2 text-center opacity-40">Enrollment</p>
                     <p className="text-3xl font-black uppercase tracking-tighter italic">Ready to Master</p>
                  </div>
               )}

               <div className="space-y-4 relative z-10">
                  <button
                    onClick={() => handleAction('learn')}
                    disabled={isEnrolling}
                    className={`w-full font-black py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 ${
                      roadmapInfo.type === 'Paid' && !user?.isPremium
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-[#EF4444]/20'
                    }`}
                  >
                    {isEnrolling ? <Loader2 className="w-5 h-5 animate-spin" /> : 
                     roadmapInfo.type === 'Paid' && !user?.isPremium ? <><Lock className="w-5 h-5" /> Unlock All Courses</> :
                     <><Rocket className="w-5 h-5" /> Start Course</>}
                  </button>

                  <button
                    onClick={() => handleAction('content')}
                    disabled={isEnrolling}
                    className="w-full bg-white text-black font-black py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isEnrolling ? <Loader2 className="w-5 h-5 animate-spin" /> : <><BookOpen className="w-5 h-5" /> Learning Content</>}
                  </button>

                  <div className="pt-4">
                     <Link to={`/roadmap/${courseId}`} className="w-full bg-[#1a1a1a] border border-[#2D2D2D] hover:border-[#444] text-[#6B7280] hover:text-white font-bold py-3 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                        <Map className="w-4 h-4" /> Visual Roadmap
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-[#111] border border-[#222] rounded-[32px] p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Award className="w-40 h-40 text-white" />
                </div>
                <h3 className="text-[10px] font-black text-[#EF4444] uppercase tracking-[0.3em] mb-4">Certification</h3>
                <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tighter leading-tight">Master as a <span className="text-[#EF4444]">{roadmapInfo.outcome}</span></h2>
                <p className="text-[#9CA3AF] leading-relaxed text-lg font-medium">
                  This course is designed to take you from a basic understanding to absolute professional mastery. You will learn the industry techniques used by experts to build world-class {roadmapInfo.title} applications.
                </p>
             </div>

             <div className="bg-[#111] border border-[#222] rounded-[32px] p-10">
                <div className="flex items-center justify-between mb-10">
                   <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none">Curriculum Breakdown</h3>
                   <div className="bg-black px-4 py-1.5 rounded-full border border-[#222] text-[10px] font-black text-[#444] uppercase tracking-widest">
                      {roadmapInfo.items?.length} Modules
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {roadmapInfo.items?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 bg-[#0a0a0a] rounded-2xl border border-[#222] hover:border-[#EF4444]/40 transition-all group">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#222] group-hover:bg-[#EF4444] transition-colors shadow-[0_0_10px_rgba(239,68,68,0)] group-hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                         <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{item}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Reviews Section */}
             <div className="mt-16">
                <CourseReviews courseId={courseId} />
             </div>
          </div>

          <div className="space-y-8">
             <div className="bg-[#111] border border-[#222] rounded-[32px] p-10 sticky top-24">
                <h3 className="text-[10px] font-black text-[#EF4444] uppercase tracking-[0.3em] mb-6">Build & Ship</h3>
                <h2 className="text-3xl font-black mb-8 uppercase italic tracking-tighter leading-none">Core Projects</h2>
                <div className="space-y-8">
                   {roadmapInfo.projects?.map((proj, idx) => (
                      <div key={idx} className="relative pl-10 border-l-2 border-[#222] py-2 hover:border-[#EF4444] transition-all group">
                         <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-5 h-5 bg-black border-2 border-[#222] rounded-full group-hover:border-[#EF4444] transition-all"></div>
                         <h4 className="font-black text-gray-400 group-hover:text-white transition-all uppercase tracking-tight leading-tight">{proj}</h4>
                         <p className="text-[10px] font-black text-[#333] uppercase group-hover:text-[#EF4444]/40 transition-all mt-1">Enterprise Grade</p>
                      </div>
                   ))}
                </div>
                <div className="mt-12 p-8 bg-[#0a0a0a] rounded-3xl border border-dashed border-[#222] text-center">
                   <p className="text-xs font-bold text-[#444] leading-relaxed uppercase tracking-widest">Complete these projects to earn your official learnCode completion certificate.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
