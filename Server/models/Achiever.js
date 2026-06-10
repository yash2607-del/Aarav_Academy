const mongoose = require('mongoose');

const achieverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  percentage: { type: Number, required: true },
  year: { type: String, required: true },
  testimonial: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Achiever', achieverSchema);
