/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface Register_register {
  __typename: "Response";
  success: boolean;
  error: Register_register_error[] | null;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  username: string;
  email: string;
  password: string;
}
