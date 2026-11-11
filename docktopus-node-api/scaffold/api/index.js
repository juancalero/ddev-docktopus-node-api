// api/index.js
// #ddev-generated: If you want to edit and own this file, remove this line.
const express = require('express');
const cors = require('cors');

const pool = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/hello', (req, res) => {
  res.json({ message: '¡Hola desde tu API Node en DDEV!' });
});

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "user"');
    res.json(result.rows);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor en http://0.0.0.0:${PORT}`);
});
