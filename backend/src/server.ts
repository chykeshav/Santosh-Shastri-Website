import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
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
