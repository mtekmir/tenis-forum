import { QueryResolvers } from '../../../types/schema';
// import { isAdmin } from '../../Admin/isAdmin';
import { getConnection } from 'typeorm';
import { User } from '../../../models/User';
import { Post } from '../../../models/Posts';
import { Thread } from '../../../models/Threads';

export const userGet: QueryResolvers.UserGetResolver = async (
  _,
  { id },
  { userId },
) => {
  // await isAdmin(userId);

  const user = await getConnection()
    .getRepository(User)
    .createQueryBuilder('user')
    .innerJoinAndSelect('user.profile', 'profile')
    .select([
      'user.id',
      'username',
      'email',
      '"createdAt" as "registerDate"',
      'password',
      'permissions',
    ])
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(post.id)', 'postCount')
        .from(Post, 'post')
        .where('post."authorId" = user.id');
    }, 'postCount')
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(thread.id)', 'threadCount')
        .from(Thread, 'thread')
        .where('thread."ownerId" = user.id');
    }, 'threadCount')
    // add posts and threads
    // .where('user.id = :id', { id })
    .getRawOne();

  console.log(user);

  return null;
};
