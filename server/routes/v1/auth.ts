import express from 'express';
import { z } from 'zod';
import { asyncHandler } from '../../utils/asyncHandler.ts';
import { sendResponse } from '../../utils/response.ts';
import { AppError } from '../../utils/AppError.ts';
import { signAccessToken, signRefreshToken, setTokenCookies, clearTokenCookies } from '../../utils/tokens.ts';
import { authRateLimiter } from '../../middleware/rateLimit.ts';

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

router.post('/login', authRateLimiter, asyncHandler(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const validation = loginSchema.safeParse(req.body);
  if (!validation.success) {
    return next(new AppError(validation.error.issues[0].message, 400));
  }

  const { email, password } = validation.data;
  const adminEmail = process.env.ADMIN_EMAIL || 'netbiz0925@gmail.com';

  // For this refactor, we'll assume the admin password is set in the environment
  // In a real app, you'd check against a database
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123456';

  if (email === adminEmail && password === adminPassword) {
    const user = { id: 'admin-1', email, role: 'admin' };
    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    setTokenCookies(res, accessToken, refreshToken);
    return sendResponse(res, 200, "Login successful", { user });
  }

  return next(new AppError('Invalid email or password', 401));
}));

router.post('/logout', asyncHandler(async (req: express.Request, res: express.Response) => {
  clearTokenCookies(res);
  sendResponse(res, 200, "Logout successful");
}));

export default router;
