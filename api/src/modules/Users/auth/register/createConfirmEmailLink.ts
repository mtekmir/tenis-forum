import { v4 } from 'uuid';
import { redis } from '../../../../services/redis';

export const createConfirmEmailLink = async (url: string, userId: string) => {
  const id = v4();
  await redis.set(id, userId, 'ex', 60 * 60 * 24);
  return `${url}/user/confirm/${id}`;
};
