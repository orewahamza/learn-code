import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Calendar, Award, Zap, LogOut, Flame, Trophy, 
  Target, BookOpen, TrendingUp, RefreshCcw, Loader2 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import config from '../config';
import { ROADMAP_DATA_RAW } from '../data/roadmapData';
import { ErrorAlert, LoadingSpinner, handleApiError } from '../components/ErrorHandling';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { generateCertificate } from '../components/Certificate';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isOnline = useOnlineStatus();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadCertificate = async (e, courseId, title) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation();
    
    setIsGenerating(true);
    try {
      await generateCertificate({ name: user.name }, { title: title });
    } catch (err) {
      console.error('Certificate generation failed:', err);
      setError('Failed to generate certificate. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      setError(null);
      
      try {
        // Check if offline
        if (!isOnline) {
          setError('You appear to be offline. Some stats may not be available.');
          setLoading(false);
          return;
        }
        
        const response = await fetch(`${config.API_URL}/api/user/${encodeURIComponent(user.email)}/stats`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          throw new Error('Failed to fetch stats');
        }
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        handleApiError(err, setError);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user, isOnline]);

  // Retry function
  const retryFetchStats = () => {
    setLoading(true);
    setError(null);
    // Re-trigger the effect by small timeout
    setTimeout(() => {
      const fetchStats = async () => {
        try {
          const response = await fetch(`${config.API_URL}/api/user/${encodeURIComponent(user.email)}/stats`, {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          });
          if (response.ok) {
            const data = await response.json();
            setStats(data);
            setError(null);
          }
        } catch (err) {
          handleApiError(err, setError);
        } finally {
          setLoading(false);
        }
      };
      fetchStats();
    }, 100);
  };

  // If no user, redirect (handled by ProtectedRoute) or show guest
  const displayUser = user || {
    name: 'Guest User',
    email: 'guest@example.com',
    picture: null
  };

  // Calculate level from XP (500 XP = 1 level)
  const level = Math.floor((user?.xp || 0) / 500) + 1;
  const xpInCurrentLevel = (user?.xp || 0) % 500;
  const xpToNextLevel = 500 - xpInCurrentLevel;
  const levelProgress = (xpInCurrentLevel / 500) * 100;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getCourseInfo = (courseId) => {
    return ROADMAP_DATA_RAW[courseId] || {
      title: courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      color: 'from-gray-500 to-gray-700'
    };
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Error Alert */}
        {error && (
          <div className="mb-6">
            <ErrorAlert 
              message={error} 
              onRetry={retryFetchStats}
              onDismiss={() => setError(null)}
              type="warning"
            />
          </div>
        )}
        
        <h1 className="text-4xl font-black mb-8 uppercase italic tracking-tight">
          Your <span className="text-[#EF4444]">Profile</span>
        </h1>

        {/* User Card */}
        <div className="bg-[#1a1a1a] rounded-3xl border border-[#2D2D2D] p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EF4444]/10 to-[#3B82F6]/10 blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 relative z-10">
            {displayUser.picture ? (
              <img 
                src={displayUser.picture} 
                alt={displayUser.name} 
                className="w-24 h-24 rounded-full border-4 border-[#2D2D2D]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center text-4xl font-bold">
                {displayUser.name ? displayUser.name.charAt(0) : '?'}
              </div>
            )}
            
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center gap-3 mb-1 justify-center md:justify-start">
                <h2 className="text-2xl font-bold">{displayUser.name}</h2>
                {user?.isPremium && (
                  <span className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Premium
                  </span>
                )}
              </div>
              <p className="text-[#9CA3AF] mb-4">{displayUser.email}</p>
              
              <button 
                onClick={handleLogout}
                className="inline-flex items-center gap-2 bg-[#0d0d0d] border border-[#2D2D2D] hover:border-[#EF4444] hover:text-[#EF4444] px-4 py-2 rounded-lg transition-all text-sm font-semibold text-[#9CA3AF]"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>

            {/* Level Badge */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex flex-col items-center justify-center shadow-lg shadow-[#EF4444]/20">
                <span className="text-3xl font-black">{level}</span>
                <span className="text-[8px] font-bold uppercase tracking-wider opacity-80">Level</span>
              </div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#2D2D2D]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-[#6B7280] uppercase">Level {level} Progress</span>
              <span className="text-xs font-bold text-[#EF4444]">{xpToNextLevel} XP to Level {level + 1}</span>
            </div>
            <div className="h-3 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#2D2D2D]">
              <div 
                className="h-full bg-[#EF4444] transition-all duration-500 rounded-full"
                style={{ width: `${levelProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2D2D2D] text-center">
            <Zap className="w-8 h-8 text-[#EF4444] mx-auto mb-2" />
            <div className="text-3xl font-black mb-1">{user?.xp || 0}</div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Total XP</div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2D2D2D] text-center">
            <Flame className="w-8 h-8 text-[#F97316] mx-auto mb-2" />
            <div className="text-3xl font-black mb-1">{stats?.streak || user?.streak || 0}</div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Day Streak</div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2D2D2D] text-center">
            <Trophy className="w-8 h-8 text-[#10B981] mx-auto mb-2" />
            <div className="text-3xl font-black mb-1">{stats?.completedCourses || user?.enrolledCourses?.filter(c => c.isCompleted).length || 0}</div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Completed</div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2D2D2D] text-center">
            <Target className="w-8 h-8 text-[#3B82F6] mx-auto mb-2" />
            <div className="text-3xl font-black mb-1">{stats?.quizzesPassed || 0}</div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Quizzes Passed</div>
          </div>
        </div>

        {/* Enrolled Courses */}
        {user?.enrolledCourses && user.enrolledCourses.length > 0 && (
          <div className="bg-[#1a1a1a] rounded-3xl border border-[#2D2D2D] p-8">
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#EF4444]" />
              Your Courses
            </h3>
            
            <div className="space-y-4">
              {user.enrolledCourses.map((course) => {
                const courseInfo = getCourseInfo(course.courseId);
                return (
                  <Link
                    key={course.courseId}
                    to={`/learn/${course.courseId}`}
                    className="flex items-center gap-4 p-4 bg-[#0d0d0d] rounded-xl border border-[#2D2D2D] hover:border-[#EF4444]/50 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${courseInfo.color} flex items-center justify-center shadow-lg`}>
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate group-hover:text-[#EF4444] transition-colors">
                        {courseInfo.title}
                      </h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-[#6B7280]">{course.progress || 0}% complete</span>
                        <span className="text-xs text-[#6B7280]">{course.completedSteps?.length || 0} lessons</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {course.isCompleted ? (
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-full uppercase">
                            Completed
                          </span>
                          <button
                            onClick={(e) => handleDownloadCertificate(e, course.courseId, courseInfo.title)}
                            disabled={isGenerating}
                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#EF4444] hover:text-white bg-[#EF4444]/10 hover:bg-[#EF4444] px-3 py-1.5 rounded-lg transition-all border border-[#EF4444]/20"
                          >
                            {isGenerating ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                              <>
                                <Award className="w-3 h-3" />
                                Certificate
                              </>
                            )}
                          </button>
                        </div>
                      ) : (
                        <div className="w-16 h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#2D2D2D]">
                          <div 
                            className="h-full bg-[#3B82F6] rounded-full transition-all duration-1000"
                            style={{ width: `${course.progress || 0}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {(!user?.enrolledCourses || user.enrolledCourses.length === 0) && (
          <div className="bg-[#1a1a1a] rounded-3xl border border-[#2D2D2D] p-12 text-center">
            <BookOpen className="w-16 h-16 text-[#2D2D2D] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No courses yet</h3>
            <p className="text-[#6B7280] mb-6">Start your learning journey today!</p>
            <Link 
              to="/courses"
              className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
