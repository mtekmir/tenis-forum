/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategory
// ====================================================

export interface GetCategory_categoryGet_forums {
  __typename: "Forum";
  id: number;
  name: string;
}

export interface GetCategory_categoryGet {
  __typename: "Category";
  id: number;
  name: string;
  forums: GetCategory_categoryGet_forums[];
}

export interface GetCategory {
  categoryGet: GetCategory_categoryGet;
}

export interface GetCategoryVariables {
  id: number;
  limit?: number | null;
}
