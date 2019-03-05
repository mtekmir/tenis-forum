import { MutationResolvers } from '../../../../types/schema';
import { User } from '../../../../models/User';
import validateRegister from './validateRegister';
import { createConfirmEmailLink } from './createConfirmEmailLink';
// import { confirmEmail } from '../../../../services/email/confirmEmail';
import { respond } from '../../../common/genericResponse';
import { UserPermissions } from '../../../../models/User/permissions';

export const register: MutationResolvers.RegisterResolver = async (
  _,
  { input: { username, email, password } },
  { redis, request }
) => {
  const error = await validateRegister({ email, password });
  if (error) {
    return { error, success: false };
  }
  try {
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      permissions: [UserPermissions.User]
    }).save();

    const url = `${request.protocol}://${request.get('host')}`;
    await createConfirmEmailLink(url, user.id, redis);

    // await confirmEmail(email, link);
    return respond();
  } catch (err) {
    return respond('login', err.message);
  }
};
