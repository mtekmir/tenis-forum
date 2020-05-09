/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AdminLogin
// ====================================================

export interface AdminLogin_adminLogin_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface AdminLogin_adminLogin {
  __typename: "Response";
  error: AdminLogin_adminLogin_error[] | null;
  success: boolean;
}

export interface AdminLogin {
  adminLogin: AdminLogin_adminLogin;
}

export interface AdminLoginVariables {
  email: string;
  password: string;
}
