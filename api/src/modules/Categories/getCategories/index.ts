import { QueryResolvers } from '../../../types/schema';
import { Category } from '../../../models/Category';
import { getConnection } from 'typeorm';
import { Forum } from '../../../models/Forums';

export const categoryGetAll: QueryResolvers.CategoryGetAllResolver = async () => {
  const categories = await getConnection()
    .getRepository(Category)
    .createQueryBuilder('category')
    .select(['id', 'name', '"createdAt"', '"updatedAt"'])
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(forum.id)', 'forumCount')
        .from(Forum, 'forum')
        .where('forum."categoryId" = category.id');
    }, 'forumCount')
    .getRawMany();

  return { categories };
};
