import { QueryResolvers } from '../../../types/schema';
import { Category } from '../../../models/Category';
// import { getConnection } from 'typeorm';
// import { Thread } from '../../../models/Threads';

export const categoryGetAll: QueryResolvers.CategoryGetAllResolver = async () => {
  const categories = await Category.find({ relations: ['forums'] });

  // console.log(
  //   await getConnection()
  //     .getRepository(Category)
  //     .createQueryBuilder('category')
  //     .innerJoinAndSelect('category.forums', 'forums')
  //     .addSelect(subQ => {
  //       return subQ
  //         .select('COUNT(*)', 'threadCount')
  //         .from(Thread, 'thread')
  //         .where('thread."forumId" = forums.id');
  //     }, 'threadCount')
  //     .getRawMany(),
  // );

  return {
    success: true,
    categories,
  };
};
