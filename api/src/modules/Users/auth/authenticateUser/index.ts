import Jwt from 'jsonwebtoken';
import { Request } from 'express';
import { redis } from '../../../../services/redis';
import { blacklistedPrefix } from '../../../../constants';
import { AuthenticationError } from 'apollo-server-core';
import { User } from '../../../../models/User';
import { UserPermissions } from '../../../../models/User/permissions';

const { JWT_KEY } = process.env;

export const authenticateUser = async (request: Request) => {
  if (!request) {
    return null;
  }
  const { token } = request.cookies;
  if (!token) {
    return null;
  }
  let userId: string;
  try {
    const decoded: any = Jwt.verify(token, JWT_KEY);
    userId = decoded.id;
  } catch (err) {
    console.log(err);
    return null;
  }
  const blacklisted = await redis.get(`${blacklistedPrefix}${userId}`);
  if (blacklisted) {
    return null;
  }

  return userId;
};

export const isAuthenticated = (userId: string | null) => {
  if (!userId) {
    throw new AuthenticationError('Unauthorized');
  }
};

export const isAdmin = async (userId: string) => {
  if (!userId) {
    throw new AuthenticationError('Unauthorized');
  }

  const { permissions } = await User.findOne({ id: userId });
  if (!permissions.includes(UserPermissions.Admin)) {
    throw new AuthenticationError('Unauthorized');
  }
};
