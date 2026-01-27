import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Layout from './Layout';

// Import page components
import Home from './pages/Home';
import Courses from './pages/Courses';
import LearningPath from './pages/LearningPath';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Roadmaps from './pages/Roadmaps';
import Premium from './pages/Premium';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import RoadmapView from './pages/RoadmapView';
import CoursePage from './pages/CoursePage';
import LearnContent from './pages/LearnContent';
import Activity from './pages/Activity';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';

// Protected Route wrapper
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Public Route wrapper (redirect to home if already logged in)
const PublicRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const { user } = useAuth();
  // If user object exists, they are authenticated
  const isAuthenticated = !!user;

  return (
    <Router>
      <Routes>
        {/* Public Routes (Login/Signup) */}
        <Route path="/login" element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <Login />
          </PublicRoute>
        } />
        
        <Route path="/signup" element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <Signup />
          </PublicRoute>
        } />

        {/* Protected Routes with Layout */}
        <Route path="/" element={
            <Layout />
        }>
          {/* Main Pages - Accessible to everyone for now, OR restrict specific ones */}
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="roadmaps" element={<Roadmaps />} />
          <Route path="roadmap/:roadmapType" element={<RoadmapView />} />
          <Route path="course/:courseId" element={<CoursePage />} />
          <Route path="premium" element={<Premium />} />
          
          {/* Protected Content - Only for logged in users */}
          <Route path="learn/:courseId" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LearningPath />
            </ProtectedRoute>
          } />
          <Route path="quiz/:lessonId" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Quiz />
            </ProtectedRoute>
          } />
          
          <Route path="learn-video/:lessonId" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LearnContent />
            </ProtectedRoute>
          } />
          
          {/* User Routes */}
          <Route path="profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="settings" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path="activity" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Activity />
            </ProtectedRoute>
          } />
          <Route path="admin" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Route>

        {/* Forgot Password - Public */}
        <Route path="/forgot-password" element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <ForgotPassword />
          </PublicRoute>
        } />

        <Route path="/reset-password/:token" element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <ResetPassword />
          </PublicRoute>
        } />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
