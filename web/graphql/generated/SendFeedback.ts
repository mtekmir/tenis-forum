/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendFeedback
// ====================================================

export interface SendFeedback_userSendFeedback_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface SendFeedback_userSendFeedback {
  __typename: "Response";
  success: boolean;
  error: SendFeedback_userSendFeedback_error[] | null;
}

export interface SendFeedback {
  userSendFeedback: SendFeedback_userSendFeedback;
}

export interface SendFeedbackVariables {
  name: string;
  email: string;
  subject: string;
  message: string;
}
