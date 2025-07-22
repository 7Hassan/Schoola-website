const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ageRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
  },
  description: { type: String },
  totalSessions: { type: Number, required: true },
  iconLink: { type: String },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema)
module.exports = Course;