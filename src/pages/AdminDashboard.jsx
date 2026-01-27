import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, Zap, MessageSquare, Shield, ShieldCheck, 
  Trash2, UserPlus, TrendingUp, Search, Filter, Loader2, 
  ChevronRight, ArrowUpRight, BarChart3, Clock, Lock, Activity
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import config from '../config';

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect if not admin
  useEffect(() => {
    if (user && user.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchAdminData();
    }
  }, [user]);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // ✅ FIXED: Use JWT token instead of admin-email header
      const headers = { 
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      };
      
      const [statsRes, usersRes] = await Promise.all([
        fetch(`${config.API_URL}/api/admin/stats`, { headers }),
        fetch(`${config.API_URL}/api/admin/users`, { headers })
      ]);

      if (statsRes.ok && usersRes.ok) {
        setStats(await statsRes.json());
        setUsers(await usersRes.json());
      } else if (statsRes.status === 403 || usersRes.status === 403) {
        navigate('/'); // Redirect if not admin
      }
    } catch (err) {
      console.error('Admin fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (email, newRole) => {
    try {
      const response = await fetch(`${config.API_URL}/api/admin/user/${email}/role`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` // ✅ FIXED: Use JWT token
        },
        body: JSON.stringify({ role: newRole })
      });
      if (response.ok) fetchAdminData();
    } catch (err) { console.error(err); }
  };

  const togglePremium = async (email, currentStatus) => {
    try {
      const response = await fetch(`${config.API_URL}/api/admin/user/${email}/premium`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` // ✅ FIXED: Use JWT token
        },
        body: JSON.stringify({ isPremium: !currentStatus })
      });
      if (response.ok) fetchAdminData();
    } catch (err) { console.error(err); }
  };

  const deleteUser = async (email) => {
    if (!window.confirm(`Are you sure you want to delete ${email}?`)) return;
    try {
      const response = await fetch(`${config.API_URL}/api/admin/user/${email}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.token}` } // ✅ FIXED: Use JWT token
      });
      if (response.ok) fetchAdminData();
    } catch (err) { console.error(err); }
  };

  const [isSeeding, setIsSeeding] = useState(false);

  const seedCourses = async () => {
    if (!window.confirm("This will replace all existing courses in the database with the default set. Continue?")) return;
    
    setIsSeeding(true);
    try {
      const response = await fetch(`${config.API_URL}/api/seed/courses`, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Successfully seeded ${data.count} courses!`);
        fetchAdminData();
      } else {
        alert(`Seed failed: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Seeding error. Check console.");
    } finally {
      setIsSeeding(false);
    }
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Loader2 className="w-12 h-12 text-[#EF4444] animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="bg-[#EF4444]/20 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-[#EF4444]" />
                 </div>
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-[#EF4444]">Admin Console</span>
              </div>
              <h1 className="text-5xl font-black uppercase italic tracking-tighter">System <span className="text-[#EF4444]">Overview</span></h1>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <button 
                onClick={seedCourses}
                disabled={isSeeding}
                className="bg-white/5 hover:bg-white/10 border border-[#2D2D2D] text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {isSeeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <BookOpen className="w-4 h-4" />}
                {isSeeding ? 'Seeding...' : 'Seed Courses Database'}
              </button>
            </div>
          </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-[#111] p-1.5 rounded-2xl w-fit border border-[#222]">
           <button 
             onClick={() => setActiveTab('overview')}
             className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-[#EF4444] text-white' : 'text-[#6B7280] hover:text-white'}`}
           >Overview</button>
           <button 
             onClick={() => setActiveTab('users')}
             className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'users' ? 'bg-[#EF4444] text-white' : 'text-[#6B7280] hover:text-white'}`}
           >User Management</button>
        </div>

        {activeTab === 'overview' ? (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { label: 'Total Students', value: stats?.totalUsers, icon: Users, color: 'text-blue-500' },
                  { label: 'Premium Users', value: stats?.premiumUsers, icon: ShieldCheck, color: 'text-purple-500' },
                  { label: 'Admin Staff', value: stats?.totalAdmins, icon: Shield, color: 'text-orange-500' },
                  { label: 'System Activities', value: stats?.totalActivities, icon: Activity, color: 'text-[#EF4444]' },
                  { label: 'Total XP', value: stats?.totalXP?.toLocaleString(), icon: Zap, color: 'text-yellow-500' }
                ].map((item, idx) => (
                 <div key={idx} className="bg-[#111] border border-[#222] p-8 rounded-[32px] group hover:border-[#EF4444]/40 transition-all">
                    <div className="flex items-center justify-between mb-4">
                       <item.icon className={`w-8 h-8 ${item.color}`} />
                       <div className="text-[10px] font-black uppercase tracking-widest text-[#444] bg-black px-3 py-1 rounded-full border border-[#222]">Live</div>
                    </div>
                    <div className="text-4xl font-black mb-1 italic">{item.value || 0}</div>
                    <div className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">{item.label}</div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Top Courses Chart */}
              <div className="lg:col-span-2 bg-[#111] border border-[#222] rounded-[32px] p-10">
                 <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                   <TrendingUp className="w-5 h-5 text-[#EF4444]" />
                   Popular Courses
                 </h3>
                 <div className="space-y-6">
                    {stats?.topCourses?.map((course, idx) => {
                      const percentage = (course.count / stats.totalUsers) * 100;
                      return (
                        <div key={idx}>
                           <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-sm uppercase tracking-tight text-white">{course._id}</span>
                              <span className="text-xs font-black text-[#444]">{course.count} Students</span>
                           </div>
                           <div className="h-3 w-full bg-black rounded-full overflow-hidden border border-[#222]">
                              <div 
                                className="h-full bg-gradient-to-r from-[#EF4444] to-[#F97316] transition-all duration-1000"
                                style={{ width: `${percentage}%` }}
                              ></div>
                           </div>
                        </div>
                      )
                    })}
                 </div>
              </div>

              {/* Recent Reviews Summary */}
              <div className="bg-[#111] border border-[#222] rounded-[32px] p-10">
                 <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                   <MessageSquare className="w-5 h-5 text-[#EF4444]" />
                   Reviews
                 </h3>
                 <div className="text-center py-8">
                    <div className="text-7xl font-black italic text-[#EF4444] mb-2">{stats?.totalReviews || 0}</div>
                    <p className="text-sm font-bold text-[#6B7280] uppercase tracking-widest leading-loose">Total ecosystem reviews successfully moderated.</p>
                 </div>
              </div>
            </div>
          </div>
        ) : (
          /* User Management View */
          <div className="bg-[#111] border border-[#222] rounded-[32px] overflow-hidden">
             <div className="p-8 border-b border-[#222] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="relative flex-1 max-w-md">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#444]" />
                   <input 
                     type="text"
                     placeholder="Search users by name or email..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-black border border-[#222] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#EF4444] transition-all"
                   />
                </div>
                <div className="text-sm font-bold text-[#444] uppercase tracking-widest">
                  Showing {filteredUsers.length} of {users.length} users
                </div>
             </div>

             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-[#222] text-[10px] font-black text-[#444] uppercase tracking-[0.2em]">
                         <th className="px-8 py-6">User</th>
                         <th className="px-8 py-6">Status</th>
                         <th className="px-8 py-6">Gamification</th>
                         <th className="px-8 py-6 text-right">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-[#222]">
                      {filteredUsers.map((u) => (
                        <tr key={u.email} className="hover:bg-white/[0.02] transition-colors group">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 {u.picture ? (
                                   <img src={u.picture} alt={u.name} className="w-10 h-10 rounded-xl" />
                                 ) : (
                                   <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-[#222] font-black text-[#EF4444]">{u.name[0]}</div>
                                 )}
                                 <div>
                                    <div className="font-bold text-white text-sm">{u.name}</div>
                                    <div className="text-xs text-[#6B7280]">{u.email}</div>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-2">
                                 <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${u.role === 'admin' ? 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20' : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'}`}>
                                    {u.role}
                                 </span>
                                 {u.isPremium && (
                                   <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-purple-500/10 text-purple-500 border border-purple-500/20">PRO</span>
                                 )}
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <div>
                                    <div className="text-xs font-black text-white">{u.xp} XP</div>
                                    <div className="text-[10px] text-[#444] uppercase font-black">Level {u.level}</div>
                                 </div>
                                 <div className="h-8 w-px bg-[#222]"></div>
                                 <div className="text-xs font-black text-white">{u.streak} 🔥</div>
                              </div>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <div className="flex items-center justify-end gap-2">
                                 <button 
                                   onClick={() => togglePremium(u.email, u.isPremium)}
                                   title={u.isPremium ? "Revoke Premium" : "Grant Premium"}
                                   className={`p-2 rounded-lg transition-all ${u.isPremium ? 'text-purple-500 hover:bg-purple-500/10' : 'text-[#444] hover:text-purple-500 hover:bg-purple-500/10'}`}
                                 >
                                    <ShieldCheck className="w-5 h-5" />
                                 </button>
                                 <button 
                                   onClick={() => updateUserRole(u.email, u.role === 'admin' ? 'user' : 'admin')}
                                   title={u.role === 'admin' ? "Demote to User" : "Promote to Admin"}
                                   className={`p-2 rounded-lg transition-all ${u.role === 'admin' ? 'text-[#EF4444] hover:bg-[#EF4444]/10' : 'text-[#444] hover:text-[#EF4444] hover:bg-[#EF4444]/10'}`}
                                 >
                                    <Shield className="w-5 h-5" />
                                 </button>
                                 <button 
                                   onClick={() => deleteUser(u.email)}
                                   className="p-2 text-[#444] hover:text-[#EF4444] hover:bg-[#EF4444]/10 rounded-lg transition-all"
                                 >
                                    <Trash2 className="w-5 h-5" />
                                 </button>
                              </div>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        )}

        {/* Danger Zone / Action Zone */}
        <div className="mt-16 pt-8 border-t border-[#222] flex justify-center">
            <button 
              onClick={() => {
                if(window.confirm("ARE YOU SURE? This will remove your admin permissions immediately.")) {
                  updateUserRole(user.email, 'user').then(() => navigate('/'));
                }
              }}
              className="px-8 py-4 bg-[#111] border border-[#222] hover:border-blue-500 text-[#6B7280] hover:text-blue-500 font-bold rounded-2xl flex items-center gap-3 transition-all group active:scale-95 italic uppercase tracking-widest text-xs"
            >
              <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Become a Normal User
            </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
