import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { getConnection } from 'typeorm'
import { Post } from '../../../models/Posts'
import { Thread } from '../../../models/Threads'
import { User } from '../../../models/User'

export const postCreate: MutationResolvers['postCreate'] = async (
  _,
  { input: { text, threadId } },
  { userId }
) => {
  isAuthenticated(userId)

  const post = await getConnection().transaction(async manager => {
    const created = await manager
      .getRepository(Post)
      .create({ text: JSON.stringify(text) })
      .save()

    await manager.createQueryBuilder().relation(Thread, 'posts').of(threadId).add(created.id)

    await manager.createQueryBuilder().relation(User, 'posts').of(userId).add(created.id)

    return created
  })

  const user = await User.findOne({ where: { id: userId } })
  post.author = user

  return post
}
