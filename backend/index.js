const path = require('path');
const express = require('express');
const app = require('./app'); // Assuming 'app' is where your backend routes are defined

const PORT = process.env.PORT || 5000;

// Serve static files (CSS, JS, and HTML) from the 'build' folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve specific HTML files for routes
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'admin.html'));
});

app.get('/documents', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'documents.html'));
});

app.get('/transporter', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'transporter.html'));
});

// Serve index.html for the root route or other undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});