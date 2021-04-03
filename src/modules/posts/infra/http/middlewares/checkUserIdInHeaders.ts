import { Request, Response, NextFunction } from 'express';

function checkUserIdInHeaders(
  request: Request,
  response: Response,
  next: NextFunction
): Response<any> | void {
  const { user_id } = request.headers;

  if (!user_id) {
    return response.status(403).json('user_id not provided at headers');
  }

  request.user = { id: Number(user_id) };

  return next();
}

export { checkUserIdInHeaders };
