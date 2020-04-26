import { Redis } from 'ioredis'
import { Request, Response } from 'express'
import { EmailService } from '../services/Email/EmailService'

export interface Error {
  path: string
  message: string
}

interface RegisterInput {
  email: string
  password: string
}

export interface IContext {
  redis: Redis
  request: Request
  response: Response
  url: string
  s3BucketUrl: string
  emailService: EmailService
  userId: string | null
}

export interface Resolver {
  parent: any
  args: any
  context: IContext
  info: any
}

export type ValidateRegister = (arg: RegisterInput) => Promise<Error[]>
