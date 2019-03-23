import { QueryResolvers } from '../../../types/schema';
import { Category } from '../../../models/Category';

export const categoryGet: QueryResolvers.GetCategoriesResolver = async (
  _,
  __,
  { userId },
) => {
  const categories = await Category.find({ relations: ['forums'] });

  return {
    success: true,
    categories,
  } as any;
};
