import { IContext } from '../../../../types/types';
import { MutationResolvers } from '../../../../types/schema';
import { respond } from '../../../common/genericResponse';

export const logout: MutationResolvers.LogoutResolver = async (
  _,
  __,
  { request }: IContext
) => {
  await new Promise((res, rej) => {
    request.session.destroy(err => {
      if (err) {
        rej(err);
      }
      res(true);
    });
  });
  return respond();
};
