const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const ResourceLink = require('./models/ResourceLink');
const ResourceConfig = require('./models/ResourceConfig');
const Video = require('./models/Video');
const Notification = require('./models/Notification');
const Achiever = require('./models/Achiever');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// Configure multer for memory storage (Required for Vercel Serverless)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aarav-academy')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send('Aarav Academy API Backend is running successfully!');
});

// --- API Routes ---

// 1. Verify Admin Credentials
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  if (email === adminEmail && password === adminPassword) {
    res.json({ success: true, message: 'Authenticated' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid Credentials' });
  }
});

// 2. Get resources (can filter by resourceType, class, etc.)
app.get('/api/resources', async (req, res) => {
  try {
    const filters = {};
    if (req.query.resourceType) filters.resourceType = req.query.resourceType;
    if (req.query.classId) filters.classId = req.query.classId;
    if (req.query.streamId) filters.streamId = req.query.streamId;
    if (req.query.subjectId) filters.subjectId = req.query.subjectId;
    
    const resources = await ResourceLink.find(filters);
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching resources' });
  }
});

// 3. Add or update a resource link
app.post('/api/resources', async (req, res) => {
  try {
    const { resourceType, classId, streamId, subjectId, chapterId, chapterName, driveLink, email, password } = req.body;

    // Verify credentials again for security
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Upsert the link
    const query = { resourceType, classId, subjectId, chapterId };
    if (streamId) query.streamId = streamId;

    const updatedLink = await ResourceLink.findOneAndUpdate(
      query,
      { chapterName, driveLink },
      { new: true, upsert: true }
    );

    res.json({ success: true, data: updatedLink });
  } catch (error) {
    res.status(500).json({ error: 'Server error saving resource' });
  }
});

// 4. Delete a resource link
app.delete('/api/resources', async (req, res) => {
  try {
    const { resourceType, classId, streamId, subjectId, chapterId, email, password } = req.body;
    
    // Verify credentials
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const query = { resourceType, classId, subjectId, chapterId };
    if (streamId) query.streamId = streamId;

    await ResourceLink.findOneAndDelete(query);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error deleting resource' });
  }
});

// 5. Get dynamic chapter count config
app.get('/api/resource-config', async (req, res) => {
  try {
    const filters = {};
    if (req.query.resourceType) filters.resourceType = req.query.resourceType;
    if (req.query.classId) filters.classId = req.query.classId;
    if (req.query.streamId) filters.streamId = req.query.streamId;
    if (req.query.subjectId) filters.subjectId = req.query.subjectId;

    const config = await ResourceConfig.findOne(filters);
    res.json(config || { chapterCount: null });
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching resource config' });
  }
});

// 6. Update dynamic chapter count config
app.post('/api/resource-config', async (req, res) => {
  try {
    const { resourceType, classId, streamId, subjectId, chapterCount, email, password } = req.body;
    
    // Verify credentials
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const query = { resourceType, classId, subjectId };
    if (streamId) query.streamId = streamId;

    const updatedConfig = await ResourceConfig.findOneAndUpdate(
      query,
      { chapterCount },
      { new: true, upsert: true }
    );
    res.json({ success: true, data: updatedConfig });
  } catch (error) {
    res.status(500).json({ error: 'Server error updating resource config' });
  }
});

// 7. Get videos
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.find().sort({ slotId: 1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching videos' });
  }
});

// 8. Update video
app.post('/api/videos', async (req, res) => {
  try {
    const { slotId, title, videoUrl, email, password } = req.body;

    // Verify credentials
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const updatedVideo = await Video.findOneAndUpdate(
      { slotId },
      { title, videoUrl },
      { new: true, upsert: true }
    );

    res.json({ success: true, data: updatedVideo });
  } catch (error) {
    res.status(500).json({ error: 'Server error saving video' });
  }
});

// 9. Get all notifications
app.get('/api/notifications', async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching notifications' });
  }
});

// 10. Create or Update notification
app.post('/api/notifications', async (req, res) => {
  try {
    const { id, title, message, isActive, email, password } = req.body;

    // Verify credentials
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    if (id) {
      const updated = await Notification.findByIdAndUpdate(id, { title, message, isActive }, { new: true });
      res.json({ success: true, data: updated });
    } else {
      const newNotification = new Notification({ title, message, isActive });
      await newNotification.save();
      res.json({ success: true, data: newNotification });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error saving notification' });
  }
});

// 11. Delete notification
app.delete('/api/notifications/:id', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verify credentials
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    await Notification.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error deleting notification' });
  }
});

// 12. Get all achievers
app.get('/api/achievers', async (req, res) => {
  try {
    const achievers = await Achiever.find().sort({ createdAt: -1 });
    res.json(achievers);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching achievers' });
  }
});

// 13. Create new achiever
app.post('/api/achievers', upload.single('pic'), async (req, res) => {
  try {
    const { name, class: className, percentage, year, testimonial, email, password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Picture is required' });
    }

    // Convert buffer to base64 string
    const base64Image = req.file.buffer.toString('base64');
    const imageUrl = `data:${req.file.mimetype};base64,${base64Image}`;

    const newAchiever = new Achiever({ name, class: className, percentage, year, testimonial, imageUrl });
    await newAchiever.save();
    
    res.json({ success: true, data: newAchiever });
  } catch (error) {
    res.status(500).json({ error: 'Server error creating achiever' });
  }
});

// 14. Update an achiever
app.put('/api/achievers/:id', upload.single('pic'), async (req, res) => {
  try {
    const { name, class: className, percentage, year, testimonial, email, password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const updateData = { name, class: className, percentage, year, testimonial };
    
    if (req.file) {
      const base64Image = req.file.buffer.toString('base64');
      updateData.imageUrl = `data:${req.file.mimetype};base64,${base64Image}`;
    }

    const updated = await Achiever.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ error: 'Server error updating achiever' });
  }
});

// 15. Delete an achiever
app.delete('/api/achievers/:id', async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    await Achiever.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error deleting achiever' });
  }
});

// Export app for Vercel serverless
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
