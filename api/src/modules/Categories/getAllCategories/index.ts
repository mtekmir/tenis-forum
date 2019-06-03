import { QueryResolvers } from '../../../types/schema';
import { Category } from '../../../models/Category';

export const categoryGetAll: QueryResolvers.CategoryGetAllResolver = async () => {
  const categories = await Category.find({ relations: ['forums'] });

  return {
    success: true,
    categories,
  };
};
