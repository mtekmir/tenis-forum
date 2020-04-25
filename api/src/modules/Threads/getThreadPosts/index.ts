import { Post } from '../../../models/Posts'

export const threadGetPosts = async (_: any, { input: { threadId, page = 1 } }: any) => {
  const [posts, count] = await Post.findAndCount({
    where: { threadId },
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
