import { MutationResolvers } from '../../../types/schema'
import { isAuthenticated } from '../../Users/auth/authenticateUser'
import { Report } from '../../../db/models/Report'
import { getConnection } from 'typeorm'
import { Thread } from '../../../db/models/Threads'
import { User } from '../../../db/models/User'
import { respond } from '../../common/genericResponse'
import { Post } from '../../../db/models/Posts'

export const reportCreate: MutationResolvers['reportCreate'] = async (
  _,
  { input: { reason, postId, threadId } },
  { userId }
) => {
  isAuthenticated(userId)

  await getConnection().transaction(async manager => {
    const created = await manager.getRepository(Report).create({ reason }).save()

    if (threadId) {
      await manager
        .createQueryBuilder()
        .relation(Thread, 'reports')
        .of(threadId)
        .add(created.id)
    }

    await manager.createQueryBuilder().relation(User, 'reports').of(userId).add(created.id)

    if (postId) {
      console.log(postId)
      await manager
        .createQueryBuilder()
        .relation(Post, 'reports')
        .of({ id: postId })
        .add(created.id)
    }

    return created
  })

  return respond()
}
