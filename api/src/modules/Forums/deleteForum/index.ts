import { MutationResolvers } from '../../../types/schema'
import { Forum } from '../../../models/Forums'
import { isAdmin } from '../../Admin/isAdmin'

export const forumDelete: MutationResolvers['forumDelete'] = async (_, { id }, { userId }) => {
  await isAdmin(userId)

  await Forum.delete({ id })

  return {
    error: null,
    success: true,
  }
}
