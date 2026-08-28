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

// Public: get all feedbacks
router.get('/feedback', async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const feedbacks = db.prepare('SELECT * FROM feedbacks ORDER BY created_at DESC LIMIT 50').all();
    res.json(feedbacks);
  } catch (err) {
    console.error('Failed to fetch feedbacks:', err);
    res.status(500).json({ error: 'Failed to fetch feedbacks.' });
  }
});

// Public: submit a feedback
router.post('/feedback', async (req: Request, res: Response) => {
  const { name, rating, message } = req.body || {};

  if (!name || !rating || !message) {
    return res.status(400).json({ error: 'Name, rating, and message are required.' });
  }

  const id = uuidv4();
  const createdAt = new Date().toISOString();

  try {
    const db = getDb();
    db.prepare(
      `INSERT INTO feedbacks (id, name, rating, message, created_at) VALUES (?, ?, ?, ?, ?)`
    ).run(id, name, rating, message, createdAt);
  } catch (err) {
    console.error('Failed to save feedback:', err);
    return res.status(500).json({ error: 'Failed to save feedback.' });
  }

  res.json({ success: true, id });
});

export default router;
