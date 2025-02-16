import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { Thread } from '../../../db/models/Threads'
import { AuthenticationError } from 'apollo-server-core'
import { User } from '../../../db/models/User'
import { UserPermissions } from '../../../db/models/User/permissions'
import { getConnection } from 'typeorm'

export const threadDelete: MutationResolvers['threadDelete'] = async (
  _,
  { id },
  { userId }
) => {
  isAuthenticated(userId)

  const thread = await Thread.findOne({
    where: { id },
    relations: ['forum'],
  })

  if (!thread) {
    return null
  }

  const user = await User.findOne({ where: { id: userId } })

  if (thread.owner.id !== userId && !user.permissions.includes(UserPermissions.Admin)) {
    throw new AuthenticationError('UNAUTHORIZED')
  }

  await getConnection()
    .createQueryBuilder()
    .update(Thread)
    .set({ deleted: new Date() })
    .where('id = :id', { id })
    .execute()

  return thread
}
