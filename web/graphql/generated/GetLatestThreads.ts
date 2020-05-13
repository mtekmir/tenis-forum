/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLatestThreads
// ====================================================

export interface GetLatestThreads_forumGetLastThreads {
  __typename: "LastThreadOfForum";
  id: number;
  createdAt: Date;
  title: string;
  forumId: number;
  ownerId: string;
  profileImageUrl: string;
  username: string;
}

export interface GetLatestThreads {
  forumGetLastThreads: GetLatestThreads_forumGetLastThreads[];
}
