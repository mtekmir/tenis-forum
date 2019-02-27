import { Request, Response } from 'express';
import { IContext } from './types/types';
import { redis } from './services/redis';
import { authenticateUser } from './modules/Users/auth/authenticateUser/index';

type Context = (
  arg1: { request: Request; response: Response }
) => Promise<IContext>;

const { URL } = process.env;
export const context: Context = async ({ request, response }) => ({
  redis,
  request,
  response,
  url: URL,
  userId: await authenticateUser(request)
});
