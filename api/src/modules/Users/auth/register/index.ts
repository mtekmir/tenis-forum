import { MutationResolvers } from '../../../../types/schema';
import { User } from '../../../../models/User';
import validateRegister from './validateRegister';
import { createConfirmEmailLink } from './createConfirmEmailLink';
import { respond } from '../../../common/genericResponse';
import { UserPermissions } from '../../../../models/User/permissions';
import { sendConfirmationEmail } from '../../../../services/email/sendConfirmationEmail';

export const register: MutationResolvers.RegisterResolver = async (
  _,
  { input: { username, email, password } },
  { url },
) => {
  const error = await validateRegister({ email, password });
  if (error) {
    return { error, success: false };
  }

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password,
    permissions: [UserPermissions.User],
  }).save();

  const link = await createConfirmEmailLink(url, user.id);

  await sendConfirmationEmail(email, link);
  return respond();
};
