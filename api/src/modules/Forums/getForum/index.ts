import { QueryResolvers } from '../../../types/schema';
import { Forum } from '../../../models/Forums';
import { getConnection } from 'typeorm';

export const forumGet: QueryResolvers.ForumGetResolver = async (_, { id }) => {
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
    .getOne();

  return forum;
};
