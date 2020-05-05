import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { getConnection } from 'typeorm'
import { Post } from '../../../db/models/Posts'
import { Thread } from '../../../db/models/Threads'
import { User } from '../../../db/models/User'
import { Forum } from '../../../db/models/Forums'
import { contentIsValid } from '../../common/Censor'
import { ApolloError } from 'apollo-server-express'

export const threadCreate: MutationResolvers['threadCreate'] = async (
  _,
  { input: { text, title, forumId } },
  { userId }
) => {
  isAuthenticated(userId)

  if (!contentIsValid(text) || !contentIsValid(title)) {
    throw new ApolloError('Inappropriate Content', '400')
  }

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
