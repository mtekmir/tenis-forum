/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createThread
// ====================================================

export interface createThread_threadCreate {
  __typename: "CreateThreadResponse";
  id: number;
  title: string;
}

export interface createThread {
  threadCreate: createThread_threadCreate;
}

export interface createThreadVariables {
  text: string;
  title: string;
  forumId: number;
}
