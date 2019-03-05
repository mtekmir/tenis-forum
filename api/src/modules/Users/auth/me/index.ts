import { QueryResolvers } from '../../../../types/schema';
import { isAuthenticated } from '../authenticateUser/index';
import { User } from '../../../../models/User';

export const me: QueryResolvers.MeResolver = async (_, __, { userId }) => {
  isAuthenticated(userId);
  const { id, username, email, permissions } = await User.findOne({
    id: userId
  });
  return { id, username, email, permissions };
};
