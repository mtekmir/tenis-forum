/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createPost
// ====================================================

export interface createPost_postCreate_author {
  __typename: "PostAuthor";
  id: string;
  username: string;
  signature: string | null;
  profileImageUrl: string | null;
}

export interface createPost_postCreate {
  __typename: "Post";
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  author: createPost_postCreate_author;
}

export interface createPost {
  postCreate: createPost_postCreate;
}

export interface createPostVariables {
  text: string;
  threadId: number;
}
