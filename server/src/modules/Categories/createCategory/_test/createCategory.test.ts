import faker from 'faker';
import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';
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
  mutation($name: String!) {
    categoryCreate(input: { name: $name }) {
        name
    }
  }
`;

describe('[Create Category]', () => {
  test('Create Category', async () => {
    const name = faker.company.companyName();
    const res = await client.mutation(mutation, { name });
    expect(res.data.categoryCreate.name).toBe(name);
  });
});
