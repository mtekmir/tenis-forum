import { getConnection } from 'typeorm'

import { QueryResolvers, HomepageCategory } from '../../../types/schema'
import { Category } from '../../../db/models/Category'
import { Thread } from '../../../db/models/Threads'

export const categoryGetAll: QueryResolvers['categoryGetAll'] = async () => {
  // select forum.*, (
  //   select sum(thread."postCount")
  //   from thread
  //   where thread."forumId" = forum.id
  //   and thread.deleted is null
  // ) as "postCount", (
  //   select count(thread.id)
  //   from thread
  //   where thread."forumId" = forum.id
  //   and thread.deleted is null
  // ) as threadCount, category.name
  // from forum
  // join category on forum."categoryId" = category.id

  // TODO in another route get last threads of each forum

  const data = await getConnection()
    .getRepository(Category)
    .createQueryBuilder('category')
    .innerJoin('category.forums', 'forum')
    .select(['forum.*', 'category.name as "categoryName"'])
    .addSelect(subQ => {
      return subQ
        .select('COUNT(thread.id)', 'threadCount')
        .from(Thread, 'thread')
        .where('thread."forumId" = forum.id')
        .andWhere('thread.deleted IS NULL')
    }, 'threadCount')
    .addSelect(subQ => {
      return subQ
        .select('SUM(thread.postCount)', 'postCount')
        .from(Thread, 'thread')
        .where('thread."forumId" = forum.id')
        .andWhere('thread.deleted IS NULL')
    }, 'postCount')
    .getRawMany()

  const categories: HomepageCategory[] = Object.values(
    data.reduce(
      (
        res,
        { categoryId: id, categoryName: name, threadCount: tc, postCount: pc, ...forum }
      ) => {
        if (res[id]) {
          res[id].forums.push(forum)
        } else {
          res[id] = {
            id,
            name,
            threadCount: parseInt(tc),
            postCount: parseInt(pc),
            forums: [forum],
          }
        }
        return res
      },
      {}
    )
  )

  return {
    success: true,
    categories,
  }
}
