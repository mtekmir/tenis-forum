/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLatestThreads
// ====================================================

export interface GetLatestThreads_categoryGetLastThreads {
  __typename: "LastThreadOfCategory";
  id: number;
  createdAt: Date;
  title: string;
  forumId: number;
  ownerId: string;
  profileImageUrl: string;
  username: string;
}

export interface GetLatestThreads {
  categoryGetLastThreads: GetLatestThreads_categoryGetLastThreads[];
}
