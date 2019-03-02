import faker from 'faker';
import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';
import { Category } from '../../../../models/Category';
import { Forum } from '../../../../models/Forums';
import { UserPermissions } from '../../../../models/User/permissions';
import { Thread } from '../../../../models/Threads';
import { Post } from '../../../../models/Posts';
import { User } from '../../../../models/User';

const client = new TestClient();
let category: Category;
let forum: Forum;
let userId: string;
const title = faker.lorem.sentence();
const text = faker.lorem.paragraph();

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
  mutation($title: String!, $text: String!, $forumId: Int!) {
    threadCreate(input: { title: $title, text: $text, forumId: $forumId }) {
      id
      title
    }
  }
`;

describe('[Create Thread]', () => {
  test('Create', async () => {
    const res = await client.mutation(mutation, {
      title,
      text,
      forumId: forum.id
    });
    expect(res.data.threadCreate.title).toBe(title);

    const thread = await connection.getRepository(Thread).findOne({
      where: { id: res.data.threadCreate.id },
      relations: ['posts', 'originalPost']
    });

    expect(thread.originalPost.text).toBe(text);

    const post = await Post.findOne({
      where: { id: thread.originalPost.id },
      relations: ['author', 'thread']
    });
    expect(post.author.id).toBe(userId);
    expect(post.thread.id).toBe(thread.id);

    const updatedUser = await User.findOne({
      where: { id: userId },
      relations: ['posts', 'threads']
    });
    expect(
      updatedUser.posts.find(({ id }) => id === thread.originalPost.id)
    ).toBeTruthy();
    expect(updatedUser.threads.find(({ id }) => id === thread.id)).toBeTruthy();
  });
});
