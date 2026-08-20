import { Request, Response, NextFunction } from 'express';
import basicAuth from 'basic-auth';

export function basicAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const credentials = basicAuth(req);
  const validUser = process.env.ADMIN_USERNAME || 'admin';
  const validPass = process.env.ADMIN_PASSWORD || 'admin123';

  if (!credentials || credentials.name !== validUser || credentials.pass !== validPass) {
    res.set('WWW-Authenticate', 'Basic realm="Admin Area"');
    return res.status(401).send('Access denied');
  }
  next();
}
