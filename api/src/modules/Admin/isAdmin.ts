import { AuthenticationError } from 'apollo-server-core';
import { User } from '../../models/User';
import { UserPermissions } from '../../models/User/permissions';

export const isAdmin = async (userId: string) => {
  if (!userId) {
    throw new AuthenticationError('Unauthorized');
  }

  const { permissions } = await User.findOne({ id: userId });
  if (!permissions.includes(UserPermissions.Admin)) {
    throw new AuthenticationError('Unauthorized');
  }
};
