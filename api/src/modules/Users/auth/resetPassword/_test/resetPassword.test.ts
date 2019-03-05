import { createDbConnection } from '../../../../../utils/createDbConnection';
import { Connection } from 'typeorm';
import { TestClient } from '../../../../../test/testClient';
import { User } from '../../../../../models/User';

const client = new TestClient();
let email: string;
const newPassword = 'asdasdasdasdasdasd';

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

const request = `
  mutation($email: String!) {
    requestResetPassword(input: { email: $email}) {
      success
      error {
        path
        message
      }
    }
  }
`;

const reset = `
  mutation($pwResetToken: String!, $newPassword: String!) {
    resetPassword(input: { pwResetToken: $pwResetToken, newPassword: $newPassword }) {
      success
      error {
        path
        message
      }
    }
  }
`;

describe('[Reset Password]', () => {
  test('Request Reset Password', async () => {
    await client.mutation(request, { email });
    const user = await User.findOne({ email });
    expect(user.pwResetToken).toBeTruthy();
    expect(user.pwResetTokenExpiry).toBeTruthy();
  });

  test('Reset Password', async () => {
    const { pwResetToken, password } = await User.findOne({ email });
    await client.mutation(reset, { newPassword, pwResetToken });
    const user = await User.findOne({ email });

    expect(user.pwResetToken).toBeFalsy();
    expect(user.pwResetTokenExpiry).toBeFalsy();
    expect(password === user.password).toBeFalsy();
  });
});
