import { QueryResolvers } from '../../../../types/schema'
import { isAuthenticated } from '../../auth/authenticateUser'
import { UserProfile } from '../../../../models/UserProfile'

export const userProfileGet: QueryResolvers['userProfileGet'] = async (
  _,
  { id },
  { userId }
) => {
  isAuthenticated(userId)

  return UserProfile.findOne({ where: { id } })
}
