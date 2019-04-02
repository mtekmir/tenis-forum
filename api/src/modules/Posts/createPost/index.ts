import { MutationResolvers } from '../../../types/schema';
import { isAuthenticated } from '../../Users/auth/authenticateUser';
import { getConnection } from 'typeorm';
import { Post } from '../../../models/Posts';
import { Thread } from '../../../models/Threads';
import { User } from '../../../models/User';

export const postCreate: MutationResolvers.PostCreateResolver = async (
  _,
  { input: { text, threadId } },
  { userId },
) => {
  isAuthenticated(userId);

  let post: Post;
  await getConnection().transaction(async manager => {
    post = await manager
      .getRepository(Post)
      .create({ text: JSON.stringify(text) })
      .save();

    await manager
      .createQueryBuilder()
      .relation(Thread, 'posts')
      .of(threadId)
      .add(post.id);

    await manager
      .createQueryBuilder()
      .relation(User, 'posts')
      .of(userId)
      .add(post.id);
  });

  const user = await User.findOne({ where: { id: userId } });
  post.author = user;

  return post;
};
