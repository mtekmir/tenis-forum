import { MutationResolvers } from '../../../types/schema';
import { isAuthenticated } from '../../Users/auth/authenticateUser';
import { Post } from '../../../models/Posts';
import { AuthenticationError } from 'apollo-server-core';

export const postDelete: MutationResolvers.PostDeleteResolver = async (
  _,
  { id },
  { userId }
) => {
  isAuthenticated(userId);

  const post = await Post.findOne({ where: { id }, relations: ['author'] });
  if (post.author.id !== userId) {
    throw new AuthenticationError('UNAUTHORIZED');
  }

  await Post.delete({ id });

  return { error: null, success: true };
};
