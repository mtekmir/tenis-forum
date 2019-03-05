import faker from 'faker';
import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';
import { Category } from '../../../../models/Category';
import { UserPermissions } from '../../../../models/User/permissions';

const client = new TestClient();

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  await client.registerAndLogin(UserPermissions.Admin);
});

afterAll(async () => {
  await connection.close();
});

const mutation = `
  mutation($id: Int!) {
    categoryDelete(id: $id) {
      success
    }
  }
`;

describe('[Delete Category]', () => {
  test('Delete', async () => {
    const name = faker.company.companyName();
    const { id } = await Category.create({ name }).save();
    const res = await client.mutation(mutation, { id });

    expect(res.data.categoryDelete.success).toBeTruthy();
    const category = await Category.findOne({ name });
    expect(category).toBeUndefined();
  });
});
