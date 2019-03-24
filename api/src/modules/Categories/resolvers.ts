import { categoryCreate } from './createCategory';
import { categoryDelete } from './deleteCategory';
import { categoryGet } from './getCategory';

export const resolvers = {
  Mutation: {
    categoryCreate,
    categoryDelete,
  },
  Query: {
    categoryGet,
  },
};
