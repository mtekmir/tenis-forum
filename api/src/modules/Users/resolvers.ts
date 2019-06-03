import { register } from './auth/register';
import { login } from './auth/login';
import { logout } from './auth/logout';
import { requestResetPassword } from './auth/resetPassword/requestResetPasswordResolver';
import { resetPassword } from './auth/resetPassword/resetPasswordResolver';
import { me } from './auth/me';
import { confirmUserEmail } from './auth/confirmUserEmail';
import { createAdmin } from './auth/admin';
import { userProfileGet } from './profile/getUserProfile';
import { profileImageUrl } from './getProfileImageUrl';
import { editUserProfile } from './profile/editUserProfile';
import { userGetAll } from './getAllUsers';
import { userGet } from './getUser';

export const resolvers = {
  Mutation: {
    register,
    login,
    logout,
    requestResetPassword,
    resetPassword,
    confirmUserEmail,
    createAdmin,
    editUserProfile,
  },
  Query: {
    me,
    userProfileGet,
    userGetAll,
    userGet,
  },
  User: {
    profileImageUrl,
  },
};
