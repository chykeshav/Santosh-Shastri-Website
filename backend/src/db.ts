import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || process.env.INTERNAL_DATABASE_URL;

export const pool = new Pool({
  connectionString,
  ssl: connectionString ? { rejectUnauthorized: false } : false
});

export async function initializeDatabase(): Promise<void> {
  if (!connectionString) {
    console.warn('WARNING: DATABASE_URL is not set.');
    return;
  }

  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL successfully');

    await client.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        datetime VARCHAR(255) NOT NULL,
        service VARCHAR(255) NOT NULL,
        created_at VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS feedbacks (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL,
        message TEXT NOT NULL,
        created_at VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      INSERT INTO admin_users (username, password)
      VALUES ('Santosh', 'Santosh@123')
      ON CONFLICT (username) DO NOTHING;
    `);

    client.release();
    console.log('PostgreSQL tables checked/created');
  } catch (err) {
    console.error('Error initializing PostgreSQL database:', err);
  }
}

export function getDb() {
  return pool;
}
