// require('dotenv').config();
// const express = require('express');
// const { Pool } = require('pg');

// const router = express.Router();

// // Database connection pool
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// // Middleware to parse JSON bodies
// router.use(express.json());

// // API route to handle contact form submission
// router.post('/', async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log("API code is :", name, email, message);

//   try {
//     const result = await pool.query(
//       'INSERT INTO contact (name, email, message) VALUES ($1, $2, $3) RETURNING *',
//       [name, email, message]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;
