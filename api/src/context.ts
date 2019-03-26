import { Request, Response } from 'express';
import { IContext } from './types/types';
import { redis } from './services/redis';
import { authenticateUser } from './modules/Users/auth/authenticateUser/index';

type Context = (arg1: { req: Request; res: Response }) => Promise<IContext>;

const s3BucketUrl = process.env.S3_BUCKET_URL;
const { FRONTEND_URL } = process.env;
export const context: Context = async ({ req, res }) => ({
  redis,
  request: req,
  response: res,
  url: FRONTEND_URL,
  s3BucketUrl,
  userId: await authenticateUser(req),
});
