import gql from 'graphql-tag'

export const GET_ALL_CATEGORY_SUMMARY = gql`
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
`
