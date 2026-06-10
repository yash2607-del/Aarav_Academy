const mongoose = require('mongoose');

const resourceLinkSchema = new mongoose.Schema({
  resourceType: { 
    type: String, 
    required: true,
    enum: ['study-material', 'ncert-notes', 'test-series'] 
  },
  classId: { type: String, required: true },
  streamId: { type: String },
  subjectId: { type: String, required: true },
  chapterId: { type: String, required: true },
  chapterName: { type: String },
  driveLink: { type: String, required: true }
}, { timestamps: true });

// Ensure uniqueness for a chapter in a specific resource type
resourceLinkSchema.index({ resourceType: 1, classId: 1, streamId: 1, subjectId: 1, chapterId: 1 }, { unique: true });

module.exports = mongoose.model('ResourceLink', resourceLinkSchema);
