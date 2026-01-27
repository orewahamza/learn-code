const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // e.g., 'python-mastery'
  title: { type: String, required: true },
  description: String,
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  icon: String, // String representation or URL
  gradient: String, // CSS class or hex values
  totalLessons: { type: Number, default: 0 },
  isPaid: { type: Boolean, default: false },
  content: [{
    stepId: Number,
    title: String,
    status: { type: String, default: 'locked' } // 'locked', 'available'
  }]
});

module.exports = mongoose.model('Course', courseSchema);
