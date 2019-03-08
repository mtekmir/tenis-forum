import { createDbConnection } from '../../../../../utils/createDbConnection';
import { Connection } from 'typeorm';
import { authenticateUser } from '../index';
import { User } from '../../../../../models/User';
import { TestClient } from '../../../../../test/testClient';
import generateToken from '../../login/generateToken';

const client = new TestClient();

let email: string;
const mockRequest: any = {
  cookies: { token: '' },
};

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  const users = await client.createUser(1);
  email = users[0].email;
  const token = generateToken(users[0].id);
  mockRequest.cookies.token = token;
});

afterAll(async () => {
  await User.delete({ email });

  await connection.close();
});

describe('reads the id from the token and returns the user', () => {
  it('returns the user', async () => {
    const user = await User.findOne({ where: { email } });
    const res = await authenticateUser(mockRequest);
    expect(res).toBe(user.id);
  });
});
