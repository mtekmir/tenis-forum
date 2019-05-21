import bcrypt from 'bcryptjs';
import { MutationResolvers } from '../../../types/schema';
import { respond } from '../../common/genericResponse';
import { invalidLogin } from '../../Users/errorMessages';
import { User } from '../../../models/User';
import { UserPermissions } from '../../../models/User/permissions';
import generateToken from '../../Users/auth/login/generateToken';

export const adminLogin: MutationResolvers.AdminLoginResolver = async (
  _,
  { input: { email, password } },
  { response },
) => {
  const user = await User.findOne({ where: { email: email.toLowerCase() } });
  if (!user) {
    return respond('login', invalidLogin);
  }

  if (!user.permissions.includes(UserPermissions.Admin)) {
    return respond('login', invalidLogin);
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return respond('login', invalidLogin);
  }

  const token = generateToken(user.id);
  response.cookie('token', token, { maxAge: 86400000, httpOnly: true });
  return respond();
};
