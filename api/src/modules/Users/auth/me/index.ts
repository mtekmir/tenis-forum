import { QueryResolvers } from '../../../../types/schema';
import { User } from '../../../../models/User';

export const me: QueryResolvers.MeResolver = async (_, __, { userId }) => {
  if (!userId) {
    return null;
  }
  const { id, username, email, permissions } = await User.findOne({
    id: userId,
  });
  return { id, username, email, permissions };
};
