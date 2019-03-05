import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';
import { Category } from '../../../../models/Category';
import { Forum } from '../../../../models/Forums';
import { UserPermissions } from '../../../../models/User/permissions';
import { User } from '../../../../models/User';
import { Thread } from '../../../../models/Threads';
import { Post } from '../../../../models/Posts';

const client = new TestClient();
let category: Category;
let forum: Forum;
let userId: string;

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  const user = await client.registerAndLogin(UserPermissions.Admin);
  userId = user.id;
  category = (await client.createCategory()) as Category;
  forum = (await client.createForum(category.id)) as Forum;
});

afterAll(async () => {
  await connection.close();
});

const mutation = `
  mutation($id: Int!) {
    threadDelete(id: $id) {
      success
    }
  }
`;

describe('[Delete Thread]', () => {
  test('Delete', async () => {
    const thread = await client.createThread(forum.id);
    const res = await client.mutation(mutation, { id: thread.id });

    expect(res.errors).toBeUndefined();
    expect(res.data.threadDelete.success).toBeTruthy();

    const user = await User.findOne({
      where: { id: userId },
      relations: ['threads', 'posts']
    });
    expect(user.threads).toHaveLength(0);
    expect(user.posts).toHaveLength(0);

    const post = await Post.findOne({ where: { thread: thread.id } });
    expect(post).toBeUndefined();

    const deleted = await Thread.findOne({ where: { id: thread.id } });
    expect(deleted).toBeUndefined();
  });
});
