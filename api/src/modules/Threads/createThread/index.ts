import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { getConnection } from 'typeorm'
import { Post } from '../../../models/Posts'
import { Thread } from '../../../models/Threads'
import { User } from '../../../models/User'
import { Forum } from '../../../models/Forums'

export const threadCreate: MutationResolvers['threadCreate'] = async (
  _,
  { input: { text, title, forumId } },
  { userId }
) => {
  isAuthenticated(userId)

  let thread: Thread
  await getConnection().transaction(async manager => {
    const originalPost = await manager.getRepository(Post).create({ text }).save()

    await getConnection()
      .createQueryBuilder()
      .relation(User, 'posts')
      .of(userId)
      .add(originalPost.id)

    thread = await manager.getRepository(Thread).create({ title, originalPost }).save()

    await getConnection()
      .createQueryBuilder()
      .relation(User, 'threads')
      .of(userId)
      .add(thread.id)

    await getConnection()
      .createQueryBuilder()
      .relation(Forum, 'threads')
      .of(forumId)
      .add(thread.id)
  })

  return { id: thread.id, title: thread.title }
}
