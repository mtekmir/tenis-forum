import { register } from './auth/register';
import { login } from './auth/login';
import logout from './auth/logout/resolver';
import requestResetPassword from './auth/resetPassword/requestResetPasswordResolver';
import resetPassword from './auth/resetPassword/resetPasswordResolver';
import { me } from './auth/me';

export const resolvers = {
  Mutation: {
    register,
    login,
    logout,
    requestResetPassword,
    resetPassword
  },
  Query: {
    me
  }
};
