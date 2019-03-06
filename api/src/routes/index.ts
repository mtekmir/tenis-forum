import googleAuth from './auth/google';
import '../modules/Users/auth/googleOAuth';
import { Application } from 'express';

export const routes = (express: Application) => {
  express.use('/auth/google', googleAuth);
};
