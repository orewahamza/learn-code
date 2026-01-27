import React, { createContext, useState, useEffect, useContext } from 'react';
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import config from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('learncode_user');
    if (storedUser) {
      const localUser = JSON.parse(storedUser);
      setUser(localUser); // Set immediately for UI responsiveness
      
      // Sync fresh data from DB (role, XP, etc.)
      fetch(`${config.API_URL}/api/user/${encodeURIComponent(localUser.email)}`, {
        headers: {
          'Authorization': `Bearer ${localUser.token || ''}`
        }
      })
      .then(res => res.ok ? res.json() : null)
      .then(dbUser => {
        if (dbUser) {
          const updatedUser = { ...localUser, ...dbUser };
          setUser(updatedUser);
          localStorage.setItem('learncode_user', JSON.stringify(updatedUser));
        }
      })
      .catch(err => console.error("Initial sync failed:", err));
    }
  }, []);

  const login = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      
      const response = await fetch(`${config.API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
          googleId: decoded.sub
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const dbUser = await response.json();
      setUser(dbUser);
      localStorage.setItem('learncode_user', JSON.stringify(dbUser));
      return dbUser;
    } catch (error) {
      console.error("Login Failed:", error);
      throw error;
    }
  };

  const logout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem('learncode_user');
    window.location.href = '/'; 
  };

  const updateUser = async (updates) => {
    if (!user) return;
    
    // Keep reference for possible rollback
    const prevUser = { ...user };
    
    // Optimistic UI update
    const newUser = { ...user, ...updates };
    setUser(newUser);
    localStorage.setItem('learncode_user', JSON.stringify(newUser));

    // Sync with DB
    try {
      const response = await fetch(`${config.API_URL}/api/user/${encodeURIComponent(user.email)}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token || ''}`
        },
        body: JSON.stringify(updates)
      });
      
      if (!response.ok) {
        throw new Error(`Sync failed: ${response.statusText}`);
      }
      
      // Update with exact data from server to be safe
      const updatedDbUser = await response.json();
      const finalUser = { ...user, ...updatedDbUser }; // Keep token
      setUser(finalUser);
      localStorage.setItem('learncode_user', JSON.stringify(finalUser));
      
    } catch (err) {

      console.error("Failed to sync update, rolling back:", err);
      // Rollback on failure
      setUser(prevUser);
      localStorage.setItem('learncode_user', JSON.stringify(prevUser));
      throw err; // Re-throw to caller (like Settings.jsx)
    }
  };

  const updateUserLocally = (userData) => {
    if (!userData) return;
    const finalUser = { ...user, ...userData }; // Keep existing token if not in userData
    setUser(finalUser);
    localStorage.setItem('learncode_user', JSON.stringify(finalUser));
  };

  const loginWithUser = async (userData) => {
    try {
      const response = await fetch(`${config.API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
          googleId: userData.sub || userData.googleId
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Direct login failed');
      }

      const dbUser = await response.json();
      setUser(dbUser);
      localStorage.setItem('learncode_user', JSON.stringify(dbUser));
      return dbUser;
    } catch (error) {
      console.error("Direct Login Failed:", error);
      throw error;
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      const response = await fetch(`${config.API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Login failed');
      }

      const dbUser = await response.json();
      setUser(dbUser);
      localStorage.setItem('learncode_user', JSON.stringify(dbUser));
      return dbUser;
    } catch (error) {
      console.error("Email Login Failed:", error);
      throw error;
    }
  };

  const registerWithEmail = async (name, email, password) => {
    try {
      const response = await fetch(`${config.API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Registration failed');
      }

      const dbUser = await response.json();
      setUser(dbUser);
      localStorage.setItem('learncode_user', JSON.stringify(dbUser));
      return dbUser;
    } catch (error) {
      console.error("Email Registration Failed:", error);
      throw error;
    }
  };

  const refreshUser = async () => {
    if (!user) return;
    try {
      const res = await fetch(`${config.API_URL}/api/user/${encodeURIComponent(user.email)}`, {
        headers: {
          'Authorization': `Bearer ${user.token || ''}`
        }
      });
      if (res.ok) {
        const dbUser = await res.json();
        const updatedUser = { ...user, ...dbUser }; // Keep token
        setUser(updatedUser);
        localStorage.setItem('learncode_user', JSON.stringify(updatedUser));
      }
    } catch (err) {
      console.error("Manual refresh failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, updateUserLocally, loginWithUser, loginWithEmail, registerWithEmail, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
