import faker from 'faker'
import { Forum } from '../../db/models/Forums'
import { Post } from '../../db/models/Posts'
import { User } from '../../db/models/User'
import { getConnection } from 'typeorm'
import { Thread } from '../../db/models/Threads'

const NUM_THREADS = 30

export const createThreads = async () => {
  const forums = await Forum.find({ relations: ['threads'] })
  const users = await User.find()

  for (const forum of forums) {
    if (forum.threads.length < NUM_THREADS) {
      for (let i = 0; i < NUM_THREADS - forum.threads.length; i++) {
        await getConnection().transaction(async manager => {
          const userId = users[Math.floor(Math.random() * (users.length - 1))].id
          const originalPost = await manager
            .getRepository(Post)
            .create({
              text: faker.lorem.paragraph(),
            })
            .save()

          await manager
            .createQueryBuilder()
            .relation(User, 'posts')
            .of(userId)
            .add(originalPost.id)

          const thread = await manager
            .getRepository(Thread)
            .create({ title: faker.lorem.sentence(), originalPost, postCount: 9 })
            .save()

          await manager
            .createQueryBuilder()
            .relation(User, 'threads')
            .of(userId)
            .add(thread.id)

          await manager
            .createQueryBuilder()
            .relation(Forum, 'threads')
            .of(forum.id)
            .add(thread.id)
        })
      }
    }
  }
}
