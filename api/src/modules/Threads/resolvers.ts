import { threadCreate } from './createThread'
import { threadDelete } from './deleteThread'
import { threadGet } from './getThread'
import { threadGetAll } from './getAllThreads'
import { threadGetPosts } from './getThreadPosts'

export const resolvers = {
  Mutation: {
    threadCreate,
    threadDelete,
  },
  Query: {
    threadGet,
    threadGetPosts,
    threadGetAll,
  },
}
