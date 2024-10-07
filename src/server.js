require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 5000;

// Database connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Middleware to parse JSON bodies
app.use(express.json());
const cors = require('cors');
app.use(cors());

//API route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log("apimdata: ",name, email, message );
  

  try {
    const result = await pool.query(
      'INSERT INTO contact (  name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    res.status(201).json(result.rows[0]); // Send back the inserted row
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// appoitment api
app.post('/api/appointment', async (req, res) => {
  const { name, email, date,message } = req.body;
  console.log("apimdata: ",name, email,date, message );
  

  try {
    const result = await pool.query(
      'INSERT INTO appointment (  name, email,date, message) VALUES ($1, $2, $3,$4) RETURNING *',
      [name, email,date, message]
    );
    res.status(201).json(result.rows[0]); // Send back the inserted row
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
