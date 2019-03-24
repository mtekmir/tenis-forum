import { forumCreate } from './createForum';
import { forumDelete } from './deleteForum';
import { forumGet } from './getForum';

export const resolvers = {
  Mutation: {
    forumCreate,
    forumDelete,
  },
  Query: {
    forumGet,
  },
};
