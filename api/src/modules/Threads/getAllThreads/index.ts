import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { Thread } from '../../../models/Threads'
import { Post } from '../../../models/Posts'

export const threadGetAll: QueryResolvers['threadGetAll'] = async (
  _,
  { input: { id, filterBy, limit = 25, offset = 0 } }
) => {
  let query = getConnection()
    .getRepository(Thread)
    .createQueryBuilder('thread')
    .innerJoin('thread.owner', 'owner')
    .select([
      'thread.id as id',
      'title',
      'thread."createdAt" as "createdAt"',
      'thread."updatedAt" as "updatedAt"',
    ])
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(post.id)', 'postCount')
        .from(Post, 'post')
        .where('post."threadId" = thread.id')
    }, 'postCount')

  if (id) {
    query = query.where('thread."ownerId" = :id', { id })
  }

  const threads = await query.limit(limit).offset(offset).getRawMany()

  console.log(threads)
  return { threads }
}
