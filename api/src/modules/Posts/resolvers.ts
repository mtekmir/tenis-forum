import { postCreate } from './createPost';
import { postDelete } from './deletePost';

export const resolvers = {
  Mutation: {
    postCreate,
    postDelete,
  },
};
