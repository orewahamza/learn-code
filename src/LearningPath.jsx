import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Lock, Star, Play, CheckCircle, Trophy, Zap, ArrowLeft, BookOpen } from "lucide-react";
import { useAuth } from "./context/AuthContext";
import { ROADMAP_DATA_RAW } from "./data/roadmapData";

const LearningPath = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  
  // Data for the current course
  const data = useMemo(() => {
    return ROADMAP_DATA_RAW[courseId] || ROADMAP_DATA_RAW['javascript'];
  }, [courseId]);

  // Lessons based on raw data items
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    if (!data) return;

    const enrolled = user?.enrolledCourses?.find(c => c.courseId === courseId);
    const completedIds = enrolled?.completedSteps || [];

    const newLevels = data.items.map((item, index) => {
      const id = (index + 1).toString();
      let status = "locked";
      
      if (completedIds.includes(id)) {
        status = "completed";
      } else if (index === 0 || (index > 0 && completedIds.includes(index.toString()))) {
        status = "current";
      }

      return {
        id,
        title: item,
        status,
        stars: status === "completed" ? 3 : 0,
        xp: 50
      };
    });

    setLevels(newLevels);
  }, [data, user, courseId]);

  const earnedXP = levels.filter(l => l.status === "completed").length * 50;
  const totalXP = levels.length * 50;
  const progressPercentage = totalXP > 0 ? (earnedXP / totalXP) * 100 : 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#2D2D2D]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link to={`/course/${courseId}`} className="text-[#9CA3AF] hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center text-2xl shadow-lg`}>
                <TargetIcon />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-bold truncate">{data.title}</h1>
                <p className="text-xs text-[#6B7280] font-bold uppercase tracking-widest leading-none mt-1">
                  Step {levels.filter(l => l.status === "completed").length + 1} of {levels.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#111] px-4 py-2 rounded-xl border border-[#2D2D2D]">
              <Zap className="w-4 h-4 text-[#EF4444]" fill="#EF4444" />
              <span className="font-bold text-[#EF4444]">{earnedXP}</span>
              <span className="text-[10px] text-[#6B7280] font-black uppercase">XP</span>
            </div>
          </div>

          <div className="h-2 bg-[#111] rounded-full overflow-hidden border border-[#2D2D2D]">
            <div
              className={`h-full bg-gradient-to-r ${data.color} transition-all duration-700`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 pb-40">
        <div className="relative space-y-12">
          {levels.map((level, index) => (
            <div 
              key={level.id}
              className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
            >
              <div className="flex-1">
                <div className={`inline-block p-6 rounded-2xl border transition-all duration-300 ${
                  level.status === 'current' 
                    ? `bg-[#0d0d0d] border-[#EF4444] shadow-xl shadow-[#EF4444]/10 scale-105` 
                    : 'bg-[#0a0a0a] border-[#222] opacity-60'
                }`}>
                  <p className="text-[10px] text-[#6B7280] font-black uppercase mb-1">Level {level.id}</p>
                  <h3 className="text-lg font-bold text-white mb-4">{level.title}</h3>
                  {level.status === 'current' ? (
                    <div className="flex flex-wrap gap-2">
                        <button 
                            onClick={() => navigate(`/learn-video/${level.id}?course=${courseId}`)}
                            className="bg-white text-black font-bold px-6 py-2 rounded-lg text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <BookOpen className="w-4 h-4" />
                            Learn Content
                        </button>
                        <button 
                            onClick={() => navigate(`/quiz/${level.id}?course=${courseId}`)}
                            className="bg-[#EF4444] text-white font-bold px-6 py-2 rounded-lg text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <Play className="w-4 h-4" fill="white" />
                            Take Quiz
                        </button>
                    </div>
                  ) : level.status === 'completed' ? (
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1">
                            {[1,2,3].map(s => <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                        </div>
                        <button 
                            onClick={() => navigate(`/learn-video/${level.id}?course=${courseId}`)}
                            className="text-[#9CA3AF] hover:text-white text-xs font-bold transition-colors flex items-center gap-1"
                        >
                            Review Material <ChevronRightIcon />
                        </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-[#444]">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">Locked</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-black transition-all ${
                  level.status === 'completed' ? 'bg-[#10B981]' : 
                  level.status === 'current' ? 'bg-[#EF4444] scale-110 shadow-lg' : 
                  'bg-[#111]'
                }`}>
                  {level.status === 'completed' ? <CheckCircle className="w-8 h-8" /> : 
                   level.status === 'current' ? <Play className="w-6 h-6" fill="white" /> : 
                   <Lock className="w-6 h-6 text-[#222]" />}
                </div>
                {index < levels.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-[#222]"></div>
                )}
              </div>
              <div className="flex-1"></div>
            </div>
          ))}

          <div className="flex flex-col items-center pt-20">
             <div className="w-20 h-20 rounded-full bg-[#111] border-2 border-[#222] flex items-center justify-center mb-4">
                <Trophy className="w-10 h-10 text-[#222]" />
             </div>
             <p className="text-sm text-[#444] font-bold uppercase tracking-widest">End of Course</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TargetIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
    </svg>
);

export default LearningPath;
