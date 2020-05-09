/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllForums
// ====================================================

export interface GetAllForums_forumGetAll_forums {
  __typename: "ForumInfo";
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  threadCount: number;
}

export interface GetAllForums_forumGetAll {
  __typename: "ForumGetAllResponse";
  forums: GetAllForums_forumGetAll_forums[];
}

export interface GetAllForums {
  forumGetAll: GetAllForums_forumGetAll;
}
