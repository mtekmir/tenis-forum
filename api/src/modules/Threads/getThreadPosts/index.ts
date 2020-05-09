import { Post } from '../../../db/models/Posts'
import { QueryResolvers } from '../../../types/schema'

export const threadGetPosts: QueryResolvers['threadGetPosts'] = async (
  _,
  { input: { threadId, page = 1 } }
) => {
  const [posts, count] = await Post.findAndCount({
    where: { threadId, deleted: null },
    skip: (page - 1) * 50,
    take: 50,
    relations: ['author'],
    order: { createdAt: 'ASC' },
  })

  return {
    posts,
    count,
  }
}
