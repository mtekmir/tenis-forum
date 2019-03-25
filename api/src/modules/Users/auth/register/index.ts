import { MutationResolvers } from '../../../../types/schema';
import { User } from '../../../../models/User';
import validateRegister from './validateRegister';
import { createConfirmEmailLink } from './createConfirmEmailLink';
import { respond } from '../../../common/genericResponse';
import { UserPermissions } from '../../../../models/User/permissions';
import { sendConfirmationEmail } from '../../../../services/email/sendConfirmationEmail';
import { getConnection } from 'typeorm';
import { UserProfile } from '../../../../models/UserProfile';
import { generateProfileImage } from './generateProfileImage';

export const register: MutationResolvers.RegisterResolver = async (
  _,
  { input: { username, email, password } },
  { url },
) => {
  const error = await validateRegister({ email, password });
  if (error) {
    return { error, success: false };
  }
  let user: User;
  await getConnection().transaction(async manager => {
    const profile = await manager
      .getRepository(UserProfile)
      .create({})
      .save();

    user = await manager
      .getRepository(User)
      .create({
        username,
        email: email.toLowerCase(),
        password,
        permissions: [UserPermissions.User],
        profile,
        profileImageKey: generateProfileImage(),
      })
      .save();
  });

  const link = await createConfirmEmailLink(url, user.id);

  await sendConfirmationEmail(email, link);
  return respond();
};
