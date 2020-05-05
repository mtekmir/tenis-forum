import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { User } from '../../../db/models/User'
import { Post } from '../../../db/models/Posts'
import { Thread } from '../../../db/models/Threads'
import { isAdmin } from '../../Admin/isAdmin'

export const userGetAll: QueryResolvers['userGetAll'] = async (_, __, { userId }) => {
  await isAdmin(userId)
  const users = await getConnection()
    .getRepository(User)
    .createQueryBuilder('user')
    .select(['id', 'username', 'email', '"createdAt" as "registerDate"'])
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(post.id)', 'postCount')
        .from(Post, 'post')
        .where('post."authorId" = user.id')
    }, 'postCount')
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(thread.id)', 'threadCount')
        .from(Thread, 'thread')
        .where('thread."ownerId" = user.id')
    }, 'threadCount')
    .getRawMany()

  return { users }
}
