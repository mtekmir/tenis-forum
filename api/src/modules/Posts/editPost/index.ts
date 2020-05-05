import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { Post } from '../../../db/models/Posts'
import { getConnection } from 'typeorm'
import { ApolloError, AuthenticationError } from 'apollo-server-express'
import { contentIsValid } from '../../common/Censor'

export const postEdit: MutationResolvers['postEdit'] = async (
  _,
  { input: { postId, text } },
  { userId }
) => {
  isAuthenticated(userId)

  if (!contentIsValid(text)) {
    throw new ApolloError('Inappropriate Content', '400')
  }

  const post = await Post.findOne({ where: { id: postId }, relations: ['author'] })

  if (!post || post.author.id !== userId) {
    throw new AuthenticationError('Unauthorized')
  }

  const res = await getConnection()
    .createQueryBuilder()
    .update(Post)
    .set({ text })
    .where('id = :postId', { postId })
    .execute()

  return res.affected > 0 ? { ...post, text, updatedAt: new Date() } : null
}
