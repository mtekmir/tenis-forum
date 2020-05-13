import { threadCreate } from './createThread'
import { threadDelete } from './deleteThread'
import { threadGet } from './getThread'
import { threadGetAll } from './getAllThreads'
import { threadGetPosts } from './getThreadPosts'
import { threadEdit } from './editThread'
import { threadGetLastPosts } from './getThreadsLastPosts'

export const resolvers = {
  Mutation: {
    threadCreate,
    threadDelete,
    threadEdit,
  },
  Query: {
    threadGet,
    threadGetPosts,
    threadGetAll,
    threadGetLastPosts,
  },
}
