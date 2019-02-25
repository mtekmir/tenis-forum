import bcrypt from 'bcryptjs';
import { MutationResolvers } from '../../../../types/schema';
import { User } from '../../../../models/User';
import {
  invalidLogin,
  confirmEmailErr,
  resetPasswordLockedError
} from '../../errorMessages';
import generateToken from './generateToken';
import { respond } from '../../../common/genericResponse';

export const login: MutationResolvers.LoginResolver = async (
  _,
  { input: { email, password } },
  { response }
) => {
  const user = await User.findOne({ where: { email: email.toLowerCase() } });
  if (!user) {
    return respond('login', invalidLogin);
  }

  if (!user.confirmed) {
    return respond('login', confirmEmailErr);
  }

  if (user.resetPasswordLocked) {
    return respond('login', resetPasswordLockedError);
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return respond('login', invalidLogin);
  }

  const token = generateToken(user.id);
  response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30
  });
  return respond();
};
