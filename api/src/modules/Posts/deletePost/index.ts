import { MutationResolvers } from '../../../types/schema'
import { Post } from '../../../db/models/Posts'
import { User } from '../../../db/models/User'
import { getConnection } from 'typeorm'
import { isAdmin } from '../../Admin/isAdmin'

export const postDelete: MutationResolvers['postDelete'] = async (_, { id }, { userId }) => {
  isAdmin(userId)

  const post = await Post.findOne({
    where: { id },
    relations: ['author', 'thread'],
  })
  if (!post) {
    return null
  }
  const user = await User.findOne({ where: { id: userId } })

  await getConnection()
    .createQueryBuilder()
    .update(Post)
    .set({ deleted: new Date() })
    .where('id = :id', { id })
    .execute()

  return post
}
