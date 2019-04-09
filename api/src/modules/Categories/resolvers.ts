import { categoryCreate } from './createCategory';
import { categoryDelete } from './deleteCategory';
import { categoryGet } from './getCategory';
import { categoryGetAll } from './getCategories';

export const resolvers = {
  Mutation: {
    categoryCreate,
    categoryDelete,
  },
  Query: {
    categoryGet,
    categoryGetAll,
  },
};
