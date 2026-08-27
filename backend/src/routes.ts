import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { getDb } from './db';

const router = Router();

function getTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,   // true for 465 (SSL), false for 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Best-effort: email Santosh Shastri ji himself about the new booking.
// Uses the same Gmail SMTP creds as the customer confirmation email.
// Set ADMIN_NOTIFY_EMAIL to where these should land (defaults to SMTP_USER).
async function notifyAdminByEmail(booking: {
  name: string; phone: string; email: string; datetime: string; service: string; id: string;
}) {
  const to = (process.env.ADMIN_NOTIFY_EMAIL || process.env.SMTP_USER || '').trim();
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !to) return;

  const transporter = getTransporter();
  const text =
    `Nayi booking mili hai:\n\n` +
    `Naam: ${booking.name}\n` +
    `Phone: ${booking.phone}\n` +
    `Email: ${booking.email}\n` +
    `Service: ${booking.service}\n` +
    `Date/Time: ${booking.datetime}\n` +
    `Booking ID: ${booking.id.substring(0, 8).toUpperCase()}`;

  try {
    await transporter.sendMail({
      from: `"Santosh Shastri Website" <${process.env.SMTP_USER}>`,
      to,
      subject: `🔔 Nayi Booking – ${booking.service} (${booking.datetime})`,
      text,
    });
    console.log(`Admin notification emailed to ${to}`);
  } catch (err) {
    console.error('Failed to email admin notification:', (err as Error).message);
  }
}

// Best-effort: WhatsApp Santosh Shastri ji via CallMeBot (free personal-notification API).
// Setup (one-time, done by Santosh ji himself, ~2 minutes):
//   1. Save +34 644 51 90 78 as a contact on his phone.
//   2. WhatsApp that number: "I allow callmebot to send me messages"
//   3. He'll get an apikey back — put it in ADMIN_WHATSAPP_APIKEY.
//   4. Put his own WhatsApp number (with country code, no +/spaces) in ADMIN_WHATSAPP_PHONE.
// Until both env vars are set, this silently does nothing (booking still succeeds).
async function notifyAdminByWhatsApp(booking: {
  name: string; phone: string; datetime: string; service: string;
}) {
  const apikey = (process.env.ADMIN_WHATSAPP_APIKEY || '').trim();
  const phone = (process.env.ADMIN_WHATSAPP_PHONE || '').trim();
  if (!apikey || !phone) return;

  const text =
    `Nayi booking!\n` +
    `${booking.name} (${booking.phone})\n` +
    `Service: ${booking.service}\n` +
    `Aaj/Schedule: ${booking.datetime}`;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}` +
    `&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('CallMeBot WhatsApp notify failed:', res.status, await res.text());
    } else {
      console.log('Admin WhatsApp notification sent.');
    }
  } catch (err) {
    console.error('Failed to send admin WhatsApp notification:', (err as Error).message);
  }
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
    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
        <div style="background:#800000;padding:24px;text-align:center;">
          <h1 style="color:#FFD700;margin:0;font-size:28px;">ॐ</h1>
          <h2 style="color:#fff;margin:8px 0 0;">Santosh Shastri</h2>
          <p style="color:#FFD700;margin:4px 0 0;font-size:13px;">Court Marriage &amp; Puja-Paath Services</p>
        </div>
        <div style="padding:28px;">
          <p style="font-size:16px;">Namaste <strong>${name}</strong>,</p>
          <p>Aapki booking confirm ho gayi hai. Details neeche diye gaye hain:</p>
          <table style="width:100%;border-collapse:collapse;margin:16px 0;">
            <tr style="background:#FFF8DC;">
              <td style="padding:10px;border:1px solid #ddd;font-weight:bold;">Service</td>
              <td style="padding:10px;border:1px solid #ddd;">${service}</td>
            </tr>
            <tr>
              <td style="padding:10px;border:1px solid #ddd;font-weight:bold;">Date &amp; Time</td>
              <td style="padding:10px;border:1px solid #ddd;">${datetime}</td>
            </tr>
            <tr style="background:#FFF8DC;">
              <td style="padding:10px;border:1px solid #ddd;font-weight:bold;">Booking ID</td>
              <td style="padding:10px;border:1px solid #ddd;">${id.substring(0, 8).toUpperCase()}</td>
            </tr>
          </table>
          <p style="margin-top:24px;"><strong>Video Call Link (Jitsi Meet):</strong></p>
          <div style="text-align:center;margin:16px 0;">
            <a href="${meetLink}" style="background:#FF9933;color:#fff;padding:14px 28px;border-radius:6px;text-decoration:none;font-size:16px;font-weight:bold;">
              🎥 Join Video Call
            </a>
          </div>
          <p style="font-size:13px;color:#666;">Ya phir is link ko copy karein: <a href="${meetLink}">${meetLink}</a></p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #eee;"/>
          <p style="font-size:13px;color:#999;">Koi samasya ho toh WhatsApp karein: <a href="https://wa.me/919323152991">+91 93231 52991</a></p>
        </div>
        <div style="background:#800000;padding:12px;text-align:center;">
          <p style="color:#FFD700;margin:0;font-size:12px;">© ${new Date().getFullYear()} Santosh Shastri. All rights reserved.</p>
        </div>
      </div>
    `;
    transporter.sendMail({
      from: `"Santosh Shastri" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `✅ Booking Confirmed & Video Call Link – Santosh Shastri`,
      text: `Namaste ${name},\n\nAapki booking "${service}" ke liye ${datetime} par confirm ho gayi hai.\n\nVideo Call Link: ${meetLink}\n\nDhanyavaad,\nSantosh Shastri\nWhatsApp: +91 93231 52991`,
      html: htmlBody,
    }).then(() => {
      console.log(`Confirmation email sent to ${email}`);
    }).catch((err) => {
      console.error('Failed to send confirmation email:', err.message);
    });
  }

  // Best-effort: let Santosh Shastri ji know a new booking came in, by email and/or
  // WhatsApp (whichever is configured — see notifyAdminByEmail / notifyAdminByWhatsApp
  // above). Booking is already saved and the customer already gets their response
  // either way, so these run in the background and never block or fail the request.
  const bookingRecord = { id, name, phone, email, datetime, service };
  notifyAdminByEmail(bookingRecord).catch(() => {});
  notifyAdminByWhatsApp(bookingRecord).catch(() => {});

  res.json({ success: true, id });
});

export default router;
