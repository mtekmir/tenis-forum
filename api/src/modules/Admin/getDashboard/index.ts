import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Category } from '../../../models/Category';
import { Forum } from '../../../models/Forums';
import { Thread } from '../../../models/Threads';
import { Post } from '../../../models/Posts';
import { User } from '../../../models/User';
import { isAdmin } from '../isAdmin';

export const dashboardGet: QueryResolvers.DashboardGetResolver = async (
  _,
  __,
  { userId },
) => {
  await isAdmin(userId);
  const countsQuery = await getConnection()
    .createQueryBuilder()
    .select('COUNT(thread.id)', 'threadCount')
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(category.id)', 'categoryCount')
        .from(Category, 'category');
    }, 'categoryCount')
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(forum.id)', 'forumCount')
        .from(Forum, 'forum');
    }, 'forumCount')
    .addSelect(subQuery => {
      return subQuery.select('COUNT(post.id)', 'postCount').from(Post, 'post');
    }, 'postCount')
    .addSelect(subQuery => {
      return subQuery.select('COUNT(user.id)', 'userCount').from(User, 'user');
    }, 'userCount')
    .from(Thread, 'thread')
    .getRawOne();

  return countsQuery;
};
