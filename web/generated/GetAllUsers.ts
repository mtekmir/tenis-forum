/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllUsers
// ====================================================

export interface GetAllUsers_userGetAll_users {
  __typename: "UserSummary";
  id: string;
  username: string;
  email: string;
  registerDate: Date;
  threadCount: number;
  postCount: number;
}

export interface GetAllUsers_userGetAll {
  __typename: "UserGetAllResponse";
  users: GetAllUsers_userGetAll_users[];
}

export interface GetAllUsers {
  userGetAll: GetAllUsers_userGetAll;
}
