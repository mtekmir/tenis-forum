import { isAuthenticated } from '../../auth/authenticateUser';
// import { UserProfile } from '../../../../models/UserProfile';
import { User } from '../../../../models/User';
import { getConnection } from 'typeorm';
import { respond } from '../../../common/genericResponse';
import { MutationResolvers } from '../../../../types/schema';

export const editUserProfile: MutationResolvers.EditUserProfileResolver = async (
  _,
  { input: { username, profileImageKey } },
  { userId },
) => {
  isAuthenticated(userId);
  try {
    const userUpdates: { [key: string]: any } = {};

    if (username) {
      userUpdates.username = username;
    }
    if (profileImageKey) {
      userUpdates.profileImageKey = profileImageKey;
    }

    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ ...userUpdates })
      .where('id = :userId', { userId })
      .execute();

    // if (!Object.keys(rest).length) {
    //   return respond();
    // }
    // await getConnection()
    //   .createQueryBuilder()
    //   .update(UserProfile)
    //   .set({ ...rest })
    //   .where('"userId" = :userId', { userId })
    //   .execute();

    return respond();
  } catch (err) {
    console.log(err);
    return respond('editUserProfile', 'Unable to edit profile');
  }
};
