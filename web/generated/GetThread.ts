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

export interface GetThread_threadGet_thread {
  __typename: "Thread";
  id: number;
  title: string;
  createdAt: Date;
  owner: GetThread_threadGet_thread_owner;
}

export interface GetThread_threadGet {
  __typename: "GetThreadResponse";
  thread: GetThread_threadGet_thread;
}

export interface GetThread {
  threadGet: GetThread_threadGet;
}

export interface GetThreadVariables {
  id: string;
}
