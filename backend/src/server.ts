import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import adminRoutes from './adminRoutes';
import emailTest from './emailTest';
import { basicAuthMiddleware } from './auth';
import { initializeDatabase } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS: allow any *.vercel.app deployment (project/preview domains change),
// localhost dev, the santoshshastri.site custom domain (with or without www,
// works even before DNS is pointed there), plus any extra origins listed in
// FRONTEND_URL / FRONTEND_URLS (comma-separated) env vars.
const extraOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URLS]
  .filter(Boolean)
  .join(',')
  .split(',')
  .map((o) => o.trim().replace(/\/+$/, ''))
  .filter(Boolean);
const isAllowedOrigin = (origin: string): boolean =>
  /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin)
  || /^https:\/\/([a-z0-9-]+\.)?santoshshastri\.site$/i.test(origin)
  || /^http:\/\/localhost(:\d+)?$/.test(origin)
  || extraOrigins.includes(origin);
app.use(cors({
  origin: (origin, callback) => callback(null, !origin || isAllowedOrigin(origin)),
  credentials: true,
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Public API routes (booking, etc.)
app.use('/api', routes);

// Email test route
app.use('/api', emailTest);

// Admin routes – protected with basic auth
app.use('/admin', basicAuthMiddleware, adminRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Santosh Shastri Backend is running');
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
