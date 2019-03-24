import { QueryResolvers } from '../../../types/schema';
import { Category } from '../../../models/Category';

export const categoryGet: QueryResolvers.CategoryGetResolver = async () => {
  const categories = await Category.find({ relations: ['forums'] });

  return {
    success: true,
    categories,
  };
};
