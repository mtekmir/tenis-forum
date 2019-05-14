import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Post } from '../../../models/Posts';

export const postGetAll: QueryResolvers.PostGetAllResolver = async (
  _,
  { offset = 0 },
) => {
  const posts = await getConnection()
    .getRepository(Post)
    .createQueryBuilder('post')
    .select([
      'post.id as id',
      'post."createdAt" as "createdAt"',
      'author.id as "authorId"',
      'author.username as "authorUsername"',
      'thread.id as "threadId"',
      'thread.title as "threadTitle"',
    ])
    .innerJoin('post.author', 'author')
    .innerJoin('post.thread', 'thread')
    .limit(25)
    .offset(offset)
    .getRawMany();

  return { posts };
};
