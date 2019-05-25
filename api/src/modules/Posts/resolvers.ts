import { postCreate } from './createPost';
import { postDelete } from './deletePost';
import { postGetAll } from './getAllPosts';
import { postGet } from './getPost';

export const resolvers = {
  Mutation: {
    postCreate,
    postDelete,
  },
  Query: {
    postGetAll,
    postGet,
  },
};
