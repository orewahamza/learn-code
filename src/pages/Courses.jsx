import React, { useState } from 'react';
import { Search, Lock, Unlock, Play, Code2, Globe, Server, Database, Layers, Cpu, Terminal, Smartphone, Layout, Cloud, Palette, Binary, Box, Shield, BrainCircuit, FileCode, Monitor, AppWindow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// --- Icons ---
const GameIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const COURSES = [
  // --- Core Languages ---
  { id: 'javascript', title: 'JavaScript Mastery', level: 'Beginner', type: 'Free', description: 'Web, frontend, backend, automation', icon: <Code2 />, gradient: 'from-[#F7DF1E] to-[#D4A518]', students: '25k' },
  { id: 'python', title: 'Python Pro', level: 'Beginner', type: 'Free', description: 'Backend, AI, automation', icon: <Terminal />, gradient: 'from-[#3776AB] to-[#FFD43B]', students: '35k' },
  { id: 'java', title: 'Java Enterprise', level: 'Beginner', type: 'Free', description: 'Enterprise backend, Android', icon: <Binary />, gradient: 'from-[#5382a1] to-[#f89820]', students: '18k' },
  { id: 'c', title: 'C Systems', level: 'Beginner', type: 'Free', description: 'Low-level systems', icon: <Binary />, gradient: 'from-[#A8B9CC] to-[#555555]', students: '12k' },
  { id: 'cpp', title: 'C++ Performance', level: 'Intermediate', type: 'Paid', description: 'Performance apps, game engines', icon: <Binary />, gradient: 'from-[#00599C] to-[#004482]', students: '14k' },
  { id: 'csharp', title: 'C#', level: 'Beginner', type: 'Free', description: 'Windows, backend, games', icon: <Binary />, gradient: 'from-[#239120] to-[#178600]', students: '15k' },
  { id: 'php', title: 'PHP Backend', level: 'Beginner', type: 'Free', description: 'Web backend', icon: <Code2 />, gradient: 'from-[#777BB4] to-[#4F5B93]', students: '15k' },
  { id: 'go', title: 'Golang Scalable', level: 'Intermediate', type: 'Paid', description: 'Scalable backend', icon: <Terminal />, gradient: 'from-[#00ADD8] to-[#008CA8]', students: '8k' },
  { id: 'rust', title: 'Rust Safety', level: 'Advanced', type: 'Paid', description: 'Memory-safe systems', icon: <Terminal />, gradient: 'from-[#DEA584] to-[#000000]', students: '6k' },
  { id: 'typescript', title: 'TypeScript Pro', level: 'Intermediate', type: 'Paid', description: 'Safer JavaScript', icon: <Box />, gradient: 'from-[#3178C6] to-[#235A97]', students: '12k' },

  // --- Web & UI ---
  { id: 'html', title: 'HTML Essentials', level: 'Beginner', type: 'Free', description: 'Document structure & semantics', icon: <Palette />, gradient: 'from-[#E34F26] to-[#F06529]', students: '40k' },
  { id: 'css', title: 'CSS Layouts', level: 'Beginner', type: 'Free', description: 'Styling & Layouts', icon: <Palette />, gradient: 'from-[#264DE4] to-[#2965F1]', students: '38k' },
  { id: 'react', title: 'React Modern', level: 'Intermediate', type: 'Paid', description: 'Modern UI library', icon: <AppWindow />, gradient: 'from-[#61DAFB] to-[#21819B]', students: '20k' },
  { id: 'vue', title: 'Vue Framework', level: 'Intermediate', type: 'Paid', description: 'Progressive framework', icon: <AppWindow />, gradient: 'from-[#4FC08D] to-[#42b883]', students: '15k' },
  { id: 'angular', title: 'Angular Forms', level: 'Advanced', type: 'Paid', description: 'Enterprise framework', icon: <AppWindow />, gradient: 'from-[#DD0031] to-[#C3002F]', students: '12k' },
  { id: 'nodejs', title: 'Node.js Core', level: 'Intermediate', type: 'Free', description: 'JS runtime for backend', icon: <Cpu />, gradient: 'from-[#339933] to-[#68A063]', students: '18k' },

  // --- Databases ---
  { id: 'sql', title: 'SQL Queries', level: 'Beginner', type: 'Free', description: 'Relational databases', icon: <Database />, gradient: 'from-[#00758F] to-[#F29111]', students: '22k' },
  { id: 'mongodb', title: 'MongoDB NoSQL', level: 'Intermediate', type: 'Paid', description: 'NoSQL document store', icon: <Database />, gradient: 'from-[#47A248] to-[#3F9142]', students: '15k' },
  { id: 'postgresql', title: 'PostgreSQL Advanced', level: 'Intermediate', type: 'Paid', description: 'Advanced relational DB', icon: <Database />, gradient: 'from-[#336791] to-[#274d6d]', students: '12k' },

  // --- Career Stacks ---
  { id: 'frontend-stack', title: 'Frontend Developer', level: 'Beginner', type: 'Free', description: 'HTML/CSS to React wizardry', icon: <Layout />, gradient: 'from-[#F59E0B] to-[#EC4899]', students: '15.2k' },
  { id: 'backend-stack', title: 'Backend Developer', level: 'Intermediate', type: 'Free', description: 'Server-side mastery', icon: <Server />, gradient: 'from-[#10B981] to-[#0EA5E9]', students: '10.5k' },
  { id: 'mern-stack', title: 'Full-Stack MERN', level: 'Advanced', type: 'Paid', description: 'MongoDB, Express, React, Node', icon: <Layers />, gradient: 'from-[#EF4444] to-[#8B5CF6]', students: '20k+' },
  { id: 'pern-stack', title: 'Full-Stack PERN', level: 'Advanced', type: 'Paid', description: 'PostgreSQL, Express, React, Node', icon: <Layers />, gradient: 'from-[#336791] to-[#61DAFB]', students: '10k' },
  { id: 'python-fullstack', title: 'Python Full Stack', level: 'Beginner', type: 'Free', description: 'Django/Flask & Modern Web', icon: <Terminal />, gradient: 'from-[#3776AB] to-[#F59E0B]', students: '8k' },
  { id: 'java-fullstack', title: 'Java Full Stack', level: 'Beginner', type: 'Paid', description: 'Spring Boot & Frontend', icon: <Binary />, gradient: 'from-[#5382a1] to-[#EF4444]', students: '7k' },
  { id: 'php-fullstack', title: 'PHP Full Stack', level: 'Beginner', type: 'Free', description: 'Laravel & Web Dev', icon: <Code2 />, gradient: 'from-[#777BB4] to-[#FACC15]', students: '9k' },
  { id: 'mobile-android', title: 'Android Mobile App', level: 'Intermediate', type: 'Paid', description: 'Java/Kotlin mobile apps', icon: <Smartphone />, gradient: 'from-[#3DDC84] to-[#073042]', students: '6k' },
  { id: 'game-dev', title: 'Game Development', level: 'Advanced', type: 'Paid', description: 'C++ & Game Engines', icon: <GameIcon />, gradient: 'from-[#7C3AED] to-[#EC4899]', students: '5k' },
  { id: 'devops-stack', title: 'DevOps & Cloud', level: 'Intermediate', type: 'Paid', description: 'Linux, Docker, K8s, CI/CD', icon: <Cloud />, gradient: 'from-[#6366F1] to-[#06B6D4]', students: '4k' },
  { id: 'ai-ml-stack', title: 'AI / ML Pro', level: 'Expert', type: 'Paid', description: 'Python, NumPy, ML, DL', icon: <BrainCircuit />, gradient: 'from-[#8B5CF6] to-[#3B82F6]', students: '12k' },
];


const Courses = () => {
  const { user } = useAuth();
  const isPremium = user?.isPremium;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Available <span className="text-[#EF4444]">Courses</span></h1>
          <p className="text-[#9CA3AF]">Expand your skills with our industry-leading curriculums.</p>
        </div>
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] group-focus-within:text-[#EF4444] transition-colors" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-[#2D2D2D] text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const isPaid = course.type === 'Paid';
          const isPremium = user?.isPremium;
          const hasAccess = !isPaid || isPremium;

          return (
            <div key={course.id} className="group bg-[#1a1a1a] border border-[#2D2D2D] rounded-2xl p-6 hover:scale-[1.02] hover:border-[#333333] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              {/* Background Watermark Icon */}
              {isPaid && (
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                  {isPremium ? (
                    <Unlock className="w-32 h-32 text-white" />
                  ) : (
                    <Lock className="w-32 h-32 text-white" />
                  )}
                </div>
              )}

              <Link to={`/course/${course.id}`} className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-white relative z-10`}>
                  {React.cloneElement(course.icon, { className: "w-6 h-6" })}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${course.type === 'Free' ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20' : 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20'}`}>
                    {course.type}
                  </div>
                  {isPaid && isPremium && (
                    <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[8px] font-black uppercase tracking-tighter shadow-sm animate-pulse">
                      PRO Access
                    </div>
                  )}
                </div>
              </Link>
              <Link to={`/course/${course.id}`} className="mb-8 flex-1 relative z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#EF4444] transition-colors">{course.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {course.level}</span>
                  <span>{course.students} students</span>
                </div>
              </Link>
              <Link 
                to={`/course/${course.id}`} 
                className={`w-full py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 relative z-10 ${
                  course.type === 'Free' 
                    ? 'bg-[#EF4444] hover:bg-[#DC2626] text-white' 
                    : isPremium 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-[#111] border border-[#2D2D2D] text-[#6B7280] hover:text-white hover:border-[#444]'
                }`}
              >
                {course.type === 'Free' ? (
                  <><Play className="w-5 h-5 fill-current" /> View Course</>
                ) : isPremium ? (
                  <><Unlock className="w-5 h-5" /> PRO Access</>
                ) : (
                  <><Lock className="w-5 h-5" /> View Course</>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
