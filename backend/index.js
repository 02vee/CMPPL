const path = require('path');
const express = require('express');
const app = require('./app'); // Assuming 'app' is where your backend routes are defined

const PORT = process.env.PORT || 5000;

// Serve static files from the React frontend build directory
app.use(express.static(path.join(__dirname, 'build')));

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});