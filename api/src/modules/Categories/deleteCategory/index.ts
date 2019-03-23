import { MutationResolvers } from '../../../types/schema';
import { isAdmin } from '../../Users/auth/authenticateUser';
import { Category } from '../../../models/Category';

export const categoryDelete: MutationResolvers.CategoryDeleteResolver = async (
  _,
  { id },
  { userId },
) => {
  await isAdmin(userId);

  await Category.delete({ id });

  return {
    error: null,
    success: true,
  };
};
