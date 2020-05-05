import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { getConnection } from 'typeorm'
import { Post } from '../../../db/models/Posts'
import { Thread } from '../../../db/models/Threads'
import { User } from '../../../db/models/User'
import { contentIsValid } from '../../common/Censor'
import { ApolloError } from 'apollo-server-express'

export const postCreate: MutationResolvers['postCreate'] = async (
  _,
  { input: { text, threadId } },
  { userId }
) => {
  isAuthenticated(userId)

  if (!contentIsValid(text)) {
    console.log('asd')
    throw new ApolloError('Inappropriate Content', '400')
  }

  const post = await getConnection().transaction(async manager => {
    const created = await manager.getRepository(Post).create({ text }).save()

    await manager.createQueryBuilder().relation(Thread, 'posts').of(threadId).add(created.id)

    await manager.createQueryBuilder().relation(User, 'posts').of(userId).add(created.id)

    return created
  })

  const user = await User.findOne({ where: { id: userId } })
  post.author = user

  return post
}
