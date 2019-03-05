import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';
import { UserPermissions } from '../../../../models/User/permissions';
import { Category } from '../../../../models/Category';
import { Forum } from '../../../../models/Forums';

const client = new TestClient();
let category: Category;
let forum: Forum;

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  await client.registerAndLogin(UserPermissions.Admin);
  category = (await client.createCategory()) as Category;
  forum = (await client.createForum(category.id)) as Forum;
});

afterAll(async () => {
  await connection.close();
});

const mutation = `
  mutation($id: Int!) {
    forumDelete(id: $id) {
      success
    }
  }
`;

describe('[Delete Forum]', () => {
  test('Delete', async () => {
    const res = await client.mutation(mutation, { id: forum.id });

    expect(res.data.forumDelete.success).toBeTruthy();
    const deletedForum = await Forum.findOne({ id: forum.id });
    expect(deletedForum).toBeUndefined();
    const categoryRels = await Category.findOne({
      where: { id: category.id },
      relations: ['forums']
    });
    expect(
      categoryRels.forums.find(({ name }) => name === forum.name)
    ).toBeFalsy();
  });
});
