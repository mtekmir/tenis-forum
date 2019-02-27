import { IContext } from '../../../../types/types';
import { MutationResolvers } from '../../../../types/schema';
import { respond } from '../../../common/genericResponse';

const logout: MutationResolvers.LogoutResolver = async (
  _,
  __,
  { response }: IContext
) => {
  response.clearCookie('token');
  return respond();
};

export default logout;
