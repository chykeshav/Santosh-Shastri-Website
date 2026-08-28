import { Request, Response, NextFunction } from 'express';
import basicAuth from 'basic-auth';

export function basicAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const credentials = basicAuth(req);
  const validUser = process.env.ADMIN_USERNAME || 'Santosh';
  const validPass = process.env.ADMIN_PASSWORD || 'Santosh@123';

  // Support both 'Santosh' / 'Santosh@123' and 'admin' / 'admin123' as fallbacks
  const isUserValid = credentials?.name === validUser || credentials?.name === 'admin';
  const isPassValid = credentials?.pass === validPass || credentials?.pass === 'admin123';

  if (!credentials || !isUserValid || !isPassValid) {
    // Note: Do NOT set 'WWW-Authenticate' header so the browser doesn't open the native login modal
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  next();
}
