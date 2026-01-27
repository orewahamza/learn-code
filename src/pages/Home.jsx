import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  
  // Get user's enrolled courses from context
  const enrolledCourses = user?.enrolledCourses || [];
  const hasEnrolledCourses = enrolledCourses.length > 0;

  const featuredCourses = [
    {
      id: 'python-mastery',
      title: 'Python Mastery',
      description: 'Master the world\'s most popular language for AI and Web.',
      level: 'BEGINNER',
      duration: '12 WEEKS',
      students: '50K+',
      icon: '🐍',
      gradient: 'from-[#3B82F6] to-[#60A5FA]',
    },
    {
      id: 'full-stack-web',
      title: 'Full Stack Web',
      description: 'HTML, CSS, JS, and React. Build modern interfaces.',
      level: 'INTERMEDIATE',
      duration: '16 WEEKS',
      students: '42K+',
      icon: '🌐',
      gradient: 'from-[#EF4444] to-[#F97316]',
    },
    {
      id: 'nodejs-express',
      title: 'Node.js & Express',
      description: 'Build scalable backend systems and APIs.',
      level: 'ADVANCED',
      duration: '8 WEEKS',
      students: '28K+',
      icon: '⚡',
      gradient: 'from-[#10B981] to-[#059669]',
    },
    {
      id: 'database-pro',
      title: 'Database Pro',
      description: 'SQL & NoSQL (MongoDB, MySQL) deep dive.',
      level: 'INTERMEDIATE',
      duration: '10 WEEKS',
      students: '35K+',
      icon: '🗄️',
      gradient: 'from-[#A855F7] to-[#9333EA]',
    },
  ];

  const stats = [
    { icon: '📚', label: 'ACTIVE STUDENTS', value: '50K+', color: 'text-[#3B82F6]' },
    { icon: '⚡', label: 'COURSES', value: '120+', color: 'text-[#EF4444]' },
    { icon: '🏆', label: 'PROJECTS', value: '450+', color: 'text-[#60A5FA]' },
    { icon: '🌐', label: 'SUCCESS RATE', value: '94%', color: 'text-[#EF4444]' },
  ];

  // Helper to get course info by ID
  const getCourseInfo = (courseId) => {
    return featuredCourses.find(c => c.id === courseId) || {
      id: courseId,
      title: courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      icon: '📖',
      gradient: 'from-[#6B7280] to-[#4B5563]'
    };
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EF4444]/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <span className="text-xs font-bold text-[#EF4444] bg-[#EF4444]/10 px-4 py-2 rounded-full border border-[#EF4444]/20 uppercase tracking-wider">
                THE FUTURE OF LEARNING
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              MASTER THE<br />
              <span className="bg-gradient-to-r from-[#EF4444] via-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
                MODERN STACK
              </span>
            </h1>
            
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed">
              From Python to React, learnCode provides the ultimate roadmap to becoming a world-class full stack developer. Quizzes, projects, and real-world skills.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/courses"
                className="group bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#EF4444]/40 hover:shadow-xl hover:shadow-[#EF4444]/60 flex items-center gap-2"
              >
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Taking Section - Shows when user has enrolled courses */}
      {hasEnrolledCourses && (
        <section className="px-6 py-16 border-y border-[#2D2D2D]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  Continue <span className="text-[#EF4444]">Learning</span>
                </h2>
                <p className="text-[#9CA3AF]">Pick up where you left off</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((enrolled) => {
                const courseInfo = getCourseInfo(enrolled.courseId);
                return (
                  <Link
                    key={enrolled.courseId}
                    to={`/learn/${enrolled.courseId}`}
                    className="group bg-[#1a1a1a] rounded-xl border border-[#2D2D2D] hover:border-[#EF4444]/50 transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#EF4444]/10"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${courseInfo.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {courseInfo.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg group-hover:text-[#EF4444] transition-colors">
                          {courseInfo.title}
                        </h3>
                        <p className="text-sm text-[#9CA3AF]">{enrolled.progress || 0}% complete</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="h-2 bg-[#0d0d0d] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#3B82F6] rounded-full transition-all duration-500"
                          style={{ width: `${enrolled.progress || 0}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6B7280]">
                        {enrolled.completedSteps?.length || 0} lessons completed
                      </span>
                      <span className="text-sm font-semibold text-[#EF4444] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Continue <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section - Moves to bottom when user has courses */}
      {!hasEnrolledCourses && (
        <section className="px-6 py-16 border-y border-[#2D2D2D]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl mb-3 ${stat.color}`}>{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Courses */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                Popular <span className="text-[#EF4444]">Courses</span>
              </h2>
              <p className="text-[#9CA3AF]">Choose your path and start building today.</p>
            </div>
            <Link
              to="/courses"
              className="hidden sm:flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] font-semibold transition-colors"
            >
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="group bg-[#1a1a1a] rounded-xl border border-[#2D2D2D] hover:border-[#333333] transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-black/50"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                    {course.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#EF4444] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-[#6B7280] mb-4">
                    <span className="bg-[#0d0d0d] px-3 py-1 rounded-md font-semibold uppercase tracking-wider">
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Students */}
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] font-semibold transition-colors"
            >
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#EF4444]/20 to-[#3B82F6]/20 rounded-3xl border border-[#EF4444]/30 p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444] to-[#3B82F6]"></div>
            </div>

            <div className="relative text-center">
              <h2 className="text-3xl lg:text-5xl font-black mb-4">
                NOT SURE WHERE<br />
                <span className="text-[#EF4444]">TO START?</span>
              </h2>
              <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
                Explore our courses and find the perfect path tailored to your goals and skill level.
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#EF4444]/40 hover:shadow-xl hover:shadow-[#EF4444]/60"
              >
                See Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Shows at bottom when user has enrolled courses */}
      {hasEnrolledCourses && (
        <section className="px-6 py-16 border-t border-[#2D2D2D]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl mb-3 ${stat.color}`}>{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
