import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

function getTransporter() {
  const port = Number(process.env.SMTP_PORT) || 587;
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

// Test email endpoint
router.get('/test-email', async (req: Request, res: Response) => {
  console.log('Testing email with config:', {
    SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
    SMTP_PORT: process.env.SMTP_PORT || 587,
    SMTP_USER: process.env.SMTP_USER || 'not_set',
    SMTP_PASS: process.env.SMTP_PASS ? '***SET***' : 'not_set'
  });

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(400).json({ 
      error: 'SMTP credentials not configured',
      config: {
        SMTP_USER: process.env.SMTP_USER ? 'SET' : 'NOT_SET',
        SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'NOT_SET'
      }
    });
  }

  try {
    const transporter = getTransporter();
    
    // Test connection first
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send test email
    const result = await transporter.sendMail({
      from: `"Santosh Shastri Test" <${process.env.SMTP_USER}>`,
      to: 'kushaldubey121@gmail.com',
      subject: 'Test Email from Railway Backend',
      text: 'This is a test email to verify SMTP configuration is working.',
      html: '<h1>Test Email</h1><p>SMTP is working correctly!</p>'
    });

    console.log('Test email sent successfully:', result.messageId);
    res.json({ 
      success: true, 
      messageId: result.messageId,
      message: 'Test email sent successfully'
    });

  } catch (error: any) {
    console.error('Email test failed:', error);
    res.status(500).json({ 
      error: 'Failed to send test email',
      details: error.message,
      code: error.code || 'unknown'
    });
  }
});

export default router;