const mongoose = require('mongoose');

const resourceConfigSchema = new mongoose.Schema({
  resourceType: { type: String, required: true },
  classId: { type: String, required: true },
  streamId: { type: String },
  subjectId: { type: String, required: true },
  chapterCount: { type: Number, required: true, default: 12 }
}, { timestamps: true });

// Create a compound index to ensure uniqueness for a given subject setup
resourceConfigSchema.index({ resourceType: 1, classId: 1, streamId: 1, subjectId: 1 }, { unique: true });

module.exports = mongoose.model('ResourceConfig', resourceConfigSchema);
