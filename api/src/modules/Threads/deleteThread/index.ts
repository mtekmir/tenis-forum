import { MutationResolvers } from '../../../types/schema';
import { isAuthenticated } from '../../Users/auth/authenticateUser';
import { Thread } from '../../../models/Threads';
import { AuthenticationError } from 'apollo-server-core';

export const threadDelete: MutationResolvers.ThreadDeleteResolver = async (
  _,
  { id },
  { userId }
) => {
  isAuthenticated(userId);

  const thread = await Thread.findOne({
    where: { owner: userId }
  });

  if (thread.owner.id !== userId) {
    throw new AuthenticationError('UNAUTHORIZED');
  }

  await Thread.delete({ id });

  return { error: null, success: true };
};
