import express, { Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';
import routes from './routes';
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

// Admin dashboard routes – protect with basic auth
app.use('/admin', basicAuthMiddleware, routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Santosh Shastri Backend is running');
});

// Initialize DB then start server
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


import dotenv from 'dotenv';
import routes from './routes';
import { basicAuthMiddleware } from './auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Public API routes (booking, etc.)
app.use('/api', routes);

// Admin dashboard routes – protect with basic auth
app.use('/admin', basicAuthMiddleware, routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Santosh Shastri Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
