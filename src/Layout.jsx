import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { 
  Home, BookOpen, Trophy, User, Settings, LogOut, Code2, Zap, Menu, X, LogIn, 
  ChevronLeft, ChevronRight, Play, ArrowRight, Target, Clock, Shield
} from 'lucide-react';
import { ROADMAP_DATA_RAW } from './data/roadmapData';
import { OfflineAlert } from './components/ErrorHandling';
import useOnlineStatus from './hooks/useOnlineStatus';
import Logo from './components/Logo';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const isOnline = useOnlineStatus();
  
  // Strict check for enrolled courses array
  const enrolledCourses = user?.enrolledCourses || [];

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/courses', icon: BookOpen, label: 'Courses' },
    { path: '/roadmaps', icon: Trophy, label: 'Roadmaps' },
    { path: '/activity', icon: Clock, label: 'Activity' },
  ];

  const bottomNavItems = user ? [
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/premium', icon: Zap, label: 'Premium', highlight: true },
    ...(user.role === 'admin' ? [{ path: '/admin', icon: Shield, label: 'Admin Console', highlight: false }] : []),
  ] : [];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getCourseInfo = (courseId) => {
    const raw = ROADMAP_DATA_RAW[courseId];
    if (raw) return { title: raw.title, color: raw.color };
    // Handle kebab-case vs key mismatch
    const fallbackTitle = courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return { title: fallbackTitle, color: 'from-gray-500 to-gray-700' };
  };

  return (
    <div className="min-h-screen bg-black text-white flex overflow-x-hidden">
      {/* Sidebar - Desktop */}
      <aside 
        className={`hidden lg:flex lg:flex-col bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#2D2D2D] sticky top-6 h-[calc(100vh-3rem)] z-40 transition-[width] duration-300 ease-in-out select-none flex-shrink-0 will-change-[width] ml-6 my-6 rounded-[2.5rem] shadow-2xl shadow-black/50 ${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        }`}
        onMouseEnter={() => setIsSidebarCollapsed(false)}
        onMouseLeave={() => setIsSidebarCollapsed(true)}
      >
        <div className="p-5 border-b border-[#2D2D2D] flex items-center justify-center overflow-hidden h-[81px]">
          <Link to="/" className="flex items-center gap-3 min-w-max group">
            <Logo size={40} className="group-hover:scale-110 transition-transform" />
            <span className={`text-xl font-black transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 translate-x-4 w-0 overflow-hidden' : 'opacity-100 translate-x-0'}`}>
              LEARN<span className="text-[#EF4444]">CODE</span>
            </span>
          </Link>
        </div>

        <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center h-12 rounded-xl transition-all duration-200 group overflow-hidden ${
                  location.pathname === item.path 
                    ? 'bg-[#EF4444] text-white shadow-lg shadow-[#EF4444]/20' 
                    : 'text-[#6B7280] hover:bg-[#111] hover:text-white'
                } ${isSidebarCollapsed ? 'justify-center gap-0' : 'px-0 gap-0'}`}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                   <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <span className={`font-bold text-sm whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 translate-x-4 w-0 overflow-hidden' : 'opacity-100 translate-x-0'}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Correctly rendered "Taking" section */}
          {user && (
            <div className={`mt-10 transition-all duration-500 ${enrolledCourses.length > 0 ? 'opacity-100' : 'opacity-0 h-0 pointer-events-none'}`}>
              <div className="px-4 mb-4 flex items-center justify-between overflow-hidden">
                <p className={`text-[10px] font-black text-[#666] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0' : 'opacity-100'}`}>Learning Path</p>
                {!isSidebarCollapsed && <div className="h-px flex-1 bg-[#222] ml-4"></div>}
              </div>
              
              <div className="space-y-2 px-1">
                {enrolledCourses.slice(0, 5).map((course) => {
                    const info = getCourseInfo(course.courseId);
                    return (
                        <Link 
                           key={course.courseId} 
                           to={`/learn/${course.courseId}`}
                           className={`group flex items-center p-2 rounded-xl hover:bg-[#111] transition-all relative overflow-hidden ${isSidebarCollapsed ? 'justify-center gap-0' : 'gap-3'}`}
                        >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} flex-shrink-0 flex items-center justify-center shadow-lg relative z-10`}>
                                <Play className="w-4 h-4 text-white fill-white translate-x-0.5" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            
                            <div className={`flex-1 min-w-0 transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                                <p className="text-xs font-black text-gray-300 truncate tracking-tight">{info.title}</p>
                                <div className="h-1 w-full bg-[#1e1e1e] rounded-full overflow-hidden mt-1.5 border border-[#222]">
                                    <div 
                                      className="h-full bg-[#3B82F6] transition-all duration-1000" 
                                      style={{ width: `${course.progress || 0}%` }}
                                    ></div>
                                </div>
                            </div>

                            {isSidebarCollapsed && (
                                <div className="absolute left-16 bg-[#1a1a1a] border border-[#2D2D2D] px-3 py-1.5 rounded-lg text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none z-50 translate-x-3 group-hover:translate-x-0 shadow-2xl">
                                    {info.title} <span className="text-[#EF4444] ml-1">{course.progress || 0}%</span>
                                </div>
                            )}
                        </Link>
                    )
                })}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[#2D2D2D] space-y-1">
          {bottomNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center h-12 rounded-xl transition-all duration-200 group overflow-hidden ${
                location.pathname === item.path ? 'bg-[#111] text-white border border-[#222]' : 'text-[#6B7280] hover:text-white'
              } ${isSidebarCollapsed ? 'justify-center gap-0' : 'px-0 gap-0'}`}
            >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                   {item.label === 'Profile' && user?.picture ? (
                     <img src={user.picture} alt="Profile" className={`w-6 h-6 rounded-full border object-cover ${location.pathname === '/profile' ? 'border-white' : 'border-[#2D2D2D]'}`} />
                   ) : (
                     <item.icon className={`w-5 h-5 ${item.highlight && location.pathname !== item.path ? 'text-[#EF4444]' : ''}`} />
                   )}
                </div>
              <span className={`font-bold text-sm whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 translate-x-4 w-0 overflow-hidden' : 'opacity-100 translate-x-0'}`}>
                {item.label}
              </span>
            </Link>
          ))}
          {user ? (
            <button 
              onClick={handleLogout} 
              className={`flex items-center h-12 w-full text-[#6B7280] hover:text-red-500 transition-all group overflow-hidden ${isSidebarCollapsed ? 'justify-center gap-0' : 'px-0 gap-0'}`}
            >
               <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <LogOut className="w-5 h-5" />
               </div>
               <span className={`font-bold text-sm text-left transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 translate-x-4 w-0 overflow-hidden' : 'opacity-100 translate-x-0'}`}>
                 Logout
               </span>
            </button>
          ) : (
            <div className="space-y-1">
              <Link
                to="/login"
                className={`flex items-center h-11 rounded-xl transition-all duration-200 group overflow-hidden ${
                  location.pathname === '/login' ? 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20' : 'text-[#6B7280] hover:text-white'
                }`}
              >
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
                   <LogIn className="w-5 h-5" />
                </div>
                <span className={`font-bold text-sm whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 translate-x-4 w-0 overflow-hidden' : 'opacity-100 translate-x-0'}`}>
                  Login
                </span>
              </Link>
              <Link
                to="/signup"
                className={`flex items-center h-11 rounded-xl transition-all duration-200 group overflow-hidden ${
                  location.pathname === '/signup' ? 'bg-[#EF4444] text-white' : 'text-[#6B7280] hover:text-[#EF4444]'
                }`}
              >
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
                   <Target className="w-5 h-5" />
                </div>
                <span className={`font-bold text-sm whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 translate-x-4 w-0 overflow-hidden' : 'opacity-100 translate-x-0'}`}>
                  Sign Up
                </span>
              </Link>
            </div>
          )}
        </div>
      </aside>

      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#2D2D2D] z-50 flex items-center justify-between px-4 transition-all duration-300">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo size={32} className="group-hover:scale-110 transition-transform" />
          <span className="text-lg font-black tracking-tighter">
            LEARN<span className="text-[#EF4444]">CODE</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {user && (
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-400 hover:text-white bg-[#111] rounded-lg border border-[#222]"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl transition-all duration-300">
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-6 flex items-center justify-between border-b border-[#222] bg-[#0a0a0a]">
              <div className="flex items-center gap-2">
                <Logo size={32} />
                <span className="font-black tracking-tight">MENU</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white bg-[#111] rounded-full border border-[#222]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {user && (
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0a0a] border border-[#222] shadow-2xl">
                  {user.picture ? (
                    <img src={user.picture} alt="Profile" className="w-12 h-12 rounded-full border-2 border-[#EF4444] object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center border-2 border-[#EF4444]">
                      <User className="w-6 h-6 text-[#EF4444]" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-black text-white truncate">{user.name || 'User'}</h3>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-3">
                <Link 
                  to="/premium" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#EF4444]/15 to-transparent border border-[#EF4444]/30 text-[#EF4444] shadow-lg shadow-[#EF4444]/5"
                >
                  <Zap className="w-5 h-5 fill-[#EF4444]/20" />
                  <span className="font-black italic tracking-wide uppercase">Unlock Premium</span>
                </Link>

                <Link 
                  to="/settings" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-[#222] hover:bg-[#161616] transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="font-bold">Account Settings</span>
                </Link>

                {user?.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-[#222] text-[#3B82F6] hover:bg-[#161616] transition-colors"
                  >
                    <Shield className="w-5 h-5" />
                    <span className="font-bold">Admin Console</span>
                  </Link>
                )}

                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-[#222] text-red-500 hover:bg-red-500/5 transition-colors text-left"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-bold">Log Out</span>
                </button>
              </div>

              <div className="pt-6 border-t border-[#222]">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Navigation</p>
                <div className="grid grid-cols-2 gap-3">
                  {navItems.map(item => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                        location.pathname === item.path 
                        ? 'bg-[#EF4444]/10 border-[#EF4444]/20 text-[#EF4444]' 
                        : 'bg-[#111] border-[#222] text-gray-400'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mb-2" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-auto p-6 border-t border-[#222] bg-[#0a0a0a] text-center">
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.4em]">
                LearnCode v2.0
              </p>
            </div>
          </div>
        </div>
      )}

      <main className={`flex-1 transition-all duration-300 pb-20 pt-16 lg:pt-0 lg:pb-0`}>
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation - Visible only on mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-[#2D2D2D] z-50 flex items-center justify-around h-16 px-4 backdrop-blur-md">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center gap-1 group transition-colors ${
              location.pathname === item.path ? 'text-[#EF4444]' : 'text-[#6B7280]'
            }`}
          >
            <item.icon className={`w-5 h-5 group-hover:scale-110 transition-transform ${location.pathname === item.path ? 'fill-[#EF4444]/10' : ''}`} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </Link>
        ))}
        {user ? (
          <Link
            to="/profile"
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              location.pathname === '/profile' ? 'text-[#EF4444]' : 'text-[#6B7280]'
            }`}
          >
            {user.picture ? (
              <img src={user.picture} alt="Profile" className={`w-5 h-5 rounded-full border ${location.pathname === '/profile' ? 'border-[#EF4444]' : 'border-[#2D2D2D]'}`} />
            ) : (
              <User className={`w-5 h-5 ${location.pathname === '/profile' ? 'fill-[#EF4444]/10' : ''}`} />
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                location.pathname === '/login' ? 'text-[#EF4444]' : 'text-[#6B7280]'
              }`}
            >
              <LogIn className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Login</span>
            </Link>
            <Link
              to="/signup"
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                location.pathname === '/signup' ? 'text-[#EF4444]' : 'text-[#6B7280]'
              }`}
            >
              <Target className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Join</span>
            </Link>
          </>
        )}
      </nav>
      
      {/* Global Offline Alert */}
      {!isOnline && <OfflineAlert />}
    </div>
  );
};

export default Layout;
