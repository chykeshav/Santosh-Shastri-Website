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

// CORS: allow only the frontend URL (provided via env) or localhost dev
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(cors({ origin: allowedOrigin, credentials: true }));
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
