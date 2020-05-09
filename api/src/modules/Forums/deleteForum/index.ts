import { MutationResolvers } from '../../../types/schema'
import { Forum } from '../../../db/models/Forums'
import { isAdmin } from '../../Admin/isAdmin'
import { getConnection } from 'typeorm'

export const forumDelete: MutationResolvers['forumDelete'] = async (_, { id }, { userId }) => {
  await isAdmin(userId)

  await getConnection()
    .createQueryBuilder()
    .update(Forum)
    .set({ deleted: new Date() })
    .where('id = :id', { id })
    .execute()

  return {
    error: null,
    success: true,
  }
}
