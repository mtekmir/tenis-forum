/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_error {
  __typename: "Error";
  message: string;
}

export interface Login_login {
  __typename: "Response";
  success: boolean;
  error: Login_login_error[] | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  email: string;
  password: string;
}
