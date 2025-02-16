import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { Category } from '../../../db/models/Category'
import { Forum } from '../../../db/models/Forums'
import { Thread } from '../../../db/models/Threads'
import { Post } from '../../../db/models/Posts'
import { User } from '../../../db/models/User'
import { isAdmin } from '../isAdmin'

export const dashboardGet: QueryResolvers['dashboardGet'] = async (_, __, { userId }) => {
  await isAdmin(userId)
  const countsQuery = await getConnection()
    .createQueryBuilder()
    .select('COUNT(thread.id)', 'threadCount')
    .addSelect(subQuery => {
      return subQuery.select('COUNT(category.id)', 'categoryCount').from(Category, 'category')
    }, 'categoryCount')
    .addSelect(subQuery => {
      return subQuery.select('COUNT(forum.id)', 'forumCount').from(Forum, 'forum')
    }, 'forumCount')
    .addSelect(subQuery => {
      return subQuery.select('COUNT(post.id)', 'postCount').from(Post, 'post')
    }, 'postCount')
    .addSelect(subQuery => {
      return subQuery.select('COUNT(user.id)', 'userCount').from(User, 'user')
    }, 'userCount')
    .from(Thread, 'thread')
    .getRawOne()

  return countsQuery
}
