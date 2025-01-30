const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // Import cors
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors({ origin: /http:\/\/localhost:\d{4}/, methods: ['GET', 'POST', 'OPTIONS'], allowedHeaders: ['Content-Type'] }));


app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ikigai_database',
});

// Perform an asynchronous query to test the connection
app.get('/', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT 1');
    console.log('Successful connection to the database');
    res.send('Welcome to the Ikigai application!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    res.status(500).send('Internal server error');
  }
});

// Register a new user
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  console.log('Received data:', req.body); // Логирање на добиените податоци

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required.' });
  }

  try {
    // Проверка дали веќе постои корисник со ист username или email
    const [existingUser] = await db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    console.log('Password hashed:', passwordHash); // Логирање на хашираната лозинка

    const [result] = await db.query(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
      [username, email, passwordHash]
    );

    console.log('User added:', result);  // Логирање на резултатот од базата

    res.status(201).json({ message: 'User registered successfully!', userId: result.insertId });
  } catch (err) {
    console.error('Error registering user:', err);  // Логирање на грешката
    res.status(500).json({ error: 'Internal server error.' });
  }
});


// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate that email and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // Find user in the database
    const [rows] = await db.query(
      'SELECT id, username, email, password_hash FROM users WHERE email = ?',
      [email]  // Changed 'username' to 'email'
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const user = rows[0];

    // Compare password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful.',
      token,
    });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});