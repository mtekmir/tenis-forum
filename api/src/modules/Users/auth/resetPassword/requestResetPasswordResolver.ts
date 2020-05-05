import { MutationResolvers } from '../../../../types/schema'
import { User } from '../../../../db/models/User'
import { createResetPasswordLink } from './createResetPasswordLink'
import { getConnection } from 'typeorm'
import { respond } from '../../../common/genericResponse'
import { sendPasswordResetEmail } from '../../../../services/Email/sendPasswordResetEmail'

export const requestResetPassword: MutationResolvers['requestResetPassword'] = async (
  _,
  { input: { email } },
  { url }
) => {
  const user = await User.findOne({ where: { email } })
  if (!user) {
    return respond()
  }

  const { pwResetToken, pwResetTokenExpiry, link } = await createResetPasswordLink(url)

  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ pwResetToken, pwResetTokenExpiry })
    .where('email = :email', { email })
    .execute()
  // send email

  await sendPasswordResetEmail(email, link)
  return respond()
}
