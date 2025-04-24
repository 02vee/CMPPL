const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const vehicleRoutes = require('./routes/vehicle');
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/document');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/document', documentRoutes);

// Serve React Frontend
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;