import { MutationResolvers } from '../../../types/schema';
import { isAdmin } from '../../Users/auth/authenticateUser';
import { Forum } from '../../../models/Forums';

export const forumDelete: MutationResolvers.ForumDeleteResolver = async (
  _,
  { id },
  { userId }
) => {
  await isAdmin(userId);

  await Forum.delete({ id });

  return {
    error: null,
    success: true
  };
};
