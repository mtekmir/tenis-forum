import { MutationResolvers } from '../../../types/schema';
import { isAdmin } from '../../Users/auth/authenticateUser';
import { Forum } from '../../../models/Forums';
import { getConnection } from 'typeorm';
import { Category } from '../../../models/Category';

export const forumCreate: MutationResolvers.ForumCreateResolver = async (
  _,
  { input: { name, categoryId } },
  { userId }
) => {
  await isAdmin(userId);
  let forum: Forum;
  await getConnection().transaction(async manager => {
    forum = await manager
      .getRepository(Forum)
      .create({ name })
      .save();
    await manager
      .createQueryBuilder()
      .relation(Category, 'forums')
      .of(categoryId)
      .add(forum.id);
    forum = await manager
      .getRepository(Forum)
      .findOne({ where: { id: forum.id }, relations: ['category'] });
  });

  return forum;
};
