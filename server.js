const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure local data directory exists for offline fallback
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');

// Mongoose Schemas
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, default: '#' },
  tags: [String]
});

const Message = mongoose.model('Message', MessageSchema);
const Project = mongoose.model('Project', ProjectSchema);

// Default mock projects list
const defaultProjects = [
  {
    title: 'WEBSHOP',
    category: 'Online Shopping Website',
    description: 'Developed a fully functional online shopping website ("WEBSHOP") using HTML, CSS, and JavaScript for the frontend and PHP/MySQL for backend logic. Features include user accounts, shopping cart, dynamic search, product catalog, and secure checkout flow.',
    image: './assets/images/webshop.png',
    link: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  }
];

// Initialize default projects local file if it doesn't exist
if (!fs.existsSync(PROJECTS_FILE)) {
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(defaultProjects, null, 2), 'utf8');
}

// Database Connection & Seeding
let isDbConnected = false;

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Successfully connected to MongoDB.');
    isDbConnected = true;

    // Seed default projects if none exist in the database
    try {
      const projectCount = await Project.countDocuments();
      if (projectCount === 0) {
        await Project.insertMany(defaultProjects);
        console.log('Seeded default projects to MongoDB.');
      }
    } catch (err) {
      console.error('Error seeding projects:', err.message);
    }
  })
  .catch((err) => {
    console.warn('WARNING: Could not connect to MongoDB. Server will run in OFFLINE fallback mode.');
    console.error('MongoDB connection error:', err.message);
    isDbConnected = false;
  });

// API Routes

// 1. Submit contact message
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const messageData = { name, email, message, createdAt: new Date() };

  // Attempt to save to MongoDB
  if (isDbConnected) {
    try {
      const newMessage = new Message(messageData);
      await newMessage.save();
      console.log('Saved message to MongoDB:', messageData.email);
      return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Error saving message to MongoDB, falling back to local file:', error.message);
    }
  }

  // Fallback: save to local contacts.json file
  try {
    let contacts = [];
    if (fs.existsSync(CONTACTS_FILE)) {
      const fileData = fs.readFileSync(CONTACTS_FILE, 'utf8');
      contacts = JSON.parse(fileData);
    }
    contacts.push(messageData);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Saved message to local JSON file:', messageData.email);
    return res.status(200).json({ success: true, message: 'Message saved locally (Offline mode).' });
  } catch (error) {
    console.error('Offline fallback save failed:', error.message);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// 2. Fetch projects
app.get('/api/projects', async (req, res) => {
  // Attempt to query from MongoDB
  if (isDbConnected) {
    try {
      const dbProjects = await Project.find();
      if (dbProjects.length > 0) {
        return res.status(200).json(dbProjects);
      }
    } catch (error) {
      console.error('Error querying projects from MongoDB, falling back to local file:', error.message);
    }
  }

  // Fallback: query from local projects.json file
  try {
    if (fs.existsSync(PROJECTS_FILE)) {
      const fileData = fs.readFileSync(PROJECTS_FILE, 'utf8');
      const localProjects = JSON.parse(fileData);
      return res.status(200).json(localProjects);
    }
    return res.status(200).json(defaultProjects);
  } catch (error) {
    console.error('Error reading projects local file:', error.message);
    return res.status(200).json(defaultProjects);
  }
});

// Serve compiled static assets from React App
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Fallback all non-API GET requests to React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
