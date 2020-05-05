import { getConnection } from 'typeorm'
import { AuthenticationError, ApolloError } from 'apollo-server-express'

import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { Thread } from '../../../db/models/Threads'
import { contentIsValid } from '../../common/Censor'

export const threadEdit: MutationResolvers['threadEdit'] = async (
  _,
  { input: { id, title } },
  { userId }
) => {
  isAuthenticated(userId)

  if (!contentIsValid(title)) {
    throw new ApolloError('Inappropriate Content', '400')
  }

  const thread = await Thread.findOne({ where: { id }, relations: ['owner'] })

  if (!thread || thread.owner.id !== userId) {
    throw new AuthenticationError('Unauthorized')
  }

  const res = await getConnection()
    .createQueryBuilder()
    .update(Thread)
    .set({ title })
    .where('id = :id', { id })
    .execute()

  return res.affected > 0 ? { ...thread, title, updatedAt: new Date() } : null
}
