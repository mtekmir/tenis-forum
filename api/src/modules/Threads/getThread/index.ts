import { getConnection } from 'typeorm'
import { Thread } from '../../../db/models/Threads'
import { QueryResolvers } from '../../../types/schema'

export const threadGet: QueryResolvers['threadGet'] = async (_, { input: { id } }) => {
  const thread = await getConnection()
    .getRepository(Thread)
    .createQueryBuilder('thread')
    .leftJoin('thread.forum', 'forum')
    .leftJoin('thread.originalPost', 'originalPost')
    .leftJoin('thread.owner', 'owner')
    .select(['thread', 'owner.username', 'owner.id', 'originalPost.id', 'originalPost.text'])
    .where(`thread.id = :id`, {
      id,
    })
    .getOne()

  return {
    thread,
  }
}
