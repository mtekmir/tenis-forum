/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ResetPassword
// ====================================================

export interface ResetPassword_resetPassword_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface ResetPassword_resetPassword {
  __typename: "Response";
  success: boolean;
  error: ResetPassword_resetPassword_error[] | null;
}

export interface ResetPassword {
  resetPassword: ResetPassword_resetPassword;
}

export interface ResetPasswordVariables {
  newPassword: string;
  pwResetToken: string;
}
