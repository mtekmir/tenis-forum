/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPost
// ====================================================

export interface GetPost_postGet {
  __typename: "PostInfo";
  id: number;
  createdAt: Date;
  text: string;
  authorId: string;
  authorUsername: string;
  threadId: string;
  threadTitle: string;
}

export interface GetPost {
  postGet: GetPost_postGet;
}

export interface GetPostVariables {
  id: number;
}
