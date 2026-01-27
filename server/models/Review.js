const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, lowercase: true, trim: true },
  userName: { type: String, required: true },
  userPicture: { type: String },
  courseId: { type: String, required: true, index: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// One review per user per course
reviewSchema.index({ userEmail: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);
