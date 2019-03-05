import { v4 } from 'uuid';

export const createResetPasswordLink = async (url: string) => {
  const id = v4();
  return {
    url: `${url}/change-password/${id}`,
    pwResetToken: id,
    pwResetTokenExpiry: Date.now() + 60 * 60 * 30
  };
};
