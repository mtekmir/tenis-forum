import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { Post } from '../../../db/models/Posts'

export const postGetAll: QueryResolvers['postGetAll'] = async (
  _,
  { input: { id, filterBy, limit = 25, offset = 0 } }
) => {
  let query = getConnection()
    .getRepository(Post)
    .createQueryBuilder('post')
    .select([
      'post.id as id',
      'text',
      'post."createdAt" as "createdAt"',
      'author.id as "authorId"',
      'author.username as "authorUsername"',
      'thread.id as "threadId"',
      'thread.title as "threadTitle"',
    ])
    .innerJoin('post.author', 'author')
    .innerJoin('post.thread', 'thread')

  if (id) {
    query = query.where('post."authorId" = :id', { id })
  } else {
    query = query.where('post.deleted IS NULL')
  }

  const posts = await query.limit(limit).offset(offset).getRawMany()

  return { posts }
}
