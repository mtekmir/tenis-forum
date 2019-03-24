import faker from 'faker';
import { User } from '../../models/User';
import { getConnection } from 'typeorm';
import { UserPermissions } from '../../models/User/permissions';

const NUM_USERS = 100;

export const createUsers = async () => {
  const users = await User.find();
  const usersToCreate = [];

  if (users.length < NUM_USERS) {
    for (let i = 0; i < NUM_USERS - users.length; i++) {
      usersToCreate.push({
        username: faker.internet.userName(),
        email: faker.internet.email().toLowerCase(),
        password: faker.internet.password(),
        permissions: [UserPermissions.User],
      });
    }
  }

  if (usersToCreate.length) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(usersToCreate)
      .execute();
  }
};
