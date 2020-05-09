/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateReport
// ====================================================

export interface CreateReport_reportCreate_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface CreateReport_reportCreate {
  __typename: "Response";
  success: boolean;
  error: CreateReport_reportCreate_error[] | null;
}

export interface CreateReport {
  reportCreate: CreateReport_reportCreate;
}

export interface CreateReportVariables {
  reason: string;
  postId?: number | null;
  threadId?: number | null;
}
