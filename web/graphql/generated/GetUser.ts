/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserPermissions } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_userGet_profile {
  __typename: "UserProfile";
  id: number;
  location: string | null;
  gender: string;
  occupation: string | null;
}

export interface GetUser_userGet {
  __typename: "UserInfo";
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  permissions: UserPermissions[];
  profileImageUrl: string | null;
  password: string;
  profile: GetUser_userGet_profile | null;
}

export interface GetUser {
  userGet: GetUser_userGet;
}

export interface GetUserVariables {
  id: string;
}
