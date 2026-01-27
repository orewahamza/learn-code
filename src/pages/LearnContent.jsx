import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, ExternalLink, Play, FileText, Code2, 
  ChevronRight, Sparkles, Globe, Youtube, Gamepad2, 
  ScrollText, GraduationCap, Rocket, Target, Zap
} from 'lucide-react';
import { getResourcesForCourse } from '../data/studyResources';
import { ROADMAP_DATA_RAW } from '../data/roadmapData';

const LearnContent = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const courseId = queryParams.get('course');
  
  // Get course info
  const courseInfo = useMemo(() => {
    return ROADMAP_DATA_RAW[courseId] || { 
      title: courseId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Course',
      color: 'from-gray-500 to-gray-700',
      items: []
    };
  }, [courseId]);

  // Get current lesson title
  const lessonTitle = useMemo(() => {
    const idx = parseInt(lessonId) - 1;
    return courseInfo.items?.[idx] || `Lesson ${lessonId}`;
  }, [lessonId, courseInfo]);

  // Get study resources
  const resources = useMemo(() => {
    return getResourcesForCourse(courseId);
  }, [courseId]);

  // Icon mapping for resource types
  const getCategoryIcon = (category) => {
    const icons = {
      documentation: BookOpen,
      tutorials: GraduationCap,
      videos: Youtube,
      practice: Gamepad2,
      cheatsheets: ScrollText
    };
    return icons[category] || FileText;
  };

  const getCategoryTitle = (category) => {
    const titles = {
      documentation: 'Documentation & Guides',
      tutorials: 'Interactive Tutorials',
      videos: 'Video Courses',
      practice: 'Practice & Challenges',
      cheatsheets: 'Cheat Sheets & References'
    };
    return titles[category] || category;
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      documentation: 'Official docs and comprehensive guides',
      tutorials: 'Learn by doing with interactive lessons',
      videos: 'Watch and learn from expert instructors',
      practice: 'Sharpen your skills with real problems',
      cheatsheets: 'Quick reference cards for syntax'
    };
    return descriptions[category] || '';
  };

  const getTypeColor = (type) => {
    const colors = {
      official: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      tutorial: 'bg-green-500/10 text-green-400 border-green-500/20',
      interactive: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      course: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      examples: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      problems: 'bg-red-500/10 text-red-400 border-red-500/20',
      challenges: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      mentored: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      reference: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
      'project-based': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      book: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      game: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
      'video-course': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    };
    return colors[type] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to={`/learn/${courseId}`} className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors group">
                <ArrowLeft className="w-5 h-5 text-[#9CA3AF] group-hover:text-white" />
              </Link>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${courseInfo.color} flex items-center justify-center shadow-lg`}>
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">{lessonTitle}</h1>
                <p className="text-xs text-[#6B7280]">{courseInfo.title} • Lesson {lessonId}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate(`/quiz/${lessonId}?course=${courseId}`)}
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-5 py-2 rounded-xl transition-all flex items-center gap-2 text-sm shadow-lg shadow-[#EF4444]/20"
              >
                <Play className="w-4 h-4" fill="white" />
                Take Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className={`bg-gradient-to-br from-[#111]/80 to-[#0a0a0a] border border-[#2D2D2D] rounded-3xl p-8 mb-10 relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${courseInfo.color} opacity-10 blur-3xl`}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#EF4444]" />
              <span className="text-xs font-bold text-[#EF4444] uppercase tracking-widest">Study Resources</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase italic tracking-tight">
              Learn <span className={`bg-gradient-to-r ${courseInfo.color} bg-clip-text text-transparent`}>{lessonTitle}</span>
            </h2>
            <p className="text-[#9CA3AF] max-w-2xl leading-relaxed">
              Master this topic with curated documentation, video tutorials, interactive exercises, and practice problems. 
              Click any resource to open it in a new tab and start learning!
            </p>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-10">
          {Object.entries(resources).map(([category, items]) => {
            const CategoryIcon = getCategoryIcon(category);
            
            return (
              <div key={category} className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${courseInfo.color} flex items-center justify-center shadow-lg`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{getCategoryTitle(category)}</h3>
                    <p className="text-sm text-[#6B7280]">{getCategoryDescription(category)}</p>
                  </div>
                </div>

                {/* Resource Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-[#1a1a1a] border border-[#2D2D2D] rounded-2xl p-5 hover:border-[#EF4444]/50 hover:shadow-xl hover:shadow-[#EF4444]/5 transition-all duration-300 flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white group-hover:text-[#EF4444] transition-colors truncate pr-2">
                            {resource.title}
                          </h4>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#444] group-hover:text-[#EF4444] transition-colors flex-shrink-0 mt-1" />
                      </div>
                      
                      <div className="flex items-center gap-2 mt-auto">
                        {resource.type && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${getTypeColor(resource.type)}`}>
                            {resource.type}
                          </span>
                        )}
                        {resource.duration && (
                          <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">
                            {resource.duration}
                          </span>
                        )}
                      </div>
                      
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="mt-16 mb-8">
          <div className="bg-gradient-to-br from-[#EF4444]/10 to-[#3B82F6]/10 border border-[#2D2D2D] rounded-3xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-[#EF4444]" />
              <h3 className="text-2xl font-black uppercase italic tracking-tight">Ready to test your knowledge?</h3>
            </div>
            <p className="text-[#9CA3AF] mb-6 max-w-lg mx-auto">
              After studying these resources, take the quiz to earn XP and unlock the next lesson!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate(`/quiz/${lessonId}?course=${courseId}`)}
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-black px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-[#EF4444]/25 hover:scale-105 active:scale-95"
              >
                <Zap className="w-5 h-5" />
                Take the Quiz
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link 
                to={`/learn/${courseId}`}
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-black px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-[#EF4444]/25 hover:scale-105 active:scale-95"
              >
                <Zap className="w-5 h-5" />
                go to Learning Path
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnContent;
