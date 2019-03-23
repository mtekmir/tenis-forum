import { IContext } from '../../../../types/types';
import { MutationResolvers } from '../../../../types/schema';
import { respond } from '../../../common/genericResponse';

export const logout: MutationResolvers.LogoutResolver = async (
  _,
  __,
  { response, userId }: IContext,
) => {
  if (!userId) {
    return respond();
  }

  response.clearCookie('token');
  return respond();
};
