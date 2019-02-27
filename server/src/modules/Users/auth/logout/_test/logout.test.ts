import { createDbConnection } from '../../../../../utils/createDbConnection';
import { Connection } from 'typeorm';
import { TestClient } from '../../../../../test/testClient';
import { User } from '../../../../../models/User';

const client = new TestClient();
let email: string;

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  const user = await client.createUser(1);
  email = user[0].email;
});

afterAll(async () => {
  await User.delete({ email });
  connection.close();
});

describe('[Logout]', () => {
  test('logout', async () => {});
});
