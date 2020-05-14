/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLatestPosts
// ====================================================

export interface GetLatestPosts_threadGetLastPosts {
  __typename: "LastPostOfThread";
  id: number;
  createdAt: Date;
  authorId: string;
  profileImageUrl: string;
  username: string;
  threadId: number;
}

export interface GetLatestPosts {
  threadGetLastPosts: GetLatestPosts_threadGetLastPosts[];
}

export interface GetLatestPostsVariables {
  forumId: number;
}
