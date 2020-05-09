import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { Forum } from '../../../db/models/Forums'
import { Thread } from '../../../db/models/Threads'
import { isAdmin } from '../../Admin/isAdmin'

export const forumGetAll: QueryResolvers['forumGetAll'] = async (_, __, { userId }) => {
  await isAdmin(userId)
  const forums = await getConnection()
    .getRepository(Forum)
    .createQueryBuilder('forum')
    .select(['id', 'name', '"createdAt"', '"updatedAt"'])
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(thread.id)', 'threadCount')
        .from(Thread, 'thread')
        .where('thread."forumId" = forum.id')
        .andWhere('thread.deleted IS NULL')
    }, 'threadCount')
    .where('forum.deleted IS NULL')
    .getRawMany()

  return { forums }
}
