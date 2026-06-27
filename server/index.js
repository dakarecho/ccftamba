import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';
import activitiesRouter from './routes/activities.js';
import newsRouter from './routes/news.js';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/activities', activitiesRouter);
app.use('/api/news', newsRouter);
app.use('/api/contact', contactRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS activities (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(100),
        year VARCHAR(10),
        partner VARCHAR(255),
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        category VARCHAR(100),
        date DATE,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        organization VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS members (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(50),
        organization VARCHAR(255),
        village VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS partners (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        acronym VARCHAR(50),
        description TEXT,
        logo_url TEXT,
        order_index INTEGER DEFAULT 0
      );
    `);
    console.log('Database tables initialized');
  } catch (err) {
    console.error('Database initialization error:', err.message);
  }
};

initDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
