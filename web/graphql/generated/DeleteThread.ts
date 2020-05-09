/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteThread
// ====================================================

export interface DeleteThread_threadDelete_forum {
  __typename: "Forum";
  id: number;
}

export interface DeleteThread_threadDelete {
  __typename: "Thread";
  id: number;
  forum: DeleteThread_threadDelete_forum;
}

export interface DeleteThread {
  threadDelete: DeleteThread_threadDelete | null;
}

export interface DeleteThreadVariables {
  id: number;
}
