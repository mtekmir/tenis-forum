import { QueryResolvers } from '../../../types/schema';
import { isAdmin } from '../../Admin/isAdmin';
import { User } from '../../../models/User';

export const userGet: QueryResolvers.UserGetResolver = async (
  _,
  { id },
  { userId },
) => {
  await isAdmin(userId);

  const user = await User.findOne({ where: { id }, relations: ['profile'] });

  // Unhash the password

  console.log(user);
  return user;
};
