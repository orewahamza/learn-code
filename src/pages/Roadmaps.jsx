import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Target, Code2, Zap, Server, Database, Layout, Cloud, Terminal, 
  Globe, Layers, Cpu, Palette, Box, GitBranch, Shield, Smartphone,
  Monitor, Cpu as GameIcon, BrainCircuit, Binary, FileCode, AppWindow
} from 'lucide-react';

const Roadmaps = () => {
  // Categorized Roadmaps
  const categories = [
    {
      name: "Core Languages",
      icon: <FileCode className="w-5 h-5 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { id: 'javascript', title: 'JavaScript', description: 'Web, frontend, backend, automation', duration: '8 weeks', topics: 20, icon: <Code2 />, gradient: 'from-[#F7DF1E] to-[#D4A518]', level: 'Beginner', skills: ['Core', 'DOM', 'Async'] },
        { id: 'python', title: 'Python', description: 'Backend, AI, automation', duration: '10 weeks', topics: 18, icon: <Terminal />, gradient: 'from-[#3776AB] to-[#FFD43B]', level: 'Beginner', skills: ['Syntax', 'OOP', 'Async'] },
        { id: 'java', title: 'Java', description: 'Enterprise backend, Android', duration: '12 weeks', topics: 15, icon: <Binary />, gradient: 'from-[#5382a1] to-[#f89820]', level: 'Beginner', skills: ['JVM', 'OOP', 'Streams'] },
        { id: 'c', title: 'C', description: 'Low-level systems', duration: '12 weeks', topics: 12, icon: <Binary />, gradient: 'from-[#A8B9CC] to-[#555555]', level: 'Beginner', skills: ['Memory', 'Pointers', 'Structs'] },
        { id: 'cpp', title: 'C++', description: 'Performance apps, game engines', duration: '14 weeks', topics: 18, icon: <Binary />, gradient: 'from-[#00599C] to-[#004482]', level: 'Intermediate', skills: ['STL', 'Templates', 'Memory'] },
        { id: 'csharp', title: 'C#', description: 'Windows, backend, games', duration: '10 weeks', topics: 15, icon: <Binary />, gradient: 'from-[#239120] to-[#178600]', level: 'Beginner', skills: ['.NET', 'Async', 'LINQ'] },
        { id: 'php', title: 'PHP', description: 'Web backend', duration: '8 weeks', topics: 15, icon: <Code2 />, gradient: 'from-[#777BB4] to-[#4F5B93]', level: 'Beginner', skills: ['Forms', 'MySQL', 'MVC'] },
        { id: 'go', title: 'Go (Golang)', description: 'Scalable backend', duration: '8 weeks', topics: 12, icon: <Terminal />, gradient: 'from-[#00ADD8] to-[#008CA8]', level: 'Intermediate', skills: ['Concurrency', 'Structs', 'Modules'] },
        { id: 'rust', title: 'Rust', description: 'Memory-safe systems', duration: '12 weeks', topics: 15, icon: <Terminal />, gradient: 'from-[#DEA584] to-[#000000]', level: 'Advanced', skills: ['Ownership', 'Lifetimes', 'Safety'] },
        { id: 'typescript', title: 'TypeScript', description: 'Safer JavaScript', duration: '6 weeks', topics: 12, icon: <Box />, gradient: 'from-[#3178C6] to-[#235A97]', level: 'Intermediate', skills: ['Types', 'Generics', 'Tooling'] },
      ]
    },
    {
      name: "Web & UI",
      icon: <Monitor className="w-5 h-5 text-white" />,
      gradient: "from-orange-500 to-red-500",
      items: [
        { id: 'html', title: 'HTML', description: 'Document structure & semantics', duration: '2 weeks', topics: 10, icon: <Palette />, gradient: 'from-[#E34F26] to-[#F06529]', level: 'Beginner', skills: ['Structure', 'Forms', 'A11y'] },
        { id: 'css', title: 'CSS', description: 'Styling & Layouts', duration: '4 weeks', topics: 15, icon: <Palette />, gradient: 'from-[#264DE4] to-[#2965F1]', level: 'Beginner', skills: ['Flexbox', 'Grid', 'Anim'] },
        { id: 'react', title: 'React', description: 'Modern UI library', duration: '8 weeks', topics: 20, icon: <AppWindow />, gradient: 'from-[#61DAFB] to-[#21819B]', level: 'Intermediate', skills: ['Hooks', 'Context', 'Perf'] },
        { id: 'vue', title: 'Vue', description: 'Progressive framework', duration: '6 weeks', topics: 18, icon: <AppWindow />, gradient: 'from-[#4FC08D] to-[#42b883]', level: 'Intermediate', skills: ['Reactivity', 'Vuex', 'Routing'] },
        { id: 'angular', title: 'Angular', description: 'Enterprise framework', duration: '10 weeks', topics: 22, icon: <AppWindow />, gradient: 'from-[#DD0031] to-[#C3002F]', level: 'Advanced', skills: ['RxJS', 'DI', 'Services'] },
        { id: 'nodejs', title: 'Node.js', description: 'JS runtime for backend', duration: '8 weeks', topics: 18, icon: <Cpu />, gradient: 'from-[#339933] to-[#68A063]', level: 'Intermediate', skills: ['Express', 'Auth', 'I/O'] },
      ]
    },
    {
      name: "Databases",
      icon: <Database className="w-5 h-5 text-white" />,
      gradient: "from-green-500 to-emerald-500",
      items: [
        { id: 'sql', title: 'SQL', description: 'Relational databases', duration: '5 weeks', topics: 15, icon: <Database />, gradient: 'from-[#00758F] to-[#F29111]', level: 'Beginner', skills: ['CRUD', 'Joins', 'Opt'] },
        { id: 'mongodb', title: 'MongoDB', description: 'NoSQL document store', duration: '4 weeks', topics: 12, icon: <Database />, gradient: 'from-[#47A248] to-[#3F9142]', level: 'Intermediate', skills: ['Aggregations', 'Schema', 'CRUD'] },
        { id: 'postgresql', title: 'PostgreSQL', description: 'Advanced relational DB', duration: '6 weeks', topics: 18, icon: <Database />, gradient: 'from-[#336791] to-[#274d6d]', level: 'Intermediate', skills: ['JSON', 'Advanced SQL', 'Trans'] },
      ]
    },
    {
      name: "Career Paths & Stacks",
      icon: <Layers className="w-5 h-5 text-white" />,
      gradient: "from-purple-500 to-pink-500",
      items: [
        { id: 'frontend-stack', title: 'Frontend Developer', description: 'HTML/CSS to React wizardry', duration: '6 months', topics: 45, icon: <Layout />, gradient: 'from-[#F59E0B] to-[#EC4899]', level: 'Beginner → Adv', skills: ['Web', 'JS', 'Frameworks'] },
        { id: 'backend-stack', title: 'Backend Developer (Node)', description: 'Server-side mastery', duration: '8 months', topics: 55, icon: <Server />, gradient: 'from-[#10B981] to-[#0EA5E9]', level: 'Beginner → Adv', skills: ['Node', 'DB', 'Security'] },
        { id: 'mern-stack', title: 'Full-Stack MERN', description: 'MongoDB, Express, React, Node', duration: '12 months', topics: 80, icon: <Layers />, gradient: 'from-[#EF4444] to-[#8B5CF6]', level: 'Beginner → Expert', skills: ['Stack', 'Auth', 'Fullstack'] },
        { id: 'pern-stack', title: 'Full-Stack PERN', description: 'PostgreSQL, Express, React, Node', duration: '12 months', topics: 80, icon: <Layers />, gradient: 'from-[#336791] to-[#61DAFB]', level: 'Beginner → Expert', skills: ['Postgres', 'React', 'Node'] },
        { id: 'python-fullstack', title: 'Python Full Stack', description: 'Django/Flask & Modern Web', duration: '10 months', topics: 70, icon: <Terminal />, gradient: 'from-[#3776AB] to-[#F59E0B]', level: 'Beginner → Adv', skills: ['Django', 'Python', 'JS'] },
        { id: 'java-fullstack', title: 'Java Full Stack', description: 'Spring Boot & Frontend', duration: '12 months', topics: 75, icon: <Binary />, gradient: 'from-[#5382a1] to-[#EF4444]', level: 'Beginner → Adv', skills: ['Spring', 'Java', 'SQL'] },
        { id: 'php-fullstack', title: 'PHP Full Stack', description: 'Laravel & Web Dev', duration: '8 months', topics: 60, icon: <Code2 />, gradient: 'from-[#777BB4] to-[#FACC15]', level: 'Beginner → Adv', skills: ['Laravel', 'PHP', 'MySQL'] },
        { id: 'mobile-android', title: 'Mobile App (Android)', description: 'Java/Kotlin mobile apps', duration: '6 months', topics: 35, icon: <Smartphone />, gradient: 'from-[#3DDC84] to-[#073042]', level: 'Intermediate', skills: ['Android', 'SDK', 'Publish'] },
        { id: 'game-dev', title: 'Game Development', description: 'C++ & Game Engines', duration: '8 months', topics: 50, icon: <GameIcon />, gradient: 'from-[#7C3AED] to-[#EC4899]', level: 'Advanced', skills: ['Physics', 'Rendering', 'C++'] },
        { id: 'devops-stack', title: 'DevOps & Cloud', description: 'Linux, Docker, K8s, CI/CD', duration: '6 months', topics: 40, icon: <Cloud />, gradient: 'from-[#6366F1] to-[#06B6D4]', level: 'Intermediate', skills: ['Cloud', 'Linux', 'Ops'] },
        { id: 'ai-ml-stack', title: 'AI / ML Stack', description: 'Python, NumPy, ML, DL', duration: '12 months', topics: 60, icon: <BrainCircuit />, gradient: 'from-[#8B5CF6] to-[#3B82F6]', level: 'Expert', skills: ['Math', 'ML', 'Python'] },
      ]
    }
  ];

  const RoadmapCard = ({ item, isStack = false }) => (
    <Link
      to={`/roadmap/${item.id}`}
      className="group bg-[#1a1a1a] rounded-2xl border border-[#2D2D2D] hover:border-[#EF4444]/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-[#EF4444]/10 flex flex-col"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${item.gradient}`}></div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}>
            {React.cloneElement(item.icon, { className: "w-6 h-6" })}
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
            item.level.includes('Beginner') ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
            item.level.includes('Intermediate') ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 
            'bg-red-500/10 text-red-500 border-red-500/20'
          }`}>
            {item.level}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-1 group-hover:text-[#EF4444] transition-colors">
          {item.title}
        </h3>
        <p className="text-[#9CA3AF] text-xs leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#0d0d0d] px-2 py-1 rounded-md text-[10px] font-semibold text-[#6B7280] border border-[#2D2D2D]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#2D2D2D] text-[10px] text-[#6B7280] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {item.topics} topics</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {item.duration}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#EF4444] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EF4444]/10 px-4 py-2 rounded-full border border-[#EF4444]/20 mb-6">
            <Target className="w-5 h-5 text-[#EF4444]" />
            <span className="text-sm font-bold text-[#EF4444] uppercase tracking-wider">Mastery Paths</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-4">
            Curated <span className="text-[#EF4444]">Roadmaps</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            From absolute beginner to industry expert. Choose your target and follow the path.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-sm text-[#6B7280]">Expert-vetted learning sequences</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <RoadmapCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center bg-gradient-to-br from-[#EF4444]/10 to-[#3B82F6]/10 rounded-3xl border border-[#2D2D2D] p-12">
          <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Ready to start?</h3>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto font-medium">
            Enroll in a career path today and follow a verified sequence of topics designed by industry pros.
          </p>
          <Link 
            to="/courses"
            className="inline-flex items-center gap-2 bg-white text-black font-black px-10 py-5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
          >
            Explore All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
