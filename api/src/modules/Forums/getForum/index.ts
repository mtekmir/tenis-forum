import { QueryResolvers } from '../../../types/schema';
import { Forum } from '../../../models/Forums';
import { getConnection } from 'typeorm';

export const forumGet: QueryResolvers.ForumGetResolver = async (_, { id }) => {
  const forum = await getConnection()
    .getRepository(Forum)
    .createQueryBuilder('forum')
    .leftJoinAndSelect('forum.threads', 'thread')
    .leftJoinAndSelect('thread.owner', 'owner')
    .select([
      'forum',
      'thread.title',
      'thread.id',
      'thread.createdAt',
      'owner.username',
    ])
    .where('forum.id = :id', { id })
    .getOne();

  return forum;
};
