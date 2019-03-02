import { threadCreate } from './createThread';
import { threadDelete } from './deleteThread';

export const resolvers = {
  Mutation: {
    threadCreate,
    threadDelete
  }
};
