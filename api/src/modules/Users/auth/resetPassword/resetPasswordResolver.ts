import * as bcrypt from 'bcryptjs';
import { MutationResolvers } from '../../../../types/schema';
import { validatePassword } from './validatePassword';
import { User } from '../../../../models/User';
import { respond } from '../../../common/genericResponse';
import { getConnection } from 'typeorm';

export const resetPassword: MutationResolvers.ResetPasswordResolver = async (
  _,
  { input: { newPassword, pwResetToken } }
) => {
  const user = await User.findOne({
    where: {
      pwResetToken
    }
  });
  if (!user) {
    return respond();
  }
  if (user.pwResetTokenExpiry - Date.now() > 60 * 60 * 30) {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ pwResetToken: null, pwResetTokenExpiry: null })
      .where('id = :id', { id: user.id })
      .execute();
    return respond();
  }

  const error = validatePassword(newPassword);
  if (error) {
    return { error, success: false };
  }

  const hashed = await bcrypt.hash(newPassword, 10);
  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ pwResetToken: null, pwResetTokenExpiry: null, password: hashed })
    .where('id = :id', { id: user.id })
    .execute();

  return respond();
};
