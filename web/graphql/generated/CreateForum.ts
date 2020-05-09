/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateForum
// ====================================================

export interface CreateForum_forumCreate {
  __typename: "Forum";
  id: number;
}

export interface CreateForum {
  forumCreate: CreateForum_forumCreate;
}

export interface CreateForumVariables {
  name: string;
  categoryId: number;
}
