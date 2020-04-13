/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePost
// ====================================================

export interface DeletePost_postDelete_thread {
  __typename: "Thread";
  id: number;
}

export interface DeletePost_postDelete {
  __typename: "Post";
  id: number;
  thread: DeletePost_postDelete_thread;
}

export interface DeletePost {
  postDelete: DeletePost_postDelete | null;
}

export interface DeletePostVariables {
  id: number;
}
