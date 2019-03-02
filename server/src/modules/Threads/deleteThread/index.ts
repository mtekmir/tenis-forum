import { MutationResolvers } from '../../../types/schema';
import { isAuthenticated } from '../../Users/auth/authenticateUser';
import { Thread } from '../../../models/Threads';

export const threadDelete: MutationResolvers.ForumDeleteResolver = async (
  _,
  { id },
  { userId }
) => {
  isAuthenticated(userId);

  await Thread.delete({ id });

  return { error: null, success: true };
};
