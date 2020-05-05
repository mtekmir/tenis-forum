import { TestClient } from '../../../../../test/testClient';
import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../../db/createDbConnection';
import { UserPermissions } from '../../../../../db/models/User/permissions';

const client = new TestClient();
let connection: Connection;

const meQuery = ` {
  me {
    id
    username
    email
    permissions
  }
}
`;

describe('[me]', () => {
  beforeAll(async () => {
    connection = await createDbConnection('TEST');
  });

  afterAll(async () => {
    await connection.close();
  });
  test('me query', async () => {
    const { email, id, username } = await client.registerAndLogin();
    const res = await client.query(meQuery);
    expect(res.data.me).toEqual({
      email,
      id,
      username,
      permissions: [UserPermissions.User]
    });
  });
});
