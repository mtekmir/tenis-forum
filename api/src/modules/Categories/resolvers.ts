import { categoryCreate } from './createCategory';
import { categoryDelete } from './deleteCategory';
import { categoryGet } from './getCategories';

export const resolvers = {
  Mutation: {
    categoryCreate,
    categoryDelete,
  },
  Query: {
    categoryGet,
  },
};
