import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from './db';

const router = Router();

// Public: submit a booking
router.post('/book', async (req: Request, res: Response) => {
  const { name, phone, email, datetime, service } = req.body || {};

  if (!name || !phone || !email || !datetime || !service) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const meetLink = `https://meet.jit.si/SantoshShastri-${service.replace(/\s+/g, '')}-${id.substring(0, 8)}`;

  try {
    const db = getDb();
    db.prepare(
      `INSERT INTO bookings (id, name, phone, email, datetime, service, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).run(id, name, phone, email, datetime, service, createdAt);
  } catch (err) {
    console.error('Failed to save booking:', err);
    return res.status(500).json({ error: 'Failed to save booking.' });
  }

  res.json({ success: true, id, meetLink });
});

export default router;
