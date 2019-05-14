import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Forum } from '../../../models/Forums';
import { Thread } from '../../../models/Threads';

export const forumGetAll: QueryResolvers.ForumGetAllResolver = async () => {
  const forums = await getConnection()
    .getRepository(Forum)
    .createQueryBuilder('forum')
    .select(['id', 'name', '"createdAt"', '"updatedAt"'])
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(thread.id)', 'threadCount')
        .from(Thread, 'thread')
        .where('thread."forumId" = forum.id');
    }, 'threadCount')
    .getRawMany();

  return { forums };
};
