import { MutationResolvers } from '../../../types/schema';
import { isAuthenticated } from '../../Users/auth/authenticateUser';
import { getConnection } from 'typeorm';
import { Category } from '../../../models/Category';

export const categoryCreate: MutationResolvers.CategoryCreateResolver = async (
  _,
  { input: { name } },
  { userId }
) => {
  isAuthenticated(userId);

  let category: Category;
  await getConnection().transaction(async manager => {
    category = await manager
      .getRepository(Category)
      .create({ name })
      .save();
  });
  return { category };
};
