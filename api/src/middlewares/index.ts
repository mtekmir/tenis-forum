import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import RateLimitRedis from 'rate-limit-redis';
import { redis } from '../services/redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';

const RedisStore = connectRedis(session);
const { COOKIE_SECRET, PORT } = process.env;

export const middlewares = (express: any) => {
  express.use(
    new RateLimit({
      store: new RateLimitRedis({
        client: redis
      }),
      windowMs: 15 * 60 * 1000,
      max: 100
    })
  );
  express.use(
    cors({
      credentials: true,
      origin: `api:${PORT}`
    })
  );
  express.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: 'qid',
      secret: COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    } as any)
  );
  express.use(helmet());
};
