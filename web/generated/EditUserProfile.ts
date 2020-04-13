/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EditUserProfile
// ====================================================

export interface EditUserProfile_editUserProfile_error {
  __typename: "Error";
  path: string;
  message: string;
}

export interface EditUserProfile_editUserProfile {
  __typename: "Response";
  error: EditUserProfile_editUserProfile_error[] | null;
  success: boolean;
}

export interface EditUserProfile {
  editUserProfile: EditUserProfile_editUserProfile;
}

export interface EditUserProfileVariables {
  profileImageKey?: string | null;
  username?: string | null;
  location?: string | null;
  gender?: Gender | null;
  occupation?: string | null;
}
