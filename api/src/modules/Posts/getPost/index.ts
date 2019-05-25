import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Post } from '../../../models/Posts';

export const postGet: QueryResolvers.PostGetResolver = async (_, { id }) => {
  return getConnection()
    .getRepository(Post)
    .createQueryBuilder('post')
    .select([
      'post.id as id',
      'post.text as text',
      'post."createdAt" as "createdAt"',
      'author.id as "authorId"',
      'author.username as "authorUsername"',
      'thread.id as "threadId"',
      'thread.title as "threadTitle"',
    ])
    .innerJoin('post.author', 'author')
    .innerJoin('post.thread', 'thread')
    .where('post.id = :id', { id })
    .getRawOne();
};
