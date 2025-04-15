const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicle');
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/document');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/document', documentRoutes);

module.exports = app;