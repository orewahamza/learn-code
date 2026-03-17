require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const rateLimit = require('express-rate-limit');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Course = require('./models/Course');
const QuizAttempt = require('./models/Quiz');
const Activity = require('./models/Activity');
const Review = require('./models/Review');
const emailService = require('./services/emailService');

const app = express();

// --- ENVIRONMENT VALIDATION ---
const envSchema = Joi.object({
  PORT: Joi.number().default(5000),
  NODE_ENV: Joi.string().valid('development', 'production').default('development'),
  MONGO_URI: Joi.string().required(),
  CLIENT_URL: Joi.string().required(),
  GOOGLE_CLIENT_ID: Joi.string().required(),
  JWT_SECRET: Joi.string().default('dev-secret-change-in-production'), // ✅ JWT Secret for auth
}).unknown(true);

const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  console.error('❌ Environment Variable Error:', error.message);
  process.exit(1);
}

// --- Configuration ---
const PORT = process.env.PORT || 5000;
const NODE_ENV = envVars.NODE_ENV;
const MONGO_URI = envVars.MONGO_URI;
const CLIENT_URL = envVars.CLIENT_URL;
const JWT_SECRET = envVars.JWT_SECRET;

console.log(`🚀 Starting learnCode Server`);
console.log(`📍 Environment: ${NODE_ENV}`);
console.log(`🔗 Client URL: ${CLIENT_URL}`);

// --- Security Middleware ---
app.use(helmet({
  crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://accounts.google.com"],
      scriptSrcElem: ["'self'", "'unsafe-inline'", "https://accounts.google.com"],
      connectSrc: ["'self'", "http://localhost:5000", "http://127.0.0.1:5000", "https://accounts.google.com", "https://www.googleapis.com"],
      frameSrc: ["'self'", "https://accounts.google.com"],
      imgSrc: ["'self'", "data:", "https://*", "blob:"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  },
})); // Set security headers with CSP for Google Login

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// ✅ STRONGER rate limiting for auth routes (5 attempts per 15 minutes)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts, please try again later.',
  skipSuccessfulRequests: true, // Don't count successful logins
});

const allowedOrigins = [CLIENT_URL, 'http://localhost:3000', 'http://127.0.0.1:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1 && NODE_ENV !== 'production') {
      // Allow any origin in dev if origin not in list (safer for debug)
      return callback(null, true);
    }
    return callback(null, true); // Simplified dev fallback: allow all
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Apply rate limiting to API routes only
app.use('/api/', limiter);

// Normalize email middleware
app.use((req, res, next) => {
  if (req.params && req.params.email) {
    req.params.email = req.params.email.toLowerCase();
  }
  if (req.body) {
    if (req.body.email) req.body.email = req.body.email.toLowerCase();
    if (req.body.userEmail) req.body.userEmail = req.body.userEmail.toLowerCase();
  }
  next();
});

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });

// Health Check Endpoint
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date(), environment: NODE_ENV }));

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../build')));

// Root Route
app.get('/', (req, res) => {
  // Check if we are in the build directory
  if (NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  } else {
    res.json({ 
      message: "🚀 learnCode API is running!", 
      status: "online",
      documentation: "/health"
    });
  }
});

// --- Helper Functions ---
const SALT_ROUNDS = 10;

const hashPassword = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Calculate user level based on XP
const calculateLevel = (xp) => {
  // Every 500 XP = 1 Level
  return Math.floor(xp / 500) + 1;
};

// Check and update streak
const updateStreak = async (user) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const lastActivity = await Activity.findOne({ 
    userEmail: user.email 
  }).sort({ createdAt: -1 });

  if (!lastActivity) {
    user.streak = 1;
    user.lastActiveDate = today;
    return;
  }

  const lastActiveDate = new Date(lastActivity.createdAt);
  lastActiveDate.setHours(0, 0, 0, 0);

  const daysDiff = Math.floor((today - lastActiveDate) / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    // Same day, streak unchanged
  } else if (daysDiff === 1) {
    // Consecutive day, increment streak
    user.streak += 1;
  } else {
    // Streak broken
    user.streak = 1;
  }
  
  user.lastActiveDate = today;
};

// Log activity helper
const logActivity = async (userEmail, type, data = {}) => {
  try {
    if (!userEmail) return;
    const normalizedEmail = userEmail.toLowerCase().trim();
    const activity = new Activity({
      userEmail: normalizedEmail,
      type,
      courseId: data.courseId,
      lessonId: data.lessonId,
      xpAmount: data.xpAmount || 0,
      details: data.details
    });
    await activity.save();
  } catch (err) {
    console.error('Activity log error:', err);
  }
};

// =====================================
// AUTHENTICATION MIDDLEWARE
// =====================================

// ✅ FIXED: Verify JWT token instead of trusting client headers
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: "No token provided. Please login." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // User info from token
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// ✅ FIXED: Verify user owns the data they're accessing
const verifyOwnership = (req, res, next) => {
  const requestedEmail = req.params.email?.toLowerCase();
  const userEmail = req.user?.email?.toLowerCase();
  const userRole = req.user?.role;

  // Allow if user is accessing their own data OR if they're admin
  if (requestedEmail === userEmail || userRole === 'admin') {
    next();
  } else {
    res.status(403).json({ message: "Access denied. You can only access your own data." });
  }
};

// ✅ FIXED: Proper admin check using JWT token
const isAdmin = async (req, res, next) => {
  const userRole = req.user?.role;
  
  if (userRole !== 'admin') {
    return res.status(403).json({ message: "Admin access required." });
  }
  next();
};

// =====================================
// AUTH ROUTES
// =====================================

// Login (Google & Custom)
app.post('/api/auth/login', authLimiter, async (req, res) => {
  const { email, name, picture, googleId, password } = req.body;

  if (!email) {
    console.error('❌ Login error: No email in request body');
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const normalizedEmail = email.toLowerCase().trim();
    console.log(`[AUTH] Attempting login/register for: ${normalizedEmail}`);
    
    // 1. Find User
    let user;
    try {
      user = await User.findOne({ email: normalizedEmail });
    } catch (findErr) {
      console.error('[AUTH] Database find error:', findErr);
      throw new Error(`Database error looking up user: ${findErr.message}`);
    }

    if (user) {
      console.log(`[AUTH] User found: ${user.email} (Has password: ${!!user.password}, Has Google: ${!!user.googleId})`);
      
      // 2. Validate Password (if provided)
      if (password && user.password) {
        try {
          console.log(`[AUTH] Verifying password for ${normalizedEmail}...`);
          const isMatch = await comparePassword(password, user.password);
          if (!isMatch) {
            console.warn(`[AUTH] ❌ Password mismatch for ${normalizedEmail}`);
            return res.status(401).json({ message: "Invalid credentials" });
          }
          console.log(`[AUTH] ✅ Password match for ${normalizedEmail}`);
        } catch (bcryptErr) {
          console.error('[AUTH] ❌ Password comparison error:', bcryptErr);
          throw new Error(`Auth logic error: ${bcryptErr.message}`);
        }
      } else if (password && !user.password) {
          // Attempting password login on account created via Google
          console.warn(`[AUTH] ⚠️  Password login attempt on Google-only account: ${normalizedEmail}`);
          return res.status(401).json({ message: "This account was created with Google and doesn't have a password yet. Please use 'Forgot Password' to set one, or simply Login with Google." });
      }
      
      // 3. Link Google ID if missing
      if (googleId && !user.googleId) {
        user.googleId = googleId;
        console.log(`[AUTH] Linking Google account for: ${normalizedEmail}`);
      }

      // 4. Update Stats & Streak
      try {
        await updateStreak(user);
        user.level = calculateLevel(user.xp);
      } catch (statsErr) {
        console.warn('[AUTH] Non-fatal streak update error:', statsErr);
      }
      
      // 5. Save Changes
      try {
        await user.save();
      } catch (saveErr) {
        console.error('[AUTH] User save error after update:', saveErr);
        throw new Error(`Database error saving user state: ${saveErr.message}`);
      }
      
      // 6. Log Activity (Non-Blocking)
      logActivity(normalizedEmail, 'login').catch(e => console.error('[AUTH] Login activity log failed:', e));
      
      // ✅ Generate JWT token with user info
      const token = jwt.sign(
        { email: user.email, role: user.role, userId: user._id },
        JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      const userResponse = user.toObject();
      userResponse.hasPassword = !!user.password;
      delete userResponse.password;
      console.log(`[AUTH] ✅ User logged in: ${user.name}`);
      return res.json({ ...userResponse, token }); // ✅ Return token
    } else {
      // 7. Handle New User
      if (password) {
        // DO NOT auto-register for password logins
        console.warn(`[AUTH] Login attempt for non-existent user: ${normalizedEmail}`);
        return res.status(401).json({ message: "No account found with this email. Please sign up first." });
      }

      console.log(`[AUTH] 👤 User not found. Starting registration for Google user: ${normalizedEmail}`);
      
      const finalName = name || normalizedEmail.split('@')[0] || 'User';

      const userData = {
        name: finalName,
        email: normalizedEmail,
        picture: picture || null,
        googleId: googleId || null,
        xp: 0,
        level: 1,
        streak: 1,
        enrolledCourses: [],
        settings: {
          emailNotifications: true,
          weeklyReport: true,
          darkMode: true,
          language: 'en'
        }
      };

      if (password) {
        try {
          userData.password = await hashPassword(password);
        } catch (hashErr) {
          console.error('[AUTH] Password hashing error:', hashErr);
          throw new Error(`Security system error: ${hashErr.message}`);
        }
      }

      console.log(`[AUTH] Creating new user document in Mongoose...`);
      try {
        user = new User(userData);
        const savedUser = await user.save();
        console.log(`[AUTH] ✅ User registered successfully: ${savedUser._id}`);
      } catch (regErr) {
        console.error('[AUTH] ❌ User creation failed (validation/uniqueness):', regErr);
        if (regErr.code === 11000) {
            return res.status(409).json({ message: "User already exists with this email" });
        }
        throw new Error(`User registration failed: ${regErr.message}`);
      }
      
      // 8. Log Initial Activity
      logActivity(normalizedEmail, 'login').catch(e => console.error('[AUTH] New user activity log failed:', e));
      
      // ✅ FIXED: Generate JWT token for new user
      const token = jwt.sign(
        { email: user.email, role: user.role, userId: user._id },
        JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      const userResponse = user.toObject();
      userResponse.hasPassword = !!user.password;
      delete userResponse.password;
      console.log(`[AUTH] ✨ Success! Registered & Logged in as: ${user.name}`);
      return res.json({ ...userResponse, token }); // ✅ Return token
    }
  } catch (error) {
    console.error('💥 [AUTH] CRITICAL FAIL:', error);
    res.status(500).json({ 
      message: error.message || "Internal server error during login", 
      error: error.name,
      trace: process.env.NODE_ENV === 'development' ? error.stack : undefined 
    });
  }
});

// Register with Email/Password
app.post('/api/auth/register', async (req, res) => {
  const { email, name, password } = req.body;
  const normalizedEmail = email?.toLowerCase();

  if (!email || !name || !password) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      xp: 0,
      level: 1,
      streak: 1,
      enrolledCourses: []
    });

    await user.save();
    await logActivity(normalizedEmail, 'login', { details: { isNewUser: true } });
    
    // Trigger Welcome Email
    emailService.sendWelcomeEmail(email, name).catch(e => console.error('Failed to send welcome email', e));
    
    console.log(`New user registered: ${user.name}`);
    const userResponse = user.toObject();
    delete userResponse.password;
    res.status(201).json(userResponse);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: "Server error during registration", error: error.message });
  }
});

const crypto = require('crypto');

// Forgot Password - Send Reset Token
app.post('/api/auth/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if user exists for security, but we'll return more info for this demo
      return res.status(404).json({ message: "User not found" });
    }

    // Generate Token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    // Trigger Password Reset Email
    const resetUrl = `${CLIENT_URL}/reset-password/${resetToken}`;
    emailService.sendPasswordReset(email, resetUrl).catch(e => console.error('Failed to send reset email', e));

    console.log(`[PASS_RESET] Token for ${email}: ${resetToken}`);
    console.log(`[PASS_RESET] Link: ${resetUrl}`);

    res.json({ message: "Reset link sent to your email" });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: "Error in forgot password request" });
  }
});

// Reset Password - Verify Token and Update
app.post('/api/auth/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired" });
    }

    // Set new password
    user.password = await hashPassword(newPassword);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();
    console.log(`[PASS_RESET] ✅ Password successfully updated for: ${user.email}`);

    res.json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ message: "Error in reset password" });
  }
});

// =====================================
// USER ROUTES
// =====================================

// Get User Profile
app.get('/api/user/:email', verifyToken, verifyOwnership, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email.toLowerCase() }).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    
    // Recalculate level
    user.level = calculateLevel(user.xp);
    
    const userObj = user.toObject();
    userObj.hasPassword = !!user.password;
    res.json(userObj);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
});

// Update User
app.put('/api/user/:email', verifyToken, verifyOwnership, async (req, res) => {
  try {
    // ✅ FIXED: Validate input to prevent invalid updates
    const updateSchema = Joi.object({
      name: Joi.string().max(100),
      picture: Joi.string().uri().allow(null),
      settings: Joi.object().allow(null),
      isPremium: Joi.boolean(),
      premiumStartDate: Joi.string().isoDate().allow(null),
      premiumType: Joi.string().allow(null),
    }).unknown(false); // Don't allow unknown fields

    const { error: validationError, value: validatedUpdates } = updateSchema.validate(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError.details[0].message });
    }

    const user = await User.findOneAndUpdate(
      { email: req.params.email.toLowerCase() },
      { $set: validatedUpdates },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
});

// Update Password
app.put('/api/user/:email/password', verifyToken, verifyOwnership, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // ✅ FIXED: Validate password input
  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({ message: "New password must be at least 6 characters" });
  }

  try {
    const user = await User.findOne({ email: req.params.email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    // If user HAS a password, verify the current one
    if (user.password) {
      if (!currentPassword) {
        return res.status(400).json({ message: "Current password is required" });
      }
      const isMatch = await comparePassword(currentPassword, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect current password" });
      }
    }

    // Set/Update password
    user.password = await hashPassword(newPassword);
    await user.save();

    console.log(`Password ${user.password ? 'updated' : 'set'} for user: ${user.email}`);
    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error('Password update error:', error);
    res.status(500).json({ message: "Error updating password" });
  }
});

// Get User Stats
app.get('/api/user/:email/stats', verifyToken, verifyOwnership, async (req, res) => {
  try {
    const email = req.params.email.toLowerCase();
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const completedCourses = user.enrolledCourses.filter(c => c.isCompleted).length;
    const totalEnrolled = user.enrolledCourses.length;
    
    // Get quiz stats
    const quizzes = await QuizAttempt.find({ userEmail: email });
    const quizzesPassed = quizzes.filter(q => q.passed).length;
    const totalQuizzes = quizzes.length;
    
    // Get recent activity
    const recentActivity = await Activity.find({ userEmail: email })
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      xp: user.xp,
      level: calculateLevel(user.xp),
      xpToNextLevel: 500 - (user.xp % 500),
      streak: user.streak,
      completedCourses,
      totalEnrolled,
      quizzesPassed,
      totalQuizzes,
      isPremium: user.isPremium,
      recentActivity
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ message: "Error fetching stats" });
  }
});

// =====================================
// COURSE ENROLLMENT & PROGRESS
// =====================================

// Enroll in Course
app.post('/api/user/:email/enroll', verifyToken, verifyOwnership, async (req, res) => {
  const { courseId } = req.body;
  
  // ✅ FIXED: Validate courseId
  if (!courseId || typeof courseId !== 'string') {
    return res.status(400).json({ message: "Valid course ID is required" });
  }

  try {
    const user = await User.findOne({ email: req.params.email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    // ✅ FIXED: Check if course exists
    const course = await Course.findOne({ id: courseId });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // ✅ FIXED: Check if user already enrolled
    const alreadyEnrolled = user.enrolledCourses.some(c => c.courseId === courseId);
    if (alreadyEnrolled) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    // ✅ FIXED: Check if paid course and user is not premium
    if (course.isPaid && !user.isPremium) {
      return res.status(403).json({ message: "This course requires premium. Please upgrade." });
    }

    user.enrolledCourses.push({
      courseId,
      progress: 0,
      completedSteps: [],
      isCompleted: false,
      enrolledAt: new Date()
    });

    await updateStreak(user);
    await user.save();
    
    await logActivity(req.params.email, 'course_enroll', { courseId });
    
    console.log(`User ${user.email} enrolled in course: ${courseId}`);
    const userResponse = user.toObject();
    delete userResponse.password;
    res.json(userResponse);
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({ message: "Error enrolling in course" });
  }
});

// Update Course Progress
app.put('/api/user/:email/course/:courseId/progress', verifyToken, verifyOwnership, async (req, res) => {
  const { progress, completedStep, totalSteps } = req.body;
  const safeCourseId = req.params.courseId.toLowerCase();

  // ✅ FIXED: Validate progress input
  if (progress !== undefined && (typeof progress !== 'number' || progress < 0 || progress > 100)) {
    return res.status(400).json({ message: "Progress must be a number between 0 and 100" });
  }

  try {
    const user = await User.findOne({ email: req.params.email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    const courseIndex = user.enrolledCourses.findIndex(c => c.courseId === safeCourseId);
    if (courseIndex === -1) {
      return res.status(404).json({ message: "Course enrollment not found" });
    }

    if (progress !== undefined) {
      user.enrolledCourses[courseIndex].progress = progress;
    }

    if (completedStep && !user.enrolledCourses[courseIndex].completedSteps.includes(completedStep)) {
      user.enrolledCourses[courseIndex].completedSteps.push(completedStep);
      
      // Award XP for completing a step
      const stepXP = 25;
      user.xp += stepXP;
      user.level = calculateLevel(user.xp);
      
      await logActivity(req.params.email, 'lesson_complete', { 
        courseId: safeCourseId, 
        lessonId: completedStep,
        xpAmount: stepXP 
      });
    }

    // Auto-calculate progress if totalSteps provided
    if (totalSteps && typeof totalSteps === 'number' && totalSteps > 0) {
      const completed = user.enrolledCourses[courseIndex].completedSteps.length;
      user.enrolledCourses[courseIndex].progress = Math.min(100, Math.round((completed / totalSteps) * 100));
    }

    if (user.enrolledCourses[courseIndex].progress >= 100) {
      user.enrolledCourses[courseIndex].isCompleted = true;
      
      // Award completion bonus XP
      const bonusXP = 200;
      user.xp += bonusXP;
      user.level = calculateLevel(user.xp);
      
      await logActivity(req.params.email, 'course_complete', { 
        courseId: safeCourseId, 
        xpAmount: bonusXP 
      });
    }

    user.markModified('enrolledCourses');
    await updateStreak(user);
    await user.save();
    
    const userResponse = user.toObject();
    delete userResponse.password;
    res.json(userResponse);
  } catch (error) {
    console.error('Progress update error:', error);
    res.status(500).json({ message: "Error updating progress" });
  }
});

// Add XP to User
app.post('/api/user/:email/xp', verifyToken, verifyOwnership, async (req, res) => {
  const { amount, reason } = req.body;
  
  // ✅ FIXED: Validate XP amount (no negative, no huge values)
  if (!amount || typeof amount !== 'number') {
    return res.status(400).json({ message: "Valid XP amount is required" });
  }

  if (amount < 0 || amount > 10000) {
    return res.status(400).json({ message: "XP amount must be between 0 and 10000" });
  }

  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    
    user.xp += amount;
    user.level = calculateLevel(user.xp);
    
    await updateStreak(user);
    await user.save();
    
    await logActivity(req.params.email, 'xp_earned', { xpAmount: amount, details: { reason } });
    
    console.log(`Added ${amount} XP to user ${user.email}. Total: ${user.xp}`);
    
    const userResponse = user.toObject();
    delete userResponse.password;
    res.json(userResponse);
  } catch (error) {
    res.status(500).json({ message: "Error adding XP" });
  }
});

// =====================================
// QUIZ ROUTES
// =====================================

// Submit Quiz Attempt
app.post('/api/quiz/submit', async (req, res) => {
  const { userEmail, courseId, lessonId, score, totalQuestions, correctAnswers, timeTaken } = req.body;

  if (!userEmail || !courseId || !lessonId || score === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Check previous attempts
    const previousAttempts = await QuizAttempt.countDocuments({ 
      userEmail, 
      courseId, 
      lessonId 
    });

    // Calculate XP
    const passed = score >= 70;
    let xpEarned = 0;

    if (passed) {
      const isFirstPass = previousAttempts === 0 || 
        !(await QuizAttempt.findOne({ userEmail, courseId, lessonId, passed: true }));
      
      xpEarned = isFirstPass ? 50 : 10; // 50 XP first pass, 10 XP for retries
    } else {
      // Award partial XP for effort (2 XP per correct answer)
      // Only do this if they haven't passed before to prevent farming
      const hasPassedBefore = await QuizAttempt.findOne({ userEmail, courseId, lessonId, passed: true });
      if (!hasPassedBefore) {
        xpEarned = correctAnswers * 2;
      }
    }

    // Save quiz attempt
    const quizAttempt = new QuizAttempt({
      userEmail,
      courseId,
      lessonId,
      score,
      totalQuestions,
      correctAnswers,
      xpEarned,
      passed,
      timeTaken,
      attemptNumber: previousAttempts + 1
    });
    await quizAttempt.save();

      const safeCourseId = courseId.toLowerCase();
      const user = await User.findOne({ email: userEmail });
      if (user) {
        user.xp += xpEarned;
        user.level = calculateLevel(user.xp);
        
        let courseIndex = user.enrolledCourses.findIndex(c => c.courseId === safeCourseId);
        
        // Auto-enroll if not enrolled
        if (courseIndex === -1) {
          user.enrolledCourses.push({
            courseId: safeCourseId,
            progress: 0,
            completedSteps: [],
            enrolledAt: new Date()
          });
          courseIndex = user.enrolledCourses.length - 1;
        }

        if (passed && !user.enrolledCourses[courseIndex].completedSteps.includes(lessonId)) {
          user.enrolledCourses[courseIndex].completedSteps.push(lessonId);
        }

        // Recalculate progress percentage accurately
        const totalSteps = req.body.totalSteps || 10;
        const completedCount = user.enrolledCourses[courseIndex].completedSteps.length;
        user.enrolledCourses[courseIndex].progress = Math.min(100, Math.round((completedCount / totalSteps) * 100));
        
        if (user.enrolledCourses[courseIndex].progress >= 100) {
          user.enrolledCourses[courseIndex].isCompleted = true;
        }

        user.markModified('enrolledCourses');
        await updateStreak(user);
        await user.save();
      
      await logActivity(userEmail, passed ? 'quiz_pass' : 'quiz_fail', { 
        courseId, 
        lessonId, 
        xpAmount: xpEarned,
        details: { score, passed, attemptNumber: previousAttempts + 1 }
      });

      const userResponse = user.toObject();
      delete userResponse.password;

      return res.json({
        success: true,
        passed,
        xpEarned,
        attemptNumber: previousAttempts + 1,
        score,
        user: userResponse, // Return full updated user object
        message: passed ? "Congratulations! You passed!" : "Keep practicing!"
      });
    }

    res.status(404).json({ message: "User not found" });
  } catch (error) {
    console.error('Quiz submit error:', error);
    res.status(500).json({ message: "Error submitting quiz" });
  }
});

// Get Quiz History for a lesson
app.get('/api/quiz/:userEmail/:courseId/:lessonId', async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({
      userEmail: req.params.userEmail,
      courseId: req.params.courseId,
      lessonId: req.params.lessonId
    }).sort({ createdAt: -1 });

    const bestScore = attempts.length > 0 
      ? Math.max(...attempts.map(a => a.score)) 
      : 0;
    
    const hasPassed = attempts.some(a => a.passed);

    res.json({
      attempts,
      totalAttempts: attempts.length,
      bestScore,
      hasPassed
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz history" });
  }
});

// Get all quiz attempts for a user
app.get('/api/quiz/:userEmail', async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({ userEmail: req.params.userEmail })
      .sort({ createdAt: -1 })
      .limit(50);
    
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz attempts" });
  }
});

// =====================================
// LEADERBOARD
// =====================================

app.get('/api/leaderboard', async (req, res) => {
  try {
    // ✅ FIXED: Add proper pagination
    const limit = Math.min(parseInt(req.query.limit) || 100, 1000); // Default 100, max 1000
    const skip = Math.max(parseInt(req.query.skip) || 0, 0); // For pagination

    const leaders = await User.find({})
      .select('name email picture xp level streak')
      .sort({ xp: -1 })
      .limit(limit)
      .skip(skip);

    const totalUsers = await User.countDocuments({});

    const leaderboard = leaders.map((user, index) => ({
      rank: skip + index + 1,
      name: user.name,
      picture: user.picture,
      xp: user.xp,
      level: calculateLevel(user.xp),
      streak: user.streak
    }));

    res.json({
      leaderboard,
      total: totalUsers,
      returned: leaderboard.length,
      limit,
      skip
    });
  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ message: "Error fetching leaderboard" });
  }
});

// Get user's rank
app.get('/api/leaderboard/rank/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const rank = await User.countDocuments({ xp: { $gt: user.xp } }) + 1;
    const totalUsers = await User.countDocuments({});

    res.json({
      rank,
      totalUsers,
      percentile: Math.round(((totalUsers - rank + 1) / totalUsers) * 100)
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching rank" });
  }
});

// =====================================
// COURSE ROUTES
// =====================================

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

// Get single course
app.get('/api/course/:courseId', async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.courseId });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Error fetching course" });
  }
});

// =====================================
// COURSE REVIEWS
// =====================================

// Get reviews for a course
app.get('/api/course/:courseId/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ courseId: req.params.courseId })
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

// Post a review
app.post('/api/course/:courseId/reviews', verifyToken, async (req, res) => {
  const { rating, comment, userName: providedName, userPicture: providedPicture } = req.body;
  const courseId = req.params.courseId;
  const userEmail = req.user.email.toLowerCase();

  console.log(`[REVIEW] 📝 Submission attempt for course: ${courseId} from user: ${userEmail}`);

  if (!rating || !comment) {
    console.warn(`[REVIEW] ⚠️ Missing fields: rating=${rating}, comment=${comment ? 'exists' : 'missing'}`);
    return res.status(400).json({ message: "Rating and comment are required" });
  }

  try {
    // 1. Check if user already reviewed this course
    const existingReview = await Review.findOne({ userEmail, courseId });
    if (existingReview) {
      console.warn(`[REVIEW] 🚫 Blocked: Duplicate review for ${userEmail} on ${courseId}`);
      return res.status(400).json({ message: "You have already reviewed this course" });
    }

    // 2. Fetch user details if not provided to ensure quality
    const user = await User.findOne({ email: userEmail });
    const finalName = providedName || user?.name || userEmail.split('@')[0] || 'Anonymous';
    const finalPicture = providedPicture || user?.picture || null;

    // 3. Create and save review
    const review = new Review({
      userEmail,
      userName: finalName,
      userPicture: finalPicture,
      courseId,
      rating,
      comment
    });

    await review.save();
    console.log(`[REVIEW] ✅ Saved review for ${courseId} (ID: ${review._id})`);
    
    // 4. Update user XP
    if (user) {
      user.xp += 10;
      user.level = calculateLevel(user.xp);
      await user.save();
      console.log(`[REVIEW] ✨ User ${userEmail} awarded 10 XP. Total: ${user.xp}`);
    }

    // 5. Log activity (Non-blocking)
    logActivity(userEmail, 'xp_earned', { 
      xpAmount: 10, 
      courseId, 
      details: { reason: 'course_review' } 
    }).catch(e => console.error('[REVIEW] ❌ Activity log failed:', e));

    res.status(201).json(review);
  } catch (error) {
    console.error('💥 [REVIEW] POST Error:', error);
    res.status(500).json({ 
      message: "Error posting review", 
      error: error.message,
      code: error.code 
    });
  }
});

// Get user's review for a course
app.get('/api/course/:courseId/review/:email', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const email = req.params.email?.toLowerCase();
    
    if (!email) return res.status(400).json({ message: "Email required" });

    const review = await Review.findOne({ courseId, userEmail: email });
    res.json(review);
  } catch (error) {
    console.error('[REVIEW] GET Single Error:', error);
    res.status(500).json({ message: "Error fetching user review" });
  }
});

// Delete a review
app.delete('/api/course/:courseId/review/:email', verifyToken, verifyOwnership, async (req, res) => {
  try {
    const result = await Review.findOneAndDelete({ 
      courseId: req.params.courseId, 
      userEmail: req.params.email.toLowerCase() 
    });
    
    if (!result) {
      return res.status(404).json({ message: "Review not found" });
    }
    
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error('Review delete error:', error);
    res.status(500).json({ message: "Error deleting review" });
  }
});


// =====================================
// ACTIVITY / HISTORY
// =====================================

// Get all activity for a user
app.get('/api/activity/:email', verifyToken, verifyOwnership, async (req, res) => {
  try {
    const email = req.params.email.toLowerCase().trim();
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    
    const activities = await Activity.find({ userEmail: email })
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(activities);
  } catch (error) {
    console.error('💥 [ACTIVITY] GET Error:', error);
    res.status(500).json({ message: "Error fetching activity" });
  }
});

// =====================================

// =====================================
// SEED DATA
// =====================================

// Seed all courses from roadmapData structure
app.get('/api/seed/courses', verifyToken, isAdmin, async (req, res) => {
  const courses = [
    // Core Languages
    { id: 'javascript', title: 'JavaScript', description: 'Web, frontend, backend, automation', level: 'Beginner', totalLessons: 18, isPaid: false, gradient: 'from-[#F7DF1E] to-[#D4A518]' },
    { id: 'python', title: 'Python', description: 'Backend, AI, automation', level: 'Beginner', totalLessons: 16, isPaid: false, gradient: 'from-[#3776AB] to-[#FFD43B]' },
    { id: 'java', title: 'Java', description: 'Enterprise backend, Android', level: 'Beginner', totalLessons: 12, isPaid: false, gradient: 'from-[#5382a1] to-[#f89820]' },
    { id: 'c', title: 'C', description: 'Low-level systems', level: 'Beginner', totalLessons: 11, isPaid: false, gradient: 'from-[#00599C] to-[#A8B9CC]' },
    { id: 'cpp', title: 'C++', description: 'Performance apps, game engines', level: 'Intermediate', totalLessons: 7, isPaid: true, gradient: 'from-[#00599C] to-[#004482]' },
    { id: 'csharp', title: 'C#', description: 'Windows, backend, games', level: 'Beginner', totalLessons: 9, isPaid: false, gradient: 'from-[#239120] to-[#178600]' },
    { id: 'php', title: 'PHP', description: 'Web backend', level: 'Beginner', totalLessons: 10, isPaid: false, gradient: 'from-[#777BB4] to-[#4F5B93]' },
    { id: 'go', title: 'Go (Golang)', description: 'Scalable backend', level: 'Intermediate', totalLessons: 8, isPaid: true, gradient: 'from-[#00ADD8] to-[#008CA8]' },
    { id: 'rust', title: 'Rust', description: 'Memory-safe systems', level: 'Advanced', totalLessons: 8, isPaid: true, gradient: 'from-[#DEA584] to-[#000000]' },
    { id: 'typescript', title: 'TypeScript', description: 'Safer JavaScript', level: 'Intermediate', totalLessons: 8, isPaid: true, gradient: 'from-[#3178C6] to-[#235A97]' },
    
    // Web & UI
    { id: 'html', title: 'HTML', description: 'Document structure', level: 'Beginner', totalLessons: 6, isPaid: false, gradient: 'from-[#E34F26] to-[#F06529]' },
    { id: 'css', title: 'CSS', description: 'Styling', level: 'Beginner', totalLessons: 8, isPaid: false, gradient: 'from-[#264DE4] to-[#2965F1]' },
    { id: 'react', title: 'React', description: 'Modern frontend', level: 'Intermediate', totalLessons: 9, isPaid: true, gradient: 'from-[#61DAFB] to-[#21819B]' },
    { id: 'vue', title: 'Vue.js', description: 'Progressive framework', level: 'Intermediate', totalLessons: 11, isPaid: true, gradient: 'from-[#4FC08D] to-[#42b883]' },
    { id: 'angular', title: 'Angular', description: 'Enterprise framework', level: 'Advanced', totalLessons: 11, isPaid: true, gradient: 'from-[#DD0031] to-[#C3002F]' },
    { id: 'nodejs', title: 'Node.js', description: 'JS runtime', level: 'Intermediate', totalLessons: 8, isPaid: false, gradient: 'from-[#339933] to-[#68A063]' },
    
    // Databases
    { id: 'sql', title: 'SQL', description: 'Relational databases', level: 'Beginner', totalLessons: 7, isPaid: false, gradient: 'from-[#336791] to-[#2F5E85]' },
    { id: 'mongodb', title: 'MongoDB', description: 'NoSQL database', level: 'Intermediate', totalLessons: 10, isPaid: true, gradient: 'from-[#47A248] to-[#3F9142]' },
    { id: 'postgresql', title: 'PostgreSQL', description: 'Advanced SQL database', level: 'Intermediate', totalLessons: 10, isPaid: true, gradient: 'from-[#336791] to-[#274d6d]' },
    
    // Full Stack Paths
    { id: 'frontend-stack', title: 'Frontend Developer', description: 'Professional web interfaces', level: 'Beginner', totalLessons: 8, isPaid: false, gradient: 'from-[#F59E0B] to-[#EC4899]' },
    { id: 'backend-stack', title: 'Backend Developer', description: 'Server-side mastery', level: 'Intermediate', totalLessons: 11, isPaid: false, gradient: 'from-[#10B981] to-[#0EA5E9]' },
    { id: 'mern-stack', title: 'Full-Stack MERN', description: 'MongoDB, Express, React, Node', level: 'Advanced', totalLessons: 8, isPaid: true, gradient: 'from-[#EF4444] to-[#8B5CF6]' },
    { id: 'pern-stack', title: 'Full-Stack PERN', description: 'PostgreSQL, Express, React, Node', level: 'Advanced', totalLessons: 10, isPaid: true, gradient: 'from-[#336791] to-[#61DAFB]' },
    { id: 'python-fullstack', title: 'Python Full Stack', description: 'Django/Flask & Web', level: 'Beginner', totalLessons: 10, isPaid: false, gradient: 'from-[#3776AB] to-[#F59E0B]' },
    { id: 'java-fullstack', title: 'Java Full Stack', description: 'Spring Boot & Frontend', level: 'Beginner', totalLessons: 10, isPaid: true, gradient: 'from-[#5382a1] to-[#EF4444]' },
    { id: 'php-fullstack', title: 'PHP Full Stack', description: 'Laravel & Modern Web', level: 'Beginner', totalLessons: 11, isPaid: false, gradient: 'from-[#777BB4] to-[#FACC15]' },
    
    // Other Stacks
    { id: 'mobile-android', title: 'Android Development', description: 'Native mobile apps', level: 'Intermediate', totalLessons: 10, isPaid: true, gradient: 'from-[#3DDC84] to-[#073042]' },
    { id: 'game-dev', title: 'Game Development', description: 'Game engines & design', level: 'Advanced', totalLessons: 10, isPaid: true, gradient: 'from-[#7C3AED] to-[#EC4899]' },
    { id: 'devops-stack', title: 'DevOps Stack', description: 'Systems & CI/CD', level: 'Intermediate', totalLessons: 6, isPaid: true, gradient: 'from-[#6366F1] to-[#06B6D4]' },
    { id: 'ai-ml-stack', title: 'AI & Machine Learning', description: 'Intelligent systems', level: 'Advanced', totalLessons: 10, isPaid: true, gradient: 'from-[#8B5CF6] to-[#3B82F6]' }
  ];

  try {
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('✅ Courses seeded successfully');
    res.json({ message: "All courses seeded!", count: courses.length });
  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Global Stats
app.get('/api/admin/stats', verifyToken, isAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({});
    const premiumUsers = await User.countDocuments({ isPremium: true });
    const totalAdmins = await User.countDocuments({ role: 'admin' });
    const totalXP = await User.aggregate([{ $group: { _id: null, total: { $sum: "$xp" } } }]);
    const totalReviews = await Review.countDocuments({});
    const totalActivities = await Activity.countDocuments({});

    // Top Courses
    const topCourses = await User.aggregate([
      { $unwind: "$enrolledCourses" },
      { $group: { _id: "$enrolledCourses.courseId", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      totalUsers,
      premiumUsers,
      totalAdmins,
      totalXP: totalXP[0]?.total || 0,
      totalReviews,
      totalActivities,
      topCourses
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin stats" });
  }
});

// User Management
app.get('/api/admin/users', verifyToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find({})
      .select('-password')
      .sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// Update User Role
app.put('/api/admin/user/:email/role', verifyToken, isAdmin, async (req, res) => {
  const { role } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { role },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user role" });
  }
});

// Toggle Premium
app.put('/api/admin/user/:email/premium', verifyToken, isAdmin, async (req, res) => {
  const { isPremium } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { isPremium, premiumSince: isPremium ? new Date() : null },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error toggling premium" });
  }
});

// Delete User
app.delete('/api/admin/user/:email', verifyToken, isAdmin, async (req, res) => {
  try {
    await User.findOneAndDelete({ email: req.params.email });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
});

// =====================================
// START SERVER
// =====================================

// Catch-all route for React Router (must be the LAST route)
// Catch-all route for React Router (must be the LAST route)
app.get('*splat', (req, res) => {
  if (NODE_ENV === 'production' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  } else if (!req.path.startsWith('/api')) {
      res.status(404).json({ message: "Route not found" });
  }
});

app.listen(PORT, () => {
  const apiUrl = NODE_ENV === 'production' 
    ? `https://${process.env.API_DOMAIN || 'api.yourdomain.com'}` 
    : `http://localhost:${PORT}`;
  
  console.log(`
  🚀  learnCode SERVER STARTED  🚀
  ---------------------------------
  📡  API:       ${apiUrl}
  💻  WEBSITE:   ${CLIENT_URL}
  🔒  Security:  ${NODE_ENV === 'production' ? '✅ ENABLED' : '⚠️  Development Mode'}
  ---------------------------------
  Press Ctrl+C to stop
  `);
});
