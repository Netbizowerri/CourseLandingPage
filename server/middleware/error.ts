import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError.ts';
import { sendResponse } from '../utils/response.ts';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    console.error('ERROR 💥', err);
    return sendResponse(
      res,
      err.statusCode,
      err.message,
      { stack: err.stack, error: err },
      err.message
    );
  }

  // Production structured logging
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    level: 'error',
    message: err.message,
    statusCode: err.statusCode,
    path: req.originalUrl,
    method: req.method,
  }));

  if (err.isOperational) {
    return sendResponse(res, err.statusCode, err.message, null, err.message);
  }

  // Programming or other unknown error: don't leak error details
  return sendResponse(res, 500, 'Something went very wrong!', null, 'Internal Server Error');
};
