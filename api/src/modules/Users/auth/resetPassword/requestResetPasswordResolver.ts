import { MutationResolvers } from '../../../../types/schema';
import { User } from '../../../../models/User';
import { createResetPasswordLink } from './createResetPasswordLink';
import { getConnection } from 'typeorm';
import { respond } from '../../../common/genericResponse';

export const requestResetPassword: MutationResolvers.RequestResetPasswordResolver = async (
  _,
  { input: { email } },
  { url }
) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return respond();
  }
  // create the link on front end
  const { pwResetToken, pwResetTokenExpiry } = await createResetPasswordLink(
    url
  );

  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ pwResetToken, pwResetTokenExpiry })
    .where('email = :email', { email })
    .execute();
  // send email
  return respond();
};
