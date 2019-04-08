import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Category } from '../../../models/Category';

export const dashboardGet: QueryResolvers.DashboardGetResolver = async () => {
  const countsQuery = await getConnection()
    .createQueryBuilder()
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(category.id)', 'count')
        .from(Category, 'category');
    }, 'count')
    .getRawMany();

  console.log(countsQuery);
};
