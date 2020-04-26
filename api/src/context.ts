import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { IContext } from './types/types'
import { redis } from './services/redis'
import { authenticateUser } from './modules/Users/auth/authenticateUser/index'
import { EmailService } from './services/Email/EmailService'

type Context = (arg1: { req: Request; res: Response }) => Promise<IContext>

dotenv.config({ path: __dirname + '/../config/dev.env' })
const s3BucketUrl = process.env.S3_BUCKET_URL
const { FRONTEND_URL } = process.env
export const context: Context = async ({ req, res }) => ({
  redis,
  request: req,
  response: res,
  url: FRONTEND_URL,
  s3BucketUrl,
  emailService: await EmailService(),
  userId: await authenticateUser(req),
})
