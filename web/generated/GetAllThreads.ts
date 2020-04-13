/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterBy } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetAllThreads
// ====================================================

export interface GetAllThreads_threadGetAll_threads {
  __typename: "ThreadInfo";
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  postCount: number;
}

export interface GetAllThreads_threadGetAll {
  __typename: "ThreadGetAllResponse";
  threads: GetAllThreads_threadGetAll_threads[];
}

export interface GetAllThreads {
  threadGetAll: GetAllThreads_threadGetAll;
}

export interface GetAllThreadsVariables {
  id?: string | null;
  filterBy?: FilterBy | null;
  limit?: number | null;
  offset?: number | null;
}
