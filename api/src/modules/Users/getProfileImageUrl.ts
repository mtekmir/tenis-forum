import { IContext } from '../../types/types';
import { User } from '../../models/User';

export const profileImageUrl = (
  { profileImageKey }: User,
  _: any,
  { s3BucketUrl }: IContext,
) => {
  return profileImageKey && `${s3BucketUrl}/${profileImageKey}`;
};
