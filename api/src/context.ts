import { Request, Response } from 'express';
import { IContext } from './types/types';
import { redis } from './services/redis';
import { authenticateUser } from './modules/Users/auth/authenticateUser/index';

type Context = (arg1: { req: Request; res: Response }) => Promise<IContext>;

const { URL } = process.env;
export const context: Context = async ({ req, res }) => ({
  redis,
  request: req,
  response: res,
  url: URL,
  userId: await authenticateUser(req)
});
