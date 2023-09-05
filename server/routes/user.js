const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db/db');
const router = express.Router();



// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Insert user into the database
    db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], (err, results) => {
      if (err) {
        console.error('Registration error:', err);
        res.status(403).json({ error: "User already exists" });
      } else {
        res.status(200).json({ message: 'Registration successful' });
      }
    });
  });
  
  // Login route
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists in the database
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Login failed' });
      } else if (results.length === 0) {
        res.status(401).json({ error: 'Invalid credentials' });
      } else {
        // Compare the provided password with the hashed password in the database
        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
  
        if (match) {
          // Generate a JWT token for the user
          const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
  
          res.status(200).json({ token });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      }
    });
  });

  module.exports = router;