import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Thread } from '../../../models/Threads';
import { Post } from '../../../models/Posts';

export const threadGetAll: QueryResolvers.ThreadGetAllResolver = async (
  _,
  { offset = 0 },
) => {
  const threads = await getConnection()
    .getRepository(Thread)
    .createQueryBuilder('thread')
    .select(['id', 'title', '"createdAt"', '"updatedAt"'])
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(post.id)', 'postCount')
        .from(Post, 'post')
        .where('post."threadId" = thread.id');
    }, 'postCount')
    .limit(25)
    .offset(offset)
    .getRawMany();

  return { threads };
};
