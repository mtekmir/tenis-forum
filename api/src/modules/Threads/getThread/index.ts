import { getConnection } from 'typeorm'
import { Thread } from '../../../models/Threads'
import { Post } from '../../../models/Posts'
import { QueryResolvers } from '../../../types/schema'

export const threadGet: QueryResolvers.ThreadGetResolver = async (
  _,
  { input: { id, offset, limit = 25 } }
) => {
  console.log(limit)
  const postCountQuery = await getConnection()
    .getRepository(Post)
    .createQueryBuilder('post')
    .select('COUNT(post.id) as count')
    .where(`post.threadId = :id`, {
      id,
    })
    .getRawOne()

  const thread = await getConnection()
    .getRepository(Thread)
    .createQueryBuilder('thread')
    .leftJoinAndSelect('thread.posts', 'post')
    .leftJoinAndSelect('thread.forum', 'forum')
    .leftJoinAndSelect('thread.originalPost', 'originalPost')
    .leftJoinAndSelect('thread.owner', 'owner')
    .leftJoinAndSelect('post.author', 'author')
    .select([
      'thread',
      'post.id',
      'post.createdAt',
      'post.text',
      'author.id',
      'author.username',
      'author.profileImageKey',
      'owner.username',
      'owner.id',
      'originalPost.id',
      'originalPost.text',
    ])
    .where(`thread.id = :id`, {
      id,
    })
    .orderBy('post.createdAt', 'ASC')
    .limit(limit)
    .offset(offset)
    .getOne()

  return {
    thread,
    postCount: postCountQuery.count,
  }
}
