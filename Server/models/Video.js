const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  slotId: { 
    type: Number, 
    required: true,
    unique: true 
  },
  title: { type: String, required: true },
  videoUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);
