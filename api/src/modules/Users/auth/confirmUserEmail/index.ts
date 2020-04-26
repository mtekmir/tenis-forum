import { User } from '../../../../models/User'
import { respond } from '../../../common/genericResponse'
import { MutationResolvers } from '../../../../types/schema'

export const confirmUserEmail: MutationResolvers['confirmUserEmail'] = async (
  _,
  { token },
  { redis }
) => {
  const userId = await redis.get(token)

  if (!userId) {
    return respond('confirmUserEmail', 'Invalid')
  }

  await User.update({ id: userId }, { confirmed: true })
  await redis.del(token)

  return respond()
}
