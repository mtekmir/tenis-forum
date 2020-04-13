import faker from 'faker'

import { User } from '../../../../models/User'
import { UserPermissions } from '../../../../models/User/permissions'

export const createAdmin: any = async () => {
  const username = faker.internet.userName()
  const email = faker.internet.email()
  const password = faker.internet.password()

  await User.create({
    username,
    email: email.toLowerCase(),
    confirmed: true,
    password: 'test',
    permissions: [UserPermissions.Admin, UserPermissions.User]
  }).save()

  return {
    username,
    email,
    password
  }
}
