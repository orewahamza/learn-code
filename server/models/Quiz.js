const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, index: true },
  courseId: { type: String, required: true },
  lessonId: { type: String, required: true },
  score: { type: Number, required: true }, // Percentage 0-100
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  xpEarned: { type: Number, default: 0 },
  passed: { type: Boolean, default: false }, // true if score >= 70%
  timeTaken: { type: Number }, // seconds
  attemptNumber: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
});

// Compound index for efficient queries
quizAttemptSchema.index({ userEmail: 1, courseId: 1, lessonId: 1 });

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
