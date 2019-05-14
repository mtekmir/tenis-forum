import { threadCreate } from './createThread';
import { threadDelete } from './deleteThread';
import { threadGet } from './getThread';
import { threadGetAll } from './getAllThreads';

export const resolvers = {
  Mutation: {
    threadCreate,
    threadDelete,
  },
  Query: {
    threadGet,
    threadGetAll,
  },
};
