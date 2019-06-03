import gql from 'graphql-tag';

export const getAllCategorySummary = gql`
  query GetAllCategorySummary {
    categoryGetSummaryAll {
      categories {
        id
        name
        createdAt
        updatedAt
        forumCount
      }
    }
  }
`;
