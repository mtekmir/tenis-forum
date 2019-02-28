import { createDbConnection } from '../../../../../utils/createDbConnection';
import { Connection } from 'typeorm';
import { TestClient } from '../../../../../test/testClient';
import { User } from '../../../../../models/User';

const client = new TestClient();
let email: string;
let password: string;

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  const user = await client.registerAndLogin();
  email = user.email;
  password = user.password;
});

afterAll(async () => {
  await User.delete({ email });
  connection.close();
});

const meQuery = `{
  me {
    id
    email
  }
}`;

const logout = `
  mutation {
    logout {
      success
    }
  }
`;

describe('[Logout]', () => {
  test('logout', async () => {
    await client.login(email, password);
    const { me }: any = await client.query(meQuery);

    expect(me.email).toBe(email);
    const res: any = await client.mutation(logout);
    expect(res.logout.success).toBeTruthy();

    const res2 = await client.query(meQuery);
    expect(res2.me).toBeNull();
  });
});
