import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { Post } from '../../../db/models/Posts'
import { AuthenticationError } from 'apollo-server-core'
import { User } from '../../../db/models/User'
import { UserPermissions } from '../../../db/models/User/permissions'

export const postDelete: MutationResolvers['postDelete'] = async (_, { id }, { userId }) => {
  isAuthenticated(userId)

  const post = await Post.findOne({
    where: { id },
    relations: ['author', 'thread'],
  })
  if (!post) {
    return null
  }
  const user = await User.findOne({ where: { id: userId } })
  if (post.author.id !== userId && !user.permissions.includes(UserPermissions.Admin)) {
    throw new AuthenticationError('UNAUTHORIZED')
  }

  await Post.delete({ id })

  return post
}
