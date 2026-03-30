import { Response } from 'express';

interface ResponseEnvelope {
  success: boolean;
  data: any | null;
  message: string;
  error?: string;
}

export const sendResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data: any = null,
  error?: string
) => {
  const response: ResponseEnvelope = {
    success: statusCode < 400,
    data,
    message,
    error,
  };

  return res.status(statusCode).json(response);
};
