/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmEmail
// ====================================================

export interface ConfirmEmail_confirmUserEmail_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface ConfirmEmail_confirmUserEmail {
  __typename: "Response";
  success: boolean;
  error: ConfirmEmail_confirmUserEmail_error[] | null;
}

export interface ConfirmEmail {
  confirmUserEmail: ConfirmEmail_confirmUserEmail;
}

export interface ConfirmEmailVariables {
  token: string;
}
