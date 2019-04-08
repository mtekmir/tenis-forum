import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Thread } from '../../../models/Threads';
import { Post } from '../../../models/Posts';

export const threadGet: QueryResolvers.ThreadGetResolver = async (
  _,
  { id, offset },
) => {
  const postCountQuery = await getConnection()
    .getRepository(Post)
    .createQueryBuilder('post')
    .select('COUNT(post.id) as count')
    .where('post."threadId" = :id', { id })
    .getRawOne();

  const thread = await getConnection()
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
    .where('thread.id = :id', { id })
    .orderBy('post.createdAt', 'ASC')
    .limit(25)
    .offset(offset)
    .getOne();

  return {
    thread,
    postCount: postCountQuery.count,
  };
};
