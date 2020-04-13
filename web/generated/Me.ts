/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserPermissions } from "./globalTypes";

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_profile {
  __typename: "UserProfile";
  id: number;
  gender: string;
  location: string | null;
  occupation: string | null;
}

export interface Me_me {
  __typename: "User";
  id: string;
  username: string;
  email: string;
  permissions: UserPermissions[];
  profileImageUrl: string | null;
  profile: Me_me_profile | null;
}

export interface Me {
  me: Me_me | null;
}
