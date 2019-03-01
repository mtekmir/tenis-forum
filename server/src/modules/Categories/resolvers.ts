import { categoryCreate } from './createCategory';
import { categoryDelete } from './deleteCategory';

export const resolvers = {
  Mutation: {
    categoryCreate,
    categoryDelete
  }
};
