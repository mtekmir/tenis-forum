import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';
import { UserPermissions } from '../../../../models/User/permissions';
import { Post } from '../../../../models/Posts';
import { User } from '../../../../models/User';
import { Thread } from '../../../../models/Threads';

const client = new TestClient();

let connection: Connection;
let userId: string;
let postId: number;
let threadId: number;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  const { id } = await client.registerAndLogin(UserPermissions.Admin);
  userId = id;
  const category = await client.createCategory();
  const forum = await client.createForum(category.id);
  const thread = await client.createThread(forum.id);
  threadId = thread.id;
  const post = await client.createPost(thread.id);
  postId = post.id;
});

afterAll(async () => {
  await connection.close();
});

const mutation = `
  mutation($id: Int!){
    postDelete(id: $id) {
      success
    }
  }
`;

describe('[Delete Post]', () => {
  test('Delete', async () => {
    const res = await client.mutation(mutation, { id: postId });

    expect(res.data.postDelete.success).toBeTruthy();

    const post = await connection
      .getRepository(Post)
      .findOne({ where: { id: postId } });

    expect(post).toBeUndefined();
    const user = await connection
      .getRepository(User)
      .findOne({ where: { id: userId }, relations: ['posts'] });

    expect(user.posts.find(({ id }) => id === postId)).toBeFalsy();

    const thread = await connection
      .getRepository(Thread)
      .findOne({ where: { id: threadId }, relations: ['posts'] });

    expect(thread.posts.find(({ id }) => id === postId)).toBeFalsy();
  });
});
