import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Zap, Trophy, BookOpen, Target, LogIn, Award, 
  ChevronRight, Calendar, Flame, Filter, RefreshCcw, Loader2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import config from '../config';
import { ErrorAlert, LoadingSpinner, EmptyState } from '../components/ErrorHandling';
import { ROADMAP_DATA_RAW } from '../data/roadmapData';

const Activity = () => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchActivities();
  }, [user]);

  const fetchActivities = async () => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.API_URL}/api/activity/${encodeURIComponent(user.email)}?limit=50`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setActivities(data);
      } else {
        throw new Error('Failed to fetch activity');
      }
    } catch (err) {
      console.error('Activity fetch error:', err);
      setError('Could not load your activity history. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get activity icon and styling based on type
  const getActivityConfig = (type) => {
    const configs = {
      'lesson_complete': {
        icon: BookOpen,
        color: 'text-[#10B981]',
        bg: 'bg-[#10B981]/10',
        border: 'border-[#10B981]/20',
        label: 'Completed Lesson'
      },
      'quiz_pass': {
        icon: Target,
        color: 'text-[#3B82F6]',
        bg: 'bg-[#3B82F6]/10',
        border: 'border-[#3B82F6]/20',
        label: 'Passed Quiz'
      },
      'course_enroll': {
        icon: BookOpen,
        color: 'text-[#8B5CF6]',
        bg: 'bg-[#8B5CF6]/10',
        border: 'border-[#8B5CF6]/20',
        label: 'Enrolled in Course'
      },
      'course_complete': {
        icon: Trophy,
        color: 'text-[#F59E0B]',
        bg: 'bg-[#F59E0B]/10',
        border: 'border-[#F59E0B]/20',
        label: 'Completed Course'
      },
      'login': {
        icon: LogIn,
        color: 'text-[#6B7280]',
        bg: 'bg-[#6B7280]/10',
        border: 'border-[#6B7280]/20',
        label: 'Logged In'
      },
      'xp_earned': {
        icon: Zap,
        color: 'text-[#EF4444]',
        bg: 'bg-[#EF4444]/10',
        border: 'border-[#EF4444]/20',
        label: 'Earned XP'
      }
    };
    return configs[type] || configs['login'];
  };

  // Get course title from courseId
  const getCourseTitle = (courseId) => {
    if (!courseId) return null;
    const course = ROADMAP_DATA_RAW[courseId];
    if (course) return course.title;
    return courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Format relative time
  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  // Group activities by date
  const groupActivitiesByDate = (activities) => {
    const groups = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    activities.forEach(activity => {
      const activityDate = new Date(activity.createdAt);
      activityDate.setHours(0, 0, 0, 0);

      let dateKey;
      if (activityDate.getTime() === today.getTime()) {
        dateKey = 'Today';
      } else if (activityDate.getTime() === yesterday.getTime()) {
        dateKey = 'Yesterday';
      } else {
        dateKey = activityDate.toLocaleDateString('en-US', { 
          weekday: 'long',
          month: 'long', 
          day: 'numeric' 
        });
      }

      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(activity);
    });

    return groups;
  };

  // Filter activities
  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(a => a.type === filter);

  const groupedActivities = groupActivitiesByDate(filteredActivities);

  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Activity' },
    { value: 'lesson_complete', label: 'Lessons' },
    { value: 'quiz_pass', label: 'Quizzes' },
    { value: 'course_enroll', label: 'Enrollments' },
    { value: 'course_complete', label: 'Completions' },
    { value: 'xp_earned', label: 'XP Earned' }
  ];

  // Stats summary
  const stats = {
    totalActivities: activities.length,
    lessonsCompleted: activities.filter(a => a.type === 'lesson_complete').length,
    quizzesPassed: activities.filter(a => a.type === 'quiz_pass').length,
    totalXP: activities.reduce((sum, a) => sum + (a.xpAmount || 0), 0)
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tight">
              Activity <span className="text-[#EF4444]">History</span>
            </h1>
            <p className="text-[#9CA3AF] mt-2">Track your learning journey and achievements</p>
          </div>
          <button 
            onClick={fetchActivities}
            disabled={loading}
            className="flex items-center gap-2 bg-[#1a1a1a] border border-[#2D2D2D] hover:border-[#EF4444] px-4 py-2 rounded-xl transition-all text-sm font-semibold disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCcw className="w-4 h-4" />}
            Refresh
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6">
            <ErrorAlert 
              message={error} 
              onRetry={fetchActivities}
              onDismiss={() => setError(null)}
            />
          </div>
        )}

        {/* Stats Summary */}
        {!loading && activities.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-[#2D2D2D]">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-[#6B7280]" />
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Activities</span>
              </div>
              <div className="text-2xl font-black">{stats.totalActivities}</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-[#2D2D2D]">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-[#10B981]" />
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Lessons</span>
              </div>
              <div className="text-2xl font-black">{stats.lessonsCompleted}</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-[#2D2D2D]">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Quizzes</span>
              </div>
              <div className="text-2xl font-black">{stats.quizzesPassed}</div>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-[#2D2D2D]">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-[#EF4444]" />
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">XP Earned</span>
              </div>
              <div className="text-2xl font-black text-[#EF4444]">+{stats.totalXP}</div>
            </div>
          </div>
        )}

        {/* Filter Bar */}
        {!loading && activities.length > 0 && (
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  filter === option.value
                    ? 'bg-[#EF4444] text-white'
                    : 'bg-[#1a1a1a] border border-[#2D2D2D] text-[#9CA3AF] hover:border-[#EF4444]/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner size="lg" text="Loading activity..." />
          </div>
        )}

        {/* Empty State */}
        {!loading && activities.length === 0 && (
          <EmptyState 
            icon={Clock}
            title="No activity yet"
            description="Start learning to see your activity timeline. Every lesson, quiz, and course you complete will appear here!"
            action={
              <Link 
                to="/courses"
                className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                Browse Courses
                <ChevronRight className="w-4 h-4" />
              </Link>
            }
          />
        )}

        {/* Activity Timeline */}
        {!loading && filteredActivities.length > 0 && (
          <div className="space-y-8">
            {Object.entries(groupedActivities).map(([dateGroup, groupActivities]) => (
              <div key={dateGroup}>
                {/* Date Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#6B7280] uppercase tracking-widest">
                    <Calendar className="w-4 h-4" />
                    {dateGroup}
                  </div>
                  <div className="flex-1 h-px bg-[#2D2D2D]"></div>
                  <span className="text-xs text-[#6B7280]">{groupActivities.length} activities</span>
                </div>

                {/* Activity Items */}
                <div className="space-y-3">
                  {groupActivities.map((activity, idx) => {
                    const config = getActivityConfig(activity.type);
                    const Icon = config.icon;
                    const courseTitle = getCourseTitle(activity.courseId);

                    return (
                      <div 
                        key={activity._id || idx}
                        className={`flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl border ${config.border} hover:border-opacity-50 transition-all group`}
                      >
                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-5 h-5 ${config.color}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="font-bold text-white group-hover:text-[#EF4444] transition-colors">
                                {activity.type === 'xp_earned' && activity.details?.reason === 'course_review' 
                                  ? 'Course Review' 
                                  : config.label}
                                </p>
                                {courseTitle && (
                                <p className="text-sm text-[#9CA3AF] mt-0.5">
                                    {courseTitle}
                                    {activity.lessonId && ` • Lesson ${activity.lessonId}`}
                                </p>
                                )}
                                {activity.details?.score !== undefined && (
                                <p className="text-sm text-[#6B7280] mt-0.5">
                                    Score: {activity.details.score}%
                                </p>
                                )}
                            </div>
                            <div className="text-right flex-shrink-0">
                                <span className="text-xs text-[#6B7280]">
                                {formatRelativeTime(activity.createdAt)}
                                </span>
                                {activity.xpAmount > 0 && (
                                <div className="flex items-center justify-end gap-1 mt-1">
                                    <Zap className="w-3 h-3 text-[#EF4444]" />
                                    <span className="text-xs font-bold text-[#EF4444]">+{activity.xpAmount} XP</span>
                                </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results for Filter */}
        {!loading && activities.length > 0 && filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-12 h-12 text-[#2D2D2D] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No matching activities</h3>
            <p className="text-[#6B7280] mb-4">Try selecting a different filter</p>
            <button 
              onClick={() => setFilter('all')}
              className="text-[#EF4444] font-semibold hover:underline"
            >
              Show all activities
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
