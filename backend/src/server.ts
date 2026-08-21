import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import adminRoutes from './adminRoutes';
import { basicAuthMiddleware } from './auth';
import { initializeDatabase } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS: allow the configured frontend URL plus known deployment origins,
// so a missing/wrong FRONTEND_URL env var can never break the live site.
const defaultOrigins = [
  'https://santoshshastri-website.vercel.app',
  'https://santoshshastri.vercel.app',
  'http://localhost:5173',
];
const envOrigin = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.trim() : '';
const allowedOrigins = Array.from(new Set([envOrigin, ...defaultOrigins].filter(Boolean)));
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Public API routes (booking, etc.)
app.use('/api', routes);

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
