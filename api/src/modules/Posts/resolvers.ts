import { postCreate } from './createPost';
import { postDelete } from './deletePost';
import { postGetAll } from './getAllPosts';

export const resolvers = {
  Mutation: {
    postCreate,
    postDelete,
  },
  Query: {
    postGetAll,
  },
};
