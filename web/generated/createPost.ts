/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createPost
// ====================================================

export interface createPost_postCreate_author {
  __typename: "User";
  id: string;
  username: string;
  profileImageUrl: string | null;
}

export interface createPost_postCreate {
  __typename: "Post";
  id: number;
  text: string;
  createdAt: Date;
  author: createPost_postCreate_author;
}

export interface createPost {
  postCreate: createPost_postCreate;
}

export interface createPostVariables {
  text: string;
  threadId: number;
}
