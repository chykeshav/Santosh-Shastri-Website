import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { getDb } from './db';

const router = Router();

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Public: submit a booking
router.post('/book', async (req: Request, res: Response) => {
  const { name, phone, email, datetime, service } = req.body || {};

  if (!name || !phone || !email || !datetime || !service) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const id = uuidv4();
  const createdAt = new Date().toISOString();

  try {
    const db = getDb();
    db.prepare(
      `INSERT INTO bookings (id, name, phone, email, datetime, service, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).run(id, name, phone, email, datetime, service, createdAt);
  } catch (err) {
    console.error('Failed to save booking:', err);
    return res.status(500).json({ error: 'Failed to save booking.' });
  }

  // Best-effort confirmation email — booking is already saved even if this fails.
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    const meetLink = `https://meet.jit.si/SantoshShastri-${service.replace(/\s+/g, '')}-${id.substring(0, 8)}`;
    const transporter = getTransporter();
    transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Booking Confirmation & Video Call Link – Santosh Shastri`,
      text: `Namaste ${name},\n\nAapki booking "${service}" ke liye ${datetime} par confirm ho gayi hai.\n\nVideo Call Meeting Link: ${meetLink}\n\nPuja/consultation ke samay upar diye gaye link par click karke join karein. Agar koi samasya ho toh humse contact karein.\n\nDhanyavaad,\nSantosh Shastri`,
    }).catch((err) => {
      console.error('Failed to send confirmation email:', err);
    });
  }

  res.json({ success: true, id });
});

export default router;
