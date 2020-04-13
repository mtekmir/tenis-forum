/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllCategorySummary
// ====================================================

export interface GetAllCategorySummary_categoryGetSummaryAll_categories {
  __typename: "CategoryInfo";
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  forumCount: number;
}

export interface GetAllCategorySummary_categoryGetSummaryAll {
  __typename: "CategoryGetSummaryAllResponse";
  categories: GetAllCategorySummary_categoryGetSummaryAll_categories[];
}

export interface GetAllCategorySummary {
  categoryGetSummaryAll: GetAllCategorySummary_categoryGetSummaryAll;
}
