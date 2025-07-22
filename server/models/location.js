

const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, },
  address: { type: String, required: true },
  mapLink: { type: String },
  contactPhone: { type: String },
}, { timestamps: true });


const Location = mongoose.model('Location', locationSchema)
module.exports = Location;