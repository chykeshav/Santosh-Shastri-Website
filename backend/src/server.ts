import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes';
import adminRoutes from './adminRoutes';
import emailTest from './emailTest';
import { basicAuthMiddleware } from './auth';
import { initializeDatabase } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS: allow any *.vercel.app deployment, localhost dev, the custom domain
const extraOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URLS]
  .filter(Boolean)
  .join(',')
  .split(',')
  .map((o) => o.trim().replace(/\/+$/, ''))
  .filter(Boolean);

const isAllowedOrigin = (origin: string): boolean =>
  /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin)
  || /^https:\/\/([a-z0-9-]+\.)?santoshshastri\.com$/i.test(origin)
  || /^http:\/\/localhost(:\d+)?$/.test(origin)
  || extraOrigins.includes(origin);

app.use(cors({
  origin: (origin, callback) => callback(null, !origin || isAllowedOrigin(origin)),
  credentials: true,
}));
app.use(express.json());

// API routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Public API routes (booking, feedback)
app.use('/api', routes);

// Email test route
app.use('/api', emailTest);

// Admin API routes ?" protected with basic auth
// We mount it on /api/admin so it doesn't clash with the frontend /admin page URL
app.use('/api/admin', basicAuthMiddleware, adminRoutes);

// --- STATIC FRONTEND SERVING ---
// Serve static frontend files from /app/frontend-dist
app.use(express.static(path.join(__dirname, '../../frontend-dist')));

// Fallback for React Router: Send index.html for any unknown route
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../frontend-dist/index.html'));
});

// Initialize DB then start the server
initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database:', err);
    process.exit(1);
  });
