import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { Thread } from '../../../db/models/Threads'
import { Post } from '../../../db/models/Posts'

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
        .andWhere('post.deleted IS NULL')
    }, 'postCount')

  if (id) {
    query = query.where('thread."ownerId" = :id', { id })
  } else {
    query = query.where('thread.deleted IS NULL')
  }

  const threads = await query.limit(limit).offset(offset).getRawMany()

  return { threads }
}
