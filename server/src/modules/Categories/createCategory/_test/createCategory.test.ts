import faker from 'faker';
import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';

const client = new TestClient();

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  await client.registerAndLogin();
});

afterAll(async () => {
  await connection.close();
});

const mutation = `
  mutation($name: String!) {
    categoryCreate(input: { name: $name }) {
      category {
        name
      }
    }
  }
`;

describe('[Create Category]', () => {
  test('Create Category', async () => {
    const name = faker.company.companyName();
    const res: any = await client.mutation(mutation, { name });
    expect(res.categoryCreate.category.name).toBe(name);
  });
});
