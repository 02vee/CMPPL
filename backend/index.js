const path = require('path');
const express = require('express');
const app = require('./app'); // Your backend app

const PORT = process.env.PORT || 5000;

// Serve the frontend's static files
app.use(express.static(path.join(__dirname, 'build')));

// Fallback route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});