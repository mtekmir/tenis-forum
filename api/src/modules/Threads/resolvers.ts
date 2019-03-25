import { threadCreate } from './createThread';
import { threadDelete } from './deleteThread';
import { threadGet } from './getThread';

export const resolvers = {
  Mutation: {
    threadCreate,
    threadDelete,
  },
  Query: {
    threadGet,
  },
};
