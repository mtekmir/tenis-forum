/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCategory
// ====================================================

export interface CreateCategory_categoryCreate {
  __typename: "Category";
  id: number;
  name: string;
}

export interface CreateCategory {
  categoryCreate: CreateCategory_categoryCreate;
}

export interface CreateCategoryVariables {
  name: string;
}
