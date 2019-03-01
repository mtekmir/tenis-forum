import { MutationResolvers } from '../../../types/schema';
import { isAuthenticated } from '../../Users/auth/authenticateUser';

export const threadCreate: MutationResolvers.ThreadCreateResolver = async (
  _,
  { input: {} },
  { userId }
) => {
  isAuthenticated(userId);
};
