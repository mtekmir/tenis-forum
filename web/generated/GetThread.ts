/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetThread
// ====================================================

export interface GetThread_threadGet_thread_owner {
  __typename: "ThreadOwner";
  username: string;
}

export interface GetThread_threadGet_thread_posts_author {
  __typename: "User";
  id: string;
  username: string;
  profileImageUrl: string | null;
}

export interface GetThread_threadGet_thread_posts {
  __typename: "Post";
  id: number;
  text: string;
  createdAt: Date;
  author: GetThread_threadGet_thread_posts_author;
}

export interface GetThread_threadGet_thread {
  __typename: "Thread";
  id: number;
  title: string;
  createdAt: Date;
  owner: GetThread_threadGet_thread_owner;
  posts: GetThread_threadGet_thread_posts[];
}

export interface GetThread_threadGet {
  __typename: "GetThreadResponse";
  thread: GetThread_threadGet_thread;
  postCount: number;
}

export interface GetThread {
  threadGet: GetThread_threadGet;
}

export interface GetThreadVariables {
  id: string;
  offset?: number | null;
  limit?: number | null;
}
