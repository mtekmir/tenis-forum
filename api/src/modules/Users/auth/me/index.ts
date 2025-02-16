import { QueryResolvers } from '../../../../types/schema'
import { User } from '../../../../db/models/User'
import { UserPermissions } from '../../../../db/models/User/permissions'
import { UserProfile } from '../../../../db/models/UserProfile'

export const me: QueryResolvers['me'] = async (_, __, { userId }) => {
  if (!userId) {
    return null
  }

  const user = await User.findOne({
    where: {
      id: userId,
    },
  })

  const { id, username, email, permissions, profileImageKey, signature } = user

  let profile
  if (!permissions.includes(UserPermissions.Admin)) {
    profile = await UserProfile.findOne({ where: { user } })
  }

  return { id, username, email, permissions, profileImageKey, profile, signature }
}
