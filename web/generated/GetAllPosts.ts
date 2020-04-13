/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterBy } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetAllPosts
// ====================================================

export interface GetAllPosts_postGetAll_posts {
  __typename: "PostInfo";
  id: number;
  text: string;
  createdAt: Date;
  authorId: string;
  authorUsername: string;
  threadId: string;
  threadTitle: string;
}

export interface GetAllPosts_postGetAll {
  __typename: "PostGetAllResponse";
  posts: GetAllPosts_postGetAll_posts[];
}

export interface GetAllPosts {
  postGetAll: GetAllPosts_postGetAll;
}

export interface GetAllPostsVariables {
  id?: string | null;
  filterBy?: FilterBy | null;
  limit?: number | null;
  offset?: number | null;
}
