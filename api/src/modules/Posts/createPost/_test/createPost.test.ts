import faker from 'faker';
import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../db/createDbConnection';
import { TestClient } from '../../../../test/testClient';
import { UserPermissions } from '../../../../db/models/User/permissions';
import { Post } from '../../../../db/models/Posts';
import { Thread } from '../../../../db/models/Threads';
import { User } from '../../../../db/models/User';

const client = new TestClient();

let connection: Connection;
let threadId: number;
let userId: string;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  const { id } = await client.registerAndLogin(UserPermissions.Admin);
  userId = id;
  const category = await client.createCategory();
  const forum = await client.createForum(category.id);
  const thread = await client.createThread(forum.id);
  threadId = thread.id;
});

afterAll(async () => {
  await connection.close();
});

const mutation = `
  mutation($threadId: Int!, $text: String!) {
    postCreate(input: { threadId: $threadId, text: $text }) {
      id
      text
    }
  }
`;

describe('[Create Post]', () => {
  test('Create', async () => {
    const text = faker.lorem.paragraph();
    const { data } = await client.mutation(mutation, { threadId, text });

    expect(data.postCreate.text).toBe(text);

    const post = await connection
      .getRepository(Post)
      .findOne({ where: { id: data.postCreate.id }, relations: ['author'] });
    expect(post.text).toBe(text);
    expect(post.author.id).toBe(userId);

    const thread = await connection
      .getRepository(Thread)
      .findOne({ where: { id: threadId }, relations: ['posts'] });

    expect(
      thread.posts.find(({ id }) => id === data.postCreate.id)
    ).toBeTruthy();

    const user = await connection
      .getRepository(User)
      .findOne({ where: { id: userId }, relations: ['posts'] });

    expect(user.posts.find(({ id }) => id === data.postCreate.id)).toBeTruthy();
  });
});
