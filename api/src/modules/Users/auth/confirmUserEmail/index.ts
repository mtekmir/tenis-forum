import { MutationResolvers } from '../../../../types/schema';
import { User } from '../../../../models/User';
import { respond } from '../../../common/genericResponse';

export const confirmUserEmail: MutationResolvers.ConfirmUserEmailResolver = async (
  _,
  { token },
  { redis }
) => {
  const userId = await redis.get(token);

  if (!userId) {
    return respond('confirmUserEmail', 'Invalid');
  }

  await User.update({ id: userId }, { confirmed: true });
  await redis.del(token);

  return respond();
};
