import { MutationResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'
import { Category } from '../../../models/Category'
import { isAdmin } from '../../Admin/isAdmin'

export const categoryCreate: MutationResolvers['categoryCreate'] = async (
  _,
  { input: { name } },
  { userId }
) => {
  await isAdmin(userId)

  return getConnection().transaction(async manager => {
    return manager.getRepository(Category).create({ name }).save()
  })
}
