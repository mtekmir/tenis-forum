import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { Post } from '../../../models/Posts'
import { getConnection } from 'typeorm'

export const postEdit: MutationResolvers['postEdit'] = async (
  _,
  { input: { postId, text } },
  { userId }
) => {
  isAuthenticated(userId)

  const post = await Post.findOne({ where: { id: postId }, relations: ['author'] })

  if (!post || post.author.id !== userId) {
    return null
  }

  const res = await getConnection()
    .createQueryBuilder()
    .update(Post)
    .set({ text })
    .where('id = :postId', { postId })
    .execute()

  return res.affected > 0 ? { ...post, text, updatedAt: new Date() } : null
}
