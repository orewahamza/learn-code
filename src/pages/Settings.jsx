import React, { useState, useRef } from 'react';
import { Bell, Lock, User, Globe, Camera, Save, X, Check, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../context/AuthContext';

const Settings = () => {
  const { user, updateUser } = useAuth();
  const [activeSection, setActiveSection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  // Form states
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: user?.settings?.emailNotifications ?? true,
    courseReminders: true,
    streakReminders: true,
    promotions: false,
  });

  const [preferences, setPreferences] = useState({
    language: user?.settings?.language || 'en',
    timezone: 'auto',
  });

  // Handle profile picture change
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // For now, we'll use a base64 conversion (in production, you'd upload to a server)
      const reader = new FileReader();
      reader.onloadend = async () => {
        setIsLoading(true);
        try {
          await updateUser({ picture: reader.result });
          showSuccess('Profile picture updated!');
        } catch (err) {
          setError('Failed to update profile picture');
        }
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle profile update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await updateUser({ name: profileForm.name });
      showSuccess('Profile updated successfully!');
      setActiveSection(null);
    } catch (err) {
      setError('Failed to update profile');
    }
    setIsLoading(false);
  };

  // Handle password update
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setError('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      // Call backend to update password
      const response = await fetch(`${config.API_URL}/api/user/${encodeURIComponent(user.email)}/password`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update password');
      }

      showSuccess('Password updated successfully!');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setActiveSection(null);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  // Handle notification settings
  const handleNotificationUpdate = async () => {
    setIsLoading(true);
    try {
      await updateUser({ 
        settings: { 
          ...user.settings, 
          emailNotifications: notifications.emailUpdates 
        } 
      });
      showSuccess('Notification preferences saved!');
      setActiveSection(null);
    } catch (err) {
      setError('Failed to update notifications');
    }
    setIsLoading(false);
  };

  // Handle preferences update
  const handlePreferencesUpdate = async () => {
    setIsLoading(true);
    try {
      await updateUser({ 
        settings: { 
          ...user.settings, 
          language: preferences.language 
        } 
      });
      showSuccess('Preferences saved!');
      setActiveSection(null);
    } catch (err) {
      setError('Failed to update preferences');
    }
    setIsLoading(false);
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const settingsSections = [
    { 
      id: 'account', 
      icon: User, 
      title: 'Account', 
      description: 'Manage your profile and account settings' 
    },
    { 
      id: 'notifications', 
      icon: Bell, 
      title: 'Notifications', 
      description: 'Configure notification preferences' 
    },
    { 
      id: 'security', 
      icon: Lock, 
      title: 'Privacy & Security', 
      description: 'Update password and privacy settings' 
    },
    { 
      id: 'preferences', 
      icon: Globe, 
      title: 'Language & Region', 
      description: 'Set your preferred language and timezone' 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-2">Settings</h1>
        <p className="text-[#9CA3AF] mb-8">Manage your account preferences</p>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl flex items-center gap-3 animate-in slide-in-from-top-5">
            <Check className="w-5 h-5 text-[#10B981]" />
            <p className="text-sm text-[#10B981]">{successMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#EF4444]" />
            <p className="text-sm text-[#EF4444]">{error}</p>
            <button onClick={() => setError('')} className="ml-auto text-[#EF4444] hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Profile Card */}
        {user && (
          <div className="bg-[#1a1a1a] rounded-2xl border border-[#2D2D2D] p-6 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative group">
                {user.picture ? (
                  <img 
                    src={user.picture} 
                    alt={user.name} 
                    className="w-20 h-20 rounded-full border-4 border-[#2D2D2D] object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center text-2xl font-bold border-4 border-[#2D2D2D]">
                    {user.name?.charAt(0) || 'U'}
                  </div>
                )}
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Camera className="w-6 h-6" />
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handlePictureChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-[#9CA3AF]">{user.email}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-[#6B7280]">{user.xp || 0} XP</span>
                  <span className="text-sm text-[#6B7280]">•</span>
                  <span className="text-sm text-[#6B7280]">{user.streak || 0} day streak</span>
                  {user.isPremium && (
                    <>
                      <span className="text-sm text-[#6B7280]">•</span>
                      <span className="text-xs bg-[#EF4444] px-2 py-0.5 rounded font-bold">PRO</span>
                    </>
                  )}
                </div>
              </div>
              <button 
                onClick={() => setActiveSection(activeSection === 'account' ? null : 'account')}
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-2 rounded-lg transition-all shadow-lg shadow-[#EF4444]/25"
              >
                Customize
              </button>
            </div>
          </div>
        )}

        {/* Settings Sections */}
        <div className="space-y-4">
          {settingsSections.map((section) => {
            const Icon = section.icon;
            const isExpanded = activeSection === section.id;
            
            return (
              <div
                key={section.id}
                className={`bg-[#1a1a1a] rounded-xl border transition-all overflow-hidden ${
                  isExpanded ? 'border-[#EF4444]/50' : 'border-[#2D2D2D] hover:border-[#333333]'
                }`}
              >
                {/* Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setActiveSection(isExpanded ? null : section.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isExpanded ? 'bg-[#EF4444]' : 'bg-[#0d0d0d]'
                    }`}>
                      <Icon className={`w-6 h-6 ${isExpanded ? 'text-white' : 'text-[#EF4444]'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{section.title}</h3>
                      <p className="text-sm text-[#9CA3AF]">{section.description}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-[#2D2D2D] flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-[#2D2D2D]">
                    {/* Account Section */}
                    {section.id === 'account' && (
                      <div className="pt-6 space-y-8 animate-in slide-in-from-top-4 duration-300">
                        {/* Profile Picture Section */}
                        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-8">
                             <div className="relative group">
                                {user?.picture ? (
                                    <img 
                                        src={user.picture} 
                                        alt={user.name} 
                                        className="w-24 h-24 rounded-2xl border-4 border-black object-cover shadow-2xl"
                                    />
                                ) : (
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center text-3xl font-black border-4 border-black">
                                        {user?.name?.charAt(0) || 'U'}
                                    </div>
                                )}
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#EF4444] border-2 border-white flex items-center justify-center shadow-lg">
                                    <Camera className="w-4 h-4 text-white" />
                                </div>
                             </div>

                             <div className="flex-1 space-y-4 text-center sm:text-left">
                                <div>
                                    <h4 className="text-lg font-black uppercase italic tracking-tight">Profile Picture</h4>
                                    <p className="text-xs text-[#6B7280] font-bold uppercase tracking-wider mb-4">Recommended: Square JPG/PNG, max 2MB</p>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                                        <button 
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            disabled={isLoading}
                                            className="bg-white text-black font-black px-6 py-2 rounded-xl text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                                        >
                                            Change Photo
                                        </button>
                                        <button 
                                            type="button"
                                            onClick={() => updateUser({ picture: null })}
                                            className="bg-black border border-[#2D2D2D] text-[#6B7280] font-black px-6 py-2 rounded-xl text-sm transition-all hover:text-white"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <form onSubmit={handleProfileUpdate} className="space-y-4 pt-8 border-t border-[#2D2D2D]">
                          <div>
                            <label className="block text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-2 ml-1">Display Name</label>
                            <input 
                              type="text"
                              value={profileForm.name}
                              onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                              className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-4 px-5 focus:outline-none focus:border-[#EF4444] transition-all font-medium"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">Email Address</label>
                            <input 
                              type="email"
                              value={profileForm.email}
                              disabled
                              className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-[#6B7280] rounded-xl py-3 px-4 cursor-not-allowed"
                            />
                            <p className="text-xs text-[#6B7280] mt-1">Email cannot be changed</p>
                          </div>
                          <div className="flex gap-3 pt-2">
                            <button 
                              type="submit"
                              disabled={isLoading}
                              className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
                            >
                              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                              Save Changes
                            </button>
                            <button 
                              type="button"
                              onClick={() => setActiveSection(null)}
                              className="bg-[#0d0d0d] border border-[#2D2D2D] text-white font-semibold px-6 py-2.5 rounded-lg transition-all hover:border-[#333333]"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    )}

                    {/* Notifications Section */}
                    {section.id === 'notifications' && (
                      <div className="pt-6 space-y-4">
                        {[
                          { key: 'emailUpdates', label: 'Email Updates', desc: 'Receive updates about new courses and features' },
                          { key: 'courseReminders', label: 'Course Reminders', desc: 'Get reminded about your ongoing courses' },
                          { key: 'streakReminders', label: 'Streak Reminders', desc: 'Daily reminders to maintain your streak' },
                          { key: 'promotions', label: 'Promotional Emails', desc: 'Special offers and discounts' },
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-[#0d0d0d] rounded-xl">
                            <div>
                              <p className="font-semibold">{item.label}</p>
                              <p className="text-sm text-[#6B7280]">{item.desc}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setNotifications({...notifications, [item.key]: !notifications[item.key]})}
                              className={`w-12 h-6 rounded-full transition-colors ${notifications[item.key] ? 'bg-[#EF4444]' : 'bg-[#2D2D2D]'}`}
                            >
                              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${notifications[item.key] ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                            </button>
                          </div>
                        ))}
                        <div className="flex gap-3 pt-2">
                          <button 
                            type="button"
                            onClick={handleNotificationUpdate}
                            disabled={isLoading}
                            className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
                          >
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save Preferences
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Security Section */}
                    {section.id === 'security' && (
                      <form onSubmit={handlePasswordUpdate} className="pt-6 space-y-4">
                        {!user?.hasPassword && (
                          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-4">
                            <p className="text-sm text-blue-400">
                              You joined via Google. Set a password below to enable manual login with your email.
                            </p>
                          </div>
                        )}
                        {user?.hasPassword && (
                          <div>
                            <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">Current Password</label>
                            <div className="relative">
                              <input 
                                type={showPasswords.current ? "text" : "password"}
                                value={passwordForm.currentPassword}
                                onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                                required={user.hasPassword}
                                className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                                placeholder="••••••••"
                              />
                              <button 
                                type="button"
                                onClick={() => setShowPasswords({...showPasswords, current: !showPasswords.current})}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white"
                              >
                                {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                              </button>
                            </div>
                          </div>
                        )}
                        <div>
                          <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">
                             {user?.hasPassword ? 'New Password' : 'Password'}
                          </label>
                          <div className="relative">
                            <input 
                              type={showPasswords.new ? "text" : "password"}
                              value={passwordForm.newPassword}
                              onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                              className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                              placeholder="New password (min 6 chars)"
                            />
                            <button 
                              type="button"
                              onClick={() => setShowPasswords({...showPasswords, new: !showPasswords.new})}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white"
                            >
                              {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">
                             {user?.hasPassword ? 'Confirm New Password' : 'Confirm Password'}
                          </label>
                          <div className="relative">
                            <input 
                              type={showPasswords.confirm ? "text" : "password"}
                              value={passwordForm.confirmPassword}
                              onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                              className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                              placeholder="Confirm new password"
                            />
                            <button 
                              type="button"
                              onClick={() => setShowPasswords({...showPasswords, confirm: !showPasswords.confirm})}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white"
                            >
                              {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button 
                            type="submit"
                            disabled={isLoading}
                            className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
                          >
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                            Update Password
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Preferences Section */}
                    {section.id === 'preferences' && (
                      <div className="pt-6 space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">Language</label>
                          <select 
                            value={preferences.language}
                            onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                            className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#EF4444]"
                          >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="ar">العربية</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#9CA3AF] mb-2">Timezone</label>
                          <select 
                            value={preferences.timezone}
                            onChange={(e) => setPreferences({...preferences, timezone: e.target.value})}
                            className="w-full bg-[#0d0d0d] border border-[#2D2D2D] text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#EF4444]"
                          >
                            <option value="auto">Auto-detect</option>
                            <option value="UTC">UTC</option>
                            <option value="EST">Eastern Time (EST)</option>
                            <option value="PST">Pacific Time (PST)</option>
                            <option value="GMT">GMT</option>
                          </select>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button 
                            type="button"
                            onClick={handlePreferencesUpdate}
                            disabled={isLoading}
                            className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
                          >
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save Preferences
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Danger Zone */}
        <div className="mt-8 pt-8 border-t border-[#2D2D2D]">
          <h3 className="text-lg font-bold text-[#EF4444] mb-4">Danger Zone</h3>
          <div className="bg-[#EF4444]/5 rounded-xl border border-[#EF4444]/20 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Delete Account</p>
                <p className="text-sm text-[#9CA3AF]">Permanently delete your account and all data</p>
              </div>
              <button className="bg-transparent border border-[#EF4444] text-[#EF4444] font-semibold px-6 py-2 rounded-lg hover:bg-[#EF4444] hover:text-white transition-all">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
