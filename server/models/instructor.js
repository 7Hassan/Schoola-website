const mongoose = require('mongoose');
const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  phone: {
    type: String,
    required: true,
  },

  specialization: {
    type: String,
  },

  bio: {
    type: String,
  },

  image: {
    type: String,
  },

  active: {
    type: Boolean,
    default: true,
  },

  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },
  ],
}, {
  timestamps: true,
});

const instructor = mongoose.model('Instructor', instructorSchema)
module.exports = instructorSchema;