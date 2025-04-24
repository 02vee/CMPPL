const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const adminUsername = 'admin';
const adminPassword = bcrypt.hashSync('admin123', 10);

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminUsername && bcrypt.compareSync(password, adminPassword)) {
    req.session.isAuthenticated = true;
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.get('/check-session', (req, res) => {
  res.json({ isAuthenticated: req.session.isAuthenticated || false });
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to logout' });
    }
    res.json({ message: 'Logout successful' });
  });
});

module.exports = router;