/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RequestResetPassword
// ====================================================

export interface RequestResetPassword_requestResetPassword_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface RequestResetPassword_requestResetPassword {
  __typename: "Response";
  success: boolean;
  error: RequestResetPassword_requestResetPassword_error[] | null;
}

export interface RequestResetPassword {
  requestResetPassword: RequestResetPassword_requestResetPassword;
}

export interface RequestResetPasswordVariables {
  email: string;
}
