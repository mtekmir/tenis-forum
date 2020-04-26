import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { Thread } from '../../../models/Threads'
import { AuthenticationError } from 'apollo-server-core'
import { User } from '../../../models/User'
import { UserPermissions } from '../../../models/User/permissions'

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

  await Thread.delete({ id })

  return thread
}
