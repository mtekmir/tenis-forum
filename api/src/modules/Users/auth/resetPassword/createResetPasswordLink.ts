import { v4 } from 'uuid';

export const createResetPasswordLink = async (url: string) => {
  const id = v4();
  return {
    link: `${url}/uyelik/yeni-sifre/${id}`,
    pwResetToken: id,
    pwResetTokenExpiry: Date.now() + 60 * 60 * 30,
  };
};
