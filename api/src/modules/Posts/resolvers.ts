import { postCreate } from './createPost'
import { postDelete } from './deletePost'
import { postGetAll } from './getAllPosts'
import { postGet } from './getPost'
import { postEdit } from './editPost'

export const resolvers = {
  Mutation: {
    postCreate,
    postDelete,
    postEdit,
  },
  Query: {
    postGetAll,
    postGet,
  },
}
