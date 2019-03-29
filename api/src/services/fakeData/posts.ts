import faker from 'faker';
import { Thread } from '../../models/Threads';
import { getConnection } from 'typeorm';
import { Post } from '../../models/Posts';
import { User } from '../../models/User';

const NUM_POSTS = 5;

export const createPosts = async () => {
  const threads = await Thread.find({ relations: ['posts'] });
  const users = await User.find();

  for (const thread of threads) {
    if (thread.posts.length < NUM_POSTS) {
      for (let i = 0; i < NUM_POSTS - thread.posts.length; i++) {
        const userId = users[Math.floor(Math.random() * (users.length - 1))];

        await getConnection().transaction(async manager => {
          const post = await manager
            .getRepository(Post)
            .create({ text: JSON.stringify(faker.lorem.sentence()) })
            .save();

          await manager
            .createQueryBuilder()
            .relation(Thread, 'posts')
            .of(thread.id)
            .add(post.id);

          await manager
            .createQueryBuilder()
            .relation(User, 'posts')
            .of(userId)
            .add(post.id);
        });
      }
    }
  }
};
