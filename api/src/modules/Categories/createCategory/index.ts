import { MutationResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Category } from '../../../models/Category';
import { isAdmin } from '../../Admin/isAdmin';

export const categoryCreate: MutationResolvers.CategoryCreateResolver = async (
  _,
  { input: { name } },
  { userId },
) => {
  await isAdmin(userId);

  await getConnection().transaction(async manager => {
    await manager
      .getRepository(Category)
      .create({ name })
      .save();
  });

  return {
    error: null,
    success: true,
  };
};
