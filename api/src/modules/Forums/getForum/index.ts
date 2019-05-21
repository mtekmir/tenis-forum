import { QueryResolvers } from '../../../types/schema';
import { Forum } from '../../../models/Forums';
import { getConnection } from 'typeorm';
import { Thread } from '../../../models/Threads';

export const forumGet: QueryResolvers.ForumGetResolver = async (
  _,
  { id, offset = 0, limit = 25 },
) => {
  const threadCountQuery = await getConnection()
    .getRepository(Thread)
    .createQueryBuilder('thread')
    .select('COUNT(thread.id) as count')
    .where('thread."forumId" = :id', { id })
    .getRawOne();

  const forum = await getConnection()
    .getRepository(Forum)
    .createQueryBuilder('forum')
    .leftJoinAndSelect('forum.category', 'category')
    .leftJoinAndSelect('forum.threads', 'thread')
    .leftJoinAndSelect('thread.owner', 'owner')
    .select([
      'forum',
      'category',
      'thread.title',
      'thread.id',
      'thread.createdAt',
      'thread.forum',
      'owner.username',
    ])
    .where('forum.id = :id', { id })
    .orderBy('thread.createdAt', 'DESC')
    .limit(limit)
    .offset(offset)
    .getOne();

  return {
    forum,
    threadCount: threadCountQuery.count,
  };
};
