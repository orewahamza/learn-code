import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Check, Lock, ChevronRight, Zap, Target, 
  MousePointer2, Sparkles, BookOpen, Loader2, Trophy, Rocket, Play
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import config from '../config';
import { ROADMAP_DATA_RAW } from '../data/roadmapData';

const RoadmapView = () => {
  const { roadmapType } = useParams();
  const navigate = useNavigate();
  const { user, updateUser, updateUserLocally } = useAuth();
  const [selectedNode, setSelectedNode] = useState(null);
  const [isEnrolling, setIsEnrolling] = useState(false);

  // Generate full roadmap data dynamically
  const data = useMemo(() => {
    const raw = ROADMAP_DATA_RAW[roadmapType] || ROADMAP_DATA_RAW['javascript'];
    const items = raw.items;
    
    const nodes = items.map((item, index) => {
      let status = 'locked';
      const enrolled = user?.enrolledCourses?.find(c => c.courseId === roadmapType);
      if (enrolled) {
          if (enrolled.completedSteps?.includes((index + 1).toString())) {
            status = 'completed';
          } else if (index === 0 || (index > 0 && enrolled.completedSteps?.includes(index.toString()))) {
            status = 'current';
          }
      } else if (index === 0) {
        status = 'current';
      }

      return {
        id: (index + 1).toString(),
        title: item,
        status,
        description: `Explore and master ${item} in ${raw.title}.`,
      };
    });

    return { ...raw, nodes };
  }, [roadmapType, user]);

  useEffect(() => {
    if (data.nodes) {
        const current = data.nodes.find(n => n.status === 'current') || data.nodes[0];
        if (current) setSelectedNode(current);
    }
  }, [data]);

  const handleStartLearning = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const isEnrolled = user.enrolledCourses?.some(c => c.courseId === roadmapType);
    if (isEnrolled) {
      navigate(`/learn/${roadmapType}`);
      return;
    }

    if (!user?.email) {
      navigate('/login');
      return;
    }

    setIsEnrolling(true);
    try {
      const response = await fetch(`${config.API_URL}/api/user/${encodeURIComponent(user.email)}/enroll`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ courseId: roadmapType })
      });

      if (response.ok) {
        const updatedUser = await response.json();
        await updateUserLocally(updatedUser);
        navigate(`/learn/${roadmapType}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#EF4444]/30">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-[81px]">
          <div className="flex items-center gap-6">
            <Link to="/roadmaps" className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors group">
              <ArrowLeft className="w-5 h-5 text-[#9CA3AF] group-hover:text-white" />
            </Link>
            <div className="h-8 w-px bg-[#2D2D2D]"></div>
            <h1 className="text-xl font-black flex items-center gap-2">
              {data.title}
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-gradient-to-r ${data.color} text-white uppercase tracking-tighter`}>
                Interactive Path
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-1 bg-[#0d0d0d] px-3 py-1.5 rounded-full border border-[#2D2D2D]">
                <Zap className="w-4 h-4 text-[#EF4444]" fill="#EF4444" />
                <span className="text-sm font-bold">{user?.xp || 0} XP</span>
             </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <div className="flex-1 p-8 lg:p-12 relative min-h-[calc(100vh-81px)] overflow-y-auto custom-scrollbar">
          {/* Main Path Line */}
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-[#111] -translate-x-1/2">
            <div className={`w-full h-full bg-gradient-to-b ${data.color} opacity-20`}></div>
          </div>

          <div className="relative space-y-20">
            {data.nodes.map((node, index) => (
              <RoadmapNode 
                key={node.id}
                node={node}
                index={index}
                color={data.color}
                isActive={selectedNode?.id === node.id}
                onSelect={() => setSelectedNode(node)}
              />
            ))}
          </div>

          {/* Projects Branching Logic (Visualizing the "Third Line") */}
          <div className="mt-32 relative text-center pb-40">
              {/* Branching Line from Main Path */}
              <div className="absolute left-1/2 top-[-20px] h-32 w-48 border-l-2 border-b-2 border-[#2D2D2D] rounded-bl-[40px] -translate-x-px opacity-30"></div>
              <div className="absolute left-1/2 top-[-20px] h-32 w-48 border-r-2 border-b-2 border-[#2D2D2D] rounded-br-[40px] translate-x-px opacity-30"></div>

              <div className="flex flex-col items-center relative z-10 pt-16">
                  <div className="w-16 h-16 rounded-full bg-[#111] border-2 border-[#2D2D2D] flex items-center justify-center mb-6 shadow-2xl">
                     <Trophy className="w-8 h-8 text-[#6B7280]" />
                  </div>
                  <h3 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] mb-4">Graduation Zone</h3>
                  
                  {/* Graduation Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl px-4">
                     {data.projects?.map((proj, i) => (
                        <div key={i} className="bg-[#0d0d0d] border border-[#2D2D2D] p-6 rounded-2xl hover:border-[#EF4444]/50 transition-all group overflow-hidden relative">
                           <div className={`absolute top-0 right-0 h-1 w-full bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                           <Rocket className="w-5 h-5 text-[#EF4444] mb-4 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                           <h4 className="font-black text-gray-400 group-hover:text-white transition-colors uppercase tracking-tight text-sm text-center">{proj}</h4>
                        </div>
                     ))}
                  </div>
              </div>
          </div>
        </div>

        <aside className="w-full lg:w-96 border-l border-[#2D2D2D] bg-[#0a0a0a] p-8 lg:sticky lg:top-[81px] lg:h-[calc(100vh-81px)] overflow-y-auto">
          {selectedNode ? (
            <div className="animate-in fade-in slide-in-from-right-5 duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${data.color} text-white shadow-lg`}>
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black">{selectedNode.title}</h3>
              </div>
              <p className="text-sm text-[#9CA3AF] mb-8 leading-relaxed font-medium">{selectedNode.description}</p>
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Focus Areas
                </h4>
                <div className="space-y-2">
                  {['Core Logic', 'Practical Application', 'Optimization'].map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-[#0d0d0d] border border-[#2D2D2D] rounded-xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></div>
                      <span className="text-xs font-bold text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-[#2D2D2D]">
                   <button 
                    onClick={handleStartLearning}
                    disabled={isEnrolling}
                    className={`w-full bg-gradient-to-r ${data.color} text-white font-black py-4 rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50`}
                   >
                     {isEnrolling ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                       <>
                         {user?.enrolledCourses?.some(c => c.courseId === roadmapType) ? 'Continue Journey' : 'Enroll Now'}
                         <ChevronRight className="w-5 h-5" />
                       </>
                     )}
                   </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center opacity-20">
               <MousePointer2 className="w-10 h-10 mb-4" />
               <p className="text-sm font-bold uppercase tracking-widest">Select Node</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

const RoadmapNode = ({ node, index, color, isActive, onSelect }) => {
  const isLeft = index % 2 === 0;
  const styles = node.status === 'completed' 
    ? { dot: 'bg-green-500', border: 'border-[#10B981]/50' }
    : node.status === 'current' 
    ? { dot: 'bg-[#EF4444]', border: 'border-[#EF4444]/50' }
    : { dot: 'bg-[#2D2D2D]', border: 'border-[#222]' };

  return (
    <div className={`relative flex items-center w-full md:justify-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div 
        onClick={onSelect}
        className={`relative z-10 w-full md:w-[42%] cursor-pointer group transition-all duration-300 ${isLeft ? 'md:mr-32' : 'md:ml-32'} ${isActive ? 'scale-105' : ''}`}
      >
        <div className={`p-6 rounded-2xl border bg-[#0a0a0a] transition-all duration-300 overflow-hidden ${isActive ? `border-[#EF4444] shadow-2xl shadow-[#EF4444]/10 bg-[#0d0d0d]` : `hover:border-[#444] ${styles.border}`}`}>
          <div className="flex items-center justify-between gap-4">
             <div className="flex-1">
                <span className="text-[10px] font-black text-[#444] uppercase tracking-widest mb-1 block">Phase {node.id}</span>
                <h3 className={`font-black text-base lg:text-lg leading-tight truncate ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{node.title}</h3>
             </div>
             <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${isActive ? 'bg-[#EF4444] text-white rotate-[-10deg]' : 'bg-[#111] text-[#222]'}`}>
                {node.status === 'completed' ? <Check className="w-4 h-4" /> : <Play className="w-4 h-4" />}
             </div>
          </div>
        </div>
      </div>
      <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black z-20 hidden md:block transition-all duration-500 ${styles.dot} ${node.status === 'current' ? 'scale-125 ring-4 ring-[#EF4444]/20' : ''}`}></div>
    </div>
  );
};

export default RoadmapView;
