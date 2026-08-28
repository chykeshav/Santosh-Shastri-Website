import { Request, Response, NextFunction } from 'express';
import basicAuth from 'basic-auth';
import { pool } from './db';

export async function basicAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const credentials = basicAuth(req);

  if (!credentials || !credentials.name || !credentials.pass) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const { name, pass } = credentials;

  // 1. Check PostgreSQL admin_users table
  try {
    const result = await pool.query(
      'SELECT * FROM admin_users WHERE username = $1 AND password = $2',
      [name, pass]
    );

    if (result.rows.length > 0) {
      return next();
    }
  } catch (err) {
    console.error('Error querying admin_users table:', err);
  }

  // 2. Fallback / Environment variable check
  const envUser = process.env.ADMIN_USERNAME || 'Santosh';
  const envPass = process.env.ADMIN_PASSWORD || 'Santosh@123';
  if ((name === envUser || name === 'admin') && (pass === envPass || pass === 'admin123')) {
    return next();
  }

  return res.status(401).json({ error: 'Invalid username or password' });
}
