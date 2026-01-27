const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userEmail: { type: String, required: true, index: true, lowercase: true, trim: true },
  type: { 
    type: String, 
    enum: ['lesson_complete', 'quiz_pass', 'quiz_fail', 'course_enroll', 'course_complete', 'login', 'xp_earned'],
    required: true 
  },
  courseId: { type: String },
  lessonId: { type: String },
  xpAmount: { type: Number, default: 0 },
  details: { type: mongoose.Schema.Types.Mixed }, // Flexible field for extra data
  createdAt: { type: Date, default: Date.now }
});

// Index for fetching user's recent activity
activitySchema.index({ userEmail: 1, createdAt: -1 });

module.exports = mongoose.model('Activity', activitySchema);
