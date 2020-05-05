import { MutationResolvers } from '../../../types/schema'
import { Forum } from '../../../db/models/Forums'
import { getConnection } from 'typeorm'
import { Category } from '../../../db/models/Category'
import { isAdmin } from '../../Admin/isAdmin'

export const forumCreate: MutationResolvers['forumCreate'] = async (
  _,
  { input: { name, categoryId } },
  { userId }
) => {
  await isAdmin(userId)
  let forum: Forum
  await getConnection().transaction(async manager => {
    forum = await manager.getRepository(Forum).create({ name }).save()
    await manager
      .createQueryBuilder()
      .relation(Category, 'forums')
      .of(categoryId)
      .add(forum.id)
    forum = await manager
      .getRepository(Forum)
      .findOne({ where: { id: forum.id }, relations: ['category'] })
  })

  return forum
}
