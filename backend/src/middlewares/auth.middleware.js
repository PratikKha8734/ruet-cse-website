import { verifyToken } from '../utils/jwt.js';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) return res.status(401).json({ success: false, message: 'Unauthorized' });
  try {
    req.user = verifyToken(header.split(' ')[1]);
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
}
