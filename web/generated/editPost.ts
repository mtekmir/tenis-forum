/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditPost
// ====================================================

export interface EditPost_postEdit_author {
  __typename: "PostAuthor";
  id: string;
  username: string;
  signature: string | null;
  profileImageUrl: string | null;
}

export interface EditPost_postEdit {
  __typename: "Post";
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  author: EditPost_postEdit_author;
}

export interface EditPost {
  postEdit: EditPost_postEdit | null;
}

export interface EditPostVariables {
  postId: number;
  text: string;
}
