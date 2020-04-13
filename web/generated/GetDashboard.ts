/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDashboard
// ====================================================

export interface GetDashboard_dashboardGet {
  __typename: "GetDashboardResponse";
  userCount: number;
  categoryCount: number;
  forumCount: number;
  threadCount: number;
  postCount: number;
}

export interface GetDashboard {
  dashboardGet: GetDashboard_dashboardGet;
}
