import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Thread } from '../../../models/Threads';

export const threadGet: QueryResolvers.ThreadGetResolver = async (
  _,
  { id, cursor },
) => {
  const query = getConnection()
    .getRepository(Thread)
    .createQueryBuilder('thread')
    .leftJoinAndSelect('thread.posts', 'post')
    .leftJoinAndSelect('thread.originalPost', 'originalPost')
    .leftJoinAndSelect('thread.owner', 'owner')
    .leftJoinAndSelect('post.author', 'author')
    .select([
      'thread',
      'post.id',
      'post.createdAt',
      'post.text',
      'author.id',
      'author.username',
      'author.profileImageKey',
      'owner.username',
      'owner.id',
      'originalPost.id',
      'originalPost.text',
    ])
    .where('thread.id = :id', { id });

  if (cursor) {
    query.andWhere('post.createdAt < :cursor', { cursor });
  }

  const thread = await query.orderBy('post.createdAt', 'ASC').getOne();

  return thread;
};
