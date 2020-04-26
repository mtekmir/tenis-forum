import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { Category } from '../../../models/Category'

export const categoryGet: QueryResolvers['categoryGet'] = async (_, { id, limit = 10 }) => {
  return getConnection()
    .getRepository(Category)
    .createQueryBuilder('category')
    .select(['category.name', 'category.id', 'forum.name', 'forum.id'])
    .innerJoin('category.forums', 'forum')
    .where('category.id = :id', { id })
    .limit(limit)
    .getOne()
}
