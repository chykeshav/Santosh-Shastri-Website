import { Router, Request, Response } from 'express';
import { getDb } from './db';

const router = Router();

// Protected (mounted behind basicAuthMiddleware in server.ts): list all bookings
router.get('/bookings', (req: Request, res: Response) => {
  try {
    const db = getDb();
    const bookings = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
    res.json(bookings);
  } catch (err) {
    console.error('Failed to fetch bookings:', err);
    res.status(500).json({ error: 'Failed to fetch bookings.' });
  }
});

export default router;
