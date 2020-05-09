/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUploadUrlQuery
// ====================================================

export interface GetUploadUrlQuery_getUploadUrl {
  __typename: "GetUploadUrlResponse";
  success: boolean;
  uploadKey: string | null;
  uploadUrl: string | null;
  previewUrl: string | null;
}

export interface GetUploadUrlQuery {
  getUploadUrl: GetUploadUrlQuery_getUploadUrl;
}

export interface GetUploadUrlQueryVariables {
  contentType: string;
  extension: string;
}
