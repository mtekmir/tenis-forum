import faker from 'faker'

import { User } from '../../../../models/User'
import { UserPermissions } from '../../../../models/User/permissions'
import { MutationResolvers } from '../../../../types/schema'

export const createAdmin: MutationResolvers['createAdmin'] = async () => {
  const username = faker.internet.userName()
  const email = faker.internet.email()
  const password = faker.internet.password()

  await User.create({
    username,
    email: email.toLowerCase(),
    confirmed: true,
    password: 'test',
    permissions: [UserPermissions.Admin, UserPermissions.User],
  }).save()

  return {
    username,
    email,
    password,
  }
}
