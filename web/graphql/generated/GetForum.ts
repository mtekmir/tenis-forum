/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetForum
// ====================================================

export interface GetForum_forumGet_forum_category {
  __typename: "Category";
  name: string;
}

export interface GetForum_forumGet_forum_threads_owner {
  __typename: "ThreadOwner";
  username: string;
  profileImageUrl: string;
}

export interface GetForum_forumGet_forum_threads {
  __typename: "Thread";
  id: number;
  title: string;
  postCount: number;
  owner: GetForum_forumGet_forum_threads_owner;
  createdAt: Date;
}

export interface GetForum_forumGet_forum {
  __typename: "Forum";
  id: number;
  name: string;
  createdAt: Date;
  category: GetForum_forumGet_forum_category;
  threads: GetForum_forumGet_forum_threads[];
}

export interface GetForum_forumGet {
  __typename: "GetForumResponse";
  forum: GetForum_forumGet_forum;
  threadCount: number;
}

export interface GetForum {
  forumGet: GetForum_forumGet;
}

export interface GetForumVariables {
  id: number;
  offset?: number | null;
  limit?: number | null;
}
