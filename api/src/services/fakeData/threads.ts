import faker from 'faker';
import { Forum } from '../../models/Forums';
import { Post } from '../../models/Posts';
import { User } from '../../models/User';
import { getConnection } from 'typeorm';
import { Thread } from '../../models/Threads';

const NUM_THREADS = 50;

export const createThreads = async () => {
  const forums = await Forum.find({ relations: ['threads'] });
  const users = await User.find();

  for (const forum of forums) {
    if (forum.threads.length < NUM_THREADS) {
      for (let i = 0; i < NUM_THREADS - forum.threads.length; i++) {
        await getConnection().transaction(async manager => {
          const userId =
            users[Math.floor(Math.random() * (users.length - 1))].id;
          const originalPost = await manager
            .getRepository(Post)
            .create({
              text: faker.lorem.paragraph(),
            })
            .save();

          await getConnection()
            .createQueryBuilder()
            .relation(User, 'posts')
            .of(userId)
            .add(originalPost.id);

          const thread = await manager
            .getRepository(Thread)
            .create({ title: faker.lorem.sentence(), originalPost })
            .save();

          await getConnection()
            .createQueryBuilder()
            .relation(User, 'threads')
            .of(userId)
            .add(thread.id);

          await getConnection()
            .createQueryBuilder()
            .relation(Forum, 'threads')
            .of(forum.id)
            .add(thread.id);
        });
      }
    }
  }
};
