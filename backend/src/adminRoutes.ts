import { Router, Request, Response } from 'express';
import { pool } from './db';

const router = Router();

// Protected: list all bookings
router.get('/bookings', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Failed to fetch bookings:', err);
    res.status(500).json({ error: 'Failed to fetch bookings.' });
  }
});

export default router;
