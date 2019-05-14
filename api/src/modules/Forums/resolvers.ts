import { forumCreate } from './createForum';
import { forumDelete } from './deleteForum';
import { forumGet } from './getForum';
import { forumGetAll } from './getForums';

export const resolvers = {
  Mutation: {
    forumCreate,
    forumDelete,
  },
  Query: {
    forumGet,
    forumGetAll,
  },
};
