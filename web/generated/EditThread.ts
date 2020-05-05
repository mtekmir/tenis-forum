/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditThread
// ====================================================

export interface EditThread_threadEdit_owner {
  __typename: "ThreadOwner";
  id: string;
  username: string;
}

export interface EditThread_threadEdit {
  __typename: "Thread";
  id: number;
  title: string;
  createdAt: Date;
  owner: EditThread_threadEdit_owner;
}

export interface EditThread {
  threadEdit: EditThread_threadEdit | null;
}

export interface EditThreadVariables {
  id: number;
  title: string;
}
