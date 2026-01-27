const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  googleId: { type: String }, // For Google Login
  password: { type: String }, // For standard email/pass login
  picture: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  
  // Gamification
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  streak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  lastActiveDate: { type: Date },
  
  // Premium
  isPremium: { type: Boolean, default: false },
  premiumSince: { type: Date },
  
  // Enrolled Courses
  enrolledCourses: [{
    courseId: { type: String, required: true },
    progress: { type: Number, default: 0 }, // 0 to 100
    completedSteps: [String], // IDs of completed lessons/steps
    isCompleted: { type: Boolean, default: false },
    enrolledAt: { type: Date, default: Date.now },
    completedAt: { type: Date }
  }],
  
  // Settings
  settings: {
    emailNotifications: { type: Boolean, default: true },
    weeklyReport: { type: Boolean, default: true },
    darkMode: { type: Boolean, default: true },
    language: { type: String, default: 'en' }
  },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  
  // Password Reset
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});

// Update the updatedAt field on save
userSchema.pre('save', async function() {
  try {
    this.updatedAt = new Date();
    
    // Update longest streak if current streak is higher
    if (this.streak > this.longestStreak) {
      this.longestStreak = this.streak;
    }
  } catch (err) {
    console.error('User pre-save hook error:', err);
    throw err;
  }
});

// Virtual for XP to next level
userSchema.virtual('xpToNextLevel').get(function() {
  return 500 - (this.xp % 500);
});

// Virtual for progress percentage to next level
userSchema.virtual('levelProgress').get(function() {
  return ((this.xp % 500) / 500) * 100;
});

module.exports = mongoose.model('User', userSchema);
