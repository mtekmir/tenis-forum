import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
  query GetCategories {
    categoryGetAll {
      success
      categories {
        id
        name
        forums {
          id
          threadCount
          postCount
          name
        }
      }
    }
  }
`
