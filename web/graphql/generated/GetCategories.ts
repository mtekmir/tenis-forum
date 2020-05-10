/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categoryGetAll_categories_forums {
  __typename: "Forum";
  id: number;
  name: string;
}

export interface GetCategories_categoryGetAll_categories {
  __typename: "HomepageCategory";
  id: number;
  name: string;
  threadCount: number;
  postCount: number;
  forums: GetCategories_categoryGetAll_categories_forums[];
}

export interface GetCategories_categoryGetAll {
  __typename: "CategoryGetAllResponse";
  success: boolean;
  categories: GetCategories_categoryGetAll_categories[];
}

export interface GetCategories {
  categoryGetAll: GetCategories_categoryGetAll;
}
