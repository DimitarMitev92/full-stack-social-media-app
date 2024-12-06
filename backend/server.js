const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3001;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(express.json());

app.get("/test_users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM test_users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
