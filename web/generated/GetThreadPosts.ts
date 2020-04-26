/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetThreadPosts
// ====================================================

export interface GetThreadPosts_threadGetPosts_posts_author {
  __typename: "PostAuthor";
  id: string;
  username: string;
  signature: string | null;
  profileImageUrl: string | null;
}

export interface GetThreadPosts_threadGetPosts_posts {
  __typename: "Post";
  id: number;
  text: string;
  createdAt: Date;
  author: GetThreadPosts_threadGetPosts_posts_author;
}

export interface GetThreadPosts_threadGetPosts {
  __typename: "GetThreadPostsResponse";
  posts: (GetThreadPosts_threadGetPosts_posts | null)[];
  count: number;
}

export interface GetThreadPosts {
  threadGetPosts: GetThreadPosts_threadGetPosts;
}

export interface GetThreadPostsVariables {
  threadId: string;
  page?: number | null;
}
