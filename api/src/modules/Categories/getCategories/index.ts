import { QueryResolvers } from '../../../types/schema';
import { Category } from '../../../models/Category';
import { getConnection } from 'typeorm';
import { Forum } from '../../../models/Forums';

export const categoryGetAll: QueryResolvers.CategoryGetAllResolver = async () => {
  const results = await getConnection()
    .getRepository(Category)
    .createQueryBuilder('category')
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(forum.id)', 'forumCount')
        .from(Forum, 'forum')
        .where('forum."categoryId" = category.id');
    }, 'forumCount')
    .getRawMany();

  const categories = results.reduce((arr, category) => {
    const props: { [key: string]: string } = {};

    for (const prop in category) {
      const parts = prop.split('_');
      if (parts.length > 1) {
        props[parts[1]] = category[prop];
      } else {
        props[prop] = category[prop];
      }
    }
    arr.push(props);
    return arr;
  }, []);

  console.log(categories);

  return { categories };
};
