import { forumCreate } from './createForum';
import { forumDelete } from './deleteForum';

export const resolvers = {
  Mutation: {
    forumCreate,
    forumDelete
  }
};
